function paramedic(game, key, frame, x, y, scale){
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
paramedic.prototype = Object.create(Phaser.Sprite.prototype);
paramedic.prototype.constructor = paramedic;

// Override prototype's inherited method
paramedic.prototype.update = function() {
	// Define cursors to arrow keys
	var cursors = game.input.keyboard.createCursorKeys();
	
	var holdLeft = cursors.left.isDown;
	var holdRight = cursors.right.isDown;
	var holdUp = cursors.up.isDown;
	var holdDown = cursors.down.isDown;
	
	var pressedUp = game.input.keyboard.justPressed(Phaser.Keyboard.UP);
	var pressedDown = game.input.keyboard.justPressed(Phaser.Keyboard.DOWN);
	
	// Players movement for left & right
	// Control only one player at a time
	if (MarlinActive){
		if (holdLeft && !MarlinCrouchP){				
			Marlin.body.velocity.x = -450;
			Marlin.animations.play('mWalking');
			Marlin.scale.setTo(-.75, .75);
		}else if (holdRight && !MarlinCrouchP){
			Marlin.body.velocity.x = 450;
			Marlin.animations.play('mWalking');
			Marlin.scale.setTo(.75, .75);
		}else{
			Marlin.body.velocity.x = 0;
			if (!MarlinCrouchP){
				Marlin.animations.play('mStanding');
			}
		}
		if (Dory.body.touching.left || Dory.body.touching.right || Dory.body.blocked.left){
			Dory.body.velocity.x = 0;
			Dory.body.gravity.y = 500;
			Dory.animations.play('fStanding');	
		}else{
			Dory.body.gravity.y = 500;
		}
	}else if (DoryActive){
		if (holdLeft && !DoryCrouchP){				
			Dory.body.velocity.x = -450;
			Dory.animations.play('fWalking');
			Dory.scale.setTo(-.75, .75);
		}else if (holdRight && !DoryCrouchP){
			Dory.body.velocity.x = 450;
			Dory.animations.play('fWalking');
			Dory.scale.setTo(.75, .75);
		}else{
			Dory.body.velocity.x = 0;
			if (!DoryCrouchP){
				Dory.animations.play('fStanding');
			}
		}
		if (Marlin.body.touching.left || Marlin.body.touching.right || Marlin.body.blocked.left){
			Marlin.body.velocity.x = 0;
			Marlin.body.gravity.y = 500;
			Marlin.animations.play('mStanding');
		}else{
			Marlin.body.gravity.y = 500;
		}
	}
	
	// Players collect medkit
	if (game.physics.arcade.collide(this, medkit)){
		medkit.kill();
		if (MarlinActive){
			Marlin.medkit = game.add.sprite(5, 10, 'medkit');
			Marlin.medkit.anchor.setTo(0.5, 0.5);
			Marlin.addChild(Marlin.medkit);
			MarlinKit = true;
		}else if (DoryActive){
			Dory.medkit = game.add.sprite(5, 10, 'medkit');
			Dory.medkit.anchor.setTo(0.5, 0.5);
			Dory.addChild(Dory.medkit);
			DoryKit = true;
		}
		haveMedkit = true;
	}
	
	// Players interaction with valve and sewage
	var MarlinTurnsValve1 = (Phaser.Rectangle.intersects(valve1.getBounds(), Marlin.getBounds()));
	var DoryTurnsValve1 = (Phaser.Rectangle.intersects(valve1.getBounds(), Dory.getBounds()));
	var MarlinTurnsValve2 = (Phaser.Rectangle.intersects(valve2.getBounds(), Marlin.getBounds()));
	var DoryTurnsValve2 = (Phaser.Rectangle.intersects(valve2.getBounds(), Dory.getBounds()));
	var MarlinTurnsValve3 = (Phaser.Rectangle.intersects(valve3.getBounds(), Marlin.getBounds()));
	var DoryTurnsValve3 = (Phaser.Rectangle.intersects(valve3.getBounds(), Dory.getBounds()));
	var MarlinTurnsValve4 = (Phaser.Rectangle.intersects(valve4.getBounds(), Marlin.getBounds()));
	var DoryTurnsValve4 = (Phaser.Rectangle.intersects(valve4.getBounds(), Dory.getBounds()));
	var MarlinTurnsValve5 = (Phaser.Rectangle.intersects(valve5.getBounds(), Marlin.getBounds()));
	var DoryTurnsValve5 = (Phaser.Rectangle.intersects(valve5.getBounds(), Dory.getBounds()));
	
	if (MarlinActive){
		if (pressedUp && MarlinTurnsValve1){
			Squeak.play();
			if (sewage1.body.x = 1500){
				sewage1.x = -1500;
			}else if (sewage1.body.x = -1500){
				sewage1.x = 1500;
			}
			if (sewage2.body.x = 1900){
				sewage2.x = -1900;
			}else if (sewage2.body.x = -1900){
				sewage2.x = 1900;
			}
		}else if (pressedUp && MarlinTurnsValve2){
			Squeak.play();
			if (sewage1.body.x = 1500){
				sewage1.x = -1500;
			}else if (sewage1.body.x = -1500){
				sewage1.x = 1500;
			}
			if (sewage5.body.x = 3100){
				sewage5.x = -3100;
			}else if (sewage5.body.x = -3100){
				sewage5.x = 3100;
			}
		}else if (pressedUp && MarlinTurnsValve3){
			Squeak.play();
			if (sewage1.body.x = 1500){
				sewage1.x = -1500;
			}else if (sewage1.body.x = -1500){
				sewage1.x = 1500;
			}
			if (sewage2.body.x = 1900){
				sewage2.x = -1900;
			}else if (sewage2.body.x = -1900){
				sewage2.x = 1900;
			}
			if (sewage3.body.x = 2300){
				sewage3.x = -2300;
			}else if (sewage3.body.x = -2300){
				sewage3.x = 2300;
			}
			if (sewage4.body.x = 2700){
				sewage4.x = -2700;
			}else if (sewage5.body.x = -2700){
				sewage4.x = 2700;
			}
		}else if (pressedUp && MarlinTurnsValve4){
			Squeak.play();
			if (sewage1.body.x = 1500){
				sewage1.x = -1500;
			}else if (sewage1.body.x = -1500){
				sewage1.x = 1500;
			}
			if (sewage3.body.x = 2300){
				sewage3.x = -2300;
			}else if (sewage3.body.x = -2300){
				sewage3.x = 2300;
			}
			if (sewage5.body.x = 3100){
				sewage5.x = -3100;
			}else if (sewage5.body.x = -3100){
				sewage5.x = 3100;
			}
		}else if (pressedUp && MarlinTurnsValve5){
			Squeak.play();
			if (sewage2.body.x = 1900){
				sewage2.x = -1900;
			}else if (sewage2.body.x = -1900){
				sewage2.x = 1900;
			}
			if (sewage3.body.x = 2300){
				sewage3.x = -2300;
			}else if (sewage3.body.x = -2300){
				sewage3.x = 2300;
			}
		}
	}else if (DoryActive){
		if (pressedUp && DoryTurnsValve1){
			Squeak.play();
			if (sewage1.body.x = 1500){
				sewage1.x = -1500;
			}else if (sewage1.body.x = -1500){
				sewage1.x = 1500;
			}
			if (sewage2.body.x = 1900){
				sewage2.x = -1900;
			}else if (sewage2.body.x = -1900){
				sewage2.x = 1900;
			}
		}else if (pressedUp && DoryTurnsValve2){
			Squeak.play();
			if (sewage1.body.x = 1500){
				sewage1.x = -1500;
			}else if (sewage1.body.x = -1500){
				sewage1.x = 1500;
			}
			if (sewage5.body.x = 3100){
				sewage5.x = -3100;
			}else if (sewage5.body.x = -3100){
				sewage5.x = 3100;
			}
		}else if (pressedUp && DoryTurnsValve3){
			Squeak.play();
			if (sewage1.body.x = 1500){
				sewage1.x = -1500;
			}else if (sewage1.body.x = -1500){
				sewage1.x = 1500;
			}
			if (sewage2.body.x = 1900){
				sewage2.x = -1900;
			}else if (sewage2.body.x = -1900){
				sewage2.x = 1900;
			}
			if (sewage3.body.x = 2300){
				sewage3.x = -2300;
			}else if (sewage3.body.x = -2300){
				sewage3.x = 2300;
			}
			if (sewage4.body.x = 2700){
				sewage4.x = -2700;
			}else if (sewage5.body.x = -2700){
				sewage4.x = 2700;
			}
		}else if (pressedUp && DoryTurnsValve4){
			Squeak.play();
			if (sewage1.body.x = 1500){
				sewage1.x = -1500;
			}else if (sewage1.body.x = -1500){
				sewage1.x = 1500;
			}
			if (sewage3.body.x = 2300){
				sewage3.x = -2300;
			}else if (sewage3.body.x = -2300){
				sewage3.x = 2300;
			}
			if (sewage5.body.x = 3100){
				sewage5.x = -3100;
			}else if (sewage5.body.x = -3100){
				sewage5.x = 3100;
			}
		}else if (pressedUp && DoryTurnsValve5){
			Squeak.play();
			if (sewage2.body.x = 1900){
				sewage2.x = -1900;
			}else if (sewage2.body.x = -1900){
				sewage2.x = 1900;
			}
			if (sewage3.body.x = 2300){
				sewage3.x = -2300;
			}else if (sewage3.body.x = -2300){
				sewage3.x = 2300;
			}
		}
	}
	
	// Players interaction with circuit
	var MarlinCircuit1 = (Phaser.Rectangle.intersects(circuit1.getBounds(), Marlin.getBounds()));
	var DoryCircuit1 = (Phaser.Rectangle.intersects(circuit1.getBounds(), Dory.getBounds()));
	var MarlinCircuit2 = (Phaser.Rectangle.intersects(circuit2.getBounds(), Marlin.getBounds()));
	var DoryCircuit2 = (Phaser.Rectangle.intersects(circuit2.getBounds(), Dory.getBounds()));

	if (MarlinActive){
		if (holdUp && MarlinCircuit1 && darkness1.alpha > 0){
			darkness1.alpha -= 0.01;
			circuit1.animations.play('green');
		}else if (MarlinCircuit1 && darkness1.alpha > 0){
			var dialogue = game.add.text(Marlin.x - 250, Marlin.y - 125, 'This button seems to power up something the longer I press it.', {font: '20px Arial', fill: '#fff'}, dialogues);
		}else if (holdUp && MarlinCircuit2 && darkness2.alpha > 0){
			darkness2.alpha -= 0.01;
			darkness3.alpha -= 0.01;
			circuit2.animations.play('green');
		}
	}else if (DoryActive){
		if (holdUp && DoryCircuit1 && darkness1.alpha > 0){
			darkness1.alpha -= 0.01;
			circuit1.animations.play('green');
		}else if (DoryCircuit1 && darkness1.alpha > 0){
			var dialogue = game.add.text(Dory.x - 250, Dory.y - 125, 'This button seems to power up something the longer I press it.', {font: '20px Arial', fill: '#fff'}, dialogues);
		}else if (holdUp && DoryCircuit2 && darkness2.alpha > 0){
			darkness2.alpha -= 0.01;
			darkness3.alpha -= 0.01;
			circuit2.animations.play('green');
		}
	}
}