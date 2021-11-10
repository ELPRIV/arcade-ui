let textSprite: TextSprite = null
//% color="#AA278D" weight=100
namespace UI {
    //% block="Overlay $text with icon $myImage"
    export function overlayico(text: string, myImage: Image) {
        textSprite = textsprite.create(text, 1, 3)
        textSprite.setBorder(1, 3)
        textSprite.setIcon(myImage)
        textSprite.x = scene.screenWidth() - textSprite.width
        textSprite.y = 6
    }
    //% block="Overlay $text"
    export function overlay(text: string) {
        textSprite = textsprite.create(text, 1, 3)
        textSprite.setBorder(1, 3)
        textSprite.x = scene.screenWidth() - textSprite.width
        textSprite.y = 6
    }
}