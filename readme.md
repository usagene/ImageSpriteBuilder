## Setup
1. Install GraphicsMagick from http://www.graphicsmagick.org/
2. Open command prompt from the root folder
3. Run 'npm install' to resolve all the package dependencies

## File organization
1. Put source images underneath src/images folder
2. rename images with snake case convention, so that all the css classes will be in that format

## Generate Sprite
1. Run 'node build sprite.png' from the folder where build.js locates, 'sprite.png' is the sprite name
2. You shall see 'Sprite generated' message in the console

## Preview Sprites
1. Open dist/index.html
2. Drop the style link, e.g. <link href="content/sprite.css" rel="stylesheet" type="text/css"> in the HEADER tag
3. Put a <DIV> tag with sprite css class, e.g. sprite-image1 and see if the image displayed is what you want.
