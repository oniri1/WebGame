import Phaser from "phaser";

import everySetValues from "../../../setting/CreateSet.js";

export class Set extends Phaser.Scene {
  moveSetted = false;
  objs;
  objArr = [];
  platforms;

  everySetValues = everySetValues;
  aniDoSet = true;
  player;

  everySet() {
    this.backgroundSet(this.everySetValues.backGround);
    this.platformsSet(this.everySetValues.platforms);
    this.aniMaition(this.everySetValues.anis);
    this.playerSet(this.everySetValues.player);
    this.objsSet(this.everySetValues.objs);
    this.bombSet(this.everySetValues.bombs);
    this.worldCrashSet();
    this.playerCrashSet(this.everySetValues.playerCrashOn);
    this.crashEventSet(this.everySetValues.playerCrashEvents);
    this.cameraSet(this.everySetValues.cameraConfig);
  }
  backgroundSet(obj) {
    if (obj !== undefined) {
      this.add.image(obj.x, obj.y, obj.fileName);
    }
  }
  platformsSet(arr) {
    if (arr !== undefined) {
      this.platforms = this.physics.add.staticGroup();

      arr.forEach((platform) => {
        let insPlatform = this.platforms.create(
          platform.x,
          platform.y,
          platform.fileName
        );

        if (platform.set !== undefined) {
          platform.set.forEach((atcion) => {
            if (atcion.scale !== undefined) {
              insPlatform.setScale(atcion.scale);
            }
            if (atcion.refreshBody) {
              insPlatform.refreshBody();
            }
          });
        }
      });
    }
  }
  aniMaition(arr) {
    if (arr !== undefined) {
      if (this.aniDoSet) {
        arr.forEach((values) => {
          let infinityValue;

          if (values.infinity) {
            infinityValue = -1;
          } else {
            infinityValue = 0;
          }

          //애니메이션 파트
          if (values.isFrame) {
            this.anims.create({
              key: values.key,
              frames: this.anims.generateFrameNumbers(values.sprite, {
                start: values.frameStep[0],
                end: values.frameStep[1],
              }),
              frameRate: values.fps,
              repeat: infinityValue,
            });
          } else {
            this.anims.create({
              key: values.key,
              frames: [{ key: values.sprite, frame: values.frameStep }],
              frameRate: values.fps,
            });
          }
        });
      }
      this.aniDoSet = false;
    }
  }
  playerSet(obj) {
    if (obj !== undefined) {
      //플레이어 파트
      this.player = this.physics.add.sprite(obj.x, obj.y, obj.sprite);
      // player.body.setGravityY(300);
      if (obj.setAuto) {
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);
      }
    }
  }
  objsSet(arr) {
    if (arr !== undefined) {
      arr.forEach((obj) => {
        this.objs = this.physics.add.group({
          key: obj.objKey,
          repeat: obj.num,
          setXY: obj.position,
        });

        this.objs.children.iterate(function (child) {
          child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.6));
          child.setBounceX(Phaser.Math.FloatBetween(0.7, 0.9));
        });
        this.objArr.push(this.objs);
      });
    }
  }
  bombSet(arr) {
    if (arr !== undefined) {
      //폭탄
      arr.forEach((obj) => {
        this.objs = this.physics.add.group({
          key: obj.objKey,
          repeat: obj.num - 1,
          setXY: obj.position,
        });

        this.objs.children.iterate(function (child) {
          child.body.setGravityX(obj.setGravity?.x || 0);
          child.body.setGravityY(obj.setGravity?.y || 0);
          child.setVelocityX(obj.setVelocity?.x || 0);
          child.setVelocityY(obj.setVelocity?.y || 0);

          child.setBounce(Phaser.Math.FloatBetween(0.8, 1));
        });
        this.objArr.push(this.objs);
      });
    }
  }
  worldCrashSet() {
    this.objArr.forEach((obj) => {
      obj.children.iterate(function (child) {
        child.setCollideWorldBounds(true);
      });
    });
  }
  playerCrashSet(arr) {
    //주석 처리한 건 개별 기능으로 만들지 않은 기능이다. 나중에 쓸 이유가 생기면 만들 예정
    //모든 플랫폼과 플레이어
    this.physics.add.collider(this.platforms, this.player);
    //모든 플랫폼과 오브젝트
    this.objArr.forEach((obj) => {
      this.physics.add.collider(this.platforms, obj);
    });

    //플레이어와 부딪힐 오브젝트
    if (arr !== undefined) {
      arr.forEach((str) => {
        this.objArr.forEach((obj) => {
          if (str === obj.children.entries[0].texture.key) {
            this.physics.add.collider(this.player, obj);
          }
        });
      });
    }
  }
  //
  crashEventSet(arr) {
    arr.forEach((event) => {
      let matchedObj;

      this.objArr.forEach((obj) => {
        if (event[0] === obj.children.entries[0].texture.key) {
          matchedObj = obj;
        }
      });

      this.physics.add.overlap(this.player, matchedObj, event[1], null, this);
    });
  }
  cameraSet(obj) {
    //camera
    this.cameras.main.setBounds(0, 0, obj.x, obj.y);
    this.cameras.main.startFollow(this.player);
  }
}
