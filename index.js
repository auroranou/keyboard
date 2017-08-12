'use strict';

const keyFreqMap = {
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

class Keyboard {
  constructor() {
    this.ctx = new AudioContext();

    // this generates a wave
    this.osc = this.ctx.createOscillator();

    // sine is the default, but just explicitly stating here
    this.osc.type = 'sine';
    this.osc.start(0);

    // gain in an analog system is how much extra electricity you boost the signal with
    this.amp = this.ctx.createGain();

    this.amp.gain.value = 0;

    // connect the things
    this.osc.connect(this.amp);
    this.amp.connect(this.ctx.destination);

    this.bindEvents();
  }

  bindEvents() {
    // grab all of the key elements and attach listeners
    let keys = document.querySelectorAll('.key');

    keys.forEach((k) => {
      k.addEventListener('mousedown', this.playNote.bind(this));
      k.addEventListener('mouseup', this.releaseNote.bind(this));
    });
  }

  playNote(e) {
    let note = e.target.id;
    let freq = keyFreqMap[note];
    console.log(note, freq);
    this.osc.frequency.value = freq;
    this.amp.gain.value = 1;

    this.setKeyName(note);
  }

  releaseNote(e) {
    this.amp.gain.value = 0;
  }

  setKeyName(str) {
    let values = str.split(/[0-9]/g);
    let keyName = values[0].toUpperCase();
    if (values[1]) {
      let mod = values[1] === '#'
        ? '-sharp'
        : '-flat';
      keyName += mod;
    }

    let keyDiv = document.getElementById('key-name');
    keyDiv.innerHTML = keyName;
  }
}

let keyboard = new Keyboard();
