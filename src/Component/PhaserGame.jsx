// src/PhaserGame.js
import React, { useEffect } from "react";
import Phaser from "phaser";

// /funcs/scene/scene.js;
import { Example } from "../mainjs/funcs/scene/scene.js";
import { oneChapter } from "../mainjs/funcs/key/keyNames.js";
import sets from "../mainjs/setting/CreateSet.js";

const camera = sets.cameraConfig;

const PhaserGame = () => {
  useEffect(() => {
    const config = {
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

    const game = new Phaser.Game(config);

    // console.log(game.sound.context.state);
    // game.sound.context.resume();

    // 컴포넌트가 언마운트될 때 게임을 종료
    return () => {
      game.destroy(true);
    };
  }, []);

  return <div id="phaser-container"></div>;
};

export default PhaserGame;
