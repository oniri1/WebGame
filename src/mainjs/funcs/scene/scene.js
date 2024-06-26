import { Set } from "./set/set.js";

export class Example extends Set {
  cursors;

  create() {
    this.everySet();
  }

  preload() {
    this.load.image("sky", "imgs/sky.png");
    this.load.image("ground", "imgs/platform.png");
    this.load.image("star", "imgs/star.png");
    this.load.image("bomb", "imgs/bomb.png");
    this.load.spritesheet("dude", "imgs/dude.png", {
      frameWidth: 32,
      frameHeight: 48,
    });
  }

  update() {
    //방향키 입력시 동작 파트
    this.cursors = this.input.keyboard.createCursorKeys();
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160);

      this.player.anims.play("left", true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160);

      this.player.anims.play("right", true);
    } else {
      this.player.setVelocityX(0);

      this.player.anims.play("turn");
    }

    // console.log(this.aniSet);
    //점프
    if (this.cursors.up.isDown && this.player.body.touching.down) {
      this.player.setVelocityY(-330);
    }
  }
}