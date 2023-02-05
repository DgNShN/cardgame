input.onButtonPressed(Button.A, function () {
    Aoyuncu += 1
    led.plotBrightness(0, Aoyuncu - 1, Aoyuncu * 51)
})
input.onButtonPressed(Button.B, function () {
    Boyuncu += 1
    led.plotBrightness(4, Boyuncu - 1, Boyuncu * 51)
})
let Boyuncu = 0
let Aoyuncu = 0
Aoyuncu = 0
Boyuncu = 0
