var Main_Menu = {
    preload: function() {
        game.load.image('main_menu', './assets/img/main_menu.png');
    },
    
    create: function() {
        //this.add.sprite(0, 0, 'main_menu');
        this.add.button(0, 0, 'main_menu', this.startGame, this);
    },
    
    startGame: function() {
        this.state.start('game');
    }
};