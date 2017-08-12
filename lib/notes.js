
/*
from: http://pages.mtu.edu/~suits/NoteFreqCalcs.html

fn = f0 * (a)n
where
f0 = the frequency of one fixed note which must be defined. A common choice is setting the A above middle C (A4) at f0 = 440 Hz.
n = the number of half steps away from the fixed note you are. If you are at a higher note, n is positive. If you are on a lower note, n is negative.
fn = the frequency of the note n half steps away.
a = (2)1/12 = the twelth root of 2 = the number which when multiplied by itself 12 times equals 2 = 1.059463094359...

f3 = 440 * (1.059463..)3 = 523.3 Hz
*/

module.exports = function(steps) {
  const a = Math.pow(2, (1/12))
  const dec = 10; // how many decimals u want. 10=tenths, 100=hundredths, etc
  return Math.round(440 * Math.pow(a, steps) * dec) / dec;
};
