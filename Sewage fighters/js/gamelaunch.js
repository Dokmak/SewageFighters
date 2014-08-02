$(document).ready(function(){
		/* Full screen Button stuff
	 * Retrieving the fullScreenButton from the DOM
	 */	
	
	WebFontConfig = {
	  google: {
	    families: [ 'Snippet', 'Arvo:700italic', 'Podkova:700' ]
	  },
	};
	(function() {
        var wf = document.createElement('script');
        wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
            '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        wf.type = 'text/javascript';
        wf.async = 'true';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wf, s);
      })();
	
	var fullScreenButton = document.getElementById('fullbutton');
	/* On image hover , the cursor is changed to a pointer */
	fullScreenButton.style.cursor = "pointer";
	/* Making the image act as a Button element */
	fullScreenButton.setAttribute("type", "button");
	/* Setting the opacity to 1 onmouseover */
	fullScreenButton.onmouseover = function(){fullScreenButton.style.opacity = 1};
	/* Setting the opacity to 0.4 onmouseout */
	fullScreenButton.onmouseout = function(){fullScreenButton.style.opacity = 0.2};

	/* Setting up a full screen view for IE , Chrome and firefox */
	fullScreenButton.onclick = function()
	{
		 if (document.body.mozRequestFullScreen) 
		 {
			  /* For Mozilla "moz" firefox */
			  document.body.mozRequestFullScreen();
		 } 
		 else if (document.body.webkitRequestFullScreen) 
		 {
		 	  /* For Mozilla "webkit" ffor chrome , safari , comodo dragon and so forth */
			  document.body.webkitRequestFullScreen();
	  	 }
	  	 /*For IE in full screen 
		  *These two lines auto clicks the 'F11' button to enable full screen in IE browser 
	  	  */
	  	 if($.browser.msie)
	  	 {
			 var wscript = new ActiveXObject("Wscript.shell");
        	 wscript.SendKeys("{F11}");	
	  	 }
	  	 /* End of full screen */
	}
	
	/* Create a new renderer which is autodetected */	
	var renderer = PIXI.autoDetectRenderer(800,600);
	/* Black colour here is 0x111111*/
	var stage = new PIXI.Stage(0x111111,true);
	/* Get the wrapper div to append the renderer view as a child into the div */
	var wrapper = document.getElementById('wrapper');
	/* Append the renderer view */
	wrapper.appendChild(renderer.view);
	
	
	
	var introContainer = new PIXI.DisplayObjectContainer();

	stage.addChild(introContainer);
	
	setInterval(function(){
		var presentsFinished = $("#temp").attr("title");
		if(presentsFinished == "true")
		{
			$("div[id*=temp]").remove();
			introContainer.addChild(background_intro);
			introContainer.addChild(sewageLogo);
			introContainer.addChild(soundButton);
			introContainer.addChild(exitButton);
			introContainer.addChild(playButton);
			introContainer.addChild(playText);	
			requestAnimFrame( animate_logo );			
			$("#wrapper").append("<audio id='music' loop='loop'><source src='sound/introsound.ogg' type='audio/ogg'> <source src='sound/introsound.mp3' type='audio/mpeg'></audio>");	
			var music = document.getElementById('music');
			music.play();
		}	
	},15000)
	 
	 
	 
	/* Creating a background */		
	var background_intro = PIXI.Sprite.fromImage('images/WALLPAPER___RainbowSlide_by_lastscionz.jpg');
	background_intro.width = 800;
	background_intro.height = 600;
	
	/* Creating a play button texture  */
	var PlayButtonTexture = PIXI.Texture.fromImage("images/bended-glossy-button.png");
	var playTextTexture = PIXI.Texture.fromImage("images/playText.png");
	var sewageLogoTexture = PIXI.Texture.fromImage("images/Logo.png");
	var pipeTexture = PIXI.Texture.fromImage("images/greenPipe.png");
	var pipeCoverTexture = PIXI.Texture.fromImage("images/greenPipe_Cover.png");
	var poopTexture = PIXI.Texture.fromImage("images/poop.png");
	var waterdropletTexture = PIXI.Texture.fromImage("images/waterdrop.png");
	var soundButtonTexture = PIXI.Texture.fromImage("images/soundon.png");
	var exitButtonTexture = PIXI.Texture.fromImage("images/exit.png");
	var pauseButtonTexture = PIXI.Texture.fromImage("images/pause.png");
	var shooterTexture = PIXI.Texture.fromImage("images/shooter.png");
	var shooter = new PIXI.Sprite(shooterTexture);
	var soundButton = new PIXI.Sprite(soundButtonTexture); 
	var highScore = new PIXI.Text("0", "bold italic 60px Arvo", "#3e1707", "#a4410e", 7);
	var gameOver = new PIXI.Text("Game Over", "bold italic 100px Arvo", "#000000", "#FF0000", 5);
	var exitButton = new PIXI.Sprite(exitButtonTexture);
	var pauseButton = new PIXI.Sprite(pauseButtonTexture);
	
	pauseButton.anchor.x = 0.5;
	pauseButton.anchor.y = 0.5;
	
	pauseButton.position.x = 720;
	pauseButton.position.y = 20;
	
	pauseButton.width = 52;
	pauseButton.height = 52;
	
	pauseButton.setInteractive(true);
	
	var dontPause = true; 
	
	pauseButton.mousedown = pauseButton.touchstart  =  function(data){
				this.isdown = true;
				if(dontPause)
				{
					dontPause = false;
				}
				else if (!dontPause)
				{
					dontPause = true;
					animate_droplet();
					animate_poop();
					animate_backGame();
					animate_pipe();
					Collision_detector();
				}
				console.log(dontPause);
	}
	
	pauseButton.mouseup = pauseButton.touchend = function(data){
				this.isdown = false;
				this.alpha = 1;
	}
	
	pauseButton.mouseover = function(data){
			this.isOver = true;
			if(this.isdown)return
			this.alpha = 3;
	}
	pauseButton.mouseout = function(data){
			this.isOver = false;
			if(this.isdown)return
			this.alpha = 1;
	}
	
	var exitButton2 = new PIXI.Sprite(exitButtonTexture);
	
	exitButton2.anchor.x = 0.5;
	exitButton2.anchor.y = 0.5;
	
	exitButton2.position.x = 25;
	exitButton2.position.y = 20;
	
	exitButton2.width = 45;
	exitButton2.height = 45;
	
	exitButton2.setInteractive(true);
	
	exitButton.anchor.x = 0.5;
	exitButton.anchor.y = 0.5;
	
	exitButton.position.x = 25;
	exitButton.position.y = 20;
	
	exitButton.width = 45;
	exitButton.height = 45;
	
	exitButton.setInteractive(true);

	exitButton.mousedown = exitButton.touchstart  =  function(data){
				this.isdown = true;
				$("#wrapper").remove();
	}
		
	exitButton.mouseup = exitButton.touchend = function(data){
				this.isdown = false;
				this.alpha = 1;
	}
	
	exitButton.mouseover = function(data){
			this.isOver = true;
			if(this.isdown)return
			this.alpha = 3;
	}
	
	exitButton.mouseout = function(data){
			this.isOver = false;
			if(this.isdown)return
			this.alpha = 1;
	}
	
	
	
	highScore.position.x = 125;
	highScore.position.y = -10;
	
	gameOver.position.x = 100;
	gameOver.position.y = 200;
	
	
	soundButton.anchor.x = 0.5;
	soundButton.anchor.y = 0.5;
	
	soundButton.position.x = 80;
	soundButton.position.y = 20;
	
	soundButton.width = 45;
	soundButton.height = 45;
	
	
	shooter.anchor.x = 0.5;
	shooter.anchor.y = 0.5;
	
	shooter.width = 1000;
	shooter.height = 1000;
	
	shooter.position.x = 400;
	shooter.position.y = 300;
	
	
	var playButton = new PIXI.Sprite(PlayButtonTexture);
	var playText = new PIXI.Sprite(playTextTexture);
	var sewageLogo = new PIXI.Sprite(sewageLogoTexture);
    
    
    var movingBack = PIXI.Sprite.fromImage('images/mud-texture.jpg');
	var movingBacksub = PIXI.Sprite.fromImage('images/mud-texture.jpg');
	
	movingBack.anchor.x = 0;
	movingBack.anchor.y = 0;
	
	movingBack.width = 1800;
	movingBack.height = 1500;
	
	movingBacksub.anchor.x = 0;
	movingBacksub.anchor.y = 0;
	
	movingBacksub.width = 1800;
	movingBacksub.height = 1500;
	
	movingBacksub.position.y = 1500;
	
	
	playText.anchor.x = 0.5;
	playText.anchor.y = 0.5;	

	playText.position.x = 420;
	playText.position.y = 508;
	
	sewageLogo.anchor.x = 0.5;
	sewageLogo.anchor.y = 0.5;	
	
	sewageLogo.position.x = 400;
	sewageLogo.position.y = 70;
	
	// For IE browser positioning
	if($.browser.msie)
	{
		sewageLogo.position.x = 457;	
	}
	
	sewageLogo.alpha = 0.6;
	
	sewageLogo.width = 800;
	
	playText.setInteractive(true);
	shooter.setInteractive(true);
	soundButton.setInteractive(true);
	
	playButton.anchor.x = 0.5;
	playButton.anchor.y = 0.5;	

	playButton.position.x = 410;
	playButton.position.y = 520;
	
	playButton.setInteractive(true);
	
	playButton.alpha = 0.8;
	
	var oldTextAlpha = playText.alpha;
	
	playButton.width = 620;
	playButton.height = 190;
	
	soundButton.mousedown = soundButton.touchstart  =  function(data){
				this.isdown = true;
				var music = document.getElementById('music');
				if(music.paused)
				{
					music.play();
				}
				else if(!music.paused)
				{
					music.pause();
					
				}
	}
	
	soundButton.mouseup = soundButton.touchend = function(data){
				this.isdown = false;
				this.alpha = 1;
	}
	
	soundButton.mouseover = function(data){
			this.isOver = true;
			if(this.isdown)return
			this.alpha = 3;
	}
	
	soundButton.mouseout = function(data){
			this.isOver = false;
			if(this.isdown)return
			this.alpha = 1;
	}
	
	var shooterX;
	var shooterY;
	
	
		shooter.mousemove = function(event)
		{
			if(!collided_poopAndShooter && dontPause)
			{
				/* Global return the global coords of where the touch/mouse event happened */
				this.position.x = event.global.x;
				this.position.y = event.global.y;
				
				shooterX = event.global.x;
				shooterY = event.global.y;
				/* Make the cursor invisible when moving the sprite
				 * Wrapper is the div tag wrapping the canvas
				 * */
				$("#wrapper").css("cursor","none");
			}
		}
	
	
	
	playButton.mouseover = function(data){
			
			this.isOver = true;
			
			if(this.isdown)return
			playText.alpha = 2;
			this.alpha = 2;
	}
	
	playButton.mouseout = playButton.touchend = function(data){
			
			this.isOver = false;
			if(this.isdown)return
			playText.alpha = oldTextAlpha;
			this.alpha = 0.5;
	}
	var soundButtonlev1 = new PIXI.Sprite(soundButtonTexture); 
	soundButtonlev1.anchor.x = 0.5;
	soundButtonlev1.anchor.y = 0.5;
	
	soundButtonlev1.position.x = 80;
	soundButtonlev1.position.y = 20;
	
	soundButtonlev1.width = 45;
	soundButtonlev1.height = 45;
	soundButtonlev1.setInteractive(true);	
	var shootingMusic;	
	
	playButton.mousedown = playButton.touchstart =  function(data){
			this.isdown = true;
			this.alpha = 0.5;
			stage.removeChild(introContainer);
			stage.addChild(movingBacksub);
			stage.addChild(movingBack);
			stage.addChild(pipes[0].pipe);
			stage.addChild(dropletArr);
			stage.addChild(shooter);
			stage.addChild(soundButtonlev1);
			stage.addChild(highScore);
			stage.addChild(exitButton2);
			stage.addChild(pauseButton);
			requestAnimFrame( animate_pipe );
			requestAnimFrame( animate_backGame );
			$("#wrapper").append("<audio id='shot' preload='preload'><source src='sound/fire2.mp3' type='audio/mpeg'><source src='sound/fire2.ogg' type='audio/ogg'></audio>");
			shootingMusic = document.getElementById('shot');
			requestAnimFrame( Collision_detector );
	}

	var pauseMusic = false;
	
	soundButtonlev1.mousedown = soundButtonlev1.touchstart  =  function(data){
				this.isdown = true;
				var music = document.getElementById('music');
				if(music.paused)
				{
					pauseMusic = false;
					music.play();
				}
				else if(!music.paused)
				{
					pauseMusic = true;
					music.pause();
				}
	}
		
	soundButtonlev1.mouseup = soundButtonlev1.touchend = function(data){
				this.isdown = false;
				this.alpha = 1;
	}
	
	soundButtonlev1.mouseover = function(data){
			this.isOver = true;
			if(this.isdown)return
			this.alpha = 3;
	}
	
	soundButtonlev1.mouseout = function(data){
			this.isOver = false;
			if(this.isdown)return
			this.alpha = 1;
	}
	
	var dropletArr = new PIXI.DisplayObjectContainer();
	
	var arrDroplets = new Array();
	
	var started = false;
	
	shooter.mousedown = shooter.touchstart =  function(data)
	{
		
		this.isdown = true;
		shootingMusic.play();
		
		var droplet = new PIXI.Sprite(waterdropletTexture);
		droplet.width = 45;
		droplet.height = 45;
		droplet.position.x = shooterX-18;
		droplet.position.y = shooterY-20;
		droplet.anchor.x = 0.5;
		droplet.anchor.y = 0.5;		
		
		arrDroplets.push(droplet);
		dropletArr.addChild(arrDroplets[arrDroplets.length-1]);
		
		if(!started)
		{		
			requestAnimFrame( animate_droplet );
			started = true;
		}
		/* End of Playing the music*/	
	}
	exitButton2.mousedown = exitButton2.touchstart  =  function(data){
				this.isdown = true;
				$("#wrapper").remove();
	}
		
	exitButton2.mouseup = exitButton2.touchend = function(data){
				this.isdown = false;
				this.alpha = 1;
	}
	
	exitButton2.mouseover = function(data){
			this.isOver = true;
			if(this.isdown)return
			this.alpha = 3;
	}
	
	exitButton2.mouseout = function(data){
			this.isOver = false;
			if(this.isdown)return
			this.alpha = 1;
	}

	
	
	var droplet_collide = false;
	var i_droplet=0;
	function animate_droplet()
	{
		if(dontPause)
		{
		if(!collided_poopAndShooter)
		{
			i_droplet=0
			while(i_droplet<arrDroplets.length) {
			  	arrDroplets[i_droplet].position.y -=14;
				for (var j=0; j < droplets_collide.length; j++)
				{
					if(i_droplet==droplets_collide[j])
					{
						droplet_collide = true;
						droplets_collide.splice( droplets_collide.indexOf(poop_turn), 1 );
					}
				};
				if(arrDroplets[i_droplet].position.y <= -25 || droplet_collide)
			  	{
			  		dropletArr.removeChild(arrDroplets[i_droplet]);
			  		arrDroplets.splice(i_droplet,1);
			  		renderer.render(stage);
					droplet_collide = false;
					i_droplet--;
			  	}
				i_droplet++;
			};
			requestAnimFrame( animate_droplet );
			renderer.render(stage);
		}
	  }
	}
	
	playButton.mouseup =  playButton.touchend = function(data){
			this.isdown = false;
			this.alpha = 2;
	}
	
	var incDecBri = true; 
	
	function animate_logo()
	{	
		if(incDecBri)
		{
			sewageLogo.alpha += 0.01;	
		}
		
		if(sewageLogo.alpha >= 2)
		{
			incDecBri = false;
		}
		
		if(sewageLogo.alpha <= 0.6)
		{
			incDecBri = true;
		}
		
		if(!incDecBri)
		{
			sewageLogo.alpha -= 0.01;
		}
			
		requestAnimFrame( animate_logo );
	  	renderer.render(stage);
	}
	
	var number_of_steps = 20 ;
	var score = 0;
	var lvl1_score = 4;
	var lvl2 = false;
	
	function pipe_object()
	{
		this.pipe = new PIXI.Sprite(pipeTexture);
		this.pipe.anchor.x = 0.5;
		this.pipe.anchor.y = 0.2;
		this.pipe.position.x = 400;
		this.pipe.position.y = 0;
		this.pipe.width = 81;
		this.pipe.height = 100;
		this.step_size = 0;
		this.reached = true ;
		this.left_limit = 43;
		this.right_limit = 757;
		this.direction = true ;
		this.next_position = 0 ;
		this.freeze =  false ;
		this.y_steps = 0;
		this.left_portion = 0 ;
		this.right_portion = 0 ;
		this.pipeCover = new PIXI.Sprite(pipeCoverTexture);
		this.pipeCover.anchor.x = 0.5;
		this.pipeCover.anchor.y = 0.2;	
		this.pipeCover.width = 81;
		this.pipeCover.height = 100;
	}
	
	var pipes = new Array();
	pipes[0] = new pipe_object();
	
	function animate_pipe()
	{
		if(dontPause)
		{
		if(!collided_poopAndShooter)
		{	if(!lvl2)
			{
				if(score>lvl1_score) 
				{
					//hena lvl2 btbda2 wel pipe el tanya btetd5ol
					lvl2 = true;
					score = 0;
					number_of_steps = 10 ;
					pipes[0].left_limit = 443;
					pipes[0].right_limit = 757;
					if(pipes[0].pipe.position.x<476)
					{
						pipes[0].next_position = 476-pipes[0].pipe.position.x;
						pipes[0].step_size = Math.ceil(pipes[0].next_position/number_of_steps);
						pipes[0].next_position = pipes[0].step_size*number_of_steps;
						pipes[0].next_position =  pipes[0].pipe.position.x + pipes[0].next_position ;
						pipes[0].reached = false;
						pipes[0].direction = true;
					}
					else
					{
						pipes[0].next_position = pipes[0].pipe.position.x-476;
						pipes[0].step_size = Math.floor(pipes[0].next_position/number_of_steps);
						pipes[0].next_position = pipes[0].step_size*number_of_steps;
						pipes[0].next_position =  pipes[0].pipe.position.x - pipes[0].next_position ;
						pipes[0].reached = false;
						pipes[0].direction = false;
					}
					if(pipes[0].y_steps<20 && pipes[0].y_steps!=0)
					stage.removeChild( pipes[0].pipeCover );
					pipes[0].freeze = false ;
					pipes[0].y_steps=0;
					pipes[1] = new pipe_object();
					pipes[1].pipe.position.x = -43;
					pipes[1].left_limit = 43;
					pipes[1].right_limit = 357;
					pipes[1].next_position = 238-pipes[1].pipe.position.x;
					pipes[1].step_size = Math.ceil(pipes[1].next_position/number_of_steps);
					pipes[1].next_position = pipes[1].step_size*number_of_steps;
					pipes[1].next_position =  pipes[1].pipe.position.x + pipes[1].next_position ;
					pipes[1].reached = false;
					pipes[1].direction = true;
					stage.addChild(pipes[1].pipe);
				}
			
			}
			for (var i=0; i < pipes.length; i++)
			{
				if(pipes[i].reached)
				{
					pipes[i].left_portion = pipes[i].pipe.position.x - pipes[i].left_limit ;
					pipes[i].right_portion = pipes[i].right_limit - pipes[i].pipe.position.x ;
				
					if(pipes[i].left_portion <= pipes[i].right_portion)
					{
						do
						{
							pipes[i].next_position = Math.floor((Math.random()*pipes[i].right_portion)+1);
							pipes[i].step_size = Math.floor(pipes[i].next_position/number_of_steps);
							pipes[i].next_position = pipes[i].step_size*number_of_steps;
							pipes[i].next_position =  pipes[i].pipe.position.x + pipes[i].next_position ;
						}
						while(pipes[i].pipe.position.x==pipes[i].next_position)
						pipes[i].reached = false;
						pipes[i].direction = true ;
					}
					else
					{
						do
						{
							pipes[i].next_position = Math.floor((Math.random()*pipes[i].left_portion)+1);
							pipes[i].step_size = Math.floor(pipes[i].next_position/number_of_steps);
							pipes[i].next_position = pipes[i].step_size*number_of_steps;
							pipes[i].next_position =  pipes[i].pipe.position.x - pipes[i].next_position ;
						}
						while(pipes[i].pipe.position.x==pipes[i].next_position)
						pipes[i].reached = false;
						pipes[i].direction = false ;
					}
				}
				else
				{
					if(pipes[i].pipe.position.x == pipes[i].next_position)
					{
						if(!pipes[i].freeze)
						{
							pipes[i].pipeCover.position.x = pipes[i].pipe.position.x ;
							pipes[i].pipeCover.position.y = pipes[i].pipe.position.y ;
							poops[number_of_poops] = new poop_object();
							poops[number_of_poops].poop.position.x = pipes[i].pipe.position.x;
							poops[number_of_poops].poop.position.y = pipes[i].pipe.position.y+40;
							stage.removeChild(highScore);
							stage.removeChild(soundButtonlev1);
							stage.removeChild(pauseButton);
							stage.addChild(poops[number_of_poops].poop);
							stage.addChild( pipes[i].pipeCover ) ;
							stage.addChild(highScore);
							stage.addChild(soundButtonlev1);
							stage.addChild(pauseButton);
							number_of_poops++ ;
							requestAnimFrame( animate_poop );
							pipes[i].freeze = true ;
						}
						else pipes[i].y_steps++ ;
						if(pipes[i].y_steps>20)
						{
							stage.removeChild( pipes[i].pipeCover );
							pipes[i].reached = true ;
							pipes[i].freeze = false ;
							pipes[i].y_steps=0;
						}
					}
					else
					{
						if(pipes[i].direction)
						pipes[i].pipe.position.x += pipes[i].step_size ;
						if(!pipes[i].direction) 
						pipes[i].pipe.position.x -= pipes[i].step_size ;
					}
				}	
			}
		}
		requestAnimFrame( animate_pipe );
	  	renderer.render(stage);
	  }
	}
	
	function animate_backGame()
	{
		if(!collided_poopAndShooter && dontPause)
		{	
			movingBack.position.y -= 2;
			movingBacksub.position.y -= 2;
			
			if(movingBacksub.position.y == 0)
			{
				movingBack.position.y = 1500;
			}
			else if(movingBack.position.y == 0)
			{
				movingBacksub.position.y = 1500;
			}
			
			requestAnimFrame( animate_backGame );
		  	renderer.render(stage);
		}	
	}
	
	var number_of_poops = 0
	var poop_turn = 0;
	var poop_collide = false;
	var poops = new Array();
	function poop_object()
	{
		this.poop = new PIXI.Sprite(poopTexture);
		this.poop.anchor.x = 0.5;
		this.poop.anchor.y = 0.5;
		this.poop.width = 80;
		this.poop.height = 100;
		this.y_speed = Math.floor((Math.random()*2)+6);
	}
	
	function Check_collision(object1, object2) {
	  return object1.position.x < object2.position.x + object2.width/2  && object1.position.x + object1.width/8  > object2.position.x &&
    	object1.position.y < object2.position.y + object2.height/2 && object1.position.y + object1.height/8 > object2.position.y;
    }
	var collided_poopAndShooter = false;
	function animate_poop()
	{
		if(!collided_poopAndShooter && dontPause)
		{
			poops[poop_turn].poop.position.y +=  poops[poop_turn].y_speed ;
			for (var i=0; i < poops_collide.length; i++)
			{
				if(poop_turn == poops_collide[i])
				{
					poop_collide = true;
				}
			};
			if(Check_collision(shooter , poops[poop_turn].poop))
			{
				collided_poopAndShooter = true;
				highScore.setText(score.toString());
				score += 1;
				poop_collide = true;
			    stage.removeChild(shooter);
			    stage.addChild(gameOver);
				//Display a game over dialog and stop any animations		
			}
			
			if(poop_collide) 
			{
				poops_collide.splice( poops_collide.indexOf(poop_turn), 1 );
				score++;
				highScore.setText(score.toString());
			}
			
			if ((poops[poop_turn].poop.position.y > 640)||poop_collide)
			{
				stage.removeChild(poops[poop_turn].poop);
				poops.splice( poop_turn, 1 );
				number_of_poops-- ;
				if(poop_turn!=0) poop_turn-- ;
				poop_collide = false;
			}
			else
			{
			poop_turn++ ;
			if(poop_turn == number_of_poops) poop_turn = 0 ;
			requestAnimFrame( animate_poop );
			renderer.render(stage);
			}
		}
	}
	
	var poops_collide = new Array();
	var droplets_collide = new Array();
	function Collision_detector()
	{
		if(!collided_poopAndShooter && dontPause)
		{
			for (var i=0; i < poops.length; i++)
			{
				for (var j=0; j < arrDroplets.length; j++)
				{
					if((arrDroplets[j].position.x>(poops[i].poop.position.x-40))&&(arrDroplets[j].position.x<(poops[i].poop.position.x+40))&&(arrDroplets[j].position.y<(poops[i].poop.position.y+40)))
					{
						poops_collide.push(i);
						droplets_collide.push(j);
					}
					
				};
			};
			
			requestAnimFrame( Collision_detector );
			renderer.render(stage);
		}
	}
});
