export class Preload extends Phaser.Scene {
    // score = 0;
    // scoreText;

    //이미지를 불러오 변수 명과 그 주소를 설정하는 코드
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
}

