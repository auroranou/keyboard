## making noises with the web audio api

### local development

Install packages using `yarn`:
```
yarn install
yarn start
// local site runs at localhost:8080
```

For linting and tests: `yarn test` (Tests are run using `tape`.)

### what is even happening

This project is an attempt at recreating some of the functionality of my synthesizer (a [Roland Alpha Juno 2](http://www.vintagesynth.com/roland/ajuno2.php)) using Typescript and the web audio API.

Specs:
- 1 octave keyboard (11 notes vs the original's 61)

### playing notes

#### C major scale (💻 ️s = 🎹 middle c)
```
s d f g h j k
```

#### Chromatic scale
```
s e d r f g y h u j i k
```

#### 💀 💀 💀 (Chopin's funeral march)
```
s s s s
f r e e e s e
```

#### 👩 🐑 🌨 (some song about a lamb)
```
d s a s d d d d s s d s a
f d s d f f f
d d d
f h h
f d s d f f f f d d f d s
```

### further reading
- [a beginner's guide to the synth](https://gizmodo.com/a-beginners-guide-to-the-synth-1736978695)
- [web audio api docs from mdn](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)