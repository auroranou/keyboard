export class AudioCtx {
  amp: GainNode;
  ctx: AudioContext;
  osc: OscillatorNode;

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
  }
}