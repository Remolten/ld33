var game = new Phaser.Game(650, 400, Phaser.Auto, 'LD33 Game');

game.state.add('splash', Splash);
game.state.add('main_menu', Main_Menu);
game.state.add('game', Game);

//game.state.start('main_menu');
game.state.start('splash');
