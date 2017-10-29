let OrakelEntscheidung = 0
let SoundStatus = 0
input.onButtonPressed(Button.A, () => {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.setLedColor(Colors.Yellow)
    basic.pause(2000)
    OrakelEntscheidung = Math.random(2)
    if (OrakelEntscheidung == 1) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.setLedColor(Colors.Green)
        if (SoundStatus == 1) {
            music.playTone(Note.E5, music.beat(BeatFraction.Whole))
        }
    } else {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.setLedColor(Colors.Red)
        if (SoundStatus == 1) {
            music.playTone(Note.C, music.beat(BeatFraction.Whole))
        }
    }
    basic.pause(2000)
    basic.showLeds(`
        . # # # .
        . # . # .
        . # . # .
        . # . # .
        . # # # .
        `)
    basic.setLedColor(Colors.Blue)
})
input.onGesture(Gesture.Shake, () => {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.setLedColor(Colors.Yellow)
    basic.pause(2000)
    OrakelEntscheidung = Math.random(2)
    if (OrakelEntscheidung == 1) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.setLedColor(Colors.Green)
        if (SoundStatus == 1) {
            music.playTone(Note.E5, music.beat(BeatFraction.Whole))
        }
    } else {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.setLedColor(Colors.Red)
        if (SoundStatus == 1) {
            music.playTone(Note.C, music.beat(BeatFraction.Whole))
        }
    }
    basic.pause(2000)
    basic.showLeds(`
        . # # # .
        . # . # .
        . # . # .
        . # . # .
        . # # # .
        `)
    basic.setLedColor(Colors.Blue)
})
basic.showLeds(`
    . # # # .
    . # . # .
    . # . # .
    . # . # .
    . # # # .
    `)
basic.setLedColor(Colors.Blue)
SoundStatus = 1
