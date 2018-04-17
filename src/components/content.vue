<template>
  <div class="vue-disclosure-content" :class="{ 'vue-disclosure-content-active': isOpen }">
    <slot />
  </div>
</template>

<script>
  import config from '../config'
  import { isImageLoaded, isObject } from '../helpers'

  export default {
    data () {
      return {
        num: 0,
        item: {},
        state: {}
      }
    },
    watch: {
      'state.open': 'toggle'
    },
    computed: {
      isOpen () {
        return isObject(this.$disclosure.items[this.num]) ? this.$disclosure.items[this.num].open : false
      }
    },
    mounted () {
      this.init()
    },
    methods: {
      init () {
        this.num = this.$disclosure.items.length - 1;
        if(!this.$disclosure.items[this.num]) { return; }

        this.item.content = {};

        this.item.content.$el = this.$el;
        this.item.content.$vnode = this.$vnode;
        this.item.content.height = '';

        Object.assign(this.$disclosure.items[this.num], this.item);
        this.state = this.$disclosure.items[this.num];

        this.update();
        this.bind();
      },
      bind () {
        this.$on('update', this.update);
        this.$on('active', this.active);
        this.$on('disable', this.disable);
      },
      update () {
        let height;
        this.release();

        height = this.$el.scrollHeight;
        [].forEach.call(this.$el.querySelectorAll('img'), img => {
          if(!isImageLoaded(img)) {
            height += +img.getAttribute('height');
          }
        });

        this.$disclosure.items[this.num]['content']['height'] = height;

        this.$el.classList.add('vue-disclosure-content');
        this.$el.style['maxHeight'] = '0px';
        this.$el.style['transition'] = `max-height ${ this.state.duration + (height / this.state.duration) }ms 0s ${ this.state.ease }`;
      },
      active () {
        this.update();
      },
      disable () {
        this.release();
      },
      release () {
        this.$el.classList.remove('vue-disclosure-content');
        this.$el.style['transition'] = '';
        this.$el.style['maxHeight'] = '';
      },
      toggle () {
        if(this.state.open) {
          this.$el.style['maxHeight'] = `${ this.$disclosure.items[this.num].content.height }px`;
        } else {
          this.$el.style['maxHeight'] = '0px';
        }
      }
    }
  };
</script>

<style scoped>
  .vue-disclosure-content {
    overflow: hidden;
  }
</style>