input.onButtonPressed(Button.A, function () {
    if (toggle_vol > 100) {
        toggle_vol = 100
        music.setVolume(toggle_vol)
    } else {
        toggle_vol = 10000000000
        music.setVolume(toggle_vol)
    }
})
function Songs () {
    random_bpm = randint(100, 1000)
    if (song_no == 1) {
        music.play(music.stringPlayable("E B C5 A B G A F ", random_bpm), music.PlaybackMode.LoopingInBackground)
    } else if (song_no == 2) {
        music.play(music.stringPlayable("F G B E A B G D ", random_bpm), music.PlaybackMode.LoopingInBackground)
    } else if (song_no == 3) {
        music.play(music.stringPlayable("C5 B A G F E D C ", random_bpm), music.PlaybackMode.LoopingInBackground)
    } else if (song_no == 4) {
        while (true) {
            music.play(music.stringPlayable("E B C5 A B G A F ", random_bpm), music.PlaybackMode.UntilDone)
            music.play(music.stringPlayable("C D F - - - - - ", random_bpm), music.PlaybackMode.UntilDone)
        }
    } else if (song_no == 5) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.LoopingInBackground)
    } else if (song_no == 6) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.LoopingInBackground)
    } else if (song_no == 7) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Blues), music.PlaybackMode.LoopingInBackground)
    } else if (song_no == 8) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Birthday), music.PlaybackMode.LoopingInBackground)
    }
}
input.onButtonPressed(Button.B, function () {
    music.stopMelody(MelodyStopOptions.All)
    song_no = randint(min_song_num, max_song_num)
    Songs()
})
let random_bpm = 0
let toggle_vol = 0
let song_no = 0
let max_song_num = 0
let min_song_num = 0
music.setBuiltInSpeakerEnabled(false)
min_song_num = 1
max_song_num = 8
song_no = randint(min_song_num, max_song_num)
Songs()
