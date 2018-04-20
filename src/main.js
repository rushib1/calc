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
  template: `
  <div>
  <input v-model="number1">
  <input v-model="number2">
  <p>Result is {{value}} <p>
  <button v-on:click="value=parseInt(number1)+parseInt(number2)">+</button>
  <button v-on:click="value=parseInt(number1)-parseInt(number2)">-</button>
  </div>
  `
})

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
