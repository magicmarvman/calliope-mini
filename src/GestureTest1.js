input.onGesture(Gesture.TiltLeft, () => {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
})
input.onGesture(Gesture.TiltRight, () => {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
})
input.onGesture(Gesture.Shake, () => {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.setLedColor(Colors.Red)
    music.playTone(Note.C, music.beat(BeatFraction.Whole))
})
