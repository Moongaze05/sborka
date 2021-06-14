export function audioPlay() {
    let audio = new Howl({
        src: ['https://github.com/goldfire/howler.js/blob/master/tests/audio/sound3.wav']
    })
    audio.play();
};