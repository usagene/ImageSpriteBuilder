var nsg = require('node-sprite-generator');
 
nsg({
    src: [
        'src/images/*.png',
        'src/images/*.jpg*',
        'src/images/*.jpeg*',
    ],
    spritePath: 'dist/content/images/costar-products-sprite-scaled.png',
    stylesheet: 'css',
    stylesheetPath: 'dist/content/sprite-scaled.css',
    stylesheetOptions: {
        spritePath: '/content/images/costar-products-sprite.png'
    },
	layoutOptions: {
		scaling: 0.5
	},
    compositor: 'gm'
}, function (err) {
    if(!err){
        console.log('Sprite generated!');
    }else{
       console.log('Failed with: ' + err);
    }
});