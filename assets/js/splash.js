var logo;
var wait = 2;
var waitCT = 0;

var Splash = {
    preload: function() {
        game.load.spritesheet('logo', './assets/img/logo.png', 32, 32, 6);
    },
    
    create: function() {
        logo = game.add.sprite(0, 0, 'logo');
        lgDim = Math.max(game.width, game.height);
        smDim = Math.min(game.width, game.height);
        scale = smDim / logo.width;
        logo.scale.set(scale, scale);
        logo.x = (lgDim - logo.width) / 2;
        logo.events.onAnimationComplete.add(this.startMainMenu);
        logo.animations.add('logo');
        logo.animations.play('logo', 1, true);
    },
    
    update: function() {
        if (waitCT == 0)
            logo.animations.stop();
        else if (waitCT == 60 * wait)
            logo.animations.play('logo', 1, false);
        
        waitCT++;
    },
    
    startMainMenu: function() {
        game.state.start('main_menu');
    }
};