
   var i = 0;

    function random(min, max) {
    return Math.round(min + (Math.random() * (max - min)));
    }

    function randomChoice(array){
    return array[Math.round(random(0, array.length - 1))];
    }

var canvas, ctx, engine, fpsInterval, startTime, now, then, elapsed;

    function startRunner() {
        canvas = document.getElementById('runner_container'),
        ctx = canvas.getContext("2d");
        ctx.canvas.width  = $("#Runner").width();
        ctx.canvas.height = ctx.canvas.width / 1.7;
        engine = new GameEngine();
        fpsInterval = 1000 / 30;
        then = Date.now();
        startTime = then;
        run();
    }

    function run() {
        requestAnimationFrame(run);
        now = Date.now();
        elapsed = now - then;
        if (elapsed > fpsInterval) {
            then = now - (elapsed % fpsInterval);
            engine.update();
            engine.draw();
        }
    }

    class GameEngine {

        constructor() {
            if (!GameEngine.instance) {
                this.jumpCount = 0;
                this.acceleration = 1;
                this.accelerationTweening = 1;
                this.player = new Player({x: ctx.canvas.width / 5, y: ctx.canvas.height / 10, width: ctx.canvas.width / 25, height: ctx.canvas.width / 25});
                this.platformManager = new PlatformManager();
                this.particles = [];
                this.particlesIndex = 0;
                this.particlesMax = 15;
                this.collidedPlatform = null;
                this.scoreColor = '#181818';
                this.jumpCountRecord = 0;
                this.platformManager.updateOnDeath();
                GameEngine.instance = this;
            }
        }

        step() {
            this.update();
            this.draw();
            window.requestAnimationFrame(step);
        }
          
        update() {
            this.player.update();

            switch (this.jumpCount){
                case 10:
                    this.accelerationTweening = 2;
                    this.platformManager.maxDistanceBetween = ctx.canvas.width / 2.6;
                    this.scoreColor = '#076C00';
                break;
                case 25:
                    this.accelerationTweening = 3;
                    this.platformManager.maxDistanceBetween = ctx.canvas.width / 2.4;
                    this.scoreColor = '#0300A9';
                break;
                case 40:
                    this.accelerationTweening = 4;
                    this.platformManager.maxDistanceBetween = ctx.canvas.width / 2;
                    this.scoreColor = '#9F8F00';
                break;
            }

            this.acceleration += (this.accelerationTweening - this.acceleration) * 0.01;
            let avoidedCollision = true;
            for (let platform of this.platformManager.platforms) {
                if (this.player.intersects(platform)) {
                    this.collidedPlatform = platform;
                    avoidedCollision = false;
                    this.player.canJump = true;
                    if (this.player.y < platform.y) {
                        this.player.y = platform.y;
                        this.player.velocityY = 0;
                    }

                    this.player.x = this.player.previousX;
                    this.player.y = this.player.previousY;

                    this.particles[(this.particlesIndex++)%this.particlesMax] = new Particle({
                        x: this.player.x,
                        y: this.player.y + this.player.height,
                        color: this.collidedPlatform.color
                    });

                    if (this.player.intersectsLeft(platform)) {
                        this.player.x = this.collidedPlatform.x - 64;
                        for (i = 0; i < 10; i++) {
                        this.particles[(this.particlesIndex++)%this.particlesMax] = new Particle({
                            x: this.player.x + this.player.width,
                            y: random(this.player.y, this.player.y + this.player.height),
                            velocityY: random(-30,30),
                            color: randomChoice(['#181818','#181818', this.collidedPlatform.color])
                        });
                        };
                        this.player.velocityY = -10 + -(this.acceleration * 4);
                        this.player.velocityX = -20 + -(this.acceleration * 4);

                    } 
                }
            };

            this.player.rotating = avoidedCollision;

            for (i = 0; i < this.platformManager.platforms.length; i++) {
                this.platformManager.update();
            };

            for (let platform of this.platformManager.platforms) {
                for (let spike of platform.spikes) {
                    if (this.player.intersects(spike)) this.platformManager.updateOnDeath();
                }    
            }
            for (let particle of this.particles) {
                particle.update();
            };
        }

        draw() {
            this.player.draw();

            for (let platform of this.platformManager.platforms) {
                platform.draw();
                for (let spike of platform.spikes) {
                    spike.draw();
                }
            };
            
            for (let particle of this.particles) {
                particle.draw();
            };
        

            ctx.font = '1em Arial';
            ctx.fillStyle = '#000';
            ctx.fillText('RECORD: '+ this.jumpCountRecord, ctx.canvas.width - (150 + (this.acceleration * 4)), 33 - (this.acceleration * 4));
            ctx.fillStyle = this.scoreColor;
            ctx.font = (12 + (this.acceleration * 3))+'pt Arial';
            ctx.fillText('JUMPS: '+ this.jumpCount, ctx.canvas.width - (150 + (this.acceleration * 4)), 50);
            
        }

        resize() {
        }
    }

    class Vector2 {
        
        constructor(x, y, width, height) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.previousX = 0;
            this.previousY = 0;
        }

        setPosition(x, y) {
            this.previousX = this.x;
            this.previousY = this.y;
            this.x = x;
            this.y = y;
        }

        setX(x) {
            this.previousX = this.x;
            this.x = x;
        };

        setY(y) {
            this.previousY = this.y;
            this.y = y;
        }

        intersects(obj) {
            if (obj.x < this.x + this.width && obj.y < this.y + this.height &&
                obj.x + obj.width > this.x && obj.y + obj.height > this.y ){
                return true;
            }

            return false;
        }

        intersectsLeft(obj) {
            if(obj.x < this.x + this.width && obj.y < this.y + this.height ){
                return true;
            }

            return false;
        }
    }

    class Player extends Vector2 {

        constructor(options) {
            super(options.x, options.y, options.width, options.height);
            if (!Player.instance) {
                this.setPosition(options.x, options.y);
                this.velocityX = 0;
                this.velocityY = 0;
                this.jumpSize = -(10 + window.innerWidth/200);
                this.color = '#000080';
                this.canJump = false;
                this.jumpNum = 0;
                this.rotating = false;
                this.angle = 0;
                Player.instance = this;
            }
        }
    
        update() {
            this.velocityY += 1;
            this.setPosition(this.x + this.velocityX, this.y + this.velocityY);
            //beyond screen bounds
            if (this.y > ctx.canvas.height * 1.2 || this.x + this.width < 0) this.restart();
        }

        draw() {
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            ctx.save();
            ctx.translate(this.x, this.y);
            if (this.rotating == true) {
                this.angle += 0.08
                ctx.rotate(this.angle);
            } else {
                this.angle = false;
            }
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.rect(0 ,0 , this.width, this.height);
            ctx.fill();
            ctx.stroke();
            ctx.restore();
        }

        restart() {
            this.x = 150;
            this.y = 50;
            this.velocityX = 0;
            this.velocityY = 0;
            engine.jumpCount = 0;
            engine.acceleration = 0;
            engine.accelerationTweening = 0;
            engine.scoreColor = '#181818';
            engine.platformManager.maxDistanceBetween = 350;
            engine.platformManager.updateOnDeath();            
        }
    }

    class Platform extends Vector2 {
       
        constructor(options) {
            super(options.x, options.y, options.width, options.height);
            this.previousX = 0;
            this.previousY = 0;
            this.color = options.color;
            if (options.x != ctx.canvas.width/5) {
                this.spike1 = new Spike({x: options.x + random(options.width/2, options.width/3.5), y: options.y * 0.945, 
                    width: ctx.canvas.width / 30, height: ctx.canvas.width / 30});
                this.spike2 = new Spike({x: options.x + random(options.width/1.25, options.width/2), y: options.y * 0.945, 
                    width: ctx.canvas.width / 30, height: ctx.canvas.width / 30});
                this.spikes = [this.spike1, this.spike2];
            } else {
                this.spikes = [];
            }
        }

        draw() {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }

    class Spike extends Vector2 {

        constructor(options) {
            super(options.x, options.y, options.width, options.height);
            this.previousX = 0;
            this.previousY = 0;
            this.color = options.color;
        }

        draw() {
            ctx.beginPath();
            ctx.fillStyle = "#880E4F";
            ctx.strokeStyle = "#000";
            ctx.lineWidth = 1;
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x + this.width / 2, this.y + this.height);
            ctx.lineTo(this.x - this.width / 2, this.y + this.height);
            ctx.lineTo(this.x, this.y);
            ctx.stroke();
            ctx.fill();
        }

        update() {
            this.x -= 3 + engine.acceleration;
        }
    }

    class PlatformManager {
        
        constructor() {
                this.maxDistanceBetween = ctx.canvas.width / 3;
                this.colors = ["#4169E1"];

                this.first = new Platform({x: ctx.canvas.width/5, y: ctx.canvas.height / 1.25, width: ctx.canvas.width / 2, height: ctx.canvas.height / 5})
                this.second = new Platform({x: (this.first.x + this.first.width) + random(this.maxDistanceBetween/2, this.maxDistanceBetween), 
                    y: random(this.first.y - ctx.canvas.width / 10,  ctx.canvas.height * 0.9), width: ctx.canvas.width / 2, height: ctx.canvas.height / 5})
                this.third = new Platform({x: (this.second.x + this.second.width) + random(this.maxDistanceBetween/2, this.maxDistanceBetween), 
                    y: random(this.second.y - ctx.canvas.width / 10, ctx.canvas.height * 0.9), width: ctx.canvas.width / 2, height: ctx.canvas.height / 5})
            
                this.first.height = this.first.y +  ctx.canvas.height / 5;
                this.second.height = this.second.y + ctx.canvas.height;
                this.third.height = this.third.y + ctx.canvas.height;
                this.first.color = randomChoice(this.colors);
                this.second.color = randomChoice(this.colors);
                this.third.color = randomChoice(this.colors);
            
                this.colliding = false;
            
                this.platforms = [this.first, this.second, this.third];
        }

        update() {            
            this.first.x -= 3 + engine.acceleration;
            for (let spike of this.first.spikes) spike.update();
            //todo - create new object on each disappearing from screen, or just reinitiaise old..
            if (this.first.x + this.first.width < 0) {
                this.first.width = random(450, ctx.canvas.width + 200);
                this.first.x = (this.third.x + this.third.width) + random(this.maxDistanceBetween * 0.5, this.maxDistanceBetween);
                this.first.y = random(this.third.y - 32, ctx.canvas.height - 80);
                this.first.height = this.first.y + ctx.canvas.height + 10;
            }
        
            this.second.x -= 3 + engine.acceleration;
            for (let spike of this.second.spikes) spike.update();
            if (this.second.x + this.second.width < 0 ) {
                this.second.width = random(450, ctx.canvas.width + 200);
                this.second.x = (this.first.x + this.first.width) + random(this.maxDistanceBetween * 0.5, this.maxDistanceBetween);
                this.second.y = random(this.first.y - 32, ctx.canvas.height - 80);
                for (let spike of this.second.spikes) {
                    spike.x = random(this.second.x * 1.3, this.second.width / 2);
                    spike.y = this.second.y * 0.945;
                }
                this.second.height = this.second.y + ctx.canvas.height + 10;
            }
        
            this.third.x -= 3 + engine.acceleration;
            for (let spike of this.third.spikes) spike.update();
            if (this.third.x + this.third.width < 0) {
                this.third.width = random(450, ctx.canvas.width + 200);
                this.third.x = (this.second.x + this.second.width) + random(this.maxDistanceBetween - 150, this.maxDistanceBetween);
                this.third.y = random(this.second.y - 32, ctx.canvas.height - 80);
                for (let spike of this.third.spikes) {
                    spike.x = random(this.third.x * 1.2 , this.third.width / 2);
                    spike.y = this.third.y * 0.945;
                }
                this.third.height = this.third.y + ctx.canvas.height + 10;
            }

        }

        //TODO - refactor this so a full restart is triggered rather than simulated
        updateOnDeath() {
            this.first.x = 300;
            this.first.color = randomChoice(this.colors);
            this.first.y = ctx.canvas.width / random(2,3);
            this.second.x = (this.first.x + this.first.width) + random(this.maxDistanceBetween - 150, this.maxDistanceBetween);
            this.third.x = (this.second.x + this.second.width) + random(this.maxDistanceBetween - 150, this.maxDistanceBetween);
            
        }    
    }

    function updateRecord() {
        engine.jumpCount++;
        if(engine.jumpCount > engine.jumpCountRecord){
                engine.jumpCountRecord = engine.jumpCount;
        }
    }
    class Particle {
        
        constructor(options) {
            this.x = options.x;
            this.y = options.y;
            this.size = 10;
            this.velocityX = options.velocityX || random(-(engine.acceleration * 3) + -8,-(engine.acceleration * 3));
            this.velocityY = options.velocityY || random(-(engine.acceleration * 3) + -8,-(engine.acceleration * 3));
            this.color = options.color;
        }

        update() {
            this.x += this.velocityX;
            this.y += this.velocityY/4;
            this.size *= 0.89;
        }

        draw() {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x * 0.9, this.y, this.size, this.size);
        }
    }

    $(document).on("click", "#runner_container", function(event) {
        if (engine.player.canJump) {
            processJump();
        }
    });

    $(document).on("keypress", function(event) {
        if (event.which == "32") {
            if (engine.player.canJump) {
                processJump();
            }
        }
    });

    function processJump() {

        if (engine.player.velocityY < -8) engine.player.velocityY += -0.25;
        engine.player.velocityY = engine.player.jumpSize;
        engine.player.jumpNum++;
        if (engine.player.jumpNum < 2) updateRecord();
        else {
            engine.player.canJump = false;
            engine.player.jumpNum = 0;
        }
    }
