'use strict';

let context = new AudioContext();

// this generates a wave
let osc = context.createOscillator();
// sine is the default, but just explicitly stating here
osc.type = 'sine';

// gain in an analog system is how much extra electricity you boost the signal with
let amp = context.createGain();

// grab all of the key elements and attached listeners
let keys = document.querySelectorAll('.key');

keys.forEach((k) => {
  k.addEventListener('mousedown', playNote);
  k.addEventListener('mouseup', releaseNote);
});

function playNote(e) {
  let note = e.target.id;
  console.log(note);
}

function releaseNote(e) {
  let note = e.target.id;
  console.log(note);
}
