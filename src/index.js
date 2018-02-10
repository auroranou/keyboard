'use strict';

import '!style-loader!css-loader!sass-loader!./styles.scss';
import { Synth } from './Synth';

document.addEventListener('DOMContentLoaded', () => {
  const synth = new Synth();
});