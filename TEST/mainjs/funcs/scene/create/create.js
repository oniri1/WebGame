import { Preload } from "../preload/preload.js";
import { collectStar, hitBomb } from "../../event/EveryEvents.js";
import everySetValues from "../../../setting/CreateSet.js";

export class Set extends Preload {
    everySetValues = everySetValues;
    platforms;
    aniDoSet = true;
    player;

    everySet() {
        this.backgroundSet(this.everySetValues.backGround);
        this.platformsSet(this.everySetValues.platforms);
        this.aniMaition(this.everySetValues.anis);
        this.playerSet(this.everySetValues.player);
        this.objsSet(this.everySetValues.objs);

        // this.bombSet();
        this.crashSet();
        this.cameraSet();
    }

    backgroundSet(obj) {
        this.add.image(obj.x, obj.y, obj.fileName);
    }
    platformsSet(arr) {
        this.platforms = this.physics.add.staticGroup();

        arr.forEach((platform) => {
            let insPlatform = this.platforms.create(
                platform.x,
                platform.y,
                platform.fileName
            );

            if (platform.set != undefined) {
                platform.set.forEach((atcion) => {
                    if (atcion.scale != undefined) {
                        insPlatform.setScale(atcion.scale);
                    }
                    if (atcion.refreshBody) {
                        insPlatform.refreshBody();
                    }
                });
            }
        });
    }
    aniMaition(arr) {
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
                        frames: [
                            { key: values.sprite, frame: values.frameStep },
                        ],
                        frameRate: values.fps,
                    });
                }
            });
        }
        this.aniDoSet = false;
    }
    playerSet(obj) {
        //플레이어 파트
        this.player = this.physics.add.sprite(obj.x, obj.y, obj.sprite);
        // player.body.setGravityY(300);
        if (obj.setAuto) {
            this.player.setBounce(0.2);
            this.player.setCollideWorldBounds(true);
        }
    }
    objsSet(arr) {
        arr.forEach((obj) => {
            let setXYValue;

            if (obj.stepX != undefined && obj.stepY != undefined) {
                setXYValue = {
                    x: obj.x,
                    y: obj.y,
                    stepX: obj.stepX,
                    stepY: obj.stepY,
                };
            } else if (obj.stepX != undefined) {
                setXYValue = {
                    x: obj.x,
                    y: obj.y,
                    stepX: obj.stepX,
                };
            } else {
                setXYValue = {
                    x: obj.x,
                    y: obj.y,
                    stepY: obj.stepY,
                };
            }

            this.objs = this.physics.add.group({
                key: obj.objKey,
                repeat: obj.num,
                setXY: setXYValue,
            });

            this.objs.children.iterate(function (child) {
                child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
                child.setBounceX(Phaser.Math.FloatBetween(0.4, 0.8));
            });

            const insObj = this.objs;

            this.objArr.push(insObj);
        });
    }

    bombSet() {
        //폭탄
        this.bombs = this.physics.add.group({
            key: "bomb",
            repeat: 0,
            setXY: { x: 20, y: 0, stepX: 50 },
        });
        this.bombs.children.iterate(function (child) {
            child.body.setGravityX(50);
            child.setBounce(Phaser.Math.FloatBetween(0.8, 1.2));
            child.setCollideWorldBounds(true);
        });

        this.physics.add.overlap(this.player, this.bombs, hitBomb, null, this);
    }
    crashSet() {
        //충돌 파트
        this.physics.add.collider(this.platforms, this.player);
        this.physics.add.collider(this.platforms, this.objArr[0]);
        // this.physics.add.collider(this.bombs, this.platforms);
        // this.physics.add.collider(player, stars);
        // this.physics.add.collider(this.stars, this.stars);
        this.physics.add.overlap(
            this.player,
            this.objArr[0],
            collectStar,
            null,
            this
        );
        // this.scoreText = this.add.text(16, 16, "score: 0", {
        //     fontSize: "32px",
        //     fill: "#000",
        // });
    }
    cameraSet() {
        //camera
        this.cameras.main.setBounds(0, 0, 1600, 1200);
        this.cameras.main.startFollow(this.player);
    }
}

export class Create extends Set {
    //이미지를 불러오 변수 명과 그 주소를 설정하는 코드
    //preload 에서 설정한 변수명을 불러오는 코드
    create() {
        this.everySet();
    }
}

