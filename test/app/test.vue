<template>
  <div class="test">
    <h1>TEST</h1>

    <section class="pattern">
      <h2 class="pattern__head">Basic</h2>
      <div class="pattern__content">

        <disclosure-toggler :options="disclosureBasic" class="togglerBasic">Click Here</disclosure-toggler>
        <disclosure-content class="contentBasic">Hello</disclosure-content>

      </div>
    </section>

    <section class="pattern">
      <h2 class="pattern__head">Responsive (demo 768px)</h2>
      <div class="pattern__content">

        <disclosure-toggler :options="disclosureResponsive">Any Title</disclosure-toggler>
        <disclosure-content>Any Contents</disclosure-content>

      </div>
    </section>

  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        disclosureBasic: {
          active: true,
          duration: 600
        },
        disclosureResponsive: {
          active: false,
          responsive: [
            {
              breakpoint: 1024,
              options: {
                active: true,
                duration: 1000
              }
            },
            {
              breakpoint: 900,
              options: {
                active: false
              }
            },
            {
              breakpoint: 768,
              options: {
                active: true,
                duration: 600
              }
            }
          ]
        }
      }
    },
  }
</script>

<style>
  body {
    margin: 0;
    font-size: 16px;
  }

  p {
    line-height: 1.8;
    margin: 0 0 30px;
    letter-spacing: .02em;
  }

  .demo {
    width: 800px;
    margin: auto;
    padding: 40px 0;
  }

  .pattern {
    margin-bottom: 40px;
  }
</style>