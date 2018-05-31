import { mount, createLocalVue } from '@vue/test-utils'
import App from './test'
import VueDisclosure from '@/index.js'

describe('App.vue', () => {
  let wrapper;

  beforeEach(() => {
    const localVue = createLocalVue()
    localVue.use(VueDisclosure);

    wrapper = mount(App, { localVue });
  });

  it('adds an $disclosure scope to the Vue', () => {
    expect(typeof wrapper.vm.$disclosure).toBe('object')
    expect(typeof wrapper.vm.$disclosure.$window).toBeTruthy()
    expect(typeof wrapper.vm.$disclosure.active).toBeTruthy()
    expect(typeof wrapper.vm.$disclosure.setup).toBeTruthy()
    expect(typeof wrapper.vm.$disclosure.items).toBeTruthy()
  })

  it('should match snapshot', () => {
    expect(wrapper.element).toBeDefined();
    expect(wrapper.element).toMatchSnapshot();
  })

  it('test toggler component', () => {
    expect(wrapper.classes()).toContain('test')
    const toggler = wrapper.find('.togglerBasic')
    const content = wrapper.find('.contentBasic')

    expect(content.html().match(/style="([^"]*)"/i)[1]).toBe('max-height: 0px;')

    toggler.trigger('click')
    expect(content.classes()).toContain('vue-disclosure-active')
  })

})