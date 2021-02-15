const cellsize = 50,
    sumotosize = cellsize*0.6;
var WINDOW_HEIGHT = 800,
    WINDOW_WIDTH = 1350,
    laby1 =[
        [ '9', '5', '5', '5', '5', '5', '3', '0', '0', '0', '9',' 5', '5', '5', '3', '0', '0', '0', '9', '5', '5', '5', '5', '5', '3'],              //1
        ['10',"0 ", "0", "0", "0", "0",'10', "0", "0",' 9',' 6',' 0',' 0', '0','12', '3', '0', '0','10', '0', '0', '0', '0' ,'0','10'],              //2
        [ '8', '5', '7', '0','13', '5', '2', '0', '9', '6', '0', '0', '0', '0', '0','12', '3', '0', '8', '5', '5', '5', '5', '5', '2'],              //3
        ['10', '0', '0', '0', '0', '0','10',' 0','10', '0', '0', '0', '0', '0', '0', '0','10', '0','10', '0', '0', '0', '0', '0','10'],              //4
        ['10', '0', '0', '0', '0', '0','10',' 0','10', '0', '9', '5', '5', '5', '3', '0','10', '0','10',' 0', '0', '0', '0', '0','10'],              //5
        [ '8', '5', '5', '5', '1', '5', '2', '0','10', '0','10','0 ', '0', '0','10', '0','10', '0', '8', '5', '1', '7',' 0','13', '2'],              //6
        ['10', '0', '0', '0','10',' 0', '8', '5', '4', '1', '4', '3','0 ', '9', '4', '1', '4', '5', '2',' 0','10', '0', '0', '0','10'],              //7
        ['10', '0', '0', '0','10',' 0','10', '0',' 0','10', '0','12',' 5',' 6', '0','10',' 0',' 0','10',' 0','10',' 0', '0',' 0','10'],              //8
        ['10', '0', '0', '0','10', '0','10', '0', '0','10', '0', '9','0 ',' 3', '0','10',' 0',' 0','10',' 0','10',' 0',' 0',' 0','10'],              //9
        ['10','0 ', '0', '0','10', '0','10',' 0',' 0','10', '0','12',' 4',' 6', '0','10',' 0',' 0','10',' 0','10',' 0',' 0',' 0','10'],              //10
        [ '8', '7','0 ','13',' 4',' 5',' 2', '0', '0','10', '0', '9', '5',' 3', '0','10', '0',' 0',' 8',' 5',' 4',' 5',' 5', '5', '2'],              //11
        ['10','0 ', '0', '0',' 0',' 0',' 8',' 5',' 1',' 4',' 1',' 6',' 0','12', '1',' 4',' 1', '5',' 2','0 ',' 0',' 0',' 0',' 0','10'],              //12
        [ '8', '5', '5', '5', '5', '5', '2',' 0','10', '0','10',' 0',' 0',' 0','10','0 ','10','0' , '8',' 5',' 7', '0','13',' 5', '2'],              //13
        ['10', '0', '0', '0',' 0', '0','10', '0','10', '0','12',' 3', '0', '9',' 6','0 ','10','0 ','10','0 ',' 0',' 0',' 0', '0','10'],              //14
        ['12', '5', '5', '5', '5',' 5',' 4',' 5',' 4', '7', '0','12',' 5',' 6', '0','13',' 4',' 5',' 4',' 5',' 5',' 5', '5',' 5',' 6'],				 //15
    ],
    definitionLevel=[
        {labyrinthe:laby1,startX:12,startY:4,direction:0},
    ],
    SPEED = 180,
    direction,
    sprite,
    wall,
    startX = cellsize*13,
    startY = cellsize*5,
    cptX,
    cptY,
    x =0,
    y =0,
    score = 0;
var mainstate = {
    preload: function (){
        game.load.crossOrigin = 'anonymous';
        game.load.image('pills','asset/pills/ImageRiz.png')

        game.load.spritesheet('ms','asset/sumoto/sumoto.png',45,45,7)
        game.load.spritesheet('ws','asset/mur/spritsheetwall.png',50,50,17)
        game.load.physics('ws-phy','asset/mur/spritsheetwall.json');
    },
    create: function (){
        game.add.tileSprite(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT, 'ws');
        wall = game.add.group()
        game.physics.startSystem(Phaser.Physics.P2JS);
        for (let i = 0; i < laby1.length; i++) {
            Dx = 50;
            Dy = i * 50+50;
            for (var j in laby1[i]) {

                if (laby1[i][j] == 0) {

                    W16 = wall.create(Dx,Dy,'ws',16)
                    Dx = Dx + 50;
                    game.physics.enable(wall,Phaser.Physics.P2JS);
                    W16.body.clearShapes();
                    W16.body.loadPolygon('ws-phy','Mur')
                }
                if (laby1[i][j] == 1) {
                    W1 = wall.create(Dx, Dy,'ws',1);
                    Dx = Dx + 50;
                    game.physics.enable(wall,Phaser.Physics.P2JS);
                    W1.body.clearShapes();
                    W1.body.loadPolygon('ws-phy',1)
                }
                if (laby1[i][j] == 2) {
                    W2 = wall.create(Dx, Dy,'ws',2);
                    Dx = Dx + 50;
                    game.physics.enable(wall,Phaser.Physics.P2JS);
                    W2.body.clearShapes();
                    W2.body.loadPolygon('ws-phy',2);
                }
                if (laby1[i][j] == 3) {
                    W3 =wall.create(Dx, Dy,'ws',3);
                    Dx = Dx + 50;
                    game.physics.enable(wall,Phaser.Physics.P2JS);
                    W3.body.clearShapes();
                    W3.body.loadPolygon('ws-phy',3);

                }
                if (laby1[i][j] == 4) {
                    W4 = wall.create(Dx, Dy,'ws',4);
                    Dx = Dx + 50;
                    game.physics.enable(wall,Phaser.Physics.P2JS);
                    W4.body.clearShapes();
                    W4.body.loadPolygon('ws-phy',4);
                }
                if (laby1[i][j] == 5) {
                    W5 = wall.create(Dx, Dy,'ws',5);
                    Dx = Dx + 50;
                    game.physics.enable(wall,Phaser.Physics.P2JS);
                    W5.body.clearShapes();
                    W5.body.loadPolygon('ws-phy',5);
                }
                if (laby1[i][j] == 6) {
                    W6 = wall.create(Dx, Dy,'ws',6);
                    Dx = Dx + 50;
                    game.physics.enable(wall,Phaser.Physics.P2JS);
                    W6.body.clearShapes();
                    W6.body.loadPolygon('ws-phy',6);
                }
                if (laby1[i][j] == 7) {
                    W7 = wall.create(Dx, Dy,'ws',7);
                    Dx = Dx + 50;
                    game.physics.enable(wall,Phaser.Physics.P2JS);
                    W7.body.clearShapes();
                    W7.body.loadPolygon('ws-phy',7);
                }
                if (laby1[i][j] == 8) {
                    W8 = wall.create(Dx, Dy,'ws',8);
                    Dx = Dx + 50;
                    game.physics.enable(wall,Phaser.Physics.P2JS);
                    W8.body.clearShapes();
                    W8.body.loadPolygon('ws-phy',8);
                }
                if (laby1[i][j] == 9) {
                    W9 = wall.create(Dx, Dy,'ws',9);
                    Dx = Dx + 50;
                    game.physics.enable(wall,Phaser.Physics.P2JS);
                    W9.body.clearShapes();
                    W9.body.loadPolygon('ws-phy',9);
                }
                if (laby1[i][j] == 10) {
                    W10 = wall.create(Dx, Dy,'ws',10);
                    Dx = Dx + 50;
                    game.physics.enable(wall,Phaser.Physics.P2JS);
                    W10.body.clearShapes();
                    W10.body.loadPolygon('ws-phy',10);
                }
                if (laby1[i][j] == 11) {
                    W11 = wall.create(Dx, Dy,'ws',11);
                    Dx = Dx + 50;
                    game.physics.enable(wall,Phaser.Physics.P2JS);
                    W11.body.clearShapes();
                    W11.body.loadPolygon('ws-phy',11)
                }
                if (laby1[i][j] == 12) {
                    W12 = wall.create(Dx, Dy,'ws',12);
                    Dx = Dx + 50;
                    game.physics.enable(wall,Phaser.Physics.P2JS);
                    W12.body.clearShapes();
                    W12.body.loadPolygon('ws-phy',12)
                }
                if (laby1[i][j] == 13) {
                    W13 = wall.create(Dx, Dy,'ws',13);
                    Dx = Dx + 50;
                    game.physics.enable(wall,Phaser.Physics.P2JS);
                    W13.body.clearShapes();
                    W13.body.loadPolygon('ws-phy',13)
                }
                if (laby1[i][j] == 14) {
                    W14 = wall.create(Dx, Dy,'ws',14);
                    Dx = Dx + 50;
                    game.physics.enable(wall,Phaser.Physics.P2JS);
                    W14.body.clearShapes();
                    W14.body.loadPolygon('ws-phy',14)
                }
                if (laby1[i][j] == 15) {
                    W15 = wall.create(Dx, Dy,'ws',15);
                    Dx = Dx + 50;
                    game.physics.enable(wall,Phaser.Physics.P2JS);
                    W15.body.clearShapes();
                    W15.body.loadPolygon('ws-phy',15)


                }
            }
        }
        game.physics.arcade.checkCollision.right = true;
        game.physics.arcade.checkCollision.left = true;
        game.physics.arcade.checkCollision.up = true;
        game.physics.arcade.checkCollision.down = true;
        game.input.keyboard.addKeyCapture([Phaser.Keyboard.UP, Phaser.Keyboard.DOWN,
            Phaser.Keyboard.LEFT, Phaser.Keyboard.RIGHT]);
        this.cursor = game.input.keyboard.createCursorKeys();
        sprite = game.add.sprite(startX,startY,'ms')
        game.physics.enable(sprite,Phaser.Physics.P2JS);
        sprite.animations.add('down',[1,0]);
        sprite.animations.add('left',[4,5]);
        sprite.animations.add('right',[2,3]);
        sprite.animations.add('up',[6]);
        sprite.animations.add('stop',[0]);
        sprite.body.collideWorldBounds=true;
        sprite.body.fixedRotation=true;
        game.physics.enable(wall,Phaser.Physics.P2JS);
        wall.setAll('body.allowGravity', true);
        wall.setAll('body.static', true);
    },
    update: function (){
        this.movePlayer();
    },
    movePlayer: function() {
        if ( game.physics.arcade.collide(sprite, wall)){
            direction = 0
        }
        if (this.cursor.left.isDown ) {
            sprite.body.velocity.x = -SPEED;
            sprite.body.velocity.y = 0;
            sprite.play('left',5,true)
            direction = 8
        }
        else if (this.cursor.right.isDown ) {
            sprite.body.velocity.x = SPEED;
            sprite.body.velocity.y = 0;
            sprite.play('right',5,true)
            direction = 2
        }
        else if (this.cursor.down.isDown) {
            sprite.body.velocity.y = SPEED;
            sprite.body.velocity.x = 0;
            sprite.play('down',5,true)
            direction = 4

        }
        else if(this.cursor.up.isDown ){
            sprite.body.velocity.y = -SPEED;
            sprite.body.velocity.x = 0;
            sprite.play('up',5,true)
            direction = 1
        }
        else {
            sprite.body.velocity.y = 0;
            sprite.body.velocity.x = 0;
            sprite.play('stop',5,true)
            direction = 0
        }

    },
}
var game = new Phaser.Game(WINDOW_WIDTH, WINDOW_HEIGHT, Phaser.AUTO, 'gameDiv', mainstate);