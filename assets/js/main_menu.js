var play_btn;

var Main_Menu = {
    preload: function() {
        play_btn = game.load.image('main_menu', './assets/img/blue_button00.png');
        console.log(play_btn);
    },
    
    create: function() {
        //game.world.centerX
        game.add.button(game.world.centerX - play_btn.width, game.world.centerY - play_btn.height, 'main_menu', this.startGame, this);
    },
    
    startGame: function() {
        game.state.start('game');
    }
};