'use strict';

import { Key } from './Key';
import { octave, keys } from './lib/helpers';

export class Keyboard {
  constructor(audio) {
    this.audio = audio;

    this.keys = keys.map(k => {
      return new Key(k.qwertyCode, k.pitch);
    });

    this.buildKeyboardHtml();
  }

  buildKeyboardHtml() {
    const keyboardEl = document.querySelector('#keyboard');

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
}