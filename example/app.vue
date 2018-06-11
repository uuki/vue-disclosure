<template>
  <div class="demo">
    <h1>DEMO</h1>

    <section class="pattern" v-for="(item, i) in items" :key="i">
      <h2 class="pattern__head">{{ item.title }}</h2>

      <div class="pattern__content">
        <disclosure-toggler :options="item.option" class="disclosure-toggler">Click Here</disclosure-toggler>
        <disclosure-content class="disclosure-content"><p>Hello</p></disclosure-content>
      </div>
    </section>

    <section class="responsive">
      <h2 class="responsive__head">Responsive (768)</h2>

      <div class="responsive__content">
        <disclosure-toggler :options="responsive" class="responsive__toggler">Any Contents</disclosure-toggler>
        <disclosure-content>
          <table class="table">
            <tr>
              <th>one</th>
              <th>two</th>
              <th>three</th>
            </tr>
            <tr>
              <td>foo</td>
              <td>bar</td>
              <td>baz</td>
            </tr>
            <tr>
              <td>hoge</td>
              <td>fuga</td>
              <td>piyo</td>
            </tr>
          </table>
        </disclosure-content>
      </div>
    </section>

  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        items: [
          {
            title: 'Basic',
            option: {
              active: true,
              duration: 800,
              ease: 'ease'
            }
          },
          {
            title: 'EaseIn',
            option: {
              ease: 'ease-in'
            }
          },
          {
            title: 'EaseOut',
            option: {
              ease: 'ease-out'
            }
          },
          {
            title: 'EaseInOutQuad (cubic-bezier)',
            option: {
              duration: 700,
              ease: 'easeInOutQuad'
            }
          },
        ],
        responsive: {
          active: false,
          responsive: [
            {
              breakpoint: 768,
              options: {
                active: true,
                ease: 'easeInOutQuad',
                duration: 600
              }
            }
          ]
        }
      }
    },
  }
</script>

<style lang="scss">
  body {
    margin: 0;
    font-size: 16px;
  }

  p {
    line-height: 1.8;
    margin: 0;
    letter-spacing: .02em;
  }

  .demo {
    width: 800px;
    margin: auto;
    padding: 40px 0;
  }

  .pattern {
    min-height: 250px;
    margin-bottom: 40px;
  }

  .pattern__content {
    color: #fff;
    font-weight: bold;
  }

  .disclosure-toggler {
    padding: 10px 15px;
    cursor: pointer;
    background-color: #1cd477;
  }

  .disclosure-content {
    p {
      padding: 60px 15px;
      background-color:#1bc770;
    }
  }

  .responsive__toggler {
    font-weight: bold;
    margin-bottom: 40px;
  }

  .table {
    background-color: #f2f2f2;

    th, td {
      padding: 15px 10px;
      text-align: center;
    }
    th {
      width: 100px;
    }

  }

  @media screen and (max-width: 768px) {
    .responsive__toggler {
      cursor: pointer;
    }
  }
</style>