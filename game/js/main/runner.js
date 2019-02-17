
   var i = 0;

    function random(min, max) {
    return Math.round(min + (Math.random() * (max - min)));
    }

    function randomChoice(array){
    return array[Math.round(random(0, array.length - 1))];
    }

var canvas, ctx, engine, fpsInterval, now, then, elapsed;

    function startRunner() {
        canvas = document.getElementById('runner_container');
        ctx = canvas.getContext("2d");
        ctx.canvas.width  = $("#Runner").width();
        ctx.canvas.height = ctx.canvas.width / 1.7;
        engine = new GameEngine();
        fpsInterval = 1000 / 45;
        then = Date.now();
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
                this.acceleration = ctx.canvas.width / 400;
                this.accelerationTweening = ctx.canvas.width / 400;
                this.player = new Player({x: ctx.canvas.width / 5, y: ctx.canvas.height / 10, width: ctx.canvas.width / 25, height: ctx.canvas.width / 25});
                this.platformManager = new PlatformManager();
                this.particles = [];
                this.particlesIndex = 0;
                this.particlesMax = 15;
                this.collidedPlatform = null;
                this.scoreColor = '#fff';
                this.jumpCountRecord = 0;
                this.maxSpikes = 0;
                GameEngine.instance = this;
            } else {
                this.restart();
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
                    this.acceleration = ctx.canvas.width / 350;
                    this.accelerationTweening = ctx.canvas.width / 350;
                    this.platformManager.maxDistanceBetween = ctx.canvas.width / 2.6;
                    this.scoreColor = '#076C00';
                    this.maxSpikes = 1;
                break;
                case 25:
                    this.acceleration = ctx.canvas.width / 300;
                    this.accelerationTweening = ctx.canvas.width / 300;
                    this.platformManager.maxDistanceBetween = ctx.canvas.width / 2.4;
                    this.scoreColor = '#0300A9';
                    this.maxSpikes = 2;
                break;
                case 40:
                    this.acceleration = ctx.canvas.width / 200;
                    this.accelerationTweening = ctx.canvas.width / 200;
                    this.platformManager.maxDistanceBetween = ctx.canvas.width / 2;
                    this.scoreColor = '#9F8F00';
                    this.maxSpikes = 3;
                break;
            }

            this.acceleration += (this.accelerationTweening - this.acceleration) * 0.01;
            for (let platform of this.platformManager.platforms) {
                if (this.player.intersects(platform)) {
                    this.collidedPlatform = platform;
                    this.player.canJump = true;
                    if (this.player.y < platform.y) {
                        this.player.y = platform.y;
                        this.player.velocityY = 0;
                    }

                    this.player.x = this.player.previousX;
                    this.player.y = this.player.previousY;

                    this.particles[(this.particlesIndex++)%this.particlesMax] = new Particle({
                        x: this.player.x * 1.1,
                        y: this.player.y + this.player.height * 0.975,
                        color: "#fff"
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
                        }
                        this.player.velocityY = -10 + -(this.acceleration * 4);
                        this.player.velocityX = -20 + -(this.acceleration * 4);

                    } 
                }
            }

            for (i = 0; i < this.platformManager.platforms.length; i++) {
                this.platformManager.update();
            }

            for (let platform of this.platformManager.platforms) {
                for (let spike of platform.spikes) {
                    if (this.player.intersects(spike)) this.restart();
                }    
            }
            for (let particle of this.particles) {
                particle.update();
            }
        }

        draw() {
            this.player.draw();

            for (let platform of this.platformManager.platforms) {
                platform.draw();
                for (let spike of platform.spikes) {
                    spike.draw();
                }
            }
            
            for (let particle of this.particles) {
                particle.draw();
            }
        

            ctx.font = '1em Arial';
            ctx.fillStyle = '#fff';
            ctx.fillText('BEST: ' + this.jumpCountRecord, ((this.acceleration * 4)), 33 - (this.acceleration * 4));
            ctx.fillStyle = this.scoreColor;
            ctx.font = (12 + (this.acceleration * 3))+'pt Arial';
            ctx.fillText('SCORE: '+ this.jumpCount, ((this.acceleration * 4)), 50);
        }

        restart() {
            this.jumpCount = 0;
            this.acceleration = 1 + ctx.canvas.width / 800;
            this.accelerationTweening = ctx.canvas.width / 800;
            this.player.restart();
            this.platformManager.updateOnDeath();
            this.particles = [];
            this.particlesIndex = 0;
            this.particlesMax = 15;
            this.collidedPlatform = null;
            this.scoreColor = '#fff';
            this.maxSpikes = 0;
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
        }

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
                this.color = "#fff";
                this.canJump = false;
                this.jumpNum = 0;
                Player.instance = this;
            }
        }
    
        update() {
            this.velocityY += 0.5 + ctx.canvas.width / 2000;
            this.setPosition(this.x + this.velocityX, this.y + this.velocityY);
            //beyond screen bounds 
            if (this.y > ctx.canvas.height * 1.2 || this.x + this.width < 0) {
                engine.restart();
            }
        }

        draw() {
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }

        restart() {
            this.x = 150;
            this.y = 50;
            this.velocityX = 0;
            this.velocityY = 0;        
        }
    }

    class Platform extends Vector2 {
       
        constructor(options) {
            super(options.x, options.y, options.width, options.height);
            this.previousX = 0;
            this.previousY = 0;
            this.color = options.color;
            this.spikes = [];
        }

        draw() {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }

        createSpikes(number) {
            this.spikes = [];
            try {
                if (engine.jumpCount > 1) {
                    for (let i = 0; i < number; i++) {
                        const spike = new Spike({x: this.x + random(this.width/10, this.width/1.25), y: this.y - (25 + ctx.canvas.width / 50), 
                            width: 25 + ctx.canvas.width / 50, height: 25 + ctx.canvas.width / 50});
                        this.spikes.push(spike);
                    }
                }
            } catch (UninitialisedException) {
                console.log("Not spawning spikes: " + UninitialisedException);
            }
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
            if (engine.maxSpikes >= 1) {
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
        }

        update() {
            this.x -= 3 + engine.acceleration;
        }
    }

    class PlatformManager {
        
        constructor() {
                this.maxDistanceBetween = 100 + ctx.canvas.width / 4;
                this.colors = ["#4169E1"];

                this.first = new Platform({x: ctx.canvas.width / 8, y: ctx.canvas.height / 1.25, width: ctx.canvas.width / 1.25, 
                    height: ctx.canvas.height / 5});
                this.second = new Platform({x: (this.first.x + this.first.width) + random(this.maxDistanceBetween/2.5, this.maxDistanceBetween), 
                    y: ctx.canvas.height / 1.25, width: ctx.canvas.width / 2, height: ctx.canvas.height / 5});
                this.third = new Platform({x: (this.second.x + this.second.width) + random(this.maxDistanceBetween/2.5, this.maxDistanceBetween), 
                    y: ctx.canvas.height / 1.25, width: ctx.canvas.width / 2, height: ctx.canvas.height / 5});

            
                this.first.height = this.first.y +  ctx.canvas.height / 5;
                this.second.height = this.first.height;
                this.third.height = this.first.height;
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
                this.first.createSpikes(random(0, engine.maxSpikes));
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
                this.second.createSpikes(random(0, engine.maxSpikes));
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
                this.third.createSpikes(random(0, engine.maxSpikes));
            }

        }

        updateOnDeath() {
            for (let platform of this.platforms) platform.spikes = [];
            this.platforms = [];
            this.first = new Platform({x: ctx.canvas.width / 8, y: ctx.canvas.height / 1.25, width: ctx.canvas.width / 1.25, 
                height: ctx.canvas.height / 5});
            this.second = new Platform({x: (this.first.x + this.first.width) + random(this.maxDistanceBetween/2.5, this.maxDistanceBetween), 
                y: ctx.canvas.height / 1.25, width: ctx.canvas.width / 2.5, height: ctx.canvas.height / 5});
            this.third = new Platform({x: (this.second.x + this.second.width) + random(this.maxDistanceBetween/2.5, this.maxDistanceBetween), 
                y: ctx.canvas.height / 1.25, width: ctx.canvas.width / 1.5, height: ctx.canvas.height / 5});
        
            this.first.height = this.first.y +  ctx.canvas.height / 5;
            this.second.height = this.first.height;
            this.third.height = this.first.height;
            this.first.color = randomChoice(this.colors);
            this.second.color = randomChoice(this.colors);
            this.third.color = randomChoice(this.colors);
            this.colliding = false;
            this.platforms.push(this.first); 
            this.platforms.push(this.second); 
            this.platforms.push(this.third); 
        }    
    }

    function updateScore() {
        engine.jumpCount++;
        if (engine.jumpCount > engine.jumpCountRecord){
            engine.jumpCountRecord = engine.jumpCount;
            let multiplerText = Math.floor((engine.jumpCountRecord + 100) / 100) + '.';
            if (engine.jumpCountRecord < 10) {
                multiplerText += "0";
            }
            $("#runner_multiplier").text(multiplerText + engine.jumpCountRecord);
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

    $(document).on("click", "#runner_container", () => {
        let vel = engine.player.velocityY;
        if (engine.player.canJump) {
            processJump();
            if (vel == engine.player.velocityY && engine.player.jumpNum < 2) {
                engine.player.velocityY = engine.player.jumpSize;
            }
            engine.player.jumpNum++;
        }   
    });

    $(document).on("keypress", function(event) {
        if (event.which == "32") {
            let vel = engine.player.velocityY;
            if (engine.player.canJump) {
                processJump();
                if (vel == engine.player.velocityY && engine.player.jumpNum < 2) {
                    engine.player.velocityY = engine.player.jumpSize;
                }
                engine.player.jumpNum++;
            }   
        }
    });

    function processJump() {

        if (engine.player.velocityY < -8) engine.player.velocityY += -0.25;
        engine.player.velocityY = engine.player.jumpSize;
        if (engine.player.jumpNum < 2) updateScore();
        else {
            engine.player.jumpNum = 0;
            engine.player.canJump = false;
        }
    }
