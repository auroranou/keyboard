## making noises with the web audio api

### local dev
```
yarn install
yarn start
// runs at localhost:8080
```

to run eslint and tests, make sure you have eslint installed:
```
yarn install -g eslint
yarn test
```

tests are run using `tape`.

### what is even happening
this project is an attempt at recreating a (very, very pared down) version of a [roland juno alpha juno 2](http://www.vintagesynth.com/roland/ajuno2.php) synthesizer using js and the web audio api.


### playing notes
c major scale (💻 ️s = 🎹 middle c)
```
s d f g h j k
```


chromatic scale
```
s e d r f g y h u j i k
```


💀 💀 💀 (chopin's funeral march)
```
s s s s
f r e e e s e
```


👩 🐑 🌨 (some song about a lamb)
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