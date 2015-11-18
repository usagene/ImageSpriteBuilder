## Setup
1. Install GraphicsMagick from http://www.graphicsmagick.org/
2. Open command prompt from the root folder
3. Run 'npm install' to resolve all the package dependencies

## File organization
1. Put source images underneath src/images folder
2. rename images with snake case convention, so that all the css classes will be in that format

## Generate Sprite
1. Open build.js to provide the right sprite name and sprite path
2. Run 'node build sprite.png' from the folder where build.js locates, 'sprite.png' is the sprite name
3. You shall see 'Sprite generated' message in the console
