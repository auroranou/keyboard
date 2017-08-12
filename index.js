'use strict';

let ctx = new AudioContext();

// this generates a wave
let osc = ctx.createOscillator();

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
  // sine is the default, but just explicitly stating here
  osc.type = 'sine';
  osc.start(0);

  amp.gain.value = 0;

  osc.connect(amp);
  amp.connect(ctx.destination);
}

// grab all of the key elements and attached listeners
let keys = document.querySelectorAll('.key');
let keyDiv = document.getElementById('key-name');

keys.forEach((k) => {
  k.addEventListener('mousedown', playNote);
  k.addEventListener('mouseup', releaseNote);
});

function playNote(e) {
  let note = e.target.id;
  let freq = keyFreqMap[note];
  osc.frequency.value = freq;
  amp.gain.value = 1;

  getKeyName(note);
}

function releaseNote(e) {
  amp.gain.value = 0;
}

function getKeyName(str) {
  let values = str.split(/[0-9]/g);
  let keyName = values[0].toUpperCase();
  if (values[1]) {
    let mod = values[1] === '#'
      ? '-sharp'
      : '-flat';
    keyName += mod;
  }

  keyDiv.innerHTML = keyName;
}

init();
