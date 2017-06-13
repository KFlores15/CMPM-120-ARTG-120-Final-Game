function ladder(game, key, frame, x, y, scale){
	// Call to Phaser.Sprite
	// New Sprite(game, x, y, key, frame)
	Phaser.Sprite.call(this, game, 0, 0, key, frame);
	
	// Add properties
	this.anchor.setTo(0.5, 0.5);
	
	this.x = x;
	this.y = y;
	
	this.scale.x = scale;
	this.scale.y = scale;
}

// Specify prefab's prototype and constructor
ladder.prototype = Object.create(Phaser.Sprite.prototype);
ladder.prototype.constructor = ladder;

// Override prototype's inherited method
ladder.prototype.update = function() {
	// Define cursors to arrow keys
	var cursors = game.input.keyboard.createCursorKeys();
	var holdUp = cursors.up.isDown;
	var holdDown = cursors.down.isDown;
	
	// Player's movement for climbing ladder
	var MarlinonLadder = (Phaser.Rectangle.intersects(this.getBounds(), Marlin.getBounds()));
	var DoryonLadder = (Phaser.Rectangle.intersects(this.getBounds(), Dory.getBounds()));
	
	if (MarlinActive){
		if (holdUp && MarlinonLadder && Marlin.y > this.y - 180){
			Marlin.x = this.x;
			Marlin.y -= 11;
			Marlin.animations.play('mClimbing');
			Marlin.body.gravity.y = 0;
		}else if (holdUp && MarlinonLadder && Marlin.y < this.y - 180){
			Marlin.x = this.x;
			Marlin.y = this.y - 200;
			Marlin.animations.play('mClimbing');
		}else if (holdDown && MarlinonLadder && Marlin.y < this.y + 60){
			Marlin.x = this.x;
			Marlin.y += 5;
			Marlin.animations.play('mSliding');
			Marlin.body.gravity.y = 0;
		}else if (MarlinonLadder){
			Marlin.body.gravity.y = 500;
		}else{
			Marlin.body.gravity.y = 500;
		}
	}

	if (DoryActive){
		if (holdUp && DoryonLadder && Dory.y > this.y - 180){
			Dory.x = this.x;
			Dory.y -= 11;
			Dory.animations.play('fClimbing');
			Dory.body.gravity.y = 0;
		}else if (holdUp && DoryonLadder && Dory.y < this.y - 180){
			Dory.x = this.x;
			Dory.y = this.y - 200;
			Dory.animations.play('fClimbing');
		}else if (holdDown && DoryonLadder && Dory.y < this.y + 60){
			Dory.x = this.x;
			Dory.y += 5;
			Dory.animations.play('fSliding');
			Dory.body.gravity.y = 0;
		}else if (DoryonLadder){
			Dory.body.gravity.y = 500;
		}else{
			Dory.body.gravity.y = 500;
		}
	}
}