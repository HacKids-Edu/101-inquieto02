input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        . . # . .
        . . . . .
        `)
    basic.pause(1000)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . # #
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        . . # . .
        . . . . .
        `)
    basic.pause(1000)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # . . .
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        . . # . .
        . . . . .
        `)
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        # # . # #
        . . . . .
        . # # # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        . . # . .
        . . . . .
        `)
    basic.pause(1000)
})
basic.clearScreen()
basic.showLeds(`
    # # . # #
    # # . # #
    . . . . .
    . . # . .
    . . . . .
    `)
