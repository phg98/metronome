
let beatCount = 0
let tempo_bpm = 120
let timer
let isStarted = false

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

// start the metronome
function startMetronome() {
    metronome(tempo_bpm);
    isStarted = true;
    console.log("start")
}

// stop the metronome
function stopMetronome() {
    clearInterval(timer);
    isStarted = false
    console.log("stop")
}

// change the tempo using slider
function changeTempo() {
    tempo_bpm = document.getElementById("tempoSlider").value;
    tempo_bpm = parseInt(tempo_bpm);
    // restart the metronome if it is running
    if (isStarted) {
        stopMetronome();
        startMetronome();
    }
    // set the tempo value in the text box
    // bind the tempo value to the slider

    document.getElementById("tempoDisplay").innerHTML = tempo_bpm;
    console.log(tempo_bpm, document.getElementById("tempoDisplay").innerHTML);
}

function decreaseTempo() {
    tempo_bpm -= 1;
    document.getElementById("tempoSlider").value = tempo_bpm;
    changeTempo();
}

function increaseTempo() {
    tempo_bpm += 1;
    document.getElementById("tempoSlider").value = tempo_bpm;
    changeTempo();
}



// set the tempo value when the page is loaded
window.onload = function() {    
    tempo_bpm = document.getElementById("tempoSlider").value;
    tempo_bpm = parseInt(tempo_bpm);
    document.getElementById("tempoDisplay").innerHTML = tempo_bpm;
}
