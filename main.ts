loops.everyInterval(50, function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(50)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(50)
})
basic.forever(function () {
    music.play(music.stringPlayable("C - C - C - C - ", 100), music.PlaybackMode.UntilDone)
})
