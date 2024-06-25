import { Example } from "./funcs/scene/scene.js";
import { oneChapter } from "./funcs/key/keyNames.js";

let a;

let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: "arcade",
        arcade: {
            gravity: {
                y: 300,
                x: 0,
            },
            debug: false,
        },
    },
    scene: new Example(oneChapter),
    objCrashEvent: [[, ,], []],
};

var game = new Phaser.Game(config);

