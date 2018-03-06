import { AudioCtx } from './AudioCtx';

/**
 * The pitch bender changes the pitch by one whole step.
 * Controlled using left/right arrow keys.
 * @constructor
 * @param {AudioCtx} audio
 */
export class PitchBender {
  audio: AudioCtx;

  constructor(audio: AudioCtx) {
    this.audio = audio;

    this.bindKeyEvents();
  }

  private bindKeyEvents() {
    document.body.addEventListener('keydown', this.bend.bind(this));
    document.body.addEventListener('keyup', this.endBend.bind(this));
  }

  private bend(e: KeyboardEvent) {
    const code = e.which;
    // If the key that was pressed is not left or right arrow, return
    if (code !== 37 && code !== 39) return;

    // If no note is currently being played, return
    if (this.audio.amp.gain.value === 0) return;

    // Grab the pitch of the current note and use this to calculate the next pitch
    const pitch = this.audio.osc.frequency.value;

    // Left arrow (37) => go down a whole step
    // Right arrow (39) => go up a whole step
  }

  private endBend(e: KeyboardEvent) {
    if (this.audio.amp.gain.value === 0) return;

    // Put pitch back
  }
}