let Steps = 0
let Walks = 0
input.onPinPressed(TouchPin.P0, function () {
	
})
input.onButtonPressed(Button.A, function () {
    Count_Steps()
})
function Count_Steps () {
    Steps = 0
    for (let index = 0; index < 9999999999999 * 9999999; index++) {
        if (input.isGesture(Gesture.Shake)) {
            Steps += 1
            basic.showNumber(Steps)
        } else if (input.buttonIsPressed(Button.B)) {
            Walks += 1
            datalogger.log(datalogger.createCV("Walk" + Walks, 0))
            Steps = 0
        }
    }
}
basic.forever(function () {
	
})
