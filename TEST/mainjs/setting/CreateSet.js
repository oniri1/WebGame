export default {
    backGround: { x: 400, y: 300, fileName: "sky" },
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
    objs: [{ objKey: "star", num: 1, x: 120, y: 0, stepX: 300 }],
};

