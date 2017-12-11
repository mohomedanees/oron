import navigation from './modules/navigation.js';
import gridToggle from './modules/gridToggle.js';
import tab from './modules/tab.js';
import datePicker from './modules/datePicker.js';

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
  tab();
  datePicker();
}

ready(init);