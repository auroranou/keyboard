const test = require('tape');
const notes = require('../lib/notes.js');

test('[notes] getFreq', t => {
  t.equals(notes.getFreq(3), 523.3, 'c3 = 523.3');
  t.end();
});

test('[notes] getSteps', t => {
  t.equals(notes.getSteps('c', 3), -22, 'c3 = -22');
  t.equals(notes.getSteps('c', 4), -9, 'c4 = -9');
  t.equals(notes.getSteps('a', 4), 0, 'a4 = 0');
  t.equals(notes.getSteps('a#', 4), 1, 'a#4 = 1');
  t.equals(notes.getSteps('c', 5), 3, 'c5 = 3');
  t.equals(notes.getSteps('c', 6), 15, 'c6 = 15');
  t.end();
});
