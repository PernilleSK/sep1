namespace SpriteKind {
    export const trash = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.trash, assets.tile`madAffald`, function (sprite, location) {
    if (madAffald.indexOf(sprite) > -1) {
        info.changeScoreBy(1)
    } else {
        info.changeScoreBy(-1)
    }
    sprite.setPosition(0, 0)
    skraldSorteret()
    sprite.follow(null)
})
scene.onOverlapTile(SpriteKind.trash, assets.tile`papPapirTekstil`, function (sprite, location) {
    if (papTekstil.indexOf(sprite) > -1) {
        info.changeScoreBy(1)
    } else {
        info.changeScoreBy(-1)
    }
    sprite.setPosition(0, 0)
    skraldSorteret()
    sprite.follow(null)
})
scene.onOverlapTile(SpriteKind.trash, assets.tile`madDrikkeKartoner`, function (sprite, location) {
    if (haardplastMadDrikkeKartoner.indexOf(sprite) > -1) {
        info.changeScoreBy(1)
    } else {
        info.changeScoreBy(-1)
    }
    sprite.setPosition(0, 0)
    skraldSorteret()
    sprite.follow(null)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.trash, function (sprite, otherSprite) {
    if (boolIgang != true) {
        otherSprite.follow(mySprite)
        for (let value of madAffald) {
            if (otherSprite == aebleskrog) {
                game.splash("Du har fat i et æbleskrog, find ud af hvor det hører til!")
            }
            if (otherSprite == aeggeSkal) {
                game.splash("Du har fat i æggeskaller, find ud af hvor det hører til!")
            }
            if (otherSprite == koekkenrulle) {
                game.splash("Du har fat i køkkenrulle, find ud af hvor det hører til!")
            }
            if (otherSprite == kaffeFilter) {
                game.splash("Du har fat i et kaffefilter, find ud af hvor det hører til!")
            }
            if (otherSprite == doadPlante) {
                game.splash("Du har fat i en død plante, find ud af hvor det hører til!")
            }
        }
        for (let value of restAffald) {
            if (otherSprite == pizzabakke) {
                game.splash("Du har fat i en pizzabakke, find ud af hvor det hører til!")
            }
            if (otherSprite == chipsPose) {
                game.splash("Du har fat i en chipspose, find ud af hvor det hører til!")
            }
            if (otherSprite == tomTube) {
                game.splash("Du har fat i en tom tube, find ud af hvor det hører til!")
            }
            if (otherSprite == bleer) {
                game.splash("Du har fat i en brugt ble, find ud af hvor det hører til!")
            }
            if (otherSprite == vatroundeller) {
                game.splash("Du har fat i vatroundeller, find ud af hvor det hører til!")
            }
        }
        for (let value of papTekstil) {
            if (otherSprite == tShirt) {
                game.splash("Du har fat i en T-shirt, find ud af hvor det hører til!")
            }
            if (otherSprite == paperbackBog) {
                game.splash("Du har fat i en paperback bog, find ud af hvor det hører til!")
            }
            if (otherSprite == taske) {
                game.splash("Du har fat i en taske, find ud af hvor det hører til!")
            }
            if (otherSprite == aeggebakke) {
                game.splash("Du har fat i en tom æggebakke, find ud af hvor det hører til!")
            }
            if (otherSprite == reklamer) {
                game.splash("Du har fat i reklamer, find ud af hvor det hører til!")
            }
        }
        for (let value of haardplastMadDrikkeKartoner) {
            if (otherSprite == maelkeKarton) {
                game.splash("Du har fat i en tom mælkekarton, find ud af hvor det hører til!")
            }
            if (otherSprite == papvin) {
                game.splash("Du har fat i en papvinsbeholder, find ud af hvor det hører til!")
            }
            if (otherSprite == shampooBoette) {
                game.splash("Du har fat i en tom shampoo bøtte, find ud af hvor det hører til!")
            }
            if (otherSprite == bobbelPlast) {
                game.splash("Du har fat i noget bobbelplast, find ud af hvor det hører til!")
            }
            if (otherSprite == vitaminBoette) {
                game.splash("Du har fat i reklamer, find ud af hvor det hører til!")
            }
        }
        for (let value of glasMetal) {
            if (otherSprite == vinflaske) {
                game.splash("Du har fat i en vinflaske, find ud af hvor det hører til!")
            }
            if (otherSprite == konserveresDaase) {
                game.splash("Du har fat i en tom konserves dåse, find ud af hvor det hører til!")
            }
            if (otherSprite == sodavand) {
                game.splash("Du har fat i en tom sodavandsdåse (uden pant), find ud af hvor det hører til!")
            }
            if (otherSprite == foliebakke) {
                game.splash("Du har fat i en foliebakke, find ud af hvor det hører til!")
            }
            if (otherSprite == metalLaag) {
                game.splash("Du har fat i et metallåg, find ud af hvor det hører til!")
            }
        }
        boolIgang = true
    }
})
scene.onOverlapTile(SpriteKind.trash, assets.tile`restAffald`, function (sprite, location) {
    if (restAffald.indexOf(sprite) > -1) {
        info.changeScoreBy(1)
    } else {
        info.changeScoreBy(-1)
    }
    sprite.setPosition(0, 0)
    skraldSorteret()
    sprite.follow(null)
})
scene.onOverlapTile(SpriteKind.trash, assets.tile`glasMetal`, function (sprite, location) {
    if (glasMetal.indexOf(sprite) > -1) {
        info.changeScoreBy(1)
    } else {
        info.changeScoreBy(-1)
    }
    sprite.setPosition(0, 0)
    skraldSorteret()
    sprite.follow(null)
})
function skraldSorteret () {
    boolIgang = false
    trashCount += -1
}
let tempSkraldetype = 0
let boolIgang = false
let glasMetal: Sprite[] = []
let metalLaag: Sprite = null
let foliebakke: Sprite = null
let sodavand: Sprite = null
let konserveresDaase: Sprite = null
let vinflaske: Sprite = null
let haardplastMadDrikkeKartoner: Sprite[] = []
let vitaminBoette: Sprite = null
let bobbelPlast: Sprite = null
let shampooBoette: Sprite = null
let papvin: Sprite = null
let maelkeKarton: Sprite = null
let papTekstil: Sprite[] = []
let reklamer: Sprite = null
let aeggebakke: Sprite = null
let taske: Sprite = null
let paperbackBog: Sprite = null
let tShirt: Sprite = null
let restAffald: Sprite[] = []
let vatroundeller: Sprite = null
let bleer: Sprite = null
let tomTube: Sprite = null
let chipsPose: Sprite = null
let pizzabakke: Sprite = null
let madAffald: Sprite[] = []
let doadPlante: Sprite = null
let kaffeFilter: Sprite = null
let koekkenrulle: Sprite = null
let aeggeSkal: Sprite = null
let aebleskrog: Sprite = null
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(assets.image`spiller`, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, assets.tile`roadHorizontal`)
scene.cameraFollowSprite(mySprite)
info.setScore(0)
let trashCount = 0
aebleskrog = sprites.create(assets.image`aebleskrog`, SpriteKind.trash)
aeggeSkal = sprites.create(assets.image`aeggeSkal`, SpriteKind.trash)
koekkenrulle = sprites.create(assets.image`koekkenrulle`, SpriteKind.trash)
kaffeFilter = sprites.create(assets.image`kaffeFilter`, SpriteKind.trash)
doadPlante = sprites.create(assets.image`doadPlante`, SpriteKind.trash)
madAffald = [
aebleskrog,
aeggeSkal,
koekkenrulle,
kaffeFilter,
doadPlante
]
for (let value of madAffald) {
    value.setPosition(0, 0)
}
pizzabakke = sprites.create(assets.image`pizzabakke`, SpriteKind.trash)
chipsPose = sprites.create(assets.image`chipsPose`, SpriteKind.trash)
tomTube = sprites.create(assets.image`tomTube`, SpriteKind.trash)
bleer = sprites.create(assets.image`ble`, SpriteKind.trash)
vatroundeller = sprites.create(assets.image`vatroundeller`, SpriteKind.trash)
restAffald = [
pizzabakke,
chipsPose,
tomTube,
bleer,
vatroundeller
]
for (let value of restAffald) {
    value.setPosition(0, 0)
}
tShirt = sprites.create(assets.image`tShirt`, SpriteKind.trash)
paperbackBog = sprites.create(assets.image`paperbackBog`, SpriteKind.trash)
taske = sprites.create(assets.image`taske`, SpriteKind.trash)
aeggebakke = sprites.create(assets.image`aeggebakke`, SpriteKind.trash)
reklamer = sprites.create(assets.image`reklamer`, SpriteKind.trash)
papTekstil = [
tShirt,
paperbackBog,
taske,
aeggebakke,
reklamer
]
for (let value of papTekstil) {
    value.setPosition(0, 0)
}
maelkeKarton = sprites.create(assets.image`maelkeKarton`, SpriteKind.trash)
papvin = sprites.create(assets.image`papvin`, SpriteKind.trash)
shampooBoette = sprites.create(assets.image`shampooBoette`, SpriteKind.trash)
bobbelPlast = sprites.create(assets.image`bobbelPlast`, SpriteKind.trash)
vitaminBoette = sprites.create(assets.image`vitaminBoette`, SpriteKind.trash)
haardplastMadDrikkeKartoner = [
maelkeKarton,
papvin,
shampooBoette,
bobbelPlast,
vitaminBoette
]
for (let value of haardplastMadDrikkeKartoner) {
    value.setPosition(0, 0)
}
vinflaske = sprites.create(assets.image`vinflaske`, SpriteKind.trash)
konserveresDaase = sprites.create(assets.image`konservesDåse`, SpriteKind.trash)
sodavand = sprites.create(assets.image`sodavand`, SpriteKind.trash)
foliebakke = sprites.create(assets.image`foliebakke`, SpriteKind.trash)
metalLaag = sprites.create(assets.image`metallaag`, SpriteKind.trash)
glasMetal = [
vinflaske,
konserveresDaase,
sodavand,
foliebakke,
metalLaag
]
for (let value of glasMetal) {
    value.setPosition(0, 0)
}
forever(function () {
    controller.moveSprite(mySprite, 100, 100)
    if (trashCount < 5) {
        tempSkraldetype = randint(0, 4)
        if (tempSkraldetype == 0) {
            tiles.placeOnRandomTile(madAffald._pickRandom(), assets.tile`roadHorizontal`)
            trashCount += 1
        } else if (tempSkraldetype == 1) {
            tiles.placeOnRandomTile(restAffald._pickRandom(), assets.tile`roadHorizontal`)
            trashCount += 1
        } else if (tempSkraldetype == 2) {
            tiles.placeOnRandomTile(papTekstil._pickRandom(), assets.tile`roadHorizontal`)
            trashCount += 1
        } else if (tempSkraldetype == 3) {
            tiles.placeOnRandomTile(haardplastMadDrikkeKartoner._pickRandom(), assets.tile`roadHorizontal`)
            trashCount += 1
        } else {
            tiles.placeOnRandomTile(glasMetal._pickRandom(), assets.tile`roadHorizontal`)
            trashCount += 1
        }
    }
})
