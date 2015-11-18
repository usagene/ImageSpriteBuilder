## Setup
1. Install GraphicsMagick from http://www.graphicsmagick.org/
2. Open command prompt from the folder contains build.js
3. Install all node module dependencies

```
 npm install
```

## File organization
1. Put source images underneath src/images folder
2. rename images with snake case convention, so that all the css classes will be in that format

## Generate Sprite
1. Run below code from command prompt, where 'sprite.png' is the sprite name

```
node build sprite.png
```
2. You shall see 'Sprite generated' message in the console

## Generate sprite with scale
The steps are same to Generate Sprite, in the 1st step, instead of calling 'node build sprite.png', you can do 'node build sprite.png 0.5'. The sprite image will be scaled to 50% of original size.

## Preview Sprite Images
1. Open dist/index.html
2. Drop the style link, e.g. <link href="content/sprite.css" rel="stylesheet" type="text/css"> in the HEADER tag
3. Put a DIV tag with sprite css class, e.g. sprite-image1 and see if the image displayed is what you want.
