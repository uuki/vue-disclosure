# Vue Disclosure

[![Build Status](https://travis-ci.org/uuki/vue-disclosure.svg?branch=master)](https://travis-ci.org/uuki/vue-disclosure)

## Overview

Accordion plugin for Vue 2.

## Installation

### Step 1

```shell
$ yarn add vue-disclosure
```

### Step 2

```js
import Vue from 'vue'
import VueDisclosure from 'vue-disclosure'


Vue.use(VueDisclosure)
```

## Usage

```html
<template>
  <disclosure-toggler :options="options">The item opens and closes by clicking.</disclosure-toggler>
  <disclosure-content>
    <div>Accordion Item</div>
  </disclosure-content>
</template>

<script>
  export default {
    data () {
      options: {
        active: true, // default true
        ease: 'ease',
        duration: 600,
        responsive: [
          {
            breakpoint: 768,
            options: {
              active: false
            }
          }
        ],
      }
    }
  }
</script>
```

TODO: grouping
