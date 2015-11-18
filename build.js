var nsg = require('node-sprite-generator'),
    // 1st arg is path to node, 2nd arg is cwd
    args = process.argv.slice(2),
    spriteName = args[0] || 'products-sprite.png',
    scale = args.length > 1 ? args[1] : 1,
    spritePath = args.length > 2 ? args[2] : '/content/images/' + spriteName;
    
nsg({
    src: [
        'src/images/*.png',
        'src/images/*.jpg*',
        'src/images/*.jpeg*',
    ],
    spritePath: 'dist/content/images/' + spriteName,
    stylesheet: 'css',
    stylesheetPath: 'dist/content/sprite.css',
    stylesheetOptions: {
        spritePath: spritePath
    },
    layout:'packed', //vertical, packed, horizontal, diagonal
    layoutOptions: {
        scaling: scale
    },
    compositor: 'gm'
}, function (err) {
    if(!err){
        console.log('Sprite generated!');
    }else{
       console.log('Failed with: ' + err);
    }
});