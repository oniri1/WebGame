import { Set } from "./set/set.js";

export class Example extends Set {
  cursors;
  lastMove = 0;

  create() {
    this.everySet();
  }

  preload() {
    this.load.image("backGround", "imgs/background/stone.png");
    this.load.image("ground", "imgs/platform.png");

    this.load.spritesheet("male_left", "imgs/male_left.png", {
      frameWidth: 80,
      frameHeight: 64,
    });
    this.load.spritesheet("male_right", "imgs/male_right.png", {
      frameWidth: 80,
      frameHeight: 64,
    });
  }

  update() {
    //방향키 입력시 동작 파트
    this.cursors = this.input.keyboard.createCursorKeys();
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160);
      this.player.anims.play("left", true);
      this.lastMove = 1;
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160);
      this.player.anims.play("right", true);
      this.lastMove = 0;
    } else {
      this.player.setVelocityX(0);
      this.keUp = true;

      if (this.lastMove === 0) {
        this.player.anims.play("stop_right", true);
      } else {
        this.player.anims.play("stop_left", true);
      }

      // this.player.anims.stop();
    }

    // console.log(this.aniSet);
    //점프
    if (this.cursors.up.isDown && this.player.body.touching.down) {
      this.player.setVelocityY(-330);
    }
  }
}
