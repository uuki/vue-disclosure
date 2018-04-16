# Vue Disclosure

## Overview

Accordion plugin for Vue 2.

## Requirements


## Installation


## Usage

### Step 1

```js
import Vue from 'vue'
import VueDisclosure from 'vue-disclosure' # Currently unsupported


Vue.use(VueDisclosure)
```

### Step 2

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