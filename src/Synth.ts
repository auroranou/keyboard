import { AudioCtx } from './AudioCtx';
import { Keyboard } from './Keyboard';
import { PitchBender } from './PitchBender';

export class Synth {
  audio: AudioCtx;
  keyboard: Keyboard;
  pitchBender: PitchBender;

  constructor() {
    // First set up a new audio context
    this.audio = new AudioCtx();

    // Create synth components, passing audio context to them
    this.keyboard = new Keyboard(this.audio);
    this.pitchBender = new PitchBender(this.audio);
  }
}