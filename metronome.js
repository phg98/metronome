
let beatCount = 0
let tempo_bpm = 120
let timer

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
    timer = setInterval(function() {
        beep(440);
    }, interval * 1000);

}

// beep high pitch every 4th beat
function metronome2(tempo_bpm) {
    var interval = 60 / tempo_bpm;
    var timer = setInterval(function() {
        beep(440);
    }, interval * 1000);

}

// start the metronome
function startMetronome() {
    metronome(tempo_bpm);
}

// stop the metronome
function stopMetronome() {
    clearInterval(timer);
}

// change the tempo using slider
function changeTempo() {
    tempo_bpm = document.getElementById("tempoSlider").value;
    stopMetronome();
    startMetronome();
    // set the tempo value in the text box
    document.getElementById("tempoDisplay").value = tempo_bpm;
}
