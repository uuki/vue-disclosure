/**
 * vue-disclosure
 */
import config from './config'

/**
 * components
 */
import Toggler from './components/toggler'
import Content from './components/content'


var VueDisclosure = {};
VueDisclosure.install = function(Vue, options={}) {
  const state = {
    opens: [],
    items: [],
  };

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