import Vue from 'vue';
import App from './App.vue';

import './assets/styles/test.css';
import './assets/styles/test.less'

import './assets/images/1.jpg'

const root = document.createElement('div')
document.body.appendChild(root)


new Vue({
  render:(h) => h(App)
}).$mount(root)