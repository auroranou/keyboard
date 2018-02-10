'use strict';

import { Key } from './Key';
import { octave, keys } from './lib/helpers';

export class Keyboard {
  constructor(audio) {
    this.audio = audio;

    this.keys = keys.map(k => {
      return new Key(k.pitch, k.qwertyCode, k.qwertyName);
    });

    console.log(this.keys);

    this.buildKeyboardHtml();
    this.bindKeyEvents();
  }

  buildKeyboardHtml() {
    let keyboardEl = document.createElement('div');
    keyboardEl.id = 'keyboard';
    document.body.appendChild(keyboardEl);

    let offsetLeft = 0;

    this.keys.forEach(key => {
      let keyEl = document.createElement('div');
      keyEl.id = key.pitch;
      keyEl.style.left = `${offsetLeft}px`;

      if (key.pitch.slice(-1) === '#' || key.pitch.slice(-1) === 'b') {
        keyEl.classList.add('key', 'key--black');
      } else {
        keyEl.classList.add('key', 'key--white');
        offsetLeft += 36;
      }

      keyboardEl.appendChild(keyEl);
    });
  }

  bindKeyEvents() {
    document.body.addEventListener('keydown', this.playNote.bind(this));
    document.body.addEventListener('keyup', this.releaseNote.bind(this));
  }

  getNoteFromKeyCode(code) {
    return this.keys.find(k => k.qwertyCode == code);
  }

  playNote(e) {
    let note = this.getNoteFromKeyCode(e.keyCode);
    if (!note) return;
    console.log(note);
    this.audio.osc.frequency.value = note.frequency;
    this.audio.amp.gain.value = 1;

    document.getElementById(note.pitch).classList.add('key--active');
  }

  releaseNote(e) {
    let note = this.getNoteFromKeyCode(e.keyCode);
    this.audio.amp.gain.value = 0;

    if (note) {
      document.getElementById(note.pitch).classList.remove('key--active');
    }
  }
}