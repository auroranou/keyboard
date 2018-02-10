'use strict';

import { octave } from './lib/helpers';

const fixedNotePitch = 'a4';
const fixedNoteIndex = octave.indexOf(fixedNotePitch);
const fixedNoteFreq = 440;

// The relationship between any two adjacent pitches in 12tet is the 12th root of 2, that is, that number which, when multiplied by itself 12 time, yields 2.
const pitchDistance = Math.pow(2, (1 / 12))

/**
 * Each key has a QWERTY key code, pitch (piano key name), distance from fixed note, and frequency.
 */
export class Key {
  constructor(pitch, qwertyCode, qwertyName) {
    this.pitch = pitch;
    this.qwertyCode = qwertyCode;
    this.qwertyName = qwertyName;

    const stepDistance = this.getStepDistance(pitch);
    this.frequency = this.getFrequency(stepDistance);
  }

  /**
   * Returns a positive or negative integer indicating the number of steps from the fixed note
   */
  getStepDistance(pitch) {
    return octave.indexOf(pitch) - fixedNoteIndex;
  }

  getFrequency(stepDistance) {
    const frequency = fixedNoteFreq * Math.pow(pitchDistance, stepDistance);
    return frequency.toFixed(3);
  }
}