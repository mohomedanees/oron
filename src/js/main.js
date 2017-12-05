import navigation from './modules/navigation.js';
import gridToggle from './modules/gridToggle.js';

function ready(fn) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    fn();
  }
}

function init() {
  navigation();
  gridToggle();
}

ready(init);