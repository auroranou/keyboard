const test = require('tape');
const notes = require('./lib/notes.js');

test('[notes] correct pitch', t => {
  t.equals(notes(3), 523.3, 'c3 = 523.3');
  t.end();
});
