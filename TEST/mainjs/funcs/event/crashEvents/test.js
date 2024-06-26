import { oneChapter } from "../../key/keyNames.js";

const key = "star";
let object;

export function collectStar(player, star) {
    star.disableBody(true, true);

    // this.score += 10;
    // this.scoreText.setText("Score: " + this.score);

    if (object == undefined) {
        this.objArr.forEach((obj) => {
            if (key === obj.children.entries[0].texture.key) {
                object = obj;
            }
        });
    }

    console.log("채집");

    //스타가 더이상 활성화 된게 없음을 확인하는 코드
    if (object.countActive(true) === 0) {
        this.scene.stop(oneChapter.key);
        this.objArr.length = 0;

        // object.children.iterate(function (child) {
        //     //true시 기존에 생성된 장소에서, false시 0, child.x,child.y로 사라진 순간의 위치에서 재생성이 가능, 3번째는 모르겠음, 4번째는 개별로 취급인지 아닌지, 5번째는 활성화
        //     child.enableBody(true, child.x, 0, true, true);
        // });

        // this.scene.start(oneChapter.key);

        // var x =
        //     this.player.x < 400
        //         ? Phaser.Math.Between(400, 800)
        //         : Phaser.Math.Between(0, 400);

        // //이걸로 생성되는 폭탄은 위에서 생성한거랑 아예 다른 판정이네
        // var bomb = this.bombs.create(x, 16, "bomb");
        // bomb.setBounce(1);
        // bomb.setCollideWorldBounds(true);
        // bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
    }
}

