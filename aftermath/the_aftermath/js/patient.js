function patient(game, key, frame, x, y, scale){
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
patient.prototype = Object.create(Phaser.Sprite.prototype);
patient.prototype.constructor = patient;

// Override prototype's inherited method
patient.prototype.update = function() {
	// Define cursors to arrow keys
	var cursors = game.input.keyboard.createCursorKeys();
	
	var holdLeft = cursors.left.isDown;
	var holdRight = cursors.right.isDown;
	var holdUp = cursors.up.isDown;
	var holdDown = cursors.down.isDown;
	
	var pressedLeft = game.input.keyboard.justPressed(Phaser.Keyboard.LEFT);
	var pressedRight = game.input.keyboard.justPressed(Phaser.Keyboard.RIGHT);
	var pressedUp = game.input.keyboard.justPressed(Phaser.Keyboard.UP);
	var pressedDown = game.input.keyboard.justPressed(Phaser.Keyboard.DOWN);
	
	// Set patient gravity outside of camera
	if (this.x > 0){
		this.body.allowGravity = true;
		this.body.gravity.y = 500;
	}else{
		this.body.allowGravity = false;
	}
	
	// Player's treatment of patient1
	var MarlinHelping1 = (Phaser.Rectangle.intersects(patient1.getBounds(), Marlin.getBounds()));
	var DoryHelping1 = (Phaser.Rectangle.intersects(patient1.getBounds(), Dory.getBounds()));
	
	if (MarlinHelping1 && !DoryHelping1 && !holdUp && MarlinActive){
		var dialogue = game.add.text(patient1.x - 60, patient1.y - 75, 'It hurts so much.', {font: '20px Arial', fill: '#000'}, dialogues);
		if (p1Timer >= 6000){
			var dialogue1 = game.add.text(Marlin.x - 100, Marlin.y - 125, 'This patient is currently stable.', {font: '20px Arial', fill: '#fff'}, dialogues);
		}else if (6000 > p1Timer && p1Timer >= 4000){
			var dialogue1 = game.add.text(Marlin.x - 150, Marlin.y - 125, 'The wounds on this patient are opening up.', {font: '20px Arial', fill: '#fff'}, dialogues);
		}else if (4000 > p1Timer && p1Timer >= 2000){
			var dialogue1 = game.add.text(Marlin.x - 140, Marlin.y - 125, 'This patient is in critical condition.', {font: '20px Arial', fill: '#fff'}, dialogues);
		}else if (2000 > p1Timer && p1Timer >= 0){
			var dialogue1 = game.add.text(Marlin.x - 150, Marlin.y - 125, 'This patient is near-death. I need to hurry!', {font: '20px Arial', fill: '#fff'}, dialogues);
		}
	}else if (!MarlinHelping1 && DoryHelping1 && !holdUp && DoryActive){
		var dialogue = game.add.text(patient1.x - 60, patient1.y - 75, 'It hurts so much.', {font: '20px Arial', fill: '#000'}, dialogues);
		if (p1Timer >= 6000){
			var dialogue1 = game.add.text(Dory.x - 100, Dory.y - 125, 'This patient is currently stable.', {font: '20px Arial', fill: '#fff'}, dialogues);
		}else if (6000 > p1Timer && p1Timer >= 4000){
			var dialogue1 = game.add.text(Dory.x - 150, Dory.y - 125, 'The wounds on this patient are opening up.', {font: '20px Arial', fill: '#fff'}, dialogues);
		}else if (4000 > p1Timer && p1Timer >= 2000){
			var dialogue1 = game.add.text(Dory.x - 140, Dory.y - 125, 'This patient is in critical condition.', {font: '20px Arial', fill: '#fff'}, dialogues);
		}else if (2000 > p1Timer && p1Timer >= 0){
			var dialogue1 = game.add.text(Dory.x - 150, Dory.y - 125, 'This patient is near-death. I need to hurry!', {font: '20px Arial', fill: '#fff'}, dialogues);
		}
	}else if (MarlinHelping1 && DoryHelping1 && !holdUp){
		dialogues.callAll('kill');
		if (MarlinCrouchP1 && !DoryCrouchP1){
			var dialogue = game.add.text(patient1.x - 115, patient1.y - 100, 'Help me treat this patient.', {font: '20px Arial', fill: '#fff'}, dialogues);
		}else if (!MarlinCrouchP1 && DoryCrouchP1){
			var dialogue = game.add.text(patient1.x - 115, patient1.y - 100, 'Help me treat this patient.', {font: '20px Arial', fill: '#fff'}, dialogues);
		}else if (MarlinCrouchP1 && DoryCrouchP1){
			if (p1Timer >= 6000){
				var dialogue1 = game.add.text(patient1.x - 100, patient1.y - 100, 'The patient is fully bandaged.', {font: '20px Arial', fill: '#fff'}, dialogues);
			}else if (6000 > p1Timer && p1Timer >= 5000){
				var dialogue1 = game.add.text(patient1.x - 110, patient1.y - 100, 'I am almost done healing the patient.', {font: '20px Arial', fill: '#fff'}, dialogues);
			}else if (5000 > p1Timer && p1Timer >= 4000){
				var dialogue1 = game.add.text(patient1.x - 110, patient1.y - 100, 'I am patching up the wounds.', {font: '20px Arial', fill: '#fff'}, dialogues);
			}else if (4000 > p1Timer && p1Timer >= 3000){
				var dialogue1 = game.add.text(patient1.x - 125, patient1.y - 100, 'The patient is responding well to the treatment.', {font: '20px Arial', fill: '#fff'}, dialogues);
			}else if (3000 > p1Timer && p1Timer >= 2000){
				var dialogue1 = game.add.text(patient1.x - 100, patient1.y - 100, 'I need to stay a little longer.', {font: '20px Arial', fill: '#fff'}, dialogues);
			}else if (2000 > p1Timer && p1Timer >= 1000){
				var dialogue1 = game.add.text(patient1.x - 110, patient1.y - 100, 'I am putting pressure on the wounds.', {font: '20px Arial', fill: '#fff'}, dialogues);
			}else if (1000 > p1Timer && p1Timer >= 0){
				var dialogue1 = game.add.text(patient1.x - 110, patient1.y - 100, 'Give me time to treat the patient.', {font: '20px Arial', fill: '#fff'}, dialogues);
			}
			
			if (p1Timer == 6000 || p1Timer == 6001){
				Bandage.play();
			}else if (p1Timer == 5000 || p1Timer == 5001){
				Bandage.play();
			}else if (p1Timer == 4000 || p1Timer == 4001){
				Bandage.play();
			}else if (p1Timer == 3000 || p1Timer == 3001){
				Bandage.play();
			}else if (p1Timer == 2000 || p1Timer == 2001){
				Bandage.play();
			}else if (p1Timer == 1000 || p1Timer == 1001){
				Bandage.play();
			}
		}else{
			var dialogue = game.add.text(patient1.x - 110, patient1.y - 75, 'Please make the pain stop.', {font: '20px Arial', fill: '#000'}, dialogues);
		}
	}
	
	// Player's treatment of patient2
	var MarlinHelping2 = (Phaser.Rectangle.intersects(patient2.getBounds(), Marlin.getBounds()));
	var DoryHelping2 = (Phaser.Rectangle.intersects(patient2.getBounds(), Dory.getBounds()));
	
	if (MarlinHelping2 && !DoryHelping2 && !holdUp && MarlinActive){
		var dialogue = game.add.text(patient2.x - 60, patient2.y - 75, 'Help me please.', {font: '20px Arial', fill: '#000'}, dialogues);
		if (p2Timer >= 6000){
			var dialogue1 = game.add.text(Marlin.x - 100, Marlin.y - 125, 'This patient is currently stable.', {font: '20px Arial', fill: '#fff'}, dialogues);
		}else if (6000 > p2Timer && p2Timer >= 4000){
			var dialogue1 = game.add.text(Marlin.x - 150, Marlin.y - 125, 'The wounds on this patient are opening up.', {font: '20px Arial', fill: '#fff'}, dialogues);
		}else if (4000 > p2Timer && p2Timer >= 2000){
			var dialogue1 = game.add.text(Marlin.x - 140, Marlin.y - 125, 'This patient is in critical condition.', {font: '20px Arial', fill: '#fff'}, dialogues);
		}else if (2000 > p2Timer && p2Timer >= 0){
			var dialogue1 = game.add.text(Marlin.x - 150, Marlin.y - 125, 'This patient is near-death. I need to hurry!', {font: '20px Arial', fill: '#fff'}, dialogues);
		}
	}else if (!MarlinHelping2 && DoryHelping2 && !holdUp && DoryActive){
		var dialogue = game.add.text(patient2.x - 60, patient2.y - 75, 'Help me please.', {font: '20px Arial', fill: '#000'}, dialogues);
		if (p2Timer >= 6000){
			var dialogue1 = game.add.text(Dory.x - 100, Dory.y - 125, 'This patient is currently stable.', {font: '20px Arial', fill: '#fff'}, dialogues);
		}else if (6000 > p2Timer && p2Timer >= 4000){
			var dialogue1 = game.add.text(Dory.x - 150, Dory.y - 125, 'The wounds on this patient are opening up.', {font: '20px Arial', fill: '#fff'}, dialogues);
		}else if (4000 > p2Timer && p2Timer >= 2000){
			var dialogue1 = game.add.text(Dory.x - 140, Dory.y - 125, 'This patient is in critical condition.', {font: '20px Arial', fill: '#fff'}, dialogues);
		}else if (2000 > p2Timer && p2Timer >= 0){
			var dialogue1 = game.add.text(Dory.x - 150, Dory.y - 125, 'This patient is near-death. I need to hurry!', {font: '20px Arial', fill: '#fff'}, dialogues);
		}
	}else if (MarlinHelping2 && DoryHelping2 && !holdUp){
		dialogues.callAll('kill');
		if (MarlinCrouchP2 && !DoryCrouchP2){
			var dialogue = game.add.text(patient2.x - 115, patient2.y - 85, 'Help me treat this patient.', {font: '20px Arial', fill: '#fff'}, dialogues);
		}else if (!MarlinCrouchP2 && DoryCrouchP2){
			var dialogue = game.add.text(patient2.x - 115, patient2.y - 85, 'Help me treat this patient.', {font: '20px Arial', fill: '#fff'}, dialogues);
		}else if (MarlinCrouchP2 && DoryCrouchP2){
			if (p2Timer >= 6000){
				var dialogue1 = game.add.text(patient2.x - 100, patient2.y - 85, 'The patient is fully bandaged.', {font: '20px Arial', fill: '#fff'}, dialogues);
			}else if (6000 > p2Timer && p2Timer >= 5000){
				var dialogue1 = game.add.text(patient2.x - 110, patient2.y - 85, 'I am almost done healing the patient.', {font: '20px Arial', fill: '#fff'}, dialogues);
			}else if (5000 > p2Timer && p2Timer >= 4000){
				var dialogue1 = game.add.text(patient2.x - 110, patient2.y - 85, 'I am patching up the wounds.', {font: '20px Arial', fill: '#fff'}, dialogues);
			}else if (4000 > p2Timer && p2Timer >= 3000){
				var dialogue1 = game.add.text(patient2.x - 125, patient2.y - 85, 'The patient is responding well to the treatment.', {font: '20px Arial', fill: '#fff'}, dialogues);
			}else if (3000 > p2Timer && p2Timer >= 2000){
				var dialogue1 = game.add.text(patient2.x - 100, patient2.y - 85, 'I need to stay a little longer.', {font: '20px Arial', fill: '#fff'}, dialogues);
			}else if (2000 > p2Timer && p2Timer >= 1000){
				var dialogue1 = game.add.text(patient2.x - 110, patient2.y - 85, 'I am putting pressure on the wounds.', {font: '20px Arial', fill: '#fff'}, dialogues);
			}else if (1000 > p2Timer && p2Timer >= 0){
				var dialogue1 = game.add.text(patient2.x - 110, patient2.y - 85, 'Give me time to treat the patient.', {font: '20px Arial', fill: '#fff'}, dialogues);
			}
			
			if (p2Timer == 6000 || p2Timer == 6001){
				Bandage.play();
			}else if (p2Timer == 5000 || p2Timer == 5001){
				Bandage.play();
			}else if (p2Timer == 4000 || p2Timer == 4001){
				Bandage.play();
			}else if (p2Timer == 3000 || p2Timer == 3001){
				Bandage.play();
			}else if (p2Timer == 2000 || p2Timer == 2001){
				Bandage.play();
			}else if (p2Timer == 1000 || p2Timer == 1001){
				Bandage.play();
			}
		}else{
			var dialogue = game.add.text(patient2.x - 70, patient2.y - 75, 'Please, I beg you.', {font: '20px Arial', fill: '#000'}, dialogues);
		}
	}
	
	// Player's treatment of patient3
	var MarlinHelping3 = (Phaser.Rectangle.intersects(patient3.getBounds(), Marlin.getBounds()));
	var DoryHelping3 = (Phaser.Rectangle.intersects(patient3.getBounds(), Dory.getBounds()));
	
	if (MarlinHelping3 && !DoryHelping3 && !holdUp && MarlinActive){
		var dialogue = game.add.text(patient3.x - 130, patient3.y - 75, 'Please help. I cannot get up.', {font: '20px Arial', fill: '#000'}, dialogues);
		if (p3Timer >= 6000){
			var dialogue1 = game.add.text(Marlin.x - 100, Marlin.y - 125, 'This patient is currently stable.', {font: '20px Arial', fill: '#fff'}, dialogues);
		}else if (6000 > p3Timer && p3Timer >= 4000){
			var dialogue1 = game.add.text(Marlin.x - 150, Marlin.y - 125, 'The wounds on this patient are opening up.', {font: '20px Arial', fill: '#fff'}, dialogues);
		}else if (4000 > p3Timer && p3Timer >= 2000){
			var dialogue1 = game.add.text(Marlin.x - 140, Marlin.y - 125, 'This patient is in critical condition.', {font: '20px Arial', fill: '#fff'}, dialogues);
		}else if (2000 > p3Timer && p3Timer >= 0){
			var dialogue1 = game.add.text(Marlin.x - 150, Marlin.y - 125, 'This patient is near-death. I need to hurry!', {font: '20px Arial', fill: '#fff'}, dialogues);
		}
	}else if (!MarlinHelping3 && DoryHelping3 && !holdUp && DoryActive){
		var dialogue = game.add.text(patient3.x - 130, patient3.y - 75, 'Please help. I cannot get up.', {font: '20px Arial', fill: '#000'}, dialogues);
		if (p3Timer >= 6000){
			var dialogue1 = game.add.text(Dory.x - 100, Dory.y - 125, 'This patient is currently stable.', {font: '20px Arial', fill: '#fff'}, dialogues);
		}else if (6000 > p3Timer && p3Timer >= 4000){
			var dialogue1 = game.add.text(Dory.x - 150, Dory.y - 125, 'The wounds on this patient are opening up.', {font: '20px Arial', fill: '#fff'}, dialogues);
		}else if (4000 > p3Timer && p3Timer >= 2000){
			var dialogue1 = game.add.text(Dory.x - 140, Dory.y - 125, 'This patient is in critical condition.', {font: '20px Arial', fill: '#fff'}, dialogues);
		}else if (2000 > p3Timer && p3Timer >= 0){
			var dialogue1 = game.add.text(Dory.x - 150, Dory.y - 125, 'This patient is near-death. I need to hurry!', {font: '20px Arial', fill: '#fff'}, dialogues);
		}
	}else if (MarlinHelping3 && DoryHelping3 && !holdUp){
		dialogues.callAll('kill');
		if (MarlinCrouchP3 && !DoryCrouchP3){
			var dialogue = game.add.text(patient3.x - 115, patient3.y - 95, 'Help me treat this patient.', {font: '20px Arial', fill: '#fff'}, dialogues);
		}else if (!MarlinCrouchP3 && DoryCrouchP3){
			var dialogue = game.add.text(patient3.x - 115, patient3.y - 95, 'Help me treat this patient.', {font: '20px Arial', fill: '#fff'}, dialogues);
		}else if (MarlinCrouchP3 && DoryCrouchP3){
			if (p3Timer >= 6000){
				var dialogue1 = game.add.text(patient3.x - 100, patient3.y - 100, 'The patient is fully bandaged.', {font: '20px Arial', fill: '#fff'}, dialogues);
			}else if (6000 > p3Timer && p3Timer >= 5000){
				var dialogue1 = game.add.text(patient3.x - 110, patient3.y - 100, 'I am almost done healing the patient.', {font: '20px Arial', fill: '#fff'}, dialogues);
			}else if (5000 > p3Timer && p3Timer >= 4000){
				var dialogue1 = game.add.text(patient3.x - 110, patient3.y - 100, 'I am patching up the wounds.', {font: '20px Arial', fill: '#fff'}, dialogues);
			}else if (4000 > p3Timer && p3Timer >= 3000){
				var dialogue1 = game.add.text(patient3.x - 125, patient3.y - 100, 'The patient is responding well to the treatment.', {font: '20px Arial', fill: '#fff'}, dialogues);
			}else if (3000 > p3Timer && p3Timer >= 2000){
				var dialogue1 = game.add.text(patient3.x - 100, patient3.y - 100, 'I need to stay a little longer.', {font: '20px Arial', fill: '#fff'}, dialogues);
			}else if (2000 > p3Timer && p3Timer >= 1000){
				var dialogue1 = game.add.text(patient3.x - 110, patient3.y - 100, 'I am putting pressure on the wounds.', {font: '20px Arial', fill: '#fff'}, dialogues);
			}else if (1000 > p3Timer && p3Timer >= 0){
				var dialogue1 = game.add.text(patient3.x - 110, patient3.y - 100, 'Give me time to treat the patient.', {font: '20px Arial', fill: '#fff'}, dialogues);
			}
			
			if (p3Timer == 6000 || p3Timer == 6001){
				Bandage.play();
			}else if (p3Timer == 5000 || p3Timer == 5001){
				Bandage.play();
			}else if (p3Timer == 4000 || p3Timer == 4001){
				Bandage.play();
			}else if (p3Timer == 3000 || p3Timer == 3001){
				Bandage.play();
			}else if (p3Timer == 2000 || p3Timer == 2001){
				Bandage.play();
			}else if (p3Timer == 1000 || p3Timer == 1001){
				Bandage.play();
			}
		}else{
			var dialogue = game.add.text(patient3.x - 125, patient3.y - 75, 'Please do not leave me here.', {font: '20px Arial', fill: '#000'}, dialogues);
		}
	}
	
	// Player's treatment of patient4
	var MarlinHelping4 = (Phaser.Rectangle.intersects(patient4.getBounds(), Marlin.getBounds()));
	var DoryHelping4 = (Phaser.Rectangle.intersects(patient4.getBounds(), Dory.getBounds()));
	
	if (MarlinHelping4 && !DoryHelping4 && !holdUp && MarlinActive){
		var dialogue = game.add.text(patient4.x - 65, patient4.y - 70, 'Please save me.', {font: '20px Arial', fill: '#000'}, dialogues);
		if (p4Timer >= 6000){
			var dialogue1 = game.add.text(Marlin.x - 100, Marlin.y - 125, 'This patient is currently stable.', {font: '20px Arial', fill: '#fff'}, dialogues);
		}else if (6000 > p4Timer && p4Timer >= 4000){
			var dialogue1 = game.add.text(Marlin.x - 150, Marlin.y - 125, 'The wounds on this patient are opening up.', {font: '20px Arial', fill: '#fff'}, dialogues);
		}else if (4000 > p4Timer && p4Timer >= 2000){
			var dialogue1 = game.add.text(Marlin.x - 140, Marlin.y - 125, 'This patient is in critical condition.', {font: '20px Arial', fill: '#fff'}, dialogues);
		}else if (2000 > p4Timer && p4Timer >= 0){
			var dialogue1 = game.add.text(Marlin.x - 150, Marlin.y - 125, 'This patient is near-death. I need to hurry!', {font: '20px Arial', fill: '#fff'}, dialogues);
		}
	}else if (!MarlinHelping4 && DoryHelping4 && !holdUp && DoryActive){
		var dialogue = game.add.text(patient4.x - 65, patient4.y - 70, 'Please save me.', {font: '20px Arial', fill: '#000'}, dialogues);
		if (p4Timer >= 6000){
			var dialogue1 = game.add.text(Dory.x - 100, Dory.y - 125, 'This patient is currently stable.', {font: '20px Arial', fill: '#fff'}, dialogues);
		}else if (6000 > p4Timer && p4Timer >= 4000){
			var dialogue1 = game.add.text(Dory.x - 150, Dory.y - 125, 'The wounds on this patient are opening up.', {font: '20px Arial', fill: '#fff'}, dialogues);
		}else if (4000 > p4Timer && p4Timer >= 2000){
			var dialogue1 = game.add.text(Dory.x - 140, Dory.y - 125, 'This patient is in critical condition.', {font: '20px Arial', fill: '#fff'}, dialogues);
		}else if (2000 > p4Timer && p4Timer >= 0){
			var dialogue1 = game.add.text(Dory.x - 150, Dory.y - 125, 'This patient is near-death. I need to hurry!', {font: '20px Arial', fill: '#fff'}, dialogues);
		}
	}else if (MarlinHelping4 && DoryHelping4 && !holdUp){
		dialogues.callAll('kill');
		if (MarlinCrouchP4 && !DoryCrouchP4){
			var dialogue = game.add.text(patient4.x - 115, patient4.y - 95, 'Help me treat this patient.', {font: '20px Arial', fill: '#fff'}, dialogues);
		}else if (!MarlinCrouchP4 && DoryCrouchP4){
			var dialogue = game.add.text(patient4.x - 115, patient4.y - 95, 'Help me treat this patient.', {font: '20px Arial', fill: '#fff'}, dialogues);
		}else if (MarlinCrouchP4 && DoryCrouchP4){
			if (p4Timer >= 6000){
				var dialogue1 = game.add.text(patient4.x - 100, patient4.y - 100, 'The patient is fully bandaged.', {font: '20px Arial', fill: '#fff'}, dialogues);
			}else if (6000 > p4Timer && p4Timer >= 5000){
				var dialogue1 = game.add.text(patient4.x - 110, patient4.y - 100, 'I am almost done healing the patient.', {font: '20px Arial', fill: '#fff'}, dialogues);
			}else if (5000 > p4Timer && p4Timer >= 4000){
				var dialogue1 = game.add.text(patient4.x - 110, patient4.y - 100, 'I am patching up the wounds.', {font: '20px Arial', fill: '#fff'}, dialogues);
			}else if (4000 > p4Timer && p4Timer >= 3000){
				var dialogue1 = game.add.text(patient4.x - 125, patient4.y - 100, 'The patient is responding well to the treatment.', {font: '20px Arial', fill: '#fff'}, dialogues);
			}else if (3000 > p4Timer && p4Timer >= 2000){
				var dialogue1 = game.add.text(patient4.x - 100, patient4.y - 100, 'I need to stay a little longer.', {font: '20px Arial', fill: '#fff'}, dialogues);
			}else if (2000 > p4Timer && p4Timer >= 1000){
				var dialogue1 = game.add.text(patient4.x - 110, patient4.y - 100, 'I am putting pressure on the wounds.', {font: '20px Arial', fill: '#fff'}, dialogues);
			}else if (1000 > p4Timer && p4Timer >= 0){
				var dialogue1 = game.add.text(patient4.x - 110, patient4.y - 100, 'Give me time to treat the patient.', {font: '20px Arial', fill: '#fff'}, dialogues);
			}
			
			if (p4Timer == 6000 || p4Timer == 6001){
				Bandage.play();
			}else if (p4Timer == 5000 || p4Timer == 5001){
				Bandage.play();
			}else if (p4Timer == 4000 || p4Timer == 4001){
				Bandage.play();
			}else if (p4Timer == 3000 || p4Timer == 3001){
				Bandage.play();
			}else if (p4Timer == 2000 || p4Timer == 2001){
				Bandage.play();
			}else if (p4Timer == 1000 || p4Timer == 1001){
				Bandage.play();
			}
		}else{
			var dialogue = game.add.text(patient4.x - 65, patient4.y - 70, 'It hurts to breath.', {font: '20px Arial', fill: '#000'}, dialogues);
		}
	}
	
	// Check to see if players are on ladder as to not drop patients when climbing down
	var MarlinonLadder1 = (Phaser.Rectangle.intersects(ladder1.getBounds(), Marlin.getBounds()));
	var DoryonLadder1 = (Phaser.Rectangle.intersects(ladder1.getBounds(), Dory.getBounds()));
	var MarlinonLadder2 = (Phaser.Rectangle.intersects(ladder2.getBounds(), Marlin.getBounds()));
	var DoryonLadder2 = (Phaser.Rectangle.intersects(ladder2.getBounds(), Dory.getBounds()));
	var MarlinonLadder3 = (Phaser.Rectangle.intersects(ladder3.getBounds(), Marlin.getBounds()));
	var DoryonLadder3 = (Phaser.Rectangle.intersects(ladder3.getBounds(), Dory.getBounds()));
	var MarlinonLadder4 = (Phaser.Rectangle.intersects(ladder4.getBounds(), Marlin.getBounds()));
	var DoryonLadder4 = (Phaser.Rectangle.intersects(ladder4.getBounds(), Dory.getBounds()));
	var MarlinonLadder5 = (Phaser.Rectangle.intersects(ladder5.getBounds(), Marlin.getBounds()));
	var DoryonLadder5 = (Phaser.Rectangle.intersects(ladder5.getBounds(), Dory.getBounds()));
	var MarlinonLadder6 = (Phaser.Rectangle.intersects(ladder6.getBounds(), Marlin.getBounds()));
	var DoryonLadder6 = (Phaser.Rectangle.intersects(ladder6.getBounds(), Dory.getBounds()));
	var MarlinonLadder = false;
	var DoryonLadder = false;
	
	if (MarlinonLadder1 || MarlinonLadder2 || MarlinonLadder3 || MarlinonLadder4 || MarlinonLadder5 || MarlinonLadder6){
		MarlinonLadder = true;
	}else{
		MarlinonLadder = false;
	}
	if (DoryonLadder1 || DoryonLadder2 || DoryonLadder3 || DoryonLadder4 || DoryonLadder5 || DoryonLadder6){
		DoryonLadder = true;
	}else{
		DoryonLadder = false;
	}
	
	// Players carrying patient1
	if (MarlinActive){
		if (MarlinHelping1 && !MarlinHelping2 && !MarlinHelping3 && !MarlinHelping4){
			if (!MarlinHasP && pressedUp && patient1.y > Marlin.y + 50){
				MarlinHasP1 = true;
				Marlin.loadTexture('mCarrying', 0, false);
				patient1.x = -500;
			}else if (MarlinHasP && holdUp){
				var dialogue = game.add.text(Marlin.x - 100, Marlin.y - 125, 'I am carrying someone already.', {font: '20px Arial', fill: '#fff'}, dialogues);
			}
		}else if (MarlinHasP1 && pressedDown && !MarlinonLadder && !MarlinHelping2 && !MarlinHelping3 && !MarlinHelping4){
			Marlin.loadTexture('mMedic', 0, false);
			MarlinHasP1 = false;
			patient1.x = Marlin.x;
			patient1.y = Marlin.y;
		}
	}
	
	if (DoryActive){
		if (DoryHelping1 && !DoryHelping2 && !DoryHelping3 && !DoryHelping4){
			if (!DoryHasP && pressedUp && patient1.y > Dory.y + 50){
				DoryHasP1 = true;
				Dory.loadTexture('fCarrying', 0, false);
				patient1.x = -500;
			}else if (DoryHasP && holdDown){
				var dialogue = game.add.text(Dory.x - 100, Dory.y - 125, 'I am carrying someone already.', {font: '20px Arial', fill: '#fff'}, dialogues);
			}
		}else if (DoryHasP1 && pressedDown && !DoryonLadder && !DoryHelping2 && !DoryHelping3 && !DoryHelping4){
			Dory.loadTexture('fMedic', 0, false);
			DoryHasP1 = false;
			patient1.x = Dory.x;
			patient1.y = Dory.y;
		}
	}
	
	// Players carrying patient2
	if (MarlinActive){
		if (!MarlinHelping1 && MarlinHelping2 && !MarlinHelping3 && !MarlinHelping4){
			if (!MarlinHasP && pressedUp && patient2.y > Marlin.y + 30){
				MarlinHasP2 = true;
				Marlin.loadTexture('mCarrying', 0, false);
				patient2.x = -500;
			}else if (MarlinHasP && holdUp){
				var dialogue = game.add.text(Marlin.x - 100, Marlin.y - 125, 'I am carrying someone already.', {font: '20px Arial', fill: '#fff'}, dialogues);
			}
		}else if (MarlinHasP2 && pressedDown && !MarlinonLadder && !MarlinHelping1 && !MarlinHelping3 && !MarlinHelping4){
			Marlin.loadTexture('mMedic', 0, false);
			MarlinHasP2 = false;
			patient2.x = Marlin.x;
			patient2.y = Marlin.y;
		}
	}
	
	if (DoryActive){
		if (!DoryHelping1 && DoryHelping2 && !DoryHelping3 && !DoryHelping4){
			if (!DoryHasP && pressedUp && patient2.y > Dory.y + 30){
				DoryHasP2 = true;
				Dory.loadTexture('fCarrying', 0, false);
				patient2.x = -500;
			}else if (DoryHasP && holdUp){
				var dialogue = game.add.text(Dory.x - 100, Dory.y - 125, 'I am carrying someone already.', {font: '20px Arial', fill: '#fff'}, dialogues);
			}
		}else if (DoryHasP2 && pressedDown && !DoryonLadder && !DoryHelping1 && !DoryHelping3 && !DoryHelping4){
			Dory.loadTexture('fMedic', 0, false);
			DoryHasP2 = false;
			patient2.x = Dory.x;
			patient2.y = Dory.y;
		}
	}
	
	// Players carrying patient3
	if (MarlinActive){
		if (!MarlinHelping1 && !MarlinHelping2 && MarlinHelping3 && !MarlinHelping4){
			if (!MarlinHasP && pressedUp && patient3.y > Marlin.y + 40){
				MarlinHasP3 = true;
				Marlin.loadTexture('mCarrying', 0, false);
				patient3.x = -500;
			}else if (MarlinHasP && holdDown){
				var dialogue = game.add.text(Marlin.x - 100, Marlin.y - 125, 'I am carrying someone already.', {font: '20px Arial', fill: '#fff'}, dialogues);
			}
		}else if (MarlinHasP3 && pressedDown && !MarlinonLadder && !MarlinHelping1 && !MarlinHelping2 && !MarlinHelping4){
			Marlin.loadTexture('mMedic', 0, false);
			MarlinHasP3 = false;
			patient3.x = Marlin.x;
			patient3.y = Marlin.y;
		}
	}
	
	if (DoryActive){
		if (!DoryHelping1 && !DoryHelping2 && DoryHelping3 && !DoryHelping4){
			if (!DoryHasP && pressedUp && patient3.y > Dory.y + 40){
				DoryHasP3 = true;
				Dory.loadTexture('fCarrying', 0, false);
				patient3.x = -500;
			}else if (DoryHasP && holdDown){
				var dialogue = game.add.text(Dory.x - 100, Dory.y - 125, 'I am carrying someone already.', {font: '20px Arial', fill: '#fff'}, dialogues);
			}
		}else if (DoryHasP3 && pressedDown && !DoryonLadder && !DoryHelping1 && !DoryHelping2 && !DoryHelping4){
			Dory.loadTexture('fMedic', 0, false);
			DoryHasP3 = false;
			patient3.x = Dory.x;
			patient3.y = Dory.y;
		}
	}
	
	// Players carrying patient4
	if (MarlinActive){
		if (!MarlinHelping1 && !MarlinHelping2 && !MarlinHelping3 && MarlinHelping4){
			if (!MarlinHasP && pressedUp && patient4.y > Marlin.y + 50){
				MarlinHasP4 = true;
				Marlin.loadTexture('mCarrying', 0, false);
				patient4.x = -500;
			}else if (MarlinHasP && holdUp){
				var dialogue = game.add.text(Marlin.x - 100, Marlin.y - 125, 'I am carrying someone already.', {font: '20px Arial', fill: '#fff'}, dialogues);
			}
		}else if (MarlinHasP4 && pressedDown && !MarlinonLadder && !MarlinHelping1 && !MarlinHelping2 && !MarlinHelping3){
			Marlin.loadTexture('mMedic', 0, false);
			MarlinHasP4 = false;
			patient4.x = Marlin.x;
			patient4.y = Marlin.y;
			tutorial2 = false;
		}
	}
	
	if (MarlinActive && MarlinHasP4 && tutorial2 && !MarlinHelping1 && !MarlinHelping2 && !MarlinHelping3 && !MarlinHelping4){
		var dialogue = game.add.text(Marlin.x - 100, Marlin.y - 125, 'Lets get you to the ambulance.', {font: '20px Arial', fill: '#fff'}, dialogues);
	}
	
	if (DoryActive){
		if (!DoryHelping1 && !DoryHelping2 && !DoryHelping3 && DoryHelping4){
			if (!DoryHasP && pressedUp && patient4.y > Dory.y + 50){
				DoryHasP4 = true;
				Dory.loadTexture('fCarrying', 0, false);
				patient4.x = -500;
			}else if (DoryHasP && holdUp){
				var dialogue = game.add.text(Dory.x - 100, Dory.y - 125, 'I am carrying someone already.', {font: '20px Arial', fill: '#fff'}, dialogues);
			}
		}else if (DoryHasP4 && pressedDown && !DoryonLadder && !DoryHelping1 && !DoryHelping2 && !DoryHelping3){
			Dory.loadTexture('fMedic', 0, false);
			DoryHasP4 = false;
			patient4.x = Dory.x;
			patient4.y = Dory.y;
		}
	}
	
	// Players crouching patient1
	if (MarlinActive){
		if (MarlinHelping1 && !MarlinHelping2 && !MarlinHelping3 && !MarlinHelping4){
			if (pressedDown && !holdLeft && !holdRight && !MarlinHasP && patient1.y > Marlin.y + 50){
				MarlinCrouchP1 = true;
				Marlin.animations.play('mHealing');
				if (Marlin.x < patient1.x){
					if (Marlin.scale.x > 0){
						Marlin.scale.x *= 1;
					}else{
						Marlin.scale.x *= -1;
					}
				}else{
					if (Marlin.scale.x > 0){
						Marlin.scale.x *= -1;
					}else{
						Marlin.scale.x *= 1;
					}
				}
				if (MarlinKit){
					Marlin.medkit.y = 95;
				}
			}else if (pressedUp){
				MarlinCrouchP1 = false;
				if (MarlinKit){
					Marlin.medkit.y = 10;
				}
			}else if (pressedLeft){
				MarlinCrouchP1 = false;
				if (MarlinKit){
					Marlin.medkit.y = 10;
				}
			}else if (pressedRight){
				MarlinCrouchP1 = false;
				if (MarlinKit){
					Marlin.medkit.y = 10;
				}
			}else if (MarlinCrouchP1){
				var dialogue = game.add.text(Marlin.x - 150, Marlin.y - 75, 'This will stop the bleeding for now.', {font: '20px Arial', fill: '#fff'}, dialogues);
			}
		}
	}
	if (MarlinCrouchP1 && !MarlinHelping1){
		MarlinCrouchP1 = false;
		Marlin.animations.play('mStanding');
		if (MarlinKit){
			Marlin.medkit.y = 10;
		}
	}
	
	if (DoryActive){
		if (DoryHelping1 && !DoryHelping2 && !DoryHelping3 && !DoryHelping4){
			if (pressedDown && !holdLeft && !holdRight && !DoryHasP && patient1.y > Dory.y + 50){
				DoryCrouchP1 = true;
				Dory.animations.play('fHealing');
				if (Dory.x < patient1.x){
					if (Dory.scale.x > 0){
						Dory.scale.x *= 1;
					}else{
						Dory.scale.x *= -1;
					}
				}else{
					if (Dory.scale.x > 0){
						Dory.scale.x *= -1;
					}else{
						Dory.scale.x *= 1;
					}
				}
				if (DoryKit){
					Dory.medkit.y = 95;
				}
			}else if (pressedUp){
				DoryCrouchP1 = false;
				if (DoryKit){
					Dory.medkit.y = 10;
				}
			}else if (pressedLeft){
				DoryCrouchP1 = false;
				if (DoryKit){
					Dory.medkit.y = 10;
				}
			}else if (pressedRight){
				DoryCrouchP1 = false;
				if (DoryKit){
					Dory.medkit.y = 10;
				}
			}else if (DoryCrouchP1){
				var dialogue = game.add.text(Dory.x - 150, Dory.y - 75, 'This will stop the bleeding for now.', {font: '20px Arial', fill: '#fff'}, dialogues);
			}
		}
	}
	if (DoryCrouchP1 && !DoryHelping1){
		DoryCrouchP1 = false;
		Dory.animations.play('fStanding');
		if (DoryKit){
			Dory.medkit.y = 10;
		}
	}
	
	// Players crouching patient2
	if (MarlinActive){
		if (!MarlinHelping1 && MarlinHelping2 && !MarlinHelping3 && !MarlinHelping4){
			if (pressedDown && !holdLeft && !holdRight && !MarlinHasP && patient2.y > Marlin.y + 30){
				MarlinCrouchP2 = true;
				Marlin.animations.play('mHealing');
				if (Marlin.x < patient2.x){
					if (Marlin.scale.x > 0){
						Marlin.scale.x *= 1;
					}else{
						Marlin.scale.x *= -1;
					}
				}else{
					if (Marlin.scale.x > 0){
						Marlin.scale.x *= -1;
					}else{
						Marlin.scale.x *= 1;
					}
				}
				if (MarlinKit){
					Marlin.medkit.y = 95;
				}
			}else if (pressedUp){
				MarlinCrouchP2 = false;
				if (MarlinKit){
					Marlin.medkit.y = 10;
				}
			}else if (pressedLeft){
				MarlinCrouchP2 = false;
				if (MarlinKit){
					Marlin.medkit.y = 10;
				}
			}else if (pressedRight){
				MarlinCrouchP2 = false;
				if (MarlinKit){
					Marlin.medkit.y = 10;
				}
			}else if (MarlinCrouchP2){
				var dialogue = game.add.text(Marlin.x - 150, Marlin.y - 75, 'This will stop the bleeding for now.', {font: '20px Arial', fill: '#fff'}, dialogues);
			}
		}
	}
	if (MarlinCrouchP2 && !MarlinHelping2){
		MarlinCrouchP2 = false;
		Marlin.animations.play('mStanding');
		if (MarlinKit){
			Marlin.medkit.y = 10;
		}
	}
	
	if (DoryActive){
		if (!DoryHelping1 && DoryHelping2 && !DoryHelping3 && !DoryHelping4){
			if (pressedDown && !holdLeft && !holdRight && !DoryHasP && patient2.y > Dory.y + 30){
				DoryCrouchP2 = true;
				Dory.animations.play('fHealing');
				if (Dory.x < patient2.x){
					if (Dory.scale.x > 0){
						Dory.scale.x *= 1;
					}else{
						Dory.scale.x *= -1;
					}
				}else{
					if (Dory.scale.x > 0){
						Dory.scale.x *= -1;
					}else{
						Dory.scale.x *= 1;
					}
				}
				if (DoryKit){
					Dory.medkit.y = 95;
				}
			}else if (pressedUp){
				DoryCrouchP2 = false;
				if (DoryKit){
					Dory.medkit.y = 10;
				}
			}else if (pressedLeft){
				DoryCrouchP2 = false;
				if (DoryKit){
					Dory.medkit.y = 10;
				}
			}else if (pressedRight){
				DoryCrouchP2 = false;
				if (DoryKit){
					Dory.medkit.y = 10;
				}
			}else if (DoryCrouchP2){
				var dialogue = game.add.text(Dory.x - 150, Dory.y - 75, 'This will stop the bleeding for now.', {font: '20px Arial', fill: '#fff'}, dialogues);
			}
		}
	}
	if (DoryCrouchP2 && !DoryHelping2){
		DoryCrouchP2 = false;
		Dory.animations.play('fStanding');
		if (DoryKit){
			Dory.medkit.y = 10;
		}
	}
	
	// Players crouching patient3
	if (MarlinActive){
		if (!MarlinHelping1 && !MarlinHelping2 && MarlinHelping3 && !MarlinHelping4){
			if (pressedDown && !holdLeft && !holdRight && !MarlinHasP && patient3.y > Marlin.y + 40){
				MarlinCrouchP3 = true;
				Marlin.animations.play('mHealing');
				if (Marlin.x < patient3.x){
					if (Marlin.scale.x > 0){
						Marlin.scale.x *= 1;
					}else{
						Marlin.scale.x *= -1;
					}
				}else{
					if (Marlin.scale.x > 0){
						Marlin.scale.x *= -1;
					}else{
						Marlin.scale.x *= 1;
					}
				}
				if (MarlinKit){
					Marlin.medkit.y = 95;
				}
			}else if (pressedUp){
				MarlinCrouchP3 = false;
				if (MarlinKit){
					Marlin.medkit.y = 10;
				}
			}else if (pressedLeft){
				MarlinCrouchP3 = false;
				if (MarlinKit){
					Marlin.medkit.y = 10;
				}
			}else if (pressedRight){
				MarlinCrouchP3 = false;
				if (MarlinKit){
					Marlin.medkit.y = 10;
				}
			}else if (MarlinCrouchP3){
				var dialogue = game.add.text(Marlin.x - 150, Marlin.y - 75, 'This will stop the bleeding for now.', {font: '20px Arial', fill: '#fff'}, dialogues);
			}
		}
	}
	if (MarlinCrouchP3 && !MarlinHelping3){
		MarlinCrouchP3 = false;
		Marlin.animations.play('mStanding');
		if (MarlinKit){
			Marlin.medkit.y = 10;
		}
	}
	
	if (DoryActive){
		if (!DoryHelping1 && !DoryHelping2 && DoryHelping3 && !DoryHelping4){
			if (pressedDown && !holdLeft && !holdRight && !DoryHasP && patient3.y > Dory.y + 40){
				DoryCrouchP3 = true;
				Dory.animations.play('fHealing');
				if (Dory.x < patient3.x){
					if (Dory.scale.x > 0){
						Dory.scale.x *= 1;
					}else{
						Dory.scale.x *= -1;
					}
				}else{
					if (Dory.scale.x > 0){
						Dory.scale.x *= -1;
					}else{
						Dory.scale.x *= 1;
					}
				}
				if (DoryKit){
					Dory.medkit.y = 95;
				}
			}else if (pressedUp){
				DoryCrouchP3 = false;
				if (DoryKit){
					Dory.medkit.y = 10;
				}
			}else if (pressedLeft){
				DoryCrouchP3 = false;
				if (DoryKit){
					Dory.medkit.y = 10;
				}
			}else if (pressedRight){
				DoryCrouchP3 = false;
				if (DoryKit){
					Dory.medkit.y = 10;
				}
			}else if (DoryCrouchP3){
				var dialogue = game.add.text(Dory.x - 150, Dory.y - 75, 'This will stop the bleeding for now.', {font: '20px Arial', fill: '#fff'}, dialogues);
			}
		}
	}
	if (DoryCrouchP3 && !DoryHelping3){
		DoryCrouchP3 = false;
		Dory.animations.play('fStanding');
		if (DoryKit){
			Dory.medkit.y = 10;
		}
	}
	
	// Players crouching patient4
	if (MarlinActive){
		if (!MarlinHelping1 && !MarlinHelping2 && !MarlinHelping3 && MarlinHelping4){
			if (pressedDown && !holdLeft && !holdRight && !MarlinHasP && patient4.y > Marlin.y + 50){
				MarlinCrouchP4 = true;
				Marlin.animations.play('mHealing');
				if (Marlin.x < patient4.x){
					if (Marlin.scale.x > 0){
						Marlin.scale.x *= 1;
					}else{
						Marlin.scale.x *= -1;
					}
				}else{
					if (Marlin.scale.x > 0){
						Marlin.scale.x *= -1;
					}else{
						Marlin.scale.x *= 1;
					}
				}
				if (MarlinKit){
					Marlin.medkit.y = 95;
				}
			}else if (pressedUp){
				MarlinCrouchP4 = false;
				if (MarlinKit){
					Marlin.medkit.y = 10;
				}
			}else if (pressedLeft){
				MarlinCrouchP4 = false;
				if (MarlinKit){
					Marlin.medkit.y = 10;
				}
			}else if (pressedRight){
				MarlinCrouchP4 = false;
				if (MarlinKit){
					Marlin.medkit.y = 10;
				}
			}else if (MarlinCrouchP4){
				var dialogue = game.add.text(Marlin.x - 150, Marlin.y - 75, 'This will stop the bleeding for now.', {font: '20px Arial', fill: '#fff'}, dialogues);
			}
		}
	}
	if (MarlinCrouchP4 && !MarlinHelping4){
		MarlinCrouchP4 = false;
		Marlin.animations.play('mStanding');
		if (MarlinKit){
			Marlin.medkit.y = 10;
		}
	}
	
	if (DoryActive){
		if (!DoryHelping1 && !DoryHelping2 && !DoryHelping3 && DoryHelping4){
			if (pressedDown && !holdLeft && !holdRight && !DoryHasP && patient4.y > Dory.y + 50){
				DoryCrouchP4 = true;
				Dory.animations.play('fHealing');
				if (Dory.x < patient4.x){
					if (Dory.scale.x > 0){
						Dory.scale.x *= 1;
					}else{
						Dory.scale.x *= -1;
					}
				}else{
					if (Dory.scale.x > 0){
						Dory.scale.x *= -1;
					}else{
						Dory.scale.x *= 1;
					}
				}
				if (DoryKit){
					Dory.medkit.y = 95;
				}
			}else if (pressedUp){
				DoryCrouchP4 = false;
				if (DoryKit){
					Dory.medkit.y = 10;
				}
			}else if (pressedLeft){
				DoryCrouchP4 = false;
				if (DoryKit){
					Dory.medkit.y = 10;
				}
			}else if (pressedRight){
				DoryCrouchP4 = false;
				if (DoryKit){
					Dory.medkit.y = 10;
				}
			}else if (DoryCrouchP4){
				var dialogue = game.add.text(Dory.x - 150, Dory.y - 75, 'This will stop the bleeding for now.', {font: '20px Arial', fill: '#fff'}, dialogues);
			}
		}
	}
	if (DoryCrouchP4 && !DoryHelping4){
		DoryCrouchP4 = false;
		Dory.animations.play('fStanding');
		if (DoryKit){
			Dory.medkit.y = 10;
		}
	}
}