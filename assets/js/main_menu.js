var Main_Menu = {
    preload: function() {
        game.load.image('play_btn', './assets/img/blue_button00.png');
        
    },
    
    create: function() {
        play_btn = game.cache.getImage('play_btn')
        game.add.button(game.world.centerX - play_btn.width, game.world.centerY - play_btn.height, 'play_btn', this.startGame, this);
    },
    
    startGame: function() {
        game.state.start('game');
    }
};