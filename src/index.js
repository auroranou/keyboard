'use strict';

import '!style-loader!css-loader!sass-loader!./styles.scss';
import { Keyboard } from './Keyboard';

document.addEventListener('DOMContentLoaded', () => {
  let keyboardEl = document.createElement('div');
  keyboardEl.id = 'keyboard';
  document.body.appendChild(keyboardEl);

  const keyboard = new Keyboard();
});