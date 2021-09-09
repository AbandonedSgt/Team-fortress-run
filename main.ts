scene.setBackgroundColor(9)
tiles.setTilemap(tilemap`level1`)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . f . . . b b . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . f . f . . . . . . . . 
    . . . . f f . f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . . f . f . . . . . . . 
    . . . . . . f . f f . . . . . . 
    . . . . . f . . . f . . . . . . 
    . . . . . f . . . f f . . . . . 
    `, SpriteKind.Player)
