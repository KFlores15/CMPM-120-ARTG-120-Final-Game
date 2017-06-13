var game;

var menuScreen;
var menuCity;
var fadeIn;

var platforms;
var ground;
var wall;
var rubbles;

var interior;
var ambulance;
var introMarlin;
var introDory;
var introPatient;

var players;
var Marlin;
var Dory;
var MarlinActive;
var DoryActive;

var MarlinHasP;
var MarlinHasP1;
var MarlinHasP2;
var MarlinHasP3;
var MarlinHasP4;

var DoryHasP;
var DoryHasP1;
var DoryHasP2;
var DoryHasP3;
var DoryHasP4;

var MarlinCrouchP;
var MarlinCrouchP1;
var MarlinCrouchP2;
var MarlinCrouchP3;
var MarlinCrouchP4;

var DoryCrouchP;
var DoryCrouchP1;
var DoryCrouchP2;
var DoryCrouchP3;
var DoryCrouchP4;

var MarlinSniper;
var DorySniper;
var MarlininRoom;
var DoryinRoom;
var MarlinMoving;
var DoryMoving;

var instructions;
var tutorial;
var tutorial2;
var theLR;
var theDown;
var theUp;
var theUpPatient;
var theSpace;

var MarlinArrows;
var MarlinSay;
var DorySay;
var DorySay2;

var medkit;
var haveMedkit;
var DoryKit;
var MarlinKit;

var patients;
var patient1;
var p1Timer;
var patient2;
var p2Timer;
var patient3;
var p3Timer;
var patient4;
var p4Timer;

var healthy1;
var healthy2;
var healthy3;
var healthy4;

var corpses;
var corpse1;
var corpse2;
var corpse3;
var corpse4;

var ladders;
var ladder1;
var ladder2;
var ladder3;
var ladder4;
var ladder5;
var ladder6;

var pipe;

var valve1;
var valve2;
var valve3;
var valve4;
var valve5;

var sewage;
var sewage1;
var sewage2;
var sewage3;
var sewage4;
var sewage5;

var circuit1;
var circuit2;

var darkness;
var darkness1;
var darkness2;
var darkness3;

var graphics;
var graphicsTimer;

var dialogues;
var dialogueTimer;
var dialogueBomb;

var endingDory;
var endingMarlin;
var soldier;
var wounded;
var deadDory;

var cameraTimer;
var speakTimer;

var MenuTheme;
var PlayTheme;
var EndingTheme;

var Gunfire;
var	SniperRifle;
var AssaultRifle;
var Bandage;
var	LightHum1;
var	LightHum2;
var	Squeak;

// Create game and states
window.onload = function(){
	game = new Phaser.Game(1500,600, Phaser.AUTO);
	game.state.add('Load', Load);
	game.state.add('Menu', Menu);
	game.state.add('Intro', Intro);
	game.state.add('Play', Play);
	game.state.add('Ending', Ending);
	game.state.add('Credits', Credits);
	
	game.state.start('Load');
}

// Load state preload assets
var Load = function(game) {};
Load.prototype = {
	preload: function() {
		console.log('Load: preload');
		
		// Create loading sign
		var loadLabel = game.add.text(1300, 550, 'loading...', {font: '30px Courier', fill: '#fff'});
		
		// Load background assets
		game.load.image('structure', 'assets/img/structure.png');
		game.load.image('menuScreen', 'assets/img/menuScreen.png');
		game.load.image('menuCity', 'assets/img/menuCity.png');
		game.load.image('endingCity', 'assets/img/endingCity.png');
		game.load.image('interior', 'assets/img/interior.png');
		game.load.image('titleCredits', 'assets/img/titleCredits.png');
		
		// Load character assets
		game.load.spritesheet('fMedic', 'assets/img/fMedic.png', 210, 250);
		game.load.spritesheet('fCarrying', 'assets/img/fCarrying.png', 210, 250);
		game.load.image('fCrouching', 'assets/img/fCrouching.png');
		game.load.image('fMedicDead', 'assets/img/fMedicDead.png');
		
		game.load.spritesheet('mMedic', 'assets/img/mMedic.png', 210, 250);
		game.load.spritesheet('mCarrying', 'assets/img/mCarrying.png', 210, 250);
		game.load.image('mCrouching', 'assets/img/mCrouching.png');
		game.load.image('mCovering', 'assets/img/mCovering.png');
		
		game.load.spritesheet('patient1', 'assets/img/patient1.png', 106, 142);
		game.load.spritesheet('patient2', 'assets/img/patient2.png', 148, 200);
		game.load.spritesheet('patient3', 'assets/img/patient3.png', 200, 160);
		game.load.spritesheet('patient4', 'assets/img/patient4.png', 100, 142);
		
		game.load.image('healthy1', 'assets/img/healthy1.png');
		game.load.image('healthy2', 'assets/img/healthy2.png');
		game.load.image('healthy3', 'assets/img/healthy3.png');
		game.load.image('healthy4', 'assets/img/healthy4.png');
		
		game.load.image('corpse1', 'assets/img/corpse1.png');
		game.load.image('corpse2', 'assets/img/corpse2.png');
		game.load.image('corpse3', 'assets/img/corpse3.png');
		game.load.image('corpse4', 'assets/img/corpse4.png');
		
		game.load.image('soldier', 'assets/img/soldier.png');
		game.load.image('wounded', 'assets/img/wounded.png');
		
		// Load object assets
		game.load.image('ladder', 'assets/img/ladder.png');
		game.load.image('ambulance', 'assets/img/ambulance.png');
		game.load.image('rubbles', 'assets/img/rubbles.png');
		game.load.image('medkit', 'assets/img/medkit.png');
		game.load.image('pipe', 'assets/img/pipe.png');
		game.load.image('valve', 'assets/img/valve.png');
		game.load.spritesheet('sewage', 'assets/img/sewage.png', 48, 420);
		game.load.spritesheet('circuit', 'assets/img/circuit.png', 50, 224);
		
		// Load instruction assets
		game.load.spritesheet('theLR', 'assets/img/theLR.png', 64, 64);
		game.load.spritesheet('theDown', 'assets/img/theDown.png', 64, 64);
		game.load.spritesheet('theUp', 'assets/img/theUp.png', 64, 64);
		game.load.image('theSpace', 'assets/img/theSpace.png');
		
		// Load music assets
		game.load.audio('MenuTheme', 'assets/audio/MenuTheme.mp3');
		game.load.audio('PlayTheme', 'assets/audio/PlayTheme.mp3');
		game.load.audio('EndingTheme', 'assets/audio/EndingTheme.mp3');
		
		// Load sound effect assets
		game.load.audio('Gunfire', 'assets/audio/Gunfire.mp3');
		game.load.audio('SniperRifle', 'assets/audio/SniperRifle.mp3');
		game.load.audio('AssaultRifle', 'assets/audio/AssaultRifle.mp3');
		game.load.audio('Bandage', 'assets/audio/Bandage.mp3');
		game.load.audio('LightHum', 'assets/audio/LightHum.mp3');
		game.load.audio('Squeak', 'assets/audio/Squeak.mp3');
	},
	
	create: function() {
		console.log('Load: create');
		
		game.state.start('Menu');
	},
};

var Menu = function(game) {};
Menu.prototype = {
	preload: function() {
		console.log('Menu: preload');
	},
	
	create: function() {
		console.log('Menu: create');
		
		// Loop background music
		this.music = game.add.audio('MenuTheme');
		this.music.play('', 0, 1, true);
		
		// Create fade effect
		fadeIn = game.add.sprite(0, 0, 'structure');
		fadeIn.scale.setTo(1000,1000);
		
		// Create background
		menuCity = game.add.tileSprite(185, 0, 1920, 1080, "menuCity");
		menuCity.scale.setTo(0.58, 0.5555);
		menuScreen = game.add.tileSprite(185, 0, 1920, 1080, "menuScreen");
		menuScreen.scale.setTo(0.58, 0.5555);
		
		// Create instruction to start game
		var startLabel = game.add.text(700, game.world.height-25, '[press space]', {font: '17px Verdana', fill: '#000'});
		startLabel.alpha = 0;
		game.add.tween(startLabel).to( {alpha: 1}, 1000, Phaser.Easing.Linear.None, true, 0, 1000, true);
		
		// Initiate dialogue variables
		dialogueTimer = 0;
		dialogues = game.add.group();
		tutorial = true;
		tutorial2 = true;
	},
	
	update: function() {
		// Create fade effect
		if (fadeIn.alpha > 0){
			fadeIn.alpha -= 0.01;
		}
		
		// Bring fadeIn to front
		game.world.bringToTop(fadeIn);
		
		// Scroll background
		menuCity.tilePosition.x -= 10;
		
		// Press SPACEBAR to start game
		if (game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)){
			dialogues.callAll('kill');
			tutorial = false;
			var dialogue = game.add.text(775, 125, 'Wait. Stop over there!', {font: '20px Arial', fill: '#fff'}, dialogues);
			game.time.events.add(Phaser.Timer.SECOND * .75, this.startGame, this);
		}
		
		// Initiate dialogueTimer
		if (tutorial){
			dialogueTimer ++;
		}
		
		// Menu conversation
		if (dialogueTimer == 50){
			var dialogue = game.add.text(375, 350, 'How is your sister?', {font: '25px Arial', fill: '#fff'}, dialogues);
		}else if (dialogueTimer == 150){
			dialogues.callAll('kill');
			var dialogue = game.add.text(675, 125, 'She just got out of the city. She is safe now.', {font: '20px Arial', fill: '#fff'}, dialogues);
		}else if (dialogueTimer == 350){
			dialogues.callAll('kill');
			var dialogue = game.add.text(375, 350, 'That is good to hear.', {font: '25px Arial', fill: '#fff'}, dialogues);
		}else if (dialogueTimer == 475){
			dialogues.callAll('kill');
			var dialogue = game.add.text(750, 125, 'What about your parents?', {font: '20px Arial', fill: '#fff'}, dialogues);
		}else if (dialogueTimer == 600){
			dialogues.callAll('kill');
			var dialogue = game.add.text(350, 350, 'They have not picked up', {font: '25px Arial', fill: '#fff'}, dialogues);
			var dialogue2 = game.add.text(350, 375, 'or called back yet.', {font: '25px Arial', fill: '#fff'}, dialogues);
		}else if (dialogueTimer == 800){
			dialogues.callAll('kill');
			var dialogue = game.add.text(825, 125, 'I am sorry.', {font: '20px Arial', fill: '#fff'}, dialogues);
		}else if (dialogueTimer == 900){
			dialogues.callAll('kill');
			var dialogue = game.add.text(350, 350, 'I try not to worry. I am sure', {font: '25px Arial', fill: '#fff'}, dialogues);
			var dialogue2 = game.add.text(350, 375, 'they are safe.', {font: '25px Arial', fill: '#fff'}, dialogues);
		}else if (dialogueTimer == 1100){
			dialogues.callAll('kill');
			var dialogue = game.add.text(350, 350, 'I just want this civil war to', {font: '25px Arial', fill: '#fff'}, dialogues);
			var dialogue2 = game.add.text(350, 375, 'end already. Six years and', {font: '25px Arial', fill: '#fff'}, dialogues);
			var dialogue3 = game.add.text(350, 400, 'all it has achieved', {font: '25px Arial', fill: '#fff'}, dialogues);
			var dialogue4 = game.add.text(350, 425, 'is the deaths of millions.', {font: '25px Arial', fill: '#fff'}, dialogues);
		}else if (dialogueTimer == 1450){
			dialogues.callAll('kill');
			var dialogue = game.add.text(698, 100, 'There is nothing we can do', {font: '20px Arial', fill: '#fff'}, dialogues);
			var dialogue2 = game.add.text(700, 125, 'but try to reduce those numbers.', {font: '20px Arial', fill: '#fff'}, dialogues);
		}else if (dialogueTimer == 1700){
			dialogues.callAll('kill');
			var dialogue = game.add.text(640, 125, 'And hey, if you need to talk, I am here for you alright.', {font: '20px Arial', fill: '#fff'}, dialogues);
		}else if (dialogueTimer == 1900){
			dialogues.callAll('kill');
			var dialogue = game.add.text(425, 350, 'Yeah I know.', {font: '25px Arial', fill: '#fff'}, dialogues);
		}else if (dialogueTimer == 2000){
			dialogues.callAll('kill');
			var dialogue = game.add.text(425, 350, 'Thanks.', {font: '25px Arial', fill: '#fff'}, dialogues);
		}else if (dialogueTimer == 2100){
			dialogues.callAll('kill');
		}
	},
	
	// Start game
	startGame: function() {
		this.music.stop();
		game.state.start('Intro'); 
	}
}

var Intro = function(game) {};
Intro.prototype = {
	preload: function() {
		console.log('Intro: preload');
    },
	
	create: function() {
		console.log('Intro: create');
		
		// Play background sound effect
		this.music = game.add.audio('Gunfire');
		this.music.play('', 0, 1, false);
		
		// Create fade effect
		fadeIn = game.add.sprite(0, 0, 'structure');
		fadeIn.scale.setTo(1000,1000);
    
		// Set world bound
        game.world.setBounds(0, 0, 4000, 1700);
		
		// Create background
		interior = game.add.sprite(-69, 318, "interior");
        interior.scale.setTo(1.00125, .790588);
		game.stage.backgroundColor = "fff";
		
		// Create introLadder
        var introLadder1 = game.add.sprite(540,1320, 'ladder');
        introLadder1.anchor.setTo(.5);
        var introLadder2 = game.add.sprite(1312,1000, 'ladder');
        introLadder2.anchor.setTo(.5);
        
		// Create introDory
        introDory = game.add.sprite(327, 1050, 'fMedic');
        introDory.anchor.setTo(.5);
        introDory.scale.setTo(.75,.75);
        game.physics.arcade.enable(introDory);
        introDory.body.gravity.y = 500;
        introDory.alpha = 0;
        
		// Create ambulance
        ambulance = game.add.sprite(-256, 1110, 'ambulance');
        ambulance.anchor.setTo(.5);
        game.physics.arcade.enable(ambulance);
		
		// Create introPatient
        introPatient = game.add.sprite(1670, 1185, 'patient1');
        introPatient.enableBody = true;
        introPatient.anchor.setTo(.5);
        game.physics.arcade.enable(introPatient);
        introPatient.body.bounce.y = 0;
        introPatient.body.gravity.y = 500;
        introPatient.scale.setTo(.6,.6);
		
		// Create introMarlin
        introMarlin = game.add.sprite(300, 1050, 'mMedic');
        introMarlin.anchor.setTo(.5);
        introMarlin.scale.setTo(.75,.75);
        game.physics.arcade.enable(introMarlin);
        introMarlin.body.gravity.y = 500; 
        introMarlin.alpha = 0;
		
		// Set camera to introMarlin
        game.camera.follow(introMarlin);
		
		// Animations for paramedic walking and standing
        introMarlin.animations.add('mWalking', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 12, true);
        introDory.animations.add('fWalking', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 12, true);
        introMarlin.animations.add('mStanding', [0], 0, true);
        introDory.animations.add('fStanding', [0], 0, true);
		
		// Create medkit
        medkit = game.add.sprite(150, 1187, 'medkit');
        medkit.enableBody = true;
        game.physics.arcade.enable(medkit);
        medkit.body.bounce.y = 0;
        medkit.body.gravity.y = 500;
        medkit.scale.setTo(.75,.75);
        medkit.alpha = 0;
        
		// Create level
		this.createLevel();
		
		// Create instructions to skip intro
		var startLabel = game.add.text(700, 575, '[space to skip]', {font: '17px Verdana', fill: '#fff'});
		startLabel.alpha = 0;
		game.add.tween(startLabel).to( {alpha: 1}, 1000, Phaser.Easing.Linear.None, true, 0, 1000, true);
		startLabel.fixedToCamera = true;
		
		// Initiate dialogue variables
        dialogueTimer = 0;
        dialogueBomb = 0;
		dialogues = game.add.group();
	},
	
	update: function() {
		// Create fade effect
		if (fadeIn.alpha > 0){
			fadeIn.alpha -= 0.01;
		}
		
		// Bring fadeIn to front
		game.world.bringToTop(fadeIn);
		
		// Set collision physics
		game.physics.arcade.collide(introMarlin, platforms);
		game.physics.arcade.collide(introDory, platforms);
		game.physics.arcade.collide(introPatient, platforms);
		game.physics.arcade.collide(medkit, platforms);
		
		// Start dialogueTimer and dialogueBomb to remove dialogues
		dialogueTimer ++;
		if (dialogueTimer == 1){
			dialogues.callAll('kill');
			dialogueTimer = 0;			
		}
		
		dialogueBomb ++;
		if (dialogueBomb == 2){
			dialogues.callAll('destroy');
			dialogueBomb = 0;			
		}
		
		// Ambulance drives into scene
		if (ambulance.x < 256){
			ambulance.body.velocity.x = 300;
		}else{
			ambulance.body.velocity.x = 0;
			introMarlin.alpha = 1;
			introDory.alpha = 1;
		}
		
		// Marlin and Dory run to house on the right
		if (ambulance.x >= 256 && introDory.x < 1710){
			introMarlin.body.velocity.x = 327;
			introDory.body.velocity.x = 400;
			introMarlin.animations.play('mWalking');
			introDory.animations.play('fWalking');
			var dialogue = game.add.text(introDory.x - 125, introDory.y - 115, 'I see someone inside the house.', {font: '20px Arial', fill: '#fff'}, dialogues);
		}
		
		// Marlin and Dory stop in front of patient
		if (introMarlin.x >= 1445 && introDory.x >= 1710){
			introMarlin.body.velocity.x = 0;
			introDory.body.velocity.x = 0;
			introMarlin.frame = 0;
			introDory.frame = 0;
			
			// Dory crouches to heal patient
			introDory.scale.setTo(-.75,.75);
			introDory.loadTexture('fCrouching', 0, false);
			var dialogue = game.add.text(introDory.x - 250, introDory.y - 75, 'She is suffering from internal bleeding. We need the medkit.', {font: '20px Arial', fill: '#fff'}, dialogues);
			
			// Timer for conversation before Marlin runs back to ambulance
			game.time.events.add(Phaser.Timer.SECOND * 2, this.fetchMedkit, this);
        }
		
		// Marlin crouches as bomb goes off
		if (introMarlin.x <= 470 && introDory.x >= 1710){
			introMarlin.body.velocity.x = 0;
			introMarlin.frame = 0;
			introMarlin.loadTexture('mCrouching', 0, false);
			
			medkit.alpha = 1;
			
			game.camera.shake(0.005, 500);
			
			// Rubble appears after a few seconds
			game.time.events.add(Phaser.Timer.SECOND * 1, this.rubble, this);
			game.time.events.add(Phaser.Timer.SECOND * 2, this.switch, this);
		}
		
		// Press SPACEBAR to skip intro
		if (game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)){
			this.music.stop();
			game.state.start('Play'); 
		}
	},
	
	// Marlin runs back to ambulance
	fetchMedkit: function(){
		introMarlin.scale.setTo(-.75,.75);
		introMarlin.body.velocity.x = -350;
	},
	
	// Create rubble
	rubble: function(){
		rubbles = platforms.create(684, 1080, 'rubbles');
		rubbles.anchor.setTo(.5);
		rubbles.scale.setTo(.5);
	},

	// Switch state
	switch: function(){
		this.music.stop();
		game.state.start('Play');
	},
	
	// Create level
	createLevel: function(){
		// Create platforms group
        platforms = game.add.group();
        platforms.enableBody = true;
		
        // Outside
        ground = platforms.create(-200, 1486, 'structure');
        ground.anchor.setTo(.5);
        ground.scale.setTo(18, 15);
        ground.body.immovable = true;
        
        // Sewer
        ground = platforms.create(2000, 1682, 'structure');
        ground.anchor.setTo(.5);
        ground.scale.setTo(125, 1.5);
        ground.body.immovable = true;
        
        // 1st Floor
        ground = platforms.create(1600, 1260, 'structure');
        ground.anchor.setTo(.5);
        ground.scale.setTo(101.5, 1.5);
        ground.body.immovable = true;
        
        ground = platforms.create(3840, 1260, 'structure');
        ground.anchor.setTo(.5);
        ground.scale.setTo(10, 1.5);
        ground.body.immovable = true;
		
		wall = platforms.create(3200, 1104, 'structure');
        wall.anchor.setTo(.5);
        wall.scale.setTo(1.5, 10);
        wall.body.immovable = true;
        
        // Back wall
        wall = platforms.create(3968, 784, 'structure');
        wall.anchor.setTo(.5);
        wall.scale.setTo(2, 56);
        wall.body.immovable = true;
        
        // 2nd Floor
        ground = platforms.create(1952, 944, 'structure');
        ground.anchor.setTo(.5);
        ground.scale.setTo(82, 1.5);
        ground.body.immovable = true;
        
        ground = platforms.create(3616, 944, 'structure');
        ground.anchor.setTo(.5);
        ground.scale.setTo(6, 1.5);
        ground.body.immovable = true;
        
        // 3rd Floor
        ground = platforms.create(1944, 624, 'structure');
        ground.anchor.setTo(.5);
        ground.scale.setTo(80, 1.5);
        ground.body.immovable = true;
        
        ground = platforms.create(3760, 624, 'structure');
        ground.anchor.setTo(.5);
        ground.scale.setTo(15, 1.5);
        ground.body.immovable = true;
		
		wall = platforms.create(3200, 448, 'structure');
        wall.anchor.setTo(.5);
        wall.scale.setTo(1.5, 12);
        wall.body.immovable = true;
        
        // Front Wall
        wall = platforms.create(684, 672, 'structure');
        wall.anchor.setTo(.5);
        wall.scale.setTo(3, 22);
        wall.body.immovable = true;
        
        // Ceiling
        ground = platforms.create(2316, 288, 'structure');
        ground.anchor.setTo(.5);
        ground.scale.setTo(105, 2);
        ground.body.immovable = true;
	}
}

var Play = function(game) {};
Play.prototype = {
	preload: function() {
		console.log('Play: preload');
	},
	
	create: function() {
		console.log('Play: create');
		
		// Initiate sound effects 
		Bandage = game.add.audio('Bandage');
		LightHum1 = game.add.audio('LightHum');
		LightHum2 = game.add.audio('LightHum');
		Squeak = game.add.audio('Squeak');
		SniperRifle = game.add.audio('SniperRifle');
		
		// Loop background music
		this.music = game.add.audio('PlayTheme');
		this.music.play('', 0, 1, true);
		
		// Create fade effect
		fadeIn = game.add.sprite(0, 0, 'structure');
		fadeIn.scale.setTo(1000,1000);
		
		// Set world bound
        game.world.setBounds(0, 0, 4000, 1700);
		
		// Create background
		interior = game.add.sprite(-69, 318, "interior");
        interior.scale.setTo(1.00125, .790588);
		game.stage.backgroundColor = "fff";
		
		// Initiate dialogue variables
		dialogueTimer = 0;
		dialogueBomb = 0;
		dialogues = game.add.group();
		
		// Create level
		this.createLevel();
		
		// Create sewage puzzle
		this.sewagePuzzle();
		
		// Create darkness puzzle
		this.darknessPuzzle();
		
		// Create graphicsTimer and graphics for sniper line
		graphicsTimer = 0;
		graphics = game.add.graphics(0, 0);
		
		// Create ambulance
		ambulance = game.add.sprite(256, 1110, 'ambulance');
		ambulance.anchor.setTo(.5);
		
		// Create medkit
		medkit = game.add.sprite(150, 1187, 'medkit');
		medkit.enableBody = true;
		game.physics.arcade.enable(medkit);
		medkit.body.bounce.y = 0;
		medkit.body.gravity.y = 500;
		medkit.scale.setTo(.75,.75);
		haveMedkit = false;
		DoryKit = false;
		MarlinKit = false;
		
		// Create patients group and patient
		patients = game.add.group();
		
		patient1 = new patient(game, 'patient1', 0, 1670, 1185, .6);
		game.add.existing(patient1);
		patient1.scale.setTo(.6);
		p1Timer = 8000;
		patients.add(patient1);
		
		patient2 = new patient(game, 'patient2', 0, 3600, 512, .6);
		game.add.existing(patient2);
		patient2.scale.setTo(.6);
		p2Timer = 8000;
		patients.add(patient2);
		
		patient3 = new patient(game, 'patient3', 0, 1056, 528, .6);
		game.add.existing(patient3);
		patient3.scale.setTo(.6);
		p3Timer = 8000;
		patients.add(patient3);
		
		patient4 = new patient(game, 'patient4', 0, 3500, 1600, .6);
		game.add.existing(patient4);
		patient4.scale.setTo(.6);
		p4Timer = 8000;
		patients.add(patient4);
		
		// Create corpses group and corpse
		corpses = game.add.group();
		
		corpse1 = new corpse(game, 'corpse1', 0, -500, 500, .6);
		game.add.existing(corpse1);
		corpse1.scale.setTo(.6);
		corpses.add(corpse1);
		
		corpse2 = new corpse(game, 'corpse2', 0, -500, 500, .6);
		game.add.existing(corpse2);
		corpse2.scale.setTo(.75);
		corpses.add(corpse2);
		
		corpse3 = new corpse(game, 'corpse3', 0, -500, 500, .6);
		game.add.existing(corpse3);
		corpse3.scale.setTo(.75);
		corpses.add(corpse3);
		
		corpse4 = new corpse(game, 'corpse4', 0, -500, 500, .6);
		game.add.existing(corpse4);
		corpse4.scale.setTo(.6);
		corpses.add(corpse4);
		
		// Create players group and player
		players = game.add.group();
		
		Marlin = new paramedic(game, 'mMedic', 0, 470, 1135, .75);
		game.add.existing(Marlin);
		Marlin.scale.setTo(.75);
		players.add(Marlin);
		
		Dory = new paramedic(game, 'fMedic', 0, 1790, 1135, .75);
		game.add.existing(Dory);
		Dory.scale.setTo(.75);
		players.add(Dory);
		
		// Animations for players walking
		Marlin.animations.add('mWalking', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 12, true);
		Dory.animations.add('fWalking', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 12, true);
		
		// Animations for players standing and healing
		Marlin.animations.add('mStanding', [0], 0, true);
		Dory.animations.add('fStanding', [0], 0, true);
		Marlin.animations.add('mHealing', [14], 0, true);
		Dory.animations.add('fHealing', [14], 0, true);
		
		// Animations for players climbing and sliding
		Marlin.animations.add('mClimbing', [12], 0, true);
		Dory.animations.add('fClimbing', [12], 0, true);
		Marlin.animations.add('mSliding', [13], 0, true);
		Dory.animations.add('fSliding', [13], 0, true);
		
		// Animations for patients
		patient1.animations.add('p1minor', [0], 0, true);
		patient1.animations.add('p1serious', [1], 0, true);
		patient1.animations.add('p1critical', [2], 0, true);
		patient1.animations.add('p1neardeath', [3], 0, true);
		
		patient2.animations.add('p2minor', [0], 0, true);
		patient2.animations.add('p2serious', [1], 0, true);
		patient2.animations.add('p2critical', [2], 0, true);
		patient2.animations.add('p2neardeath', [3], 0, true);
		
		patient3.animations.add('p3minor', [0], 0, true);
		patient3.animations.add('p3serious', [1], 0, true);
		patient3.animations.add('p3critical', [2], 0, true);
		patient3.animations.add('p3neardeath', [3], 0, true);
		
		patient4.animations.add('p4minor', [0], 0, true);
		patient4.animations.add('p4serious', [1], 0, true);
		patient4.animations.add('p4critical', [2], 0, true);
		patient4.animations.add('p4neardeath', [3], 0, true);
		
		// Set control to Marlin
		MarlinActive = true;
		DoryActive = false;
		game.camera.follow(Marlin);
		
		// Initiate carrying variables
		MarlinHasP1 = false;
		MarlinHasP2 = false;
		MarlinHasP3 = false;
		MarlinHasP4 = false;

		DoryHasP1 = false;
		DoryHasP2 = false;
		DoryHasP3 = false;
		DoryHasP4 = false;
		
		// Initiate sniper variables
		MarlinSniper = false;
		DorySniper = false;
		MarlininRoom = false;
		DoryinRoom = false;
		MarlinMoving = false;
		DoryMoving = false;
		
		// Create tutorial instructions
		instructions = game.add.group();
		tutorial = true;
		
		theSpace = instructions.create(Marlin.x, Marlin.y + 125, 'theSpace');
		theSpace.anchor.setTo(.5);
		theLR = instructions.create(Dory.x, Dory.y - 125, 'theLR');
		theLR.anchor.setTo(.5);
		theLR.scale.setTo(1.3,1.3);
		theDown = instructions.create(patient1.x, patient1.y - 105, 'theDown');
		theDown.anchor.setTo(.5);
		theDown.scale.setTo(1.3,1.3);
		theUp = instructions.create(valve1.x, valve1.y - 100, 'theUp');
		theUp.anchor.setTo(.5);
		theUp.scale.setTo(1.3,1.3);
		theUpPatient = instructions.create(patient4.x, patient4.y - 40, 'theUp');
		theUpPatient.anchor.setTo(.5);
		theUpPatient.scale.setTo(1.3,1.3);
		MarlinArrows = false;
		
		MarlinSay = game.add.text(Marlin.x - 70, Marlin.y - 120, 'Hey! Are you alright?', {font: '20px Arial', fill: '#fff'});
		DorySay = game.add.text(Dory.x - 810, Dory.y - 90, 'I am fine! We need to get these patients to the ambulance', {font: '20px Arial', fill: '#fff'});
		DorySay2 = game.add.text(Dory.x - 810, Dory.y - 66, 'immediately. They will die if we do not hurry!', {font: '20px Arial', fill: '#fff'});
		
		// Animations for instructions
        theLR.animations.add('theLR', [0, 1, 2, 3, 4, 5, 6, 7], 12, true);
        theDown.animations.add('theDown', [0, 1, 2, 3, 4, 5, 6, 7], 12, true);
        theUp.animations.add('theUp', [0, 1, 2, 3, 4, 5, 6, 7], 12, true);
		theUpPatient.animations.add('theUp', [0, 1, 2, 3, 4, 5, 6, 7], 12, true);
	},
	
	update: function() {
		// Prevent players from leaving room
		Marlin.body.collideWorldBounds = true;
		Dory.body.collideWorldBounds = true;
		
		// Prevent players from going through platforms
		game.physics.arcade.collide(players, platforms);
		
		// Prevent players from going through sewage
		game.physics.arcade.collide(players, sewage);
		
		// Prevent patients from going through platforms
		game.physics.arcade.collide(patients, platforms);
		
		// Prevent corpses from going through platforms
		game.physics.arcade.collide(corpses, platforms);
		
		// Prevent medkit from going through platforms
		game.physics.arcade.collide(medkit, platforms);
		
		// Bring sewage to front
		game.world.bringToTop(sewage);
		
		// Bring platforms to front
		game.world.bringToTop(platforms);
		
		// Bring darkness to front
		game.world.bringToTop(darkness);
		
		// Bring rubbles to front
		game.world.bringToTop(rubbles);
		
		// Bring instructions to front
		game.world.bringToTop(instructions);
		
		// Create fade effect
		if (fadeIn.alpha > 0){
			fadeIn.alpha -= 0.01;
		}
		
		// Bring fadeIn to front
		game.world.bringToTop(fadeIn);
		
		// Play instructions animations
		theLR.animations.play('theLR');
		theDown.animations.play('theDown');
		theUp.animations.play('theUp');
		theUpPatient.animations.play('theUp');
		
		// Play blinking circuit animations
		circuit1.animations.play('blinking');
		circuit2.animations.play('blinking');
		
		// Play sewage animations
		sewage1.animations.play('pouring');
		sewage2.animations.play('pouring');
		sewage3.animations.play('pouring');
		sewage4.animations.play('pouring');
		sewage5.animations.play('pouring');
		
		// Start dialogueTimer and dialogueBomb to remove dialogues
		dialogueTimer ++;
		if (dialogueTimer == 1){
			dialogues.callAll('kill');
			dialogueTimer = 0;	
		}
		
		dialogueBomb ++;
		if (dialogueBomb == 2){
			dialogues.callAll('destroy');
			dialogueBomb = 0;		
		}
		
		// Darkness alpha return to 1
		if (darkness1.alpha < 1){
			darkness1.alpha += 0.01;
		}
		if (darkness2.alpha < 1){
			darkness2.alpha += 0.01;
		}
		if (darkness3.alpha < 1){
			darkness3.alpha += 0.01;
		}

		// Sound of light turning on
		if (darkness1.alpha > 0.9 && darkness1.alpha < 1){
			LightHum1.play();
		}else if (darkness1.alpha == 1){
			LightHum1.stop();
		}
		
		if (darkness2.alpha > 0.9 && darkness2.alpha < 1){
			LightHum2.play();
		}else if (darkness2.alpha == 1){
			LightHum2.stop();
		}
		
		// Start graphicsTimer to remove line and add it again
		graphicsTimer ++;
		if (graphicsTimer == 1){
			graphics.clear();
			graphicsTimer = 0;
		}else if (graphicsTimer == 0){
			graphics = game.add.graphics(0, 0);
		}
		
		// Remove instructions when actions are performed
		if (game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)){
			game.add.tween(theSpace).to( {alpha: 0}, 100, Phaser.Easing.Linear.None, true);
			game.add.tween(MarlinSay).to( {alpha: 0}, 100, Phaser.Easing.Linear.None, true);
			game.add.tween(DorySay).to( {alpha: 0}, 100, Phaser.Easing.Linear.None, true);
			game.add.tween(DorySay2).to( {alpha: 0}, 100, Phaser.Easing.Linear.None, true);
		}
		
		// Define cursors to arrow keys
		var cursors = game.input.keyboard.createCursorKeys();
		var holdLeft = cursors.left.isDown;
		var holdRight = cursors.right.isDown;
		var holdUp = cursors.up.isDown;
		var holdDown = cursors.down.isDown;
		
		// Remove left and right arrow instructions
		if (holdLeft){
			game.add.tween(theLR).to( {alpha: 0}, 100, Phaser.Easing.Linear.None, true);
			game.add.tween(MarlinSay).to( {alpha: 0}, 100, Phaser.Easing.Linear.None, true);
			game.add.tween(DorySay).to( {alpha: 0}, 100, Phaser.Easing.Linear.None, true);
			game.add.tween(DorySay2).to( {alpha: 0}, 100, Phaser.Easing.Linear.None, true);
		}else if (holdRight){
			game.add.tween(theLR).to( {alpha: 0}, 100, Phaser.Easing.Linear.None, true);
			game.add.tween(MarlinSay).to( {alpha: 0}, 100, Phaser.Easing.Linear.None, true);
			game.add.tween(DorySay).to( {alpha: 0}, 100, Phaser.Easing.Linear.None, true);
			game.add.tween(DorySay2).to( {alpha: 0}, 100, Phaser.Easing.Linear.None, true);
		}
		
		// Remove down arrow healing instructions
		if (holdUp && Phaser.Rectangle.intersects(patient1.getBounds(), Dory.getBounds()) && DoryActive){
			game.add.tween(theDown).to( {alpha: 0}, 100, Phaser.Easing.Linear.None, true);
			game.add.tween(MarlinSay).to( {alpha: 0}, 100, Phaser.Easing.Linear.None, true);
			game.add.tween(DorySay).to( {alpha: 0}, 100, Phaser.Easing.Linear.None, true);
		}else if (holdDown && Phaser.Rectangle.intersects(patient1.getBounds(), Dory.getBounds()) && DoryActive){
			game.add.tween(theDown).to( {alpha: 0}, 100, Phaser.Easing.Linear.None, true);
			game.add.tween(MarlinSay).to( {alpha: 0}, 100, Phaser.Easing.Linear.None, true);
			game.add.tween(DorySay).to( {alpha: 0}, 100, Phaser.Easing.Linear.None, true);
		}else if (holdDown && Phaser.Rectangle.intersects(patient1.getBounds(), Marlin.getBounds()) && MarlinActive){
			game.add.tween(theDown).to( {alpha: 0}, 100, Phaser.Easing.Linear.None, true);
			game.add.tween(MarlinSay).to( {alpha: 0}, 100, Phaser.Easing.Linear.None, true);
			game.add.tween(DorySay).to( {alpha: 0}, 100, Phaser.Easing.Linear.None, true);
		}else if (p1Timer < 0){
			game.add.tween(theDown).to( {alpha: 0}, 100, Phaser.Easing.Linear.None, true);
		}
		
		// Remove up arrow carrying instructions
		if (holdUp && Phaser.Rectangle.intersects(valve1.getBounds(), Marlin.getBounds()) && MarlinActive){
			game.add.tween(theUp).to( {alpha: 0}, 100, Phaser.Easing.Linear.None, true);
		}else if (holdUp && Phaser.Rectangle.intersects(patient4.getBounds(), Marlin.getBounds()) && MarlinActive){
			game.add.tween(theUpPatient).to( {alpha: 0}, 100, Phaser.Easing.Linear.None, true);
		}else if (holdUp && Phaser.Rectangle.intersects(patient4.getBounds(), Dory.getBounds()) && DoryActive){
			game.add.tween(theUpPatient).to( {alpha: 0}, 100, Phaser.Easing.Linear.None, true);
			tutorial = false;
		}else if (p4Timer < 0){
			game.add.tween(theUpPatient).to( {alpha: 0}, 100, Phaser.Easing.Linear.None, true);
		}
		
		// Create dropping instruction after picking up patient4
		if (MarlinHasP4 && MarlinActive && tutorial){
			Marlin.downArrow = game.add.sprite(-5, -180, 'theDown');
			Marlin.downArrow.anchor.setTo(0.5);
			Marlin.downArrow.scale.setTo(-1.75,1.75);
			Marlin.addChild(Marlin.downArrow);
			Marlin.downArrow.animations.add('theDown', [0, 1, 2, 3, 4, 5, 6, 7], 12, true);
			Marlin.downArrow.play('theDown');
			MarlinArrows = true;
			tutorial = false;
		}else if (MarlinHasP4 && MarlinActive && !tutorial && holdDown && MarlinArrows){
			Marlin.downArrow.kill();
			MarlinArrows = false;
		}else if (!MarlinHasP4 && MarlinActive && !tutorial && holdDown && !DoryHasP4 && MarlinArrows){
			Marlin.downArrow.kill();
			MarlinArrows = false;
		}
		
		// Switches control by pressing SPACEBAR
		if (game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)){
			if (MarlinActive){
				DoryActive = true;
				MarlinActive = false;
				console.log('Dory is active');
				game.camera.follow(Dory);
			}else if(DoryActive){
				DoryActive = false;
				MarlinActive = true;
				console.log('Marlin is active');
				game.camera.follow(Marlin);
			}
		}
		
		// Detect carrying patient boolean
		if (MarlinHasP1 || MarlinHasP2 || MarlinHasP3 || MarlinHasP4){
			MarlinHasP = true;
		}else{
			MarlinHasP = false;
		}
		if (DoryHasP1 || DoryHasP2 || DoryHasP3 || DoryHasP4){
			DoryHasP = true;
		}else{
			DoryHasP = false;
		}
		
		// Detect crouching boolean
		if (MarlinCrouchP1 || MarlinCrouchP2 || MarlinCrouchP3 || MarlinCrouchP4){
			MarlinCrouchP = true;
		}else{
			MarlinCrouchP = false;
		}
		if (DoryCrouchP1 || DoryCrouchP2 || DoryCrouchP3 || DoryCrouchP4){
			DoryCrouchP = true;
		}else{
			DoryCrouchP = false;
		}
		
		// Start timer on patients
		if (!MarlinCrouchP1 && !DoryCrouchP1 && p1Timer > -50){
			p1Timer --;
		}else if (MarlinCrouchP1 && DoryCrouchP1){
			p1Timer += 2;
		}
		if (!MarlinCrouchP2 && !DoryCrouchP2 && p2Timer > -50){
			p2Timer --;
		}else if (MarlinCrouchP2 && DoryCrouchP2){
			p2Timer += 2;
		}
		if (!MarlinCrouchP3 && !DoryCrouchP3 && p3Timer > -50){
			p3Timer --;
		}else if (MarlinCrouchP3 && DoryCrouchP3){
			p3Timer += 2;
		}
		if (!MarlinCrouchP4 && !DoryCrouchP4 && p4Timer > -50){
			p4Timer --;
		}else if (MarlinCrouchP4 && DoryCrouchP4){
			p4Timer += 2;
		}
		
		// Patient1 state of health
		if (p1Timer >= 6000){
			patient1.animations.play('p1minor');
		}else if (6000 > p1Timer && p1Timer >= 4000){
			patient1.animations.play('p1serious');
		}else if (4000 > p1Timer && p1Timer >= 2000){
			patient1.animations.play('p1critical');
		}else if (2000 > p1Timer && p1Timer >= 500){
			patient1.animations.play('p1neardeath');
		}else if (p1Timer == 0){
			if (MarlinHasP1){
				Marlin.loadTexture('mMedic', 0, false);
				MarlinHasP1 = false;
				corpse1.x = Marlin.x;
				corpse1.y = Marlin.y;
			}else if (DoryHasP1){
				Dory.loadTexture('fMedic', 0, false);
				DoryHasP1 = false;
				corpse1.x = Dory.x;
				corpse1.y = Dory.y;
			}else{
				corpse1.x = patient1.x;
				corpse1.y = patient1.y;
			}
			patient1.x = -500;
		}else if (p1Timer == -50){
			patient1.kill();
		}
		
		// Patient2 state of health
		if (p2Timer >= 6000){
			patient2.animations.play('p2minor');
		}else if (6000 > p2Timer && p2Timer >= 4000){
			patient2.animations.play('p2serious');
		}else if (4000 > p2Timer && p2Timer >= 2000){
			patient2.animations.play('p2critical');
		}else if (2000 > p2Timer && p2Timer >= 500){
			patient2.animations.play('p2neardeath');
		}else if (p2Timer == 0){
			if (MarlinHasP2){
				Marlin.loadTexture('mMedic', 0, false);
				MarlinHasP2 = false;
				corpse2.x = Marlin.x;
				corpse2.y = Marlin.y;
			}else if (DoryHasP2){
				Dory.loadTexture('fMedic', 0, false);
				DoryHasP2 = false;
				corpse2.x = Dory.x;
				corpse2.y = Dory.y;
			}else{
				corpse2.x = patient2.x;
				corpse2.y = patient2.y;
			}
			patient2.x = -500;
		}else if (p2Timer == -50){
			patient2.kill();
		}
	
		// Patient3 state of health
		if (p3Timer >= 6000){
			patient3.animations.play('p3minor');
		}else if (6000 > p3Timer && p3Timer >= 4000){
			patient3.animations.play('p3serious');
		}else if (4000 > p3Timer && p3Timer >= 2000){
			patient3.animations.play('p3critical');
		}else if (2000 > p3Timer && p3Timer >= 500){
			patient3.animations.play('p3neardeath');
		}else if (p3Timer == 0){
			if (MarlinHasP3){
				Marlin.loadTexture('mMedic', 0, false);
				MarlinHasP3 = false;
				corpse3.x = Marlin.x;
				corpse3.y = Marlin.y;
			}else if (DoryHasP3){
				Dory.loadTexture('fMedic', 0, false);
				DoryHasP3 = false;
				corpse3.x = Dory.x;
				corpse3.y = Dory.y;
			}else{
				corpse3.x = patient3.x;
				corpse3.y = patient3.y;
			}
			patient3.x = -500;
		}else if (p3Timer == -50){
			patient3.kill();
		}
		
		// Patient4 state of health
		if (p4Timer >= 6000){
			patient4.animations.play('p4minor');
		}else if (6000 > p4Timer && p4Timer >= 4000){
			patient4.animations.play('p4serious');
		}else if (4000 > p4Timer && p4Timer >= 2000){
			patient4.animations.play('p4critical');
		}else if (2000 > p4Timer && p4Timer >= 500){
			patient4.animations.play('p4neardeath');
		}else if (p4Timer == 0){
			if (MarlinHasP4){
				Marlin.loadTexture('mMedic', 0, false);
				MarlinHasP4 = false;
				corpse4.x = Marlin.x;
				corpse4.y = Marlin.y;
			}else if (DoryHasP4){
				Dory.loadTexture('fMedic', 0, false);
				DoryHasP4 = false;
				corpse4.x = Dory.x;
				corpse4.y = Dory.y;
			}else{
				corpse4.x = patient4.x;
				corpse4.y = patient4.y;
			}
			patient4.x = -500;
		}else if (p4Timer == -50){
			patient4.kill();
		}
		
		// Players put patients into ambulance
		var MarlinAmbulance = (Phaser.Rectangle.intersects(ambulance.getBounds(), Marlin.getBounds()));
		var DoryAmbulance = (Phaser.Rectangle.intersects(ambulance.getBounds(), Dory.getBounds()));
		
		if (MarlinAmbulance){
			if (MarlinHasP1){
				Marlin.loadTexture('mMedic', 0, false);
				MarlinHasP1 = false;
				p1Timer = -50;
				ambulance.healthy1 = game.add.sprite(-150, 90, 'healthy1');
				ambulance.healthy1.scale.setTo(0.6, 0.6);
				ambulance.healthy1.anchor.setTo(0.5, 0.5);
				ambulance.addChild(ambulance.healthy1);
			}else if (MarlinHasP2){
				Marlin.loadTexture('mMedic', 0, false);
				MarlinHasP2 = false;
				p2Timer = -50;
				ambulance.healthy2 = game.add.sprite(-100, 80, 'healthy2');
				ambulance.healthy2.scale.setTo(0.6, 0.6);
				ambulance.healthy2.anchor.setTo(0.5, 0.5);
				ambulance.addChild(ambulance.healthy2);
			}else if (MarlinHasP3){
				Marlin.loadTexture('mMedic', 0, false);
				MarlinHasP3 = false;
				p3Timer = -50;
				ambulance.healthy3 = game.add.sprite(30, 80, 'healthy3');
				ambulance.healthy3.scale.setTo(0.6, 0.6);
				ambulance.healthy3.anchor.setTo(0.5, 0.5);
				ambulance.addChild(ambulance.healthy3);
			}else if (MarlinHasP4){
				Marlin.loadTexture('mMedic', 0, false);
				MarlinHasP4 = false;
				p4Timer = -50;
				ambulance.healthy4 = game.add.sprite(-40, 85, 'healthy4');
				ambulance.healthy4.scale.setTo(-0.6, 0.6);
				ambulance.healthy4.anchor.setTo(0.5, 0.5);
				ambulance.addChild(ambulance.healthy4);
			}
		}
		
		if (DoryAmbulance){
			if (DoryHasP1){
				Dory.loadTexture('fMedic', 0, false);
				DoryHasP1 = false;
				p1Timer = -50;
				ambulance.healthy1 = game.add.sprite(-150, 90, 'healthy1');
				ambulance.healthy1.scale.setTo(0.6, 0.6);
				ambulance.healthy1.anchor.setTo(0.5, 0.5);
				ambulance.addChild(ambulance.healthy1);
			}else if (DoryHasP2){
				Dory.loadTexture('fMedic', 0, false);
				DoryHasP2 = false;
				p2Timer = -50;
				ambulance.healthy2 = game.add.sprite(-100, 80, 'healthy2');
				ambulance.healthy2.scale.setTo(0.6, 0.6);
				ambulance.healthy2.anchor.setTo(0.5, 0.5);
				ambulance.addChild(ambulance.healthy2);
			}else if (DoryHasP3){
				Dory.loadTexture('fMedic', 0, false);
				DoryHasP3 = false;
				p3Timer = -50;
				ambulance.healthy3 = game.add.sprite(30, 80, 'healthy3');
				ambulance.healthy3.scale.setTo(0.6, 0.6);
				ambulance.healthy3.anchor.setTo(0.5, 0.5);
				ambulance.addChild(ambulance.healthy3);
			}else if (DoryHasP4){
				Dory.loadTexture('fMedic', 0, false);
				DoryHasP4 = false;
				p4Timer = -50;
				ambulance.healthy4 = game.add.sprite(-40, 85, 'healthy4');
				ambulance.healthy4.scale.setTo(-0.6, 0.6);
				ambulance.healthy4.anchor.setTo(0.5, 0.5);
				ambulance.addChild(ambulance.healthy4);
			}
		}
		
		// Sniper room puzzle
		// Check whether Marlin and Dory are in the room
		if (Marlin.x > 1700 && Marlin.x < 3200 && Marlin.y < 600){
			MarlininRoom = true;
		}else{
			MarlininRoom = false;
		}
		
		if (Dory.x > 1700 && Dory.x < 3200 && Dory.y < 600){
			DoryinRoom = true;
		}else{
			DoryinRoom = false;
		}
		
		// Check whether Marlin and Dory are moving
		if (Math.abs(Marlin.body.velocity.x) > 1){	
			MarlinMoving = true;
		}else{
			MarlinMoving = false;
		}
		
		if (Math.abs(Dory.body.velocity.x) > 1){	
			DoryMoving = true;
		}else{
			DoryMoving = false;
		}
		
		// Sniper aiming at Marlin and Dory
		if (MarlininRoom && MarlinMoving && MarlinActive){
			MarlinSniper = true;
			DorySniper = false;
		}else if (DoryinRoom && DoryMoving && DoryActive){
			MarlinSniper = false;
			DorySniper = true;
		}else if (MarlininRoom && MarlinMoving && !MarlinActive){
			MarlinSniper = true;
			DorySniper = false;
		}else if (DoryinRoom && DoryMoving && !DoryActive){
			MarlinSniper = false;
			DorySniper = true;
		}else if (MarlininRoom && !MarlinMoving && MarlinActive && DoryinRoom && DoryMoving && !DoryActive){
			MarlinSniper = false;
			DorySniper = true;
		}else if (MarlininRoom && MarlinMoving && !MarlinActive && DoryinRoom && !DoryMoving && DoryActive){
			MarlinSniper = true;
			DorySniper = false;
		}else{
			MarlinSniper = false;
			DorySniper = false;
		}
		
		if (MarlinSniper){
			graphics.lineStyle(1, 0xff0000, 1);		
			graphics.moveTo(2400, 355);  
			graphics.lineTo(Marlin.x, Marlin.y - 50);
		}
		
		if (DorySniper){
			graphics.lineStyle(1, 0xff0000, 1);		
			graphics.moveTo(2400, 355);  
			graphics.lineTo(Dory.x, Dory.y - 50);
		}
		
		// If players are carrying patients, sniper shoots
		if (MarlinHasP1 && MarlinSniper){
			SniperRifle.play();
			Marlin.loadTexture('mMedic', 0, false);
			MarlinHasP1 = false;
			p1Timer = -50;
			corpse1.x = Marlin.x;
			corpse1.y = Marlin.y;
		}else if (MarlinHasP2 && MarlinSniper){
			SniperRifle.play();
			Marlin.loadTexture('mMedic', 0, false);
			MarlinHasP2 = false;
			p2Timer = -50;
			corpse2.x = Marlin.x;
			corpse2.y = Marlin.y;
		}else if (MarlinHasP3 && MarlinSniper){
			SniperRifle.play();
			Marlin.loadTexture('mMedic', 0, false);
			MarlinHasP3 = false;
			p3Timer = -50;
			corpse3.x = Marlin.x;
			corpse3.y = Marlin.y;
		}else if (MarlinHasP4 && MarlinSniper){
			SniperRifle.play();
			Marlin.loadTexture('mMedic', 0, false);
			MarlinHasP4 = false;
			p4Timer = -50;
			corpse4.x = Marlin.x;
			corpse4.y = Marlin.y;
		}
		
		if (DoryHasP1 && DorySniper){
			SniperRifle.play();
			Dory.loadTexture('fMedic', 0, false);
			DoryHasP1 = false;
			p1Timer = -50;
			corpse1.x = Dory.x;
			corpse1.y = Dory.y;
		}else if (DoryHasP2 && DorySniper){
			SniperRifle.play();
			Dory.loadTexture('fMedic', 0, false);
			DoryHasP2 = false;
			p2Timer = -50;
			corpse2.x = Dory.x;
			corpse2.y = Dory.y;
		}else if (DoryHasP3 && DorySniper){
			SniperRifle.play();
			Dory.loadTexture('fMedic', 0, false);
			DoryHasP3 = false;
			p3Timer = -50;
			corpse3.x = Dory.x;
			corpse3.y = Dory.y;
		}else if (DoryHasP4 && DorySniper){
			SniperRifle.play();
			Dory.loadTexture('fMedic', 0, false);
			DoryHasP4 = false;
			corpse4.x = Dory.x;
			corpse4.y = Dory.y;
		}
		
		// Return to ambulance once all patients are dead or rescued
		if (p1Timer == -50 && p2Timer == -50 && p3Timer == -50 && p4Timer == -50 && !MarlinAmbulance){
			var dialogue = game.add.text(Marlin.x - 215, Marlin.y - 135, 'Lets head back to the ambulance. We are done here.', {font: '20px Arial', fill: '#fff'}, dialogues);
		}
		if (p1Timer == -50 && p2Timer == -50 && p3Timer == -50 && p4Timer == -50 && !DoryAmbulance){
			var dialogue = game.add.text(Dory.x - 200, Dory.y - 135, 'We tried our best. There is no one left to save.', {font: '20px Arial', fill: '#fff'}, dialogues);
		}
		if (p1Timer == -50 && p2Timer == -50 && p3Timer == -50 && p4Timer == -50 && MarlinAmbulance && DoryAmbulance){
			this.music.stop();
			game.state.start('Ending'); 
		}
	},
	
	// Create level
	createLevel: function() {
		// Create platforms and ladders group
        platforms = game.add.group();
        platforms.enableBody = true;
		ladders = game.add.group();
		
        // Outside
        ground = platforms.create(-200, 1486, 'structure');
        ground.anchor.setTo(.5);
        ground.scale.setTo(18, 15);
        ground.body.immovable = true;
        
        // Sewer
        ground = platforms.create(2000, 1682, 'structure');
        ground.anchor.setTo(.5);
        ground.scale.setTo(125, 1.5);
        ground.body.immovable = true;
		
		ladder1 = new ladder(game, 'ladder', 0, 540, 1320, 1);
		game.add.existing(ladder1);
		ladders.add(ladder1);
		
		ladder2 = new ladder(game, 'ladder', 0, 3810, 1320, 1);
		game.add.existing(ladder2);
		ladders.add(ladder2);
        
        // 1st Floor
        ground = platforms.create(1600, 1260, 'structure');
        ground.anchor.setTo(.5);
        ground.scale.setTo(101.5, 1.5);
        ground.body.immovable = true;
        
        ground = platforms.create(3840, 1260, 'structure');
        ground.anchor.setTo(.5);
        ground.scale.setTo(10, 1.5);
        ground.body.immovable = true;
		
		wall = platforms.create(3200, 1104, 'structure');
        wall.anchor.setTo(.5);
        wall.scale.setTo(1.5, 10);
        wall.body.immovable = true;
		
		ladder3 = new ladder(game, 'ladder', 0, 3580, 1000, 1);
		game.add.existing(ladder3);
		ladders.add(ladder3);
		
		ladder6 = new ladder(game, 'ladder', 0, 1312, 1000, 1);
		game.add.existing(ladder6);
		ladders.add(ladder6);
        
        // Back wall
        wall = platforms.create(3968, 784, 'structure');
        wall.anchor.setTo(.5);
        wall.scale.setTo(2, 56);
        wall.body.immovable = true;
        
        // 2nd Floor
        ground = platforms.create(1952, 944, 'structure');
        ground.anchor.setTo(.5);
        ground.scale.setTo(82, 1.5);
        ground.body.immovable = true;
        
        ground = platforms.create(3616, 944, 'structure');
        ground.anchor.setTo(.5);
        ground.scale.setTo(6, 1.5);
        ground.body.immovable = true;
		
		ladder4 = new ladder(game, 'ladder', 0, 3810, 675, 1);
		game.add.existing(ladder4);
		ladders.add(ladder4);
		
		ladder5 = new ladder(game, 'ladder', 0, 3040, 670, 1);
		game.add.existing(ladder5);
		ladders.add(ladder5);
        
        // 3rd Floor
        ground = platforms.create(1944, 624, 'structure');
        ground.anchor.setTo(.5);
        ground.scale.setTo(80, 1.5);
        ground.body.immovable = true;
        
        ground = platforms.create(3760, 624, 'structure');
        ground.anchor.setTo(.5);
        ground.scale.setTo(15, 1.5);
        ground.body.immovable = true;
		
		wall = platforms.create(3200, 448, 'structure');
        wall.anchor.setTo(.5);
        wall.scale.setTo(1.5, 12);
        wall.body.immovable = true;
        
        // Front Wall
        wall = platforms.create(684, 672, 'structure');
        wall.anchor.setTo(.5);
        wall.scale.setTo(3, 22);
        wall.body.immovable = true;
		
		wall = platforms.create(684, 1080, 'structure');
		wall.anchor.setTo(.5);
		wall.scale.setTo(3, 10);
		wall.body.immovable = true;
		
		rubbles = game.add.sprite(684, 1080, 'rubbles');
		rubbles.anchor.setTo(.5);
		rubbles.scale.setTo(.5);
        
        // Ceiling
        ground = platforms.create(2316, 288, 'structure');
        ground.anchor.setTo(.5);
        ground.scale.setTo(105, 2);
        ground.body.immovable = true;
	},
	
	// Create sewage puzzle
	sewagePuzzle: function() {
		// Create valves		
		valve1 = game.add.sprite(1300, 1570, 'valve');
		valve1.anchor.setTo(.5);
		valve2 = game.add.sprite(1700, 1570, 'valve');
		valve2.anchor.setTo(.5);
		valve3 = game.add.sprite(2100, 1570, 'valve');
		valve3.anchor.setTo(.5);
		valve4 = game.add.sprite(2500, 1570, 'valve');
		valve4.anchor.setTo(.5);
		valve5 = game.add.sprite(2900, 1570, 'valve');
		valve5.anchor.setTo(.5);

		// Create pipes
		pipe = game.add.sprite(1500, 1280, 'pipe');
		pipe = game.add.sprite(1900, 1280, 'pipe');
		pipe = game.add.sprite(2300, 1280, 'pipe');
		pipe = game.add.sprite(2700, 1280, 'pipe');
		pipe = game.add.sprite(3100, 1280, 'pipe');
		
		// Create sewage
		sewage = game.add.group();
		sewage.enableBody = true;
		
		sewage1 = sewage.create(1500, 1320, 'sewage');
		sewage1.body.immovable = true;
		sewage2 = sewage.create(1900, 1320, 'sewage');
		sewage2.body.immovable = true;
		sewage3 = sewage.create(2300, 1320, 'sewage');
		sewage3.body.immovable = true;
		sewage4 = sewage.create(2700, 1320, 'sewage');
		sewage4.body.immovable = true;
		sewage5 = sewage.create(3100, 1320, 'sewage');
		sewage5.body.immovable = true;
		
		sewage1.animations.add('pouring', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 25, true);
		sewage2.animations.add('pouring', [2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 1], 25, true);
		sewage3.animations.add('pouring', [4, 5, 6, 7, 8, 9, 10, 0, 1, 2, 3], 25, true);
		sewage4.animations.add('pouring', [7, 8, 9, 10, 0, 1, 2, 3, 4, 5, 6], 25, true);
		sewage5.animations.add('pouring', [9, 10, 0, 1, 2, 3, 4, 5, 6, 7, 8], 25, true);
	},
	
	// Create darkness puzzle
	darknessPuzzle: function() {
		// Create circuit
		circuit1 = game.add.sprite(2800, 1150, 'circuit');
		circuit1.anchor.setTo(.5);
		circuit1.scale.setTo(.75);
		
		circuit2 = game.add.sprite(3100, 1150, 'circuit');
		circuit2.anchor.setTo(.5);
		circuit2.scale.setTo(.75);
		
		// Animations for circuit
		circuit1.animations.add('blinking', [0, 1, 2, 3], 6, true);
		circuit2.animations.add('blinking', [0, 1, 2, 3], 6, true);
		circuit1.animations.add('green', [4], 0, true);
		circuit2.animations.add('green', [4], 0, true);
		
		// Create darkness
		darkness = game.add.group();
		
		darkness1 = darkness.create(3575, 1104, 'structure');
		darkness1.scale.setTo(23, 11.2);
		darkness1.anchor.setTo(.5);
		darkness1.alpha = 1;
		darkness2 = darkness.create(3575, 768, 'structure');
		darkness2.scale.setTo(23, 10);
		darkness2.anchor.setTo(.5);
		darkness2.alpha = 1;
		darkness3 = darkness.create(3575, 480, 'structure');
		darkness3.scale.setTo(23, 10);
		darkness3.anchor.setTo(.5);
		darkness3.alpha = 1;
	}
}

var Ending = function(game) {};
Ending.prototype = {
	preload: function() {
		console.log('Ending: preload');
	},
	
	create: function() {
		console.log('Ending: create');
		
		// Initiate sound effects
		AssaultRifle = game.add.audio('AssaultRifle');
		
		// Loop background music
		EndingTheme = game.add.audio('EndingTheme');
		EndingTheme.play('', 0, 1, true);
		
		// Create fade effect
		fadeIn = game.add.sprite(0, 0, 'structure');
		fadeIn.scale.setTo(1000,1000);
		
		// Set world bound
        game.world.setBounds(0, 0, 4000, 1700);
		
		// Create background
        interior = game.add.sprite(-100, 750, "endingCity");
        interior.scale.setTo(1.00125, .790588);
		game.stage.backgroundColor = "fff";
		
		// Initiate dialogue variables
		dialogueTimer = 0;
		dialogueBomb = 0;
		speakTimer = 0;
		dialogues = game.add.group();

		// Initiate event variables
		cameraTimer = 0;
		
		// Create wounded
        wounded = game.add.sprite(1208, 1565, 'wounded');
        wounded.enableBody = true;
        wounded.anchor.setTo(.5);
        game.physics.arcade.enable(wounded);
        wounded.body.bounce.y = 0;
        wounded.body.gravity.y = 500;
        wounded.scale.setTo(.75,.75);
		
		 // Create soldier
        soldier = game.add.sprite(1600, 1500, 'soldier');
        soldier.enableBody = true;
        soldier.anchor.setTo(.5);
        game.physics.arcade.enable(soldier);
        soldier.body.bounce.y = 0;
        soldier.body.gravity.y = 500;
        soldier.scale.setTo(.75,.8);
		
		// Create endingDory
		endingDory = game.add.sprite(-50, 1565, 'fMedic');
        endingDory.anchor.setTo(.5);
        endingDory.scale.setTo(.75,.75);
        game.physics.arcade.enable(endingDory);
        endingDory.body.gravity.y = 500;
		
		// Create endingMarlin
        endingMarlin = game.add.sprite(-300, 1465, 'mMedic');
        endingMarlin.anchor.setTo(.5);
        endingMarlin.scale.setTo(.75,.75);
        game.physics.arcade.enable(endingMarlin);
        endingMarlin.body.gravity.y = 500;
        game.camera.follow(endingMarlin);
		
		// Create level
		this.createLevel();
		
		// Animations for players walking and standing
        endingMarlin.animations.add('mWalking', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 12, true);
        endingDory.animations.add('fWalking', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 12, true);
        endingMarlin.animations.add('mStanding', [0], 0, true);
        endingDory.animations.add('fStanding', [0], 0, true);
	},
	
	update: function() {
		// Create fade effect
		if (fadeIn.alpha > 0){
			fadeIn.alpha -= 0.01;
		}
		
		// Bring fadeIn to front
		game.world.bringToTop(fadeIn);
		
		// Prevents objects from going through platforms
		game.physics.arcade.collide(endingMarlin, platforms);
		game.physics.arcade.collide(endingDory, platforms);
		game.physics.arcade.collide(wounded, platforms);
		game.physics.arcade.collide(soldier, platforms);
		
		// Start dialogueTimer and dialogueBomb to remove dialogues
		dialogueTimer ++;
		if (dialogueTimer == 1){
			dialogues.callAll('kill');
			dialogueTimer = 0;	
		}
		
		dialogueBomb ++;
		if (dialogueBomb == 2){
			dialogues.callAll('destroy');
			dialogueBomb = 0;		
		}
		
		// Start speakTimer to add dialogues
		speakTimer++;
		
		// Ending Conversation
		if(speakTimer >= 50 && speakTimer < 100){
			var dialogue = game.add.text(400, endingDory.y - 115, 'There is one more injured!', {font: '17px Verdana', fill: '#fff'}, dialogues);
		}if(speakTimer >= 150 && speakTimer < 250){
			var dialogue = game.add.text(565, endingMarlin.y - 115, 'Wait!', {font: '17px Verdana', fill: '#fff'}, dialogues);
		}else if(speakTimer >= 250 && speakTimer < 450){
			var dialogue = game.add.text(soldier.x - 100, soldier.y - 125, 'Stand back. He is a member', {font: '17px Verdana', fill: '#000'}, dialogues);
			var dialogue2 = game.add.text(soldier.x - 100, soldier.y - 100, 'of the insurgent.', {font: '17px Verdana', fill: '#000'}, dialogues);
		}else if(speakTimer >= 450 && speakTimer < 600){
			var dialogue = game.add.text(endingDory.x - 75, endingDory.y - 75, 'He needs immediate care.', {font: '17px Verdana', fill: '#fff'}, dialogues);
		}else if(speakTimer >= 600 && speakTimer < 800){
			var dialogue = game.add.text(soldier.x - 100, soldier.y - 125, 'You are either with us or', {font: '17px Verdana', fill: '#000'}, dialogues);
			var dialogue2 = game.add.text(soldier.x - 100, soldier.y - 100, 'against us. So stand back.', {font: '17px Verdana', fill: '#000'}, dialogues);
		}else if(speakTimer >= 800 && speakTimer < 900){
			var dialogue = game.add.text(endingDory.x - 100, endingDory.y - 75, 'This violence is nonsense!', {font: '17px Verdana', fill: '#fff'}, dialogues);
		}else if(speakTimer >= 900 && speakTimer < 1000){
			var dialogue = game.add.text(endingDory.x - 50, endingDory.y - 75, 'He is just a kid.', {font: '17px Verdana', fill: '#fff'}, dialogues);
		}else if(speakTimer >= 1000 && speakTimer < 1200){
			var dialogue = game.add.text(endingDory.x - 125, endingDory.y - 75, 'None of us want to take part in this war.', {font: '17px Verdana', fill: '#fff'}, dialogues);
		}else if(speakTimer >= 1200 && speakTimer < 1300){
			var dialogue = game.add.text(endingDory.x - 75, endingDory.y - 75, 'Please just let him go.', {font: '17px Verdana', fill: '#fff'}, dialogues);
		}
		
		// endingDory and endingMarlin runs to the right
		if(endingDory.x < 1075){
			endingMarlin.body.velocity.x = 350;
			endingMarlin.animations.play('mWalking');
			endingDory.body.velocity.x = 450;
			endingDory.animations.play('fWalking');
		}

		// Stop at wounded and front door
		if(endingDory.x >= 1075){
			cameraTimer ++;

			endingDory.body.velocity.x = 0;
			endingDory.frame = 0;
			endingMarlin.body.velocity.x = 0;
			endingMarlin.frame = 0;
			endingDory.loadTexture('fCrouching', 0, false); 
		}
		
		// Camera pans over to endingDory
		if(cameraTimer == 100){
			game.time.events.add(Phaser.Timer.SECOND * .65, this.close, this);
		}
	},
	
	// Create level
	createLevel: function() {
		// Create platforms
		platforms = game.add.group();
        platforms.enableBody = true;
        
        // Ground
        ground = platforms.create(1600, 1680, 'structure');
        ground.anchor.setTo(.5);
        ground.scale.setTo(101.5, 1.5);
        ground.body.immovable = true;
        
		// Ceiling
        ground = platforms.create(3840, 1680, 'structure');
        ground.anchor.setTo(.5);
        ground.scale.setTo(10, 1.5);
        ground.body.immovable = true;
        
        // Wall
        wall = platforms.create(684, 1112, 'structure');
        wall.anchor.setTo(.5);
        wall.scale.setTo(3, 22);
        wall.body.immovable = true;
	},
	
	// Marlin closes door
	close: function() {
		if(endingMarlin.x <= 600 && endingDory.x >= 1075){
			endingDory.body.velocity.x = 0;
			endingDory.frame = 0;
			
			wall = platforms.create(675, 1623, 'structure');
			wall.anchor.setTo(.5);
			wall.scale.setTo(1, 10);
			wall.body.immovable = true;
			endingMarlin.loadTexture('mCovering', 0, false);
		}
		game.time.events.add(Phaser.Timer.SECOND * 16.75, this.shoot, this);
		game.camera.follow(endingDory);
	},
	
	// Soldier shoots Dory
	shoot: function() {
		AssaultRifle.play();
		endingDory.kill();
		deadDory = game.add.sprite(1080, 1600, 'fMedicDead');
		deadDory.scale.setTo(-.9, .9); 
		game.time.events.add(Phaser.Timer.SECOND * 0.75, this.startCredits, this);
	},
	
	// Start credits and switch state
	startCredits: function() {
		game.state.start('Credits'); 
	}
}

var Credits = function(game) {};
Credits.prototype = {
	preload: function() {
		console.log('Credits: preload');
	},
	
	create: function() {
		console.log('Credits: create');
		
		// Create fade effect
		fadeIn = game.add.sprite(0, 0, 'structure');
		fadeIn.scale.setTo(1000,1000);
		
		// Set world bound
        game.world.setBounds(0, 0, 1500, 600);
		
		// Create title credits
		game.add.sprite(0, 0, 'titleCredits');
		game.stage.backgroundColor = "000";
		
		// Create instruction to restart game
		var startLabel = game.add.text(675, game.world.height-25, '[press space]', {font: '17px Verdana', fill: '#000'});
		startLabel.alpha = 0;
		game.add.tween(startLabel).to( {alpha: 1}, 1000, Phaser.Easing.Linear.None, true, 0, 1000, true);
	},
	
	update: function() {
		// Create fade effect
		if (fadeIn.alpha > 0){
			fadeIn.alpha -= 0.001;
		}
		
		// Bring fadeIn to front
		game.world.bringToTop(fadeIn);
		
		// Press SPACEBAR to start game
		if (game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)){
			game.time.events.add(Phaser.Timer.SECOND * .2, this.restart, this);
		}
	},
	
	// Restart game and switch state
	restart: function() {
		EndingTheme.stop();
		game.state.start('Menu'); 
	},
};
