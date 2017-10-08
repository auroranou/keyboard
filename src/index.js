'use strict';

import * as helpers from './lib/notes';
import '!style-loader!css-loader!sass-loader!./styles.scss';

const KEYS = {
  83: 's',
  69: 'e',
  68: 'd',
  82: 'r',
  70: 'f',
  71: 'g',
  89: 'y',
  72: 'h',
  85: 'u',
  74: 'j',
  73: 'i',
  75: 'k',
  // 76: 'l'
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

    // create the array for holding keys
    this.keys = this.createKeyboard();

    this.setupKeyboardHtml(this.keys);
    this.bindEvents();
  }

  createKeyboard() {
    // create keyboard
    const notes = helpers.makeNotes();
    const noteNames = Object.keys(notes);

    return Object.entries(KEYS).reduce((memo, [k, v], i) => {
      const noteName = noteNames[i];
      const pitch = notes[noteName];

      memo[k] = {
        alphaKey: k,
        alphaKeyName: v,
        freq: helpers.getFreq(pitch),
        noteName,
        pitch
      };

      return memo;
    }, {});
  }

  setupKeyboardHtml(keys) {
    // append keyboard to DOM
    let keyboardEl = document.createElement('div');
    keyboardEl.id = 'keyboard';

    Object.values(keys).forEach((val, i) => {
      let keyEl = document.createElement('div');
      keyEl.id = val.noteName;

      const classNames = val.noteName.indexOf('#') > -1 
        ? ['key', 'key-b'] 
        : ['key', 'key-w'];
      keyEl.classList.add(...classNames);

      keyboardEl.appendChild(keyEl);
    });

    document.body.appendChild(keyboardEl);

    // append div containing key name to DOM
    let keyNameEl = document.createElement('div');
    keyNameEl.id = 'key-name';
    document.body.appendChild(keyNameEl);
  }

  bindEvents() {
    document.body.addEventListener('keydown', this.playNote.bind(this));
    document.body.addEventListener('keyup', this.releaseNote.bind(this));
  }

  playNote(e) {
    let note = this.keys[e.keyCode];
    if (!note) return;

    let freq = note.freq;
    this.osc.frequency.value = freq;
    this.amp.gain.value = 1;

    this.setKeyName(note.noteName);
    this.selectKey(note.note);
  }

  releaseNote(e) {
    let note = this.keys[e.keyCode];
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