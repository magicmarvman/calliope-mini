let SoundStatus = 0
basic.forever(() => {
    led.plot(Math.random(6), Math.random(6))
    if (SoundStatus == 1) {
        music.playTone(Note.C, music.beat(BeatFraction.Whole))
    }
    basic.pause(100)
})
input.onButtonPressed(Button.A, () => {
    music.playTone(Note.C5, music.beat(BeatFraction.Whole))
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, () => {
    if (SoundStatus == 0) {
        SoundStatus = 1
    } else {
        SoundStatus = 0
    }
})
SoundStatus = 1
