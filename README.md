# Vue Disclosure

## Overview

Accordion plugin for Vue 2.

## Requirements


## Installation

### Step 1

```
yarn add vue-disclosure # Currently unsupported
```

### Step 2

```js
import Vue from 'vue'
import VueDisclosure from 'vue-disclosure'


Vue.use(VueDisclosure)
```

## Usage

```vue
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
        ease: 'ease',
        duration: 600,
        responsive: [768],
      }
    }
  }
</script>
```

TODO: responsive option