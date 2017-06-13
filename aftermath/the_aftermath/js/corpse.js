function corpse(game, key, frame, x, y, scale){
	// Call to Phaser.Sprite
	// New Sprite(game, x, y, key, frame)
	Phaser.Sprite.call(this, game, 0, 0, key, frame);
	
	// Enable arcade physics
	game.physics.arcade.enable(this);
	
	// Add properties
	this.anchor.setTo(0.5, 0.5);
	
	this.x = x;
	this.y = y;
	
	this.scale.x = scale;
	this.scale.y = scale;
	
	this.body.bounce.y = 0;
	this.body.gravity.y = 500;
}

// Specify prefab's prototype and constructor
corpse.prototype = Object.create(Phaser.Sprite.prototype);
corpse.prototype.constructor = corpse;

// Override prototype's inherited method
corpse.prototype.update = function() {
	// Define cursors to arrow keys
	var cursors = game.input.keyboard.createCursorKeys();
	
	var holdLeft = cursors.left.isDown;
	var holdRight = cursors.right.isDown;
	var holdUp = cursors.up.isDown;
	var holdDown = cursors.down.isDown;
	
	var pressedUp = game.input.keyboard.justPressed(Phaser.Keyboard.UP);
	var pressedDown = game.input.keyboard.justPressed(Phaser.Keyboard.DOWN);
	
	// Set corpse gravity outside of camera
	if (this.x > 0){
		this.body.allowGravity = true;
		this.body.gravity.y = 500;
	}else{
		this.body.allowGravity = false;
	}
	
	// Check whether players are near other patients
	var MarlinHelping1 = (Phaser.Rectangle.intersects(patient1.getBounds(), Marlin.getBounds()));
	var DoryHelping1 = (Phaser.Rectangle.intersects(patient1.getBounds(), Dory.getBounds()));
	var MarlinHelping2 = (Phaser.Rectangle.intersects(patient2.getBounds(), Marlin.getBounds()));
	var DoryHelping2 = (Phaser.Rectangle.intersects(patient2.getBounds(), Dory.getBounds()));
	var MarlinHelping3 = (Phaser.Rectangle.intersects(patient3.getBounds(), Marlin.getBounds()));
	var DoryHelping3 = (Phaser.Rectangle.intersects(patient3.getBounds(), Dory.getBounds()));
	var MarlinHelping4 = (Phaser.Rectangle.intersects(patient4.getBounds(), Marlin.getBounds()));
	var DoryHelping4 = (Phaser.Rectangle.intersects(patient4.getBounds(), Dory.getBounds()));
	
	// Player's interaction with corpse
	var MarlinCorpse1 = (Phaser.Rectangle.intersects(corpse1.getBounds(), Marlin.getBounds()));
	var DoryCorpse1 = (Phaser.Rectangle.intersects(corpse1.getBounds(), Dory.getBounds()));
	var MarlinCorpse2= (Phaser.Rectangle.intersects(corpse2.getBounds(), Marlin.getBounds()));
	var DoryCorpse2 = (Phaser.Rectangle.intersects(corpse2.getBounds(), Dory.getBounds()));
	var MarlinCorpse3 = (Phaser.Rectangle.intersects(corpse3.getBounds(), Marlin.getBounds()));
	var DoryCorpse3 = (Phaser.Rectangle.intersects(corpse3.getBounds(), Dory.getBounds()));
	var MarlinCorpse4= (Phaser.Rectangle.intersects(corpse4.getBounds(), Marlin.getBounds()));
	var DoryCorpse4 = (Phaser.Rectangle.intersects(corpse4.getBounds(), Dory.getBounds()));
	
	if (MarlinActive){
		if (MarlinCorpse1 && !MarlinCrouchP && !MarlinHelping1 && !MarlinHelping2 && !MarlinHelping3 && !MarlinHelping4){
			var dialogue = game.add.text(Marlin.x - 50, Marlin.y - 115, 'I was too late.', {font: '20px Arial', fill: '#fff'}, dialogues);
		}else if (MarlinCorpse2 && !MarlinCrouchP && !MarlinHelping1 && !MarlinHelping2 && !MarlinHelping3 && !MarlinHelping4){
			var dialogue = game.add.text(Marlin.x - 50, Marlin.y - 115, 'I was too late.', {font: '20px Arial', fill: '#fff'}, dialogues);
		}
		else if (MarlinCorpse3 && !MarlinCrouchP && !MarlinHelping1 && !MarlinHelping2 && !MarlinHelping3 && !MarlinHelping4){
			var dialogue = game.add.text(Marlin.x - 50, Marlin.y - 115, 'I was too late.', {font: '20px Arial', fill: '#fff'}, dialogues);
		}
		else if (MarlinCorpse4 && !MarlinCrouchP && !MarlinHelping1 && !MarlinHelping2 && !MarlinHelping3 && !MarlinHelping4){
			var dialogue = game.add.text(Marlin.x - 50, Marlin.y - 115, 'I was too late.', {font: '20px Arial', fill: '#fff'}, dialogues);
		}
	}
	if (DoryActive){
		if (DoryCorpse1 && !DoryCrouchP && !DoryHelping1 && !DoryHelping2 && !DoryHelping3 && !DoryHelping4){
			var dialogue = game.add.text(Dory.x - 50, Dory.y - 115, 'I was too late.', {font: '20px Arial', fill: '#fff'}, dialogues);
		}else if (DoryCorpse2 && !DoryCrouchP && !DoryHelping1 && !DoryHelping2 && !DoryHelping3 && !DoryHelping4){
			var dialogue = game.add.text(Dory.x - 50, Dory.y - 115, 'I was too late.', {font: '20px Arial', fill: '#fff'}, dialogues);
		}
		else if (DoryCorpse3 && !DoryCrouchP && !DoryHelping1 && !DoryHelping2 && !DoryHelping3 && !DoryHelping4){
			var dialogue = game.add.text(Dory.x - 50, Dory.y - 115, 'I was too late.', {font: '20px Arial', fill: '#fff'}, dialogues);
		}
		else if (DoryCorpse4 && !DoryCrouchP && !DoryHelping1 && !DoryHelping2 && !DoryHelping3 && !DoryHelping4){
			var dialogue = game.add.text(Dory.x - 50, Dory.y - 115, 'I was too late.', {font: '20px Arial', fill: '#fff'}, dialogues);
		}
	}
}