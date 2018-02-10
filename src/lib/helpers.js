export const octave = [
  'c4',
  'c4#',
  'd4',
  'e4b',
  'e4',
  'f4',
  'f4#',
  'g4',
  'a4b',
  'a4',
  'b4b',
  'b4',
  'c5'
];

const qwertyKeyMap = [
  { 83: 's' },
  { 69: 'e' },
  { 68: 'd' },
  { 82: 'r' },
  { 70: 'f' },
  { 71: 'g' },
  { 89: 'y' },
  { 72: 'h' },
  { 85: 'u' },
  { 74: 'j' },
  { 73: 'i' },
  { 75: 'k' },
  { 76: 'l' }
];

export const keys = qwertyKeyMap.map((qwerty, i) => {
  return {
    pitch: octave[i],
    qwertyCode: Object.keys(qwerty)[0],
    qwertyName: Object.values(qwerty)[0]
  }
})