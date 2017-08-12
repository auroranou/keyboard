'use strict';

let ctx = new AudioContext();

// this generates a wave
let osc = ctx.createOscillator();
// sine is the default, but just explicitly stating here
osc.type = 'sine';

// gain in an analog system is how much extra electricity you boost the signal with
let amp = ctx.createGain();

let keyFreqMap = {
  c4: 261.6,
  'c4#': 277.2,
  d4: 293.7,
  e4b: 311.1,
  e4: 329.6,
  f4: 349.2,
  'f4#': 370.0,
  g4: 392.0,
  'g4#': 415.3,
  a4: 440.0,
  b4b: 466.2,
  b4: 493.9,
  c5: 523.3
};

function init() {
  osc.start(0);

  amp.gain.value = 0;

  osc.connect(amp);
  amp.connect(ctx.destination);
}

init();

// grab all of the key elements and attached listeners
let keys = document.querySelectorAll('.key');

keys.forEach((k) => {
  k.addEventListener('mousedown', playNote);
  k.addEventListener('mouseup', releaseNote);
});

function playNote(e) {
  let freq = keyFreqMap[e.target.id];
  osc.frequency.value = freq;
  amp.gain.value = 1;
}

function releaseNote(e) {
  amp.gain.value = 0;
}
