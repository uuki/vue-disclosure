<template>
  <div :class="{ 'vue-disclosure-active': isOpen }"
       class="vue-disclosure-toggler"
  >
    <slot />
  </div>
</template>

<script>
  import { isObject } from '../helpers'
  import { easing } from '../utils'

  export default {
    props: {
      options: {
        type: Object,
        default() { return {} }
      }
    },
    data () {
      return {
        num: 0,
        defaultSettings: {
          active: true,
          open: false,
          duration: 600,
          ease: 'ease',
          mobileFirst: true,
          responsive: []
        },
        item: {},
      }
    },
    computed: {
      isOpen () {
        return this.item.open
      }
    },
    watch: {
      'item.active': 'onChangeState'
    },
    created () {
    },
    mounted () {
      this.init();
    },
    methods: {
      init () {
        this.num = this.$disclosure.items.length;
        Object.assign(this.defaultSettings, this.options);

        this.defaultSettings.ease = easing(this.defaultSettings.ease);
        if(this.defaultSettings.responsive.length) {
          this.defaultSettings.responsive.forEach(point => {
            point.options.ease = easing(point.options.ease || 'ease');
          })
        }

        this.item = Object.assign({}, this.defaultSettings);

        this.item.toggler = {};
        this.item.toggler.$el = this.$el;
        this.item.toggler.$vnode = this.$vnode;

        this.$disclosure.items.push( this.item )
        this.bind()
        this.onResize()
      },
      bind () {
        this.$el.addEventListener('click', this.toggle)

        this.$on('update', this.update)
        this.$on('active', this.active)
        this.$on('disable', this.disable)

        this.$disclosure.reload = () => {
          this.item.content.$vnode.child.$emit('update')
        }

        // Attach Responsive Event
        if(this.item.responsive.length) {
          this.$watch('$disclosure.$window.width', this.onResize)
        }
      },
      update () {
        this.item.content.$vnode.child.$emit('update')
      },
      active () {
        this.item.active = true;
        this.item.content.$vnode.child.$emit('active')
      },
      disable () {
        this.item.content.$vnode.child.$emit('disable')
        this.item.active = false;
        this.item.open = false;
      },
      beforeDestroy () {
        this.$el.removeEventListener('click', this.toggle, false)
      },
      toggle () {
        if(!this.item.active) { return; }
        this.item.open = !this.item.open;
      },
      onChangeState () {
        if( !isObject(this.item.content) ) { return; }

        if(this.item.active) {
          this.item.content.$vnode.child.$emit('update')
        } else {
          this.item.content.$vnode.child.$emit('disable')
        }
      },
      onResize () {
        let count = 0;

        this.item.responsive.forEach((point, i) => {
          if(!isObject(point)) { return; }

          let responsiveSettings = {}
          Object.assign(responsiveSettings, this.defaultSettings)

          let isBreak = this.item.mobileFirst ? (point.breakpoint >= this.$disclosure.$window.width) : (point.breakpoint <= this.$disclosure.$window.width)

          if(isBreak) {
            for(let key in point.options) {
              responsiveSettings[key] = point.options[key];
            }

            Object.assign(this.item, responsiveSettings)
            count++
          }

          if(i >= this.item.responsive.length - 1 && !count) {
            Object.assign(this.item, responsiveSettings)
          }
        })
      }
    }
  };
</script>