/**
 * Created by Sean on 7/13/2015.
 */
import $w from './alias.babel.js';

/**
 * Applies transparency or removes it depending on scroll position.
 * @param {string} nav_id - Id of the nav element you want to apply effects to.
 */
export default function drake(nav_id) {
  $w.id(nav_id).classList.add('transparent');
  window.onscroll = (function () {
    let nav = $w.id(nav_id);
    if (document.body.scrollTop === 0 && !nav.classList.contains('transparent')) {
      nav.classList.add('transparent');
    }
    else if (nav.classList.contains('transparent')) {
      nav.classList.remove('transparent');
    }
  });
}
