import { collectStar, hitBomb } from "../funcs/event/EveryEvents.js";

export default {
    backGround: { x: 400, y: 300, fileName: "sky" },

    anis: [
        {
            key: "left",
            sprite: "dude",
            frameStep: [0, 3],
            fps: 10,
            isFrame: true,
            infinity: true,
        },
        {
            key: "turn",
            sprite: "dude",
            frameStep: 4,
            fps: 20,
        },
        {
            key: "right",
            sprite: "dude",
            isFrame: true,
            frameStep: [5, 8],
            fps: 10,
            infinity: true,
        },
    ],
    player: { x: 100, y: 450, sprite: "dude", setAuto: true },
    platforms: [
        {
            x: 400,
            y: 568,
            fileName: "ground",
            set: [{ scale: 2 }, { refreshBody: true }],
        },
        { x: 600, y: 400, fileName: "ground" },
        { x: 750, y: 220, fileName: "ground" },
    ],
    objs: [{ objKey: "star", num: 1, position: { x: 120, y: 0, stepX: 300 } }],
    bombs: [
        {
            objKey: "bomb",
            num: 2,
            position: { x: 20, y: 0, stepX: 50 },
            // setGravity: { x: 50 },
            // setVelocity: { x: 160 },
        },
    ],
    // playerCrashOn: ["bomb"],
    playerCrashEvents: [
        ["star", collectStar],
        ["bomb", hitBomb],
    ],
};

// this.scoreText = this.add.text(16, 16, "score: 0", {
//     fontSize: "32px",
//     fill: "#000",
// });

