'use strict';

const keyMap = {
  65: {
    freq: 261.6,
    key: 'a',
    note: 'c4'
  },
  87: {
    freq: 277.2,
    key: 'w',
    note: 'c4#'
  },
  83: {
    freq: 293.7,
    key: 's',
    note: 'd4'
  },
  69: {
    freq: 311.1,
    key: 'e',
    note: 'e4b'
  },
  68: {
    freq: 329.6,
    key: 'd',
    note: 'e4',
  },
  70: {
    freq: 349.2,
    key: 'f',
    note: 'f4',
  },
  85: {
    freq: 370.0,
    key: 'u',
    note: 'f4#',
  },
  74: {
    freq: 392.0,
    key: 'j',
    note: 'g4',
  },
  73: {
    freq: 415.3,
    key: 'i',
    note: 'g4#',
  },
  75: {
    freq: 440.0,
    key: 'k',
    note: 'a4',
  },
  79: {
    freq: 466.2,
    key: 'o',
    note: 'b4b',
  },
  76: {
    freq: 493.9,
    key: 'l',
    note: 'b4',
  },
  186: {
    freq: 523.3,
    key: ';',
    note: 'c5',
  }
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
    document.body.addEventListener('keydown', this.playNote.bind(this));
    document.body.addEventListener('keyup', this.releaseNote.bind(this));
  }

  playNote(e) {
    let note = keyMap[e.keyCode];
    if (!note) return;

    let freq = note.freq;
    this.osc.frequency.value = freq;
    this.amp.gain.value = 1;

    this.setKeyName(note.note);
    this.selectKey(note.note);
  }

  releaseNote(e) {
    let note = keyMap[e.keyCode];
    this.amp.gain.value = 0;

    if (note) {
      this.unselectKey(note.note);
    }
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

  selectKey(divId) {
    let key = document.getElementById(divId);
    if (key) {
      key.classList.contains('key-b')
      ? key.style.backgroundColor = '#444'
      : key.style.backgroundColor = '#eee';
    }
  }

  unselectKey(divId) {
    let key = document.getElementById(divId);
    if (key) {
      key.classList.contains('key-b')
      ? key.style.backgroundColor = '#000'
      : key.style.backgroundColor = '#fff';
    }
  }
}

let keyboard = new Keyboard();
