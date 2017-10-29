let OrakelEntscheidung = 0
input.onButtonPressed(Button.A, () => {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
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
    } else {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.setLedColor(Colors.Red)
    }
    basic.pause(4000)
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
