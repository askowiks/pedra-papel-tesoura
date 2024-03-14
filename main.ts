let x = 0
input.onGesture(Gesture.Shake, function () {
    x = randint(0, 2)
    if (x == 0) {
        basic.showIcon(IconNames.SmallSquare)
        music.play(music.stringPlayable("C D E F G A B C5 ", 303), music.PlaybackMode.UntilDone)
    } else if (x == 1) {
        basic.showIcon(IconNames.Square)
        music.play(music.stringPlayable("A F E F D G E F ", 307), music.PlaybackMode.UntilDone)
    } else {
        basic.showIcon(IconNames.Scissors)
        music.play(music.stringPlayable("G B A G C5 B A B ", 319), music.PlaybackMode.UntilDone)
    }
})
