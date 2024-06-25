import { Create } from "../create/create.js";

export class update extends Create {
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

