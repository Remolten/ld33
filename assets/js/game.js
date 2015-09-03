var tileSize = 32;

var player, isoGroup, cursorPos;
var entities = [];

var turnState = true;
var moveCT = 0;
var moveWait = 8;
var move = false;
var enemyMoveCT = 0;

var Game = {
    preload: function() {
        game.stage.backgroundColor = 0x777777;
        
        game.time.advancedTiming = true;

        game.plugins.add(new Phaser.Plugin.Isometric(game));
        game.iso.anchor.setTo(0.5, 0.2);
        
        game.load.image('tile', './assets/img/tileBorder.png');
        game.load.image('player', './assets/img/alienPink.png');
        game.load.image('enemy', './assets/img/alienBlue.png');
    },

    create: function() {
        isoGroup = game.add.group();
        playerGroup = game.add.group();
        enemyGroup = game.add.group();
        
        /*player = game.add.isoSprite(-8, -10, 32, 'player', 0, playerGroup);
        player.movement = new this.Movement(player);
        player.anchor.set(0.5, 0);*/
        player = new Entity('player');
        player.add(new Sprite(-8, -10, 32, 'player', 0, playerGroup, 0.5, 0), new Movement(tileSize, 1));
        entities.add(player);
        
        this.spawnTiles();
        this.spawnEnemies();
        
        cursorPos = new Phaser.Plugin.Isometric.Point3();
        
        this.cursors = game.input.keyboard.createCursorKeys();

        game.input.keyboard.addKeyCapture([
            Phaser.Keyboard.LEFT,
            Phaser.Keyboard.RIGHT,
            Phaser.Keyboard.UP,
            Phaser.Keyboard.DOWN,
            Phaser.Keyboard.W,
            Phaser.Keyboard.A,
            Phaser.Keyboard.S,
            Phaser.Keyboard.D,
        ]);
        
        //game.iso.topologicalSort(isoGroup);
    },
    
    update: function() {
        game.iso.unproject(game.input.activePointer.position, cursorPos);
        
        /*isoGroup.forEach(function(tile) {
            tile.collision.highlight();
        });*/
        
        /*enemyGroup.forEach(function(enemy) {
            enemy.collision.highlight();
            enemy.collision.damage();
        });*/
        
        if (turnState) {
            if ((this.cursors.up.isDown || game.input.keyboard.isDown(Phaser.Keyboard.W)) && player.isoY > 0 && !move) {
                player.movement.moveUp();
                move = true;
            }
            else if ((this.cursors.down.isDown || game.input.keyboard.isDown(Phaser.Keyboard.S)) && player.isoY < 256 - 64 && !move) {
                player.movement.moveDown();
                move = true;
            }

            if ((this.cursors.left.isDown || game.input.keyboard.isDown(Phaser.Keyboard.A)) && player.isoX > 0 && !move) {
                player.movement.moveLeft();
                move = true;
            }
            else if ((this.cursors.right.isDown || game.input.keyboard.isDown(Phaser.Keyboard.D)) && player.isoX < 256 - 64 && !move) {
                player.movement.moveRight();
                move = true;
            }
            
            if (move) {
                move = false;
                turnState = false;
            }

            /*if (moveCT >= moveWait) {
                moveCT = 0;
                move = false;
            }

            if (move) {
                moveCT++;
            }*/
        }
        if (!turnState) {
            if (enemyMoveCT >= moveWait) {
                enemyMoveCT = 0;
                this.moveEnemies();
                turnState = true;
            }
            else {
                enemyMoveCT++;
            }
        }
        
        /*enemyGroup.forEach(function(enemy) {
            enemyGroup.forEach(function(enemy2) {
                if (enemy.isoX == enemy2.isoX && enemy.isoY == enemy2.isoY && enemy != enemy2) {
                    switch(enemy.oldType) {
                        case 0:
                            enemy.isoX = enemy.oldPos;
                            break;
                        case 1:
                            enemy.isoY = enemy.oldPos;
                            break;
                    }
                    switch(enemy2.oldType) {
                        case 0:
                            enemy2.isoX = enemy2.oldPos;
                            break;
                        case 1:
                            enemy2.isoY = enemy2.oldPos;
                            break;
                    }
                }
            })
            if (enemy.isoX == player.isoX && enemy.isoY == player.isoY) {
                switch(enemy.oldType) {
                    case 0:
                        enemy.isoX = enemy.oldPos;
                        break;
                    case 1:
                        enemy.isoY = enemy.oldPos;
                        break;
                }
            }
            if (player.isoX == enemy.isoX && player.isoY == enemy.isoY) {
                enemy.destroy();
            }
        });*/
        
        game.iso.simpleSort(isoGroup);
        game.iso.simpleSort(enemyGroup);
        game.iso.simpleSort(playerGroup);
    },
                         
    spawnTiles: function() {
        var tile;
        for (var xx = 0; xx < 256; xx += tileSize) {
            for (var yy = 0; yy < 256; yy += tileSize) {
                //tile = game.add.isoSprite(xx, yy, 0, 'tile', 0, isoGroup);
                tile = new Entity('tile' + xx + '|' + yy);
                tile.add(new Sprite(xx, yy, 0, 'tile', 0, isoGroup, 0.5, 0));
                entities.add(tile);
                //tile.collision = new this.Collision(isoGroup, tile.isoZ, tile.isoZ + 4);
                //tile.selected = false;
                //tile.anchor.set(0.5, 0);
            }
        }
    },
    
    spawnEnemies: function() {
        var enemy, rand, rand2;
        var max = 7;
        var min = 0;
        for (var i = 0; i < 4; i++) {
            rand = Math.floor(Math.random() * (max - min + 1)) + min;
            rand2 = Math.floor(Math.random() * (max - min + 1)) + min;
            enemy = new Entity('enemy' + i);
            enemy.add(new Sprite(32 * rand - 8, 32 * rand2 - 10, 32, 'enemy', 0, enemyGroup, 0.5, 0), new Movement(tileSize, 1));
            entities.add(enemy);
            //enemy = game.add.isoSprite(32 * rand - 8, 32 * rand2 - 10, 32, 'enemy', 0, enemyGroup);
            //enemy.movement = new this.Movement(enemy);
            //enemy.collision = new this.Collision(enemyGroup, enemy.isoZ, enemy.isoZ + 4);
            //enemy.anchor.set(0.5, 0);
        }
    },
    
    moveEnemies: function() {
        var randXY, randDir;
        enemyGroup.forEach(function(enemy) {
            randXY = Math.floor(Math.random() * 2);
            randDir = Math.floor(Math.random() * 2);
            
            switch(randXY) {
                case 0:
                    enemy.oldPos = enemy.isoX;
                    enemy.oldType = 0;
                    switch(randDir) {
                        case 0:
                            if (enemy.isoX < 256 - 64) {
                                enemy.movement.moveRight();
                            }
                            break;
                        case 1:
                            if (enemy.isoX > 0) {
                                enemy.movement.moveLeft();
                            }
                            break;
                    }
                    break;
                case 1:
                    enemy.oldPos = enemy.isoY;
                    enemy.oldType = 1;
                    switch(randDir) {
                        case 0:
                            if (enemy.isoY < 256 - 64) {
                                enemy.movement.moveDown();
                            }
                            break;
                        case 1:
                            if (enemy.isoY > 0) {
                                enemy.movement.moveUp();
                            }
                            break;
                    }
                    break;
            }
        });
    }//,
    
    /*Collision: function(group, zNormal, zHighlight) {
        this.highlight = function() {
            group.forEach(function(entity) {
                var inBounds = entity.isoBounds.containsXY(cursorPos.x, cursorPos.y);
                if (!entity.selected && inBounds) {
                    entity.selected = true;
                    entity.tint = 0x86bfda;
                    game.add.tween(entity).to({isoZ: zHighlight}, 200, Phaser.Easing.Quadratic.InOut, true);
                }
                else if (entity.selected && !inBounds) {
                    entity.selected = false;
                    entity.tint = 0xffffff;
                    game.add.tween(entity).to({isoZ: zNormal}, 200, Phaser.Easing.Quadratic.InOut, true);
                }
            });
        };
        this.damage = function() {
            group.forEach(function(entity) {
                var inBounds = entity.isoBounds.containsXY(cursorPos.x, cursorPos.y);
                
                if (entity.selected && inBounds && game.input.activePointer.isDown && Math.abs(player.isoX - entity.isoX) <= 32 && Math.abs(player.isoY - entity.isoY) <= 32) {
                        entity.destroy();
                    }
            });
        };
    },
    
    Movement: function(entity) {
        this.moveUp = function() { 
            entity.isoY -= 32;
            entity.scale.x = 1;
        };
        this.moveDown = function() {
            entity.isoY += 32;
            entity.scale.x = -1;
        };
        this.moveLeft = function() {
            entity.isoX -= 32;
            entity.scale.x = -1;
        };
        this.moveRight = function() {
            entity.isoX += 32;
            entity.scale.x = 1;
        };
    }*/
};