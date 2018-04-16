<template>
  <div class="vue-disclosure-toggler" :class="{ 'vue-disclosure-content-active': isOpen }">
    <slot />
  </div>
</template>

<script>
  export default {
    props: {
      options: {
        type: Object,
        default () {
          return {
            open: false,
            duration: 600,
            ease: 'ease',
            responsive: []
          }
        }
      }
    },
    data () {
      return {
        num: 0,
        item: {}
      }
    },
    watch: {
    },
    computed: {
      isOpen () {
        return this.$disclosure.items[this.num] instanceof Object ? this.$disclosure.items[this.num].open : false
      }
    },
    created () {
    },
    mounted () {
      this.init();
    },
    methods: {
      init () {
        this.num = this.$disclosure.items.length;

        this.item = Object.assign({
          toggler: {
            el: this.$el
          }
        }, this.options);

        this.$disclosure.items.push( this.item )
        this.bind();
      },
      bind () {
        this.$el.addEventListener('click', this.toggle);
      },
      beforeDestroy () {
        this.$el.removeEventListener('click', this.toggle, false)
      },
      toggle () {
        this.$disclosure.items[this.num].open = !this.$disclosure.items[this.num].open;
      }
    }
  };
</script>