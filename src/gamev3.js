const cellsize = 50,
    sumotosize = cellsize*0.6;
distanceCollision =((sumotosize**2)+(sumotosize**2));
var WINDOW_HEIGHT = 1080,
    WINDOW_WIDTH = 1920,
    laby1 =[[ '9', '5', '5', '5', '5', '5', '3', '0', '0', '0', '9',' 5', '5', '5', '3', '0', '0', '0', '9', '5', '5', '5', '5', '5', '3'],              //1
    ['10',"0 ", "0", "0", "0", "0",'10', "0", "0",' 9',' 6',' 0',' 0', '0','12', '3', '0', '0','10', '0', '0', '0', '0' ,'0','10'],              //2
    [ '8', '5', '7', '0','13', '5', '2', '0', '9', '6', '0', '0', '0', '0', '0','12', '3', '0', '8', '5', '5', '5', '5', '5', '2'],              //3
    ['10', '0', '0', '0', '0', '0','10',' 0','10', '0', '0', '0', '0', '0', '0', '0','10', '0','10', '0', '0', '0', '0', '0','10'],              //4
    ['10', '0', '0', '0', '0', '0','10',' 0','10', '0', '9', '5', '5', '5', '3', '0','10', '0','10',' 0', '0', '0', '0', '0','10'],              //5
    [ '8', '5', '5', '5', '1', '5', '2', '0','10', '0','10','0 ', '0', '0','10', '0','10', '0', '8', '5', '1', '7',' 0','13', '2'],              //6
    ['10', '0', '0', '0','10',' 0', '8', '5', '4', '1', '4', '3','0 ', '9', '4', '1', '4', '5', '2',' 0','10', '0', '0', '0','10'],              //7
    ['10', '0', '0', '0','10',' 0','10', '0',' 0','10', '0','12',' 5',' 6', '0','10',' 0',' 0','10',' 0','10',' 0', '0',' 0','10'],              //8
    ['10', '0', '0', '0','10', '0','10', '0', '0','10', '0', '9',' 4',' 3', '0','10',' 0',' 0','10',' 0','10',' 0',' 0',' 0','10'],              //9
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
    sprite,
    wall,
    startX = cellsize*14,
    startY = cellsize*6,
    Dx,
    Dy,
    score = 0;


var mainstate = {

    preload: function (){
        game.load.crossOrigin = 'anonymous';
        // wall = game.load.image([
        //     "asset/Mur.png",
        //     "asset/1.png",
        //     "asset/2.png",
        //     "asset/3.png",
        //     "asset/4.png",
        //     "asset/5.png",
        //     "asset/6.png",
        //     "asset/7.png",
        //     "asset/8.png",
        //     "asset/9.png",
        //     "asset/10.png",
        //     "asset/11.png",
        //     "asset/12.png",
        //     "asset/13.png",
        //     "asset/14.png",
        //     "asset/15.png"],);
        // SumotoR = game.load.image(["asset/sumoto/sumoto1.png",
        //                           "asset/sumoto/sumoto2.png",
        // ],);
        // SumotoL = game.load.image(["asset/sumoto/sumotoG1.png",
        //                             "asset/sumoto/sumotoG2.png",
        // ],);
        // SumotoUp = game.load.image(["asset/sumoto/sumotoM.png"]);
        // SumotoD = game.load.image(["asset/sumoto/sumotoD1.png",
        //                             "asset/sumoto/sumotoD2.png",
        // ],);
        // Ninja=game.load.image([		"asset/ninja1D.png",
        //     "asset/ninja1G.png",
        //     "asset/ninja1M.png",]);
        // Bonus = game.load.image([
        //     "asset/sushi1.png",
        //     "asset/sushi2.png",
        //
        // ],);
        game.load.image('walls0','asset/mur/Mur.png')
        game.load.image('walls1','asset/mur/1.png')
        game.load.image('walls2','asset/mur/2.png')
        game.load.image('walls3','asset/mur/3.png')
        game.load.image('walls4','asset/mur/4.png')
        game.load.image('walls5','asset/mur/5.png')
        game.load.image('walls6','asset/mur/6.png')
        game.load.image('walls7','asset/mur/7.png')
        game.load.image('walls8','asset/mur/8.png')
        game.load.image('walls9','asset/mur/9.png')
        game.load.image('walls10','asset/mur/10.png')
        game.load.image('walls11','asset/mur/11.png')
        game.load.image('walls12','asset/mur/12.png')
        game.load.image('walls13','asset/mur/13.png')
        game.load.image('walls14','asset/mur/14.png')
        game.load.image('walls15','asset/mur/15.png')

        game.load.image('pills','asset/pills/ImageRiz.png')

        // game.load.image('sumoto','asset/sumoto/sumoto1.png')
        // game.load.image('sumotoD2','asset/sumoto/sumoto2.png')
        //
        // game.load.image('sumotoU1','asset/sumoto/sumotoM.png')
        //
        // game.load.image('sumotoL1','asset/sumoto/sumotoG1.png')
        // game.load.image('sumotoL2','asset/sumoto/sumotoG2.png')
        //
        // game.load.image('sumotoR1','asset/sumoto/sumotoD1.png')
        // game.load.image('sumotoR2','asset/sumoto/sumotoD2.png')
        game.load.spritesheet('ms','asset/sumoto/spritesheet.png',50,50,7)
        game.load.spritesheet('ws','asset/mur/spritsheetwall.png',50,50)
        game.load.physics('ws-phy','asset/mur/spritsheetwall.json');

    },
    create: function (){

        wall = game.add.group()
        game.physics.startSystem(Phaser.Physics.P2JS);
        for (let i = 0; i < laby1.length; i++) {
            Dx = 0;
            Dy = i * 50;
            for (var j in laby1[i]) {

                if (laby1[i][j] == 0) {
                    mur1 = wall.create(Dx,Dy,'ws',16)
                    Dx = Dx + 50;
                }
                if (laby1[i][j] == 1) {
                    wall.create(Dx, Dy,'ws',1);
                    Dx = Dx + 50;
                }
                if (laby1[i][j] == 2) {
                    wall.create(Dx, Dy,'ws',2);
                    Dx = Dx + 50;
                }
                if (laby1[i][j] == 3) {
                    wall.create(Dx, Dy,'ws',3);
                    Dx = Dx + 50;
                }
                if (laby1[i][j] == 4) {
                    wall.create(Dx, Dy,'ws',4);
                    Dx = Dx + 50;
                }
                if (laby1[i][j] == 5) {
                    wall.create(Dx, Dy,'ws',5);
                    Dx = Dx + 50;
                }
                if (laby1[i][j] == 6) {
                    wall.create(Dx, Dy,'ws',6);
                    Dx = Dx + 50;
                }
                if (laby1[i][j] == 7) {
                    wall.create(Dx, Dy,'ws',7);
                    Dx = Dx + 50;
                }
                if (laby1[i][j] == 8) {
                    wall.create(Dx, Dy,'ws',8);
                    Dx = Dx + 50;
                }
                if (laby1[i][j] == 9) {
                    wall.create(Dx, Dy,'ws',9);
                    Dx = Dx + 50;
                }
                if (laby1[i][j] == 10) {
                    wall.create(Dx, Dy,'ws',10);
                    Dx = Dx + 50;
                }
                if (laby1[i][j] == 11) {
                    wall.create(Dx, Dy,'ws',11);
                    Dx = Dx + 50;
                }
                if (laby1[i][j] == 12) {
                    wall.create(Dx, Dy,'ws',12);
                    Dx = Dx + 50;
                }
                if (laby1[i][j] == 13) {
                    wall.create(Dx, Dy,'ws',13);
                    Dx = Dx + 50;
                }
                if (laby1[i][j] == 14) {
                    wall.create(Dx, Dy,'ws',14);
                    Dx = Dx + 50;
                }
                if (laby1[i][j] == 15) {
                    wall.create(Dx, Dy,'ws',15);
                    Dx = Dx + 50;



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
        game.physics.arcade.enable(sprite);

        sprite.animations.add('down',[1,0]);
        sprite.animations.add('left',[4,5]);
        sprite.animations.add('right',[2,3]);
        sprite.animations.add('up',[6]);
        sprite.animations.add('stop',[0]);
        wall.physicsBodyType = Phaser.Physics.P2JS;
        wall.setAll('body.collideWorldBounds', true);
        wall.setAll('body.allowGravity', false);
        wall.setAll('body.immovable', true);
        wall.setAll('body.static', true);
        mur1.body.loadPolygon('ws-phy','2');


    },
update: function (){
  this.movePlayer();
    game.debug.spriteBounds(sprite);
    game.debug.spriteBounds(wall);
},
    createObjects: function(objectName) {
        var me = this;

        // Create a group to hold the collision shapes
        var objects = game.add.group();
        objects.enableBody = true;
        objects.physicsBodyType = Phaser.Physics.P2JS;
        objects.create(Dx,Dy,objectName);

        objects.forEach(function(child){
            child.body.clearShapes();
            child.body.loadPolygon('ws-phy', objectName);
        }, me);

        return objects;
    },

    movePlayer: function() {
        if ( game.physics.arcade.collide(sprite, wall)){
            direction = 0
        }
        if (this.cursor.left.isDown) {
            sprite.body.velocity.x = -SPEED;
            sprite.body.velocity.y = 0;
            sprite.play('left',5,true)
        }
        else if (this.cursor.right.isDown) {
            sprite.body.velocity.x = SPEED;
            sprite.body.velocity.y = 0;
            sprite.play('right',5,true)

        }
        else if (this.cursor.down.isDown) {
            sprite.body.velocity.y = SPEED;
            sprite.body.velocity.x = 0;
            sprite.play('down',5,true)
        }
        else if(this.cursor.up.isDown){
            sprite.body.velocity.y = -SPEED;
            sprite.body.velocity.x = 0;
            sprite.play('up',5,true)
        }
        else {
            sprite.body.velocity.y = 0;
            sprite.body.velocity.x = 0;
            sprite.play('stop',5,true)


        }
    },

}
var game = new Phaser.Game(WINDOW_WIDTH, WINDOW_HEIGHT, Phaser.AUTO, 'gameDiv', mainstate);