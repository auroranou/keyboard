import { KeyOpts } from "../Key";

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

type KeyMap = {
  code: number;
  name: string;
};

const qwertyKeyMap: KeyMap[] = [
  {
    code: 83,
    name: 's'
  },
  {
    code: 69,
    name: 'e'
  },
  {
    code: 68,
    name: 'd'
  },
  {
    code: 82,
    name: 'r'
  },
  {
    code: 70,
    name: 'f'
  },
  {
    code: 71,
    name: 'g'
  },
  {
    code: 89,
    name: 'y'
  },
  {
    code: 72,
    name: 'h'
  },
  {
    code: 85,
    name: 'u'
  },
  {
    code: 74,
    name: 'j'
  },
  {
    code: 73,
    name: 'i'
  },
  {
    code: 75,
    name: 'k'
  },
  {
    code: 76,
    name: 'l'
  }
];

export const keys = qwertyKeyMap.map((qwerty, i) => {
  return {
    pitch: octave[i],
    qwertyCode: qwerty.code,
    qwertyName: qwerty.name
  } as KeyOpts;
})