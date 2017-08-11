'use strict';

let context = new AudioContext();

let osc = context.createOscillator();

let amp = context.createGain();


let keys = document.querySelectorAll('.key');

keys.forEach((k) => k.addEventListener('click', onKeyPress));

function onKeyPress(e) {
  let note = e.target.id;
  console.log(note);
}

