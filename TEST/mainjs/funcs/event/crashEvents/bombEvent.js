export function hitBomb(player, bomb) {
    this.physics.pause();
    player.setTint(0xff0000);
    player.anims.play("turn");
}

