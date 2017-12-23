var Main_Menu = {
    preload: function() {
        game.load.image('play_btn', './assets/img/blue_button00.png');
        //game.load.image('play_btn_down', './assets/img/blue_button01.png');
        
    },
    
    create: function() {
        btn_img = game.cache.getImage('play_btn')
        play_btn = game.add.button(game.world.centerX - btn_img.width / 2, game.world.centerY - btn_img.height / 2, 'play_btn', this.startGame, this);
        //play_btn.downFrame = 'play_btn_down';
        var style = {font: '24px Arial', fill: 'white', align: 'center'};
        text = game.add.text(Math.floor(play_btn.x + play_btn.width / 2), Math.floor(play_btn.y + play_btn.height / 2), 'Play Game', style);
        text.anchor.set(0.5, 0.5);
    },
    
    startGame: function() {
        game.state.start('game');
    }
};