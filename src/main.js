import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueNoty from 'vuejs-noty'
import 'vuejs-noty/dist/vuejs-noty.css'
import wysiwyg from "vue-wysiwyg";
import 'vue-wysiwyg/dist/vueWysiwyg.css';

Vue.use(wysiwyg, {});
Vue.use(VueNoty)

Vue.config.productionTip = false

const authData = localStorage.getItem("auth");

new Vue({
  router,
  data: {
    auth: authData ? JSON.parse(authData) : {}
  },
  store,
  render: h => h(App)
}).$mount('#app')
