window.Vue = require('vue')

Vue.assets('App',require('./vue/App.vue').default)


const app = new Vue({
    el:'#app'
})
