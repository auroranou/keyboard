'use strict';

import { AudioCtx } from './AudioCtx';
import { Keyboard } from './Keyboard';

export class Synth {
  constructor() {
    // First set up a new audio context
    this.audio = new AudioContext();

    // Create synth components, passing audio context to them
    this.keyboard = new Keyboard(this.audio);
  }
}