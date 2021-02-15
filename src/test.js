
var sprite,
    WINDOW_HEIGHT = 1080,
    WINDOW_WIDTH = 1920,
    wall,
    SPEED = 150;
var mainstate = {

    preload: function ()
{

    //  37x45 is the size of each frame
    //  There are 18 frames in the PNG - you can leave this value blank if the frames fill up the entire PNG, but in this case there are some
    //  blank frames at the end, so we tell the loader how many to load
    game.load.spritesheet('ms', 'asset/sumoto/spritesheet.png', 50, 50, 7);

    game.load.spritesheet('ws', 'asset/mur/spritsheetwall.png', 50, 50, 16)
    game.load.physics('ws-phy','asset/mur/spritsheetwall.json')

},

    create:function () {
        game.physics.startSystem(Phaser.Physics.P2JS);

        game.input.keyboard.addKeyCapture([Phaser.Keyboard.UP, Phaser.Keyboard.DOWN,
        Phaser.Keyboard.LEFT, Phaser.Keyboard.RIGHT]);
    this.cursor = game.input.keyboard.createCursorKeys();
        wall = game.add.group()

    W3 = wall.create(200, 100, 'ws',4);
        game.physics.enable(wall,Phaser.Physics.P2JS);
        W3.body.clearShapes();
        W3.body.loadPolygon('ws-phy','4')
        W3 = wall.create(300, 100, 'ws',5);
        game.physics.enable(wall,Phaser.Physics.P2JS);
        W3.body.clearShapes();
        W3.body.loadPolygon('ws-phy','5')
         wall.setAll('body.static', 'true');
         wall.setAll('body.allowGravity', 'true');
    sprite = game.add.sprite(40, 100, 'ms');
    game.physics.enable(sprite,Phaser.Physics.P2JS);
    sprite.body.immovable = true;
    sprite.body.static = false;
    sprite.body.fixedRotation = true;
    sprite.animations.add('down', [1, 0]);
    sprite.animations.add('left', [4, 5]);
    sprite.animations.add('right', [2, 3]);
    sprite.animations.add('up', [6]);
    sprite.animations.add('stop', [0]);

    // game.add.tween(sprite).to({ x: game.width }, 10000, Phaser.Easing.Linear.None, true);

},
    update:function () {
    this.movePlayer();

    game.physics.arcade.collide(sprite, wall);


},

    movePlayer:function () {
    if (this.cursor.left.isDown) {
        sprite.body.velocity.x = -SPEED;
        sprite.body.velocity.y = 0;
        sprite.play('left', 5, true)
    } else if (this.cursor.right.isDown) {
        sprite.body.velocity.x = SPEED;
        sprite.body.velocity.y = 0;
        sprite.play('right', 5, true)
    } else if (this.cursor.down.isDown) {
        sprite.body.velocity.y = SPEED;
        sprite.body.velocity.x = 0;
        sprite.play('down', 5, true)

    } else if (this.cursor.up.isDown) {
        sprite.body.velocity.y = -SPEED;
        sprite.body.velocity.x = 0;
        sprite.play('up', 5, true)
    } else {
        sprite.body.velocity.y = 0;
        sprite.body.velocity.x = 0;
        sprite.play('stop', 5, true)
    }

},
}
var game = new Phaser.Game(WINDOW_WIDTH, WINDOW_HEIGHT, Phaser.AUTO, 'gameDiv', mainstate);