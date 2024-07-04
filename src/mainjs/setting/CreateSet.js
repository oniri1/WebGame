// import { collectStar, hitBomb } from "../funcs/event/EveryEvents.js";

const config = {
  backGround: ["wood0", "wood1", "wood2", "wood3", "wood4", "wood5", "wood6"],

  anis: [
    {
      key: "left",
      sprite: "male_left",
      frameStep: [10, 17],
      fps: 10,
      isFrame: true,
      // infinity: true,
    },
    {
      key: "right",
      sprite: "male_right",
      isFrame: true,
      frameStep: [19, 12],
      fps: 10,
      // infinity: true,
    },
    {
      key: "stop_right",
      sprite: "male_right",
      isFrame: true,
      frameStep: [5, 9],
      fps: 5,
    },
    {
      key: "stop_left",
      sprite: "male_left",
      frameStep: [0, 4],
      fps: 5,
      isFrame: true,
    },
  ],
  player: { x: 100, y: 450, sprite: "male_left", setAuto: true },
  platforms: [
    {
      x: 400,
      y: 580,
      fileName: "ground",
      set: [
        { scale: { x: 1, y: 0.8 } },
        { refreshBody: true },
        { color: 0x996600 },
      ],
    },
    {
      x: 400,
      y: 380,
      fileName: "ground",
      set: [{ scale: { x: 1, y: 0.7 } }, { color: 0x996600 }],
    },
    {
      x: 400,
      y: 180,
      fileName: "ground",
      set: [{ scale: { x: 1, y: 0.7 } }, { color: 0x996600 }],
    },
  ],
  // objs: [{ objKey: "star", num: 1, position: { x: 120, y: 0, stepX: 300 } }],

  // bombs: [
  //   // {
  //   //   objKey: "bomb",
  //   //   num: 2,
  //   //   position: { x: 20, y: 0, stepX: 50 },
  //   //   // setGravity: { x: 50 },
  //   //   // setVelocity: { x: 160 },
  //   // },
  // ],

  // playerCrashOn: ["bomb"],

  // playerCrashEvents: [
  //   ["star", collectStar],
  //   ["bomb", hitBomb],
  // ],

  cameraConfig: { x: 800, y: 600 },
};

//안만듬
// this.scoreText = this.add.text(16, 16, "score: 0", {
//     fontSize: "32px",
//     fill: "#000",
// });

export default config;
