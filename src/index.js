/**
 * vue-disclosure
 */
// import config from './config'

/**
 * components
 */
import Toggler from './components/toggler'
import Content from './components/content'


var VueDisclosure = {};

function onResize (state) {
  var timer = false;
  if(timer !== false) clearTimeout(timer);

  timer = setTimeout(function() {
    state.width = document.documentElement.clientWidth
    state.height = document.documentElement.clientHeight
  }, 200);
}

VueDisclosure.install = function(Vue, options = {}) {
  const state = {
    active: true,
    $window: {
      width: 0,
      height: 0
    },
    setup: false,
    opens: [],
    items: [],
    reload: () => { return }
  };

  window.addEventListener('resize', function() { onResize(state.$window) })
  window.addEventListener('load', function() { onResize(state.$window); state.setup = true; })

  // const custom = Object.assign(config, options);
  Vue.util.defineReactive(Vue.prototype, '$disclosure', state)

  // Vue.component(`${custom.namespace}-toggler`, Toggler);
  // Vue.component(`${custom.namespace}-content`, Content);
  Vue.component('disclosure-toggler', Toggler);
  Vue.component('disclosure-content', Content);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueDisclosure)
}

export default VueDisclosure;