'use strict';
/**
 * from: http://pages.mtu.edu/~suits/NoteFreqCalcs.html
 * 
 * fn = f0 * a^n
 * where:
 * f0 = the frequency of one fixed note which must be defined.
 * A common choice is setting the A above middle C (A4) at f0 = 440 Hz.
 * n = the number of half steps away from the fixed note you are.
 * If you are at a higher note, n is positive. If you are on a lower note, n is negative.
 * fn = the frequency of the note n half steps away.
 * a = (2)^1/12 = the twelth root of 2 = the number which when multiplied by itself 12 times equals 2
 * a = 1.059463094359...
 * 
 * f3 = 440 * 1.059463 ^3 = 523.3 Hz
 */

/**
 * Difference between frequency and pitch:
 * 1. Pitch is how we perceive frequency (frequency is a property of a wave -> pitch is property of a note)
 * 2. Pitches are relative to each other; frequency is an absolute measure of wavelengths
 */

export const notes = ['a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#'];

export const makeNotes = () => {
  const octave = 4;

  const pitches = notes.reduce((memo, note) => {
    memo[note + octave] = getSteps(note, octave);
    return memo;
  }, {});

  return pitches;
}

export const getSteps = (note, octave) => {
  let index = notes.indexOf(note);
  if (octave < 4) return (Math.abs(octave - 4) * -12) - (13 - index);
  if (octave > 5) return ((octave - 5) * 12) + index;
  if (octave === 4) return (index < 3) ? index : index - 12;
  if (octave === 5) return (index > 2) ? index : index + 12;
}

export const getFreq = (steps) => {
  const a = Math.pow(2, (1 / 12));
  const dec = 10; // how many decimals u want. 10=tenths, 100=hundredths, etc
  return Math.round(440 * Math.pow(a, steps) * dec) / dec;
}
