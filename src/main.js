// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.component('Calculator', {
  data: function () {
    return {
      value: 0,
      number1: 0,
      number2: 0
    }
  },
  methods: {
    calculate: function (a, b, c) {
      if (!isNaN(parseFloat(a)) && !isNaN(parseFloat(b))) {
        if (c === '+') {
          this.value = parseFloat(a) + parseFloat(b)
        } else {
          this.value = parseFloat(a) - parseFloat(b)
        }
      } else {
        this.value = 'Invalid Input'
      }
    }
  },
  template: `
  <div>
  <input v-model="number1">
  <input v-model="number2">
  <p>Result is {{value}} </p>
  <button v-on:click="calculate(number1, number2, '+')">+</button>
  <button v-on:click="calculate(number1, number2, '-')">-</button>
  </div>
  `
})

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
