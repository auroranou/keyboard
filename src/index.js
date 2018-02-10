'use strict';

import '!style-loader!css-loader!sass-loader!./styles.scss';
import { Synth } from './Synth';

document.addEventListener('DOMContentLoaded', () => {
  let keyboardEl = document.createElement('div');
  keyboardEl.id = 'keyboard';
  document.body.appendChild(keyboardEl);

  const synth = new Synth();
});