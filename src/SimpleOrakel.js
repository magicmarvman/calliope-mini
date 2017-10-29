let OrakelEntscheidung = 0
let SoundStatus = 0
input.onButtonPressed(Button.A, () => {
    if (SoundStatus == 1) {
        music.playTone(Note.F, music.beat(BeatFraction.Quarter))
    }
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
    basic.pause(3000)
    basic.showLeds(`
        . # # # .
        . # . # .
        . # . # .
        . # . # .
        . # # # .
        `)
    basic.setLedColor(Colors.Blue)
})
input.onButtonPressed(Button.AB, () => {
    music.playTone(Note.E, music.beat(BeatFraction.Quarter))
    if (SoundStatus == 0) {
        SoundStatus = 1
    } else {
        SoundStatus = 0
    }
})
basic.showLeds(`
    . # # # .
    . # . # .
    . # . # .
    . # . # .
    . # # # .
    `)
basic.setLedColor(Colors.Blue)
SoundStatus = 0
