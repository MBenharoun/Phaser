var config = {
    key : 'scene',
    type: Phaser.AUTO,
    width: 1500,
    height: 950,
    backgroundColor: '#FFFFFF',
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity:{
                y:0,
                x:0
            },


        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var player,
    wall,
    cursor,
    offset = 50,
    pillsCount = 0,
    pillsAte = 0,
    map,
    tileset,
    layer1,
    layer2,
    layer3,
    SPEED = 150;


    function preload (){
    this.load.image('tiles','asset/mur/spritsheetwall.png')
    this.load.image('pills','asset/pills/ImageRiz.png')

    this.load.tilemapTiledJSON('map','asset/map/Level1.JSON')
    this.load.spritesheet('sumo','asset/sumoto/sumoto.png',{ frameWidth:45 , frameHeight: 45});

    }

    function create () {
    map = this.make.tilemap({ key: "map",tileWidth: 50, tileHeight: 50  });
    tileset = map.addTilesetImage("spritsheetwall","tiles");

    layer1 = map.createLayer("Background", tileset, 50, 50);

    layer2 = map.createLayer("Wall", tileset, 50, 50);
    layer2.setCollisionByProperty({collide: true});

    layer3 = map.createLayer("ghost box", tileset, 50, 50);
    layer3.setCollisionByProperty({collide: true});

    shapes= this.cache.json.get('sumo-shape')
    player = this.physics.add.sprite(14*50+25, 6*50+25, 'sumo',1);
    player.setCircle(18,4,4);

        this.anims.create({
            key: 'down',
            frames: this.anims.generateFrameNumbers('sumo', { start: 0, end: 1 }),
            frameRate: 10,
            repeat: 1
        });
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('sumo', {start:2, end:3}),
            frameRate: 10,
            repeat: 1
        });
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('sumo', { start: 4, end: 5 }),
            frameRate: 10,
            repeat: 1
        });
        this.anims.create({
            key: 'up',
            frames:  [ { key: 'sumo', frame: 6 } ],
            frameRate: 10,
            repeat: 1
        });
        this.anims.create({
            key: 'stop',
            frames:  [ { key: 'sumo', frame: 0 } ],
            frameRate: 10,
            repeat: 1
        });

        cursor = this.input.keyboard.createCursorKeys();

        pills = this.physics.add.group();
        let scene = this;
        map.filterObjects("Object", function (value, index, array) {
            if(value.name == "pills") {
                let pill=scene.physics.add
                    .sprite(value.x + offset, value.y + offset, "pills");
                pills.add(pill);
                pillsCount++;
            }
        });

        this.physics.add.collider(player, layer2);
        this.physics.add.collider(player, layer3);
        this.physics.add.overlap(player, pills, function(sprite, pill) {
            pill.disableBody(true, true);
            pillsAte++;
            player.score+=10;
            if(pillsCount==pillsAte) {
                reset();
            }
        }, null, this);
    }
    function update () {

        if (cursor.left.isDown) {
        player.body.velocity.x = -SPEED;
        player.body.velocity.y = 0;
        player.play('left',true);
    }
    else if (cursor.right.isDown) {
        player.body.velocity.x = SPEED;
        player.body.velocity.y = 0;
        player.play('right',true);
    }
    else if (cursor.down.isDown) {
        player.body.velocity.y = SPEED;
        player.body.velocity.x = 0;
        player.play('down',true);

    }
    else if (cursor.up.isDown) {
        player.body.velocity.y = -SPEED;
        player.body.velocity.x = 0;
        player.play('up',true);
    }
    else {
        player.body.velocity.y = 0;
        player.body.velocity.x = 0;
        player.play('stop',true);
    }

}

