import { oneChapter } from "../../key/keyNames.js";

const key = "star";
let object;

export function collectStar(player, star) {
  star.disableBody(true, true);

  // this.score += 10;
  // this.scoreText.setText("Score: " + this.score);

  if (object === undefined) {
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
    object = undefined;

    this.scene.start(oneChapter.key);
  }
}
