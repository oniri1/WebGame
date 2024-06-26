import { Example } from "./funcs/scene/scene.js";
import { oneChapter } from "./funcs/key/keyNames.js";
import sets from "./setting/CreateSet.js";

const camera = sets.cameraConfig;

let config = {
    type: Phaser.AUTO,
    width: camera.x,
    height: camera.y,
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
    //key:one
    scene: new Example(oneChapter),
};

var game = new Phaser.Game(config);

