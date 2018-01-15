import navigation from './modules/navigation.js';
import gridToggle from './modules/gridToggle.js';
import tab from './modules/tab.js';
import datePicker from './modules/datePicker.js';
import swipe from './modules/swipe.js';
// import numberIncrement from './modules/numberIncrement.js';
import bodyPadding from './modules/bodyPadding.js';

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
  swipe();
  // numberIncrement();
  bodyPadding();
}

ready(init);