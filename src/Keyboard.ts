import { AudioCtx } from './AudioCtx';
import { Key, KeyOpts } from './Key';
import { octave, keys } from './lib/helpers';

/**
 * Keyboard part of the synthesizer; receives a shared audio context from the Synth class.
 * @constructor
 * @param {AudioCtx} audio
 */
export class Keyboard {
  audio: AudioCtx;
  keys: Key[];

  constructor(audio: AudioCtx) {
    this.audio = audio;

    this.keys = keys.map((k: KeyOpts) => {
      return new Key({ ...k });
    });

    this.buildKeyboardHtml();
    this.bindKeyEvents();
  }

  /**
   * Create <div> elements for the keyboard wrapper and 13 keys representing a full octave.
   */
  buildKeyboardHtml() {
    const keyboardEl = document.getElementById('keyboard');

    let offsetLeft = 0;

    this.keys.forEach(key => {
      let keyEl = document.createElement('div');
      keyEl.id = key.pitch;
      keyEl.style.left = `${offsetLeft}px`;

      if (key.pitch.slice(-1) === '#' || key.pitch.slice(-1) === 'b') {
        keyEl.classList.add('key', 'key--black');
      } else {
        keyEl.classList.add('key', 'key--white');
        offsetLeft += 48;
      }

      keyboardEl.appendChild(keyEl);
    });
  }

  /**
   * Add keydown and keyup event listeners to play/stop playing notes.
   */
  bindKeyEvents() {
    document.body.addEventListener('keydown', this.playNote.bind(this));
    document.body.addEventListener('keyup', this.releaseNote.bind(this));
  }

  /**
   * Attempt to find the piano key corresponding to the computer key that has been manipulated.
   * @param {number} code 
   */
  getNoteFromKeyCode(code: number): Key {
    return this.keys.filter((k: Key) => k.qwertyCode === code)[0];
  }

  /**
   * If a matching note is found, set the audio context's frequency to the note frequency
   * in order to play the note. Also manipulate element's CSS to give a visual cue of which note is active.
   * @param {KeyboardEvent} e 
   */
  playNote(e: KeyboardEvent) {
    let note = this.getNoteFromKeyCode(e.keyCode);
    if (!note) return;

    this.audio.osc.frequency.value = note.frequency;
    this.audio.amp.gain.value = 1;

    document.getElementById(note.pitch).classList.add('key--active');
  }

  /**
   * Stop sending power to the audio context's amp and remove any active classes.
   * @param {KeyboardEvent} e 
   */
  releaseNote(e: KeyboardEvent) {
    let note = this.getNoteFromKeyCode(e.keyCode);
    this.audio.amp.gain.value = 0;

    if (note) {
      document.getElementById(note.pitch).classList.remove('key--active');
    }
  }
}