namespace SpriteKind {
    export const Health = SpriteKind.create()
    export const Powerup = SpriteKind.create()
}

let bogey: Sprite = null
let heart: Sprite = null
let drop = 0
let dart: Sprite = null
let lemon: Sprite = null
let burger: Sprite = null
let powerupOn = 0
let currentPowerup = 0

// Player Init 
let spacePlane: Sprite = null
spacePlane = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 4 4 4 4 4 4 . . . . . 
    . . . 4 4 4 5 4 4 7 7 4 . . . . 
    . 4 4 4 5 5 5 4 2 2 2 4 4 . . . 
    . 4 f f f f f 4 4 4 2 2 2 4 4 . 
    . . 4 4 5 5 5 4 4 4 f f f f . . 
    . . . . 4 4 4 4 4 f f f . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
spacePlane.setStayInScreen(true)
info.setLife(3)
controller.moveSprite(spacePlane, 100, 100)
currentPowerup = 0
powerupOn = 0

// Fire on A pressed
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    dart = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, spacePlane, 200, 0)
    music.pewPew.play()
    if (currentPowerup == 1 && powerupOn == 1) {
        dart = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 5 5 5 5 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, spacePlane, 200, 75)
        dart = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 5 5 5 5 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, spacePlane, 200, -75)
    } else if (currentPowerup == 2 && powerupOn == 1) {
        pause(100)
        music.pewPew.play()
        dart = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 5 5 5 5 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, spacePlane, 200, 0)
        pause(100)
        music.pewPew.play()
        dart = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 5 5 5 5 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, spacePlane, 200, 0)
    } 
})

// Overlaps
sprites.onOverlap(SpriteKind.Player, SpriteKind.Powerup, function (sprite, otherSprite) {
    otherSprite.destroy(effects.smiles, 500)
    music.beamUp.play()
    if (burger == otherSprite) {
        currentPowerup = 1
    } else if (lemon == otherSprite) {
        currentPowerup = 2
    }
    powerupOn = 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Health, function (sprite, otherSprite) {
    otherSprite.destroy(effects.hearts, 500)
    music.powerUp.play()
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    music.smallCrash.play()
    sprite.destroy(effects.fire, 100)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.startEffect(effects.ashes, 500)
    info.changeLifeBy(-1)
    scene.cameraShake(4, 500)
    currentPowerup = 0
    powerupOn = 0
    music.bigCrash.play()
})

// Power Up Spawner
game.onUpdateInterval(5000, function () {
    drop = randint(0, 2)
    if (drop == 0) {
        heart = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f f f f . f f f f f . . 
            . . f f 3 3 3 f f f 3 3 3 f f . 
            . . f 3 3 3 3 3 f 3 3 3 3 3 f . 
            . . f 3 3 3 3 3 3 3 1 1 3 3 f . 
            . . f 3 3 3 3 3 3 3 1 1 3 3 f . 
            . . f 3 3 3 3 3 3 3 3 3 3 3 f . 
            . . f f 3 3 3 b b b 3 3 3 f f . 
            . . . f f 3 b b b b b 3 f f . . 
            . . . . f f b b b b b f f . . . 
            . . . . . f f b b b f f . . . . 
            . . . . . . f f b f f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Health)
        heart.setVelocity(-100, 0)
        heart.left = scene.screenWidth()
        heart.y = randint(0, scene.screenHeight())
        heart.setFlag(SpriteFlag.AutoDestroy, true)
        animation.runImageAnimation(
        heart,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f f f f . f f f f f . . 
            . . f f 3 3 3 f f f 3 3 3 f f . 
            . . f 3 3 3 3 3 f 3 3 3 3 3 f . 
            . . f 3 3 3 3 3 3 3 1 1 3 3 f . 
            . . f 3 3 3 3 3 3 3 1 1 3 3 f . 
            . . f 3 3 3 3 3 3 3 3 3 3 3 f . 
            . . f f 3 3 3 b b b 3 3 3 f f . 
            . . . f f 3 b b b b b 3 f f . . 
            . . . . f f b b b b b f f . . . 
            . . . . . f f b b b f f . . . . 
            . . . . . . f f b f f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . f f f f f f . f f f f f f . 
            . f f 3 3 3 3 f f f 3 3 3 3 f f 
            . f 3 3 3 3 3 3 f 3 3 3 3 3 3 f 
            . f 3 3 3 3 3 3 3 3 1 1 1 3 3 f 
            . f 3 3 3 3 3 3 3 3 1 1 1 3 3 f 
            . f 3 3 3 3 3 b b b 1 1 1 3 3 f 
            . f 3 3 3 3 b b b b b 3 3 3 3 f 
            . f f 3 3 b b b b b b b 3 3 f f 
            . . f f 3 b b b b b b b 3 f f . 
            . . . f f b b b b b b b f f . . 
            . . . . f f b b b b b f f . . . 
            . . . . . f f b b b f f . . . . 
            . . . . . . f f b f f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f . f f f . . . . 
            . . . . f 3 3 3 f 3 3 3 f . . . 
            . . . . f 3 3 3 3 3 1 3 f . . . 
            . . . . f 3 3 3 3 3 3 3 f . . . 
            . . . . . f 3 b b b 3 f . . . . 
            . . . . . f f b b b f f . . . . 
            . . . . . . f f b f f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        200,
        true
        )
    } else if (drop == 1) {
        burger = sprites.create(img`
            . . . . c c c b b b b b . . . . 
            . . c c b 4 4 4 4 4 4 b b b . . 
            . c c 4 4 4 4 4 5 4 4 4 4 b c . 
            . e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
            e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
            e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
            e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
            . e b 4 4 4 4 4 5 4 4 4 4 b e . 
            8 7 e e b 4 4 4 4 4 4 b e e 6 8 
            8 7 2 e e e e e e e e e e 2 7 8 
            e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
            e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
            e b e 8 8 c c 8 8 c c c 8 e b e 
            e e b e c c e e e e e c e b e e 
            . e e b b 4 4 4 4 4 4 4 4 e e . 
            . . . c c c c c e e e e e . . . 
            `, SpriteKind.Powerup)
        burger.setVelocity(-100, 0)
        burger.left = scene.screenWidth()
        burger.y = randint(0, scene.screenHeight())
        burger.setFlag(SpriteFlag.AutoDestroy, true)
    } else if (drop == 2) {
        lemon = sprites.create(img`
            4 4 4 . . 4 4 4 4 4 . . . . . . 
            4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
            b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
            . b 5 5 5 5 1 1 5 5 1 1 5 4 . . 
            . b d 5 5 5 5 5 5 5 5 1 1 5 4 . 
            b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 . 
            c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
            c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 
            c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 
            c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 
            . c 4 5 5 5 5 d d d 5 5 5 5 5 b 
            . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c 
            . . c 4 4 d 4 4 4 4 4 d d 5 d c 
            . . . c 4 4 4 4 4 4 4 4 5 5 5 4 
            . . . . c c b 4 4 4 b b 4 5 4 4 
            . . . . . . c c c c c c b b 4 . 
            `, SpriteKind.Powerup)
        lemon.setVelocity(-100, 0)
        lemon.left = scene.screenWidth()
        lemon.y = randint(0, scene.screenHeight())
        lemon.setFlag(SpriteFlag.AutoDestroy, true)
    } else {
    	
    }
})

// Enemy Spawner
game.onUpdateInterval(500, function () {
    if (randint(0, 4) == 0) {
        bogey = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . a c c a . . . 
            . . . . . . a a a c a a c c . . 
            . . . . . a 9 9 9 a a a a a . . 
            . . . . a d d d a c c c c c . . 
            . . . . . a a a a a a a a a . . 
            . . . . . f f . . . . f f . . . 
            . . . . f f . . . . . . . f . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
    } else if (randint(0, 4) == 1) {
        bogey = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 3 c c 3 . . . 
            . . . . . . 3 3 3 c 3 3 c c . . 
            . . . . . 3 9 9 9 3 3 3 3 3 . . 
            . . . . 3 d d d 3 c c c c c . . 
            . . . . . 3 3 3 3 3 3 3 3 3 . . 
            . . . . . f f . . . . f f . . . 
            . . . . f f . . . . . . . f . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
    } else if (randint(0, 4) == 2) {
        bogey = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 6 8 8 6 . . . 
            . . . . . . 6 6 6 8 6 6 8 8 . . 
            . . . . . 6 9 9 9 6 6 6 6 6 . . 
            . . . . 6 d d d 6 8 8 8 8 8 . . 
            . . . . . 6 6 6 6 6 6 6 6 6 . . 
            . . . . . f f . . . . f f . . . 
            . . . . f f . . . . . . . f . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
    } else {
        bogey = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 5 7 7 5 . . . 
            . . . . . . 5 5 5 7 5 5 7 7 . . 
            . . . . . 5 9 9 9 5 5 5 5 5 . . 
            . . . . 5 d d d 5 7 7 7 7 7 . . 
            . . . . . 5 5 5 5 5 5 5 5 5 . . 
            . . . . . f f . . . . f f . . . 
            . . . . f f . . . . . . . f . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
    }
    bogey.setVelocity(-100, 0)
    bogey.left = scene.screenWidth()
    bogey.y = randint(0, scene.screenHeight())
    bogey.setFlag(SpriteFlag.AutoDestroy, true)
})
