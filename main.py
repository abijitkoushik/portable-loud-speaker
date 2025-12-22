song_no = 1

def on_forever():
    global song_no
    if input.logo_is_pressed():
        song_no += 1
        if song_no == 5:
            song_no = 1
basic.forever(on_forever)

def on_forever2():
    if input.button_is_pressed(Button.A):
        music.set_volume(85)
    elif input.button_is_pressed(Button.B):
        music.set_volume(211)
basic.forever(on_forever2)

def on_forever3():
    if song_no == 1:
        music.stop_all_sounds()
        music.play(music.string_playable("F G A E - D C C5 ", 122),
            music.PlaybackMode.UNTIL_DONE)
        music.rest(music.beat(BeatFraction.WHOLE))
    elif song_no == 2:
        music.stop_all_sounds()
        music.play(music.string_playable("F G B E A B G D ", 225),
            music.PlaybackMode.UNTIL_DONE)
    elif song_no == 3:
        music.stop_all_sounds()
        music.play(music.string_playable("C5 B A G F E D C ", 140),
            music.PlaybackMode.UNTIL_DONE)
    elif song_no == 4:
        music.stop_all_sounds()
        music.play(music.string_playable("E B C5 A B G A F ", 246),
            music.PlaybackMode.UNTIL_DONE)
        music.play(music.string_playable("C D F - - - - - ", 246),
            music.PlaybackMode.UNTIL_DONE)
basic.forever(on_forever3)
