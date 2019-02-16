
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
        ctx.canvas.width  = 640;
        ctx.canvas.height = 360;
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
                this.aceleration = 0;
                this.acelerationTweening = 0;
                this.player = new Player({x: 100, y: 30, width: 32, height: 32});
                this.platformManager = new PlatformManager();
                this.particles = [];
                this.particlesIndex = 0;
                this.particlesMax = 15;
                this.collidedPlatform = null;
                this.scoreColor = '#181818';
                this.jumpCountRecord = 0;
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

            switch(this.jumpCount){
                case 10:
                this.acelerationTweening = 1;
                this.platformManager.maxDistanceBetween = 430;
                this.scoreColor = '#076C00';
                break;
                case 25:
                this.acelerationTweening = 2;
                this.platformManager.maxDistanceBetween = 530;
                this.scoreColor = '#0300A9';
                break;
                case 40:
                this.acelerationTweening = 3;
                this.platformManager.maxDistanceBetween = 580;
                this.scoreColor = '#9F8F00';
                break;
            }

            this.aceleration += (this.acelerationTweening - this.aceleration) * 0.01;
            let avoidedCollision = true;
            for (i = 0; i < this.platformManager.platforms.length; i++) {
                if (this.player.intersects(this.platformManager.platforms[i])) {
                    this.collidedPlatform = this.platformManager.platforms[i];
                    avoidedCollision = false;
                    this.player.canJump = true;
                    if (this.player.y < this.platformManager.platforms[i].y) {
                        this.player.y = this.platformManager.platforms[i].y;
                        this.player.velocityY = 0;
                    }

                    this.player.x = this.player.previousX;
                    this.player.y = this.player.previousY;

                    this.particles[(this.particlesIndex++)%this.particlesMax] = new Particle({
                        x: this.player.x,
                        y: this.player.y + this.player.height,
                        color: this.collidedPlatform.color
                    });

                    if (this.player.intersectsLeft(this.platformManager.platforms[i])) {
                        this.player.x = this.collidedPlatform.x - 64;
                        for (i = 0; i < 10; i++) {
                        this.particles[(this.particlesIndex++)%this.particlesMax] = new Particle({
                            x: this.player.x + this.player.width,
                            y: random(this.player.y, this.player.y + this.player.height),
                            velocityY: random(-30,30),
                            color: randomChoice(['#181818','#181818', this.collidedPlatform.color])
                        });
                        };
                        this.player.velocityY = -10 + -(this.aceleration * 4);
                        this.player.velocityX = -20 + -(this.aceleration * 4);

                    } 
                }
            };

            this.player.rotating = avoidedCollision;

            for (i = 0; i < this.platformManager.platforms.length; i++) {
                this.platformManager.update();
            };

            for (let particle of this.particles) {
                particle.update();
            };
        }

        draw() {
            this.player.draw();

            for (let platform of this.platformManager.platforms) {
                platform.draw();
            };
            
            for (let particle of this.particles) {
                particle.draw();
            };
            
            ctx.font = '14pt Arial';
            ctx.fillStyle = '#000';
            ctx.fillText('RECORD: '+ this.jumpCountRecord, ctx.canvas.width - (150 + (this.aceleration * 4)), 33 - (this.aceleration * 4));
            ctx.fillStyle = this.scoreColor;
            ctx.font = (12 + (this.aceleration * 3))+'pt Arial';
            ctx.fillText('JUMPS: '+ this.jumpCount, ctx.canvas.width - (150 + (this.aceleration * 4)), 50);
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
            if(obj.x < this.x + this.width && obj.y < this.y + this.height &&
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
                this.jumpSize = -13;
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
            if (this.y > 800 || this.x + this.width < 0) {
                this.x = 150;
                this.y = 50;
                this.velocityX = 0;
                this.velocityY = 0;
                engine.jumpCount = 0;
                engine.aceleration = 0;
                engine.acelerationTweening = 0;
                engine.scoreColor = '#181818';
                engine.platformManager.maxDistanceBetween = 350;
                engine.platformManager.updateOnDeath();
            }

        }

        draw() {
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            ctx.save();
            ctx.translate(this.x, this.y);
            if (this.rotating == true) {
                this.angle += 0.0625
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
    }

    class Platform extends Vector2 {
       
        constructor(options) {
            super(options.x, options.y, options.width, options.height);
            this.previousX = 0;
            this.previousY = 0;
            this.color = options.color;
        }

        draw() {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }

    class PlatformManager {
        
        constructor() {
            if (!PlatformManager.instance) {
                this.maxDistanceBetween = 300;
                this.colors = ["#4169E1"];
            
                this.first = new Platform({x: 300, y: ctx.canvas.width / 1.9, width: 400, height: 70})
                this.second = new Platform({x: (this.first.x + this.first.width) + random(this.maxDistanceBetween - 150, this.maxDistanceBetween), y: random(this.first.y - 128,  ctx.canvas.height - 80), width: 400, height: 70})
                this.third = new Platform({x: (this.second.x + this.second.width) + random(this.maxDistanceBetween - 150, this.maxDistanceBetween), y: random(this.second.y - 128, ctx.canvas.height - 80), width: 400, height: 70})
            
                this.first.height = this.first.y +  ctx.canvas.height;
                this.second.height = this.second.y + ctx.canvas.height;
                this.third.height = this.third.y + ctx.canvas.height;
                this.first.color = randomChoice(this.colors);
                this.second.color = randomChoice(this.colors);
                this.third.color = randomChoice(this.colors);
            
                this.colliding = false;
            
                this.platforms = [this.first, this.second, this.third];
                PlatformManager.instance = this;
            }
        }

        update() {

            this.first.x -= 3 + engine.aceleration;
            if (this.first.x + this.first.width < 0) {
                this.first.width = random(450, ctx.canvas.width + 200);
                this.first.x = (this.third.x + this.third.width) + random(this.maxDistanceBetween - 150, this.maxDistanceBetween);
                this.first.y = random(this.third.y - 32, ctx.canvas.height - 80);
                this.first.height = this.first.y + ctx.canvas.height + 10;
                this.first.color = randomChoice(this.colors);
            }
        
            this.second.x -= 3 + engine.aceleration;
            if (this.second.x + this.second.width < 0 ) {
                this.second.width = random(450, ctx.canvas.width + 200);
                this.second.x = (this.first.x + this.first.width) + random(this.maxDistanceBetween - 150, this.maxDistanceBetween);
                this.second.y = random(this.first.y - 32, ctx.canvas.height - 80);
                this.second.height = this.second.y + ctx.canvas.height + 10;
                this.second.color = randomChoice(this.colors);
            }
        
            this.third.x -= 3 + engine.aceleration;
            if (this.third.x + this.third.width < 0) {
                this.third.width = random(450, ctx.canvas.width + 200);
                this.third.x = (this.second.x + this.second.width) + random(this.maxDistanceBetween - 150, this.maxDistanceBetween);
                this.third.y = random(this.second.y - 32, ctx.canvas.height - 80);
                this.third.height = this.third.y + ctx.canvas.height + 10;
                this.third.color = randomChoice(this.colors);
            }

        }

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
            this.velocityX = options.velocityX || random(-(engine.aceleration * 3) + -8,-(engine.aceleration * 3));
            this.velocityY = options.velocityY || random(-(engine.aceleration * 3) + -8,-(engine.aceleration * 3));
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
