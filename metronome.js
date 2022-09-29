
let beatCount = 0

// beep sound
function beep(frequency) {
    const ac = new AudioContext();
    const osc = ac.createOscillator();
    osc.connect(ac.destination);
    
    if (beatCount % 4 == 0) {
        beatCount = 0;
        console.log(beatCount / 4);
        frequency += 100;
    }
    osc.frequency.value = frequency;
    osc.start(0);
    osc.stop(0.1);
    beatCount++;
}

// metronome : beep every 1 second
function metronome(bpm) {
    var interval = 60 / bpm;
    var timer = setInterval(function() {
        beep(440);
    }, interval * 1000);

}

// start the metronome
metronome(10);

// beep high pitch every 4th beat
function metronome2(bpm) {
    var interval = 60 / bpm;
    var timer = setInterval(function() {
        beep(440);
    }, interval * 1000);

}
