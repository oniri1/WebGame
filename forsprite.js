class MyGameScene extends Phaser.Scene {
  constructor() {
    super({ key: "MyGameScene" });
  }

  preload() {
    // 스프라이트 시트 로드
    this.load.spritesheet("spritesheetKey", "assets/spritesheet.png", {
      frameWidth: 32,
      frameHeight: 48,
    });
  }

  create() {
    // 스프라이트 시트에서 두 프레임을 결합하여 하나의 이미지로 만듦
    this.combineFramesToSprite(0, 1); // 프레임 0과 1을 결합
  }

  combineFramesToSprite(frame1, frame2) {
    const frame1Image = this.textures.get("spritesheetKey").getSourceImage();
    const frame2Image = this.textures.get("spritesheetKey").getSourceImage();

    // 캔버스를 사용하여 두 프레임을 결합
    const canvas = this.textures
      .createCanvas("combinedImage", 32, 96)
      .getContext();
    canvas.drawImage(frame1Image, 0, 0, 32, 48, 0, 0, 32, 48);
    canvas.drawImage(frame2Image, 0, 48, 32, 48, 0, 48, 32, 48);

    // 결합된 이미지를 스프라이트로 추가
    this.add.image(100, 100, "combinedImage");
  }
}

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: MyGameScene,
};

const game = new Phaser.Game(config);
