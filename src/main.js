require('./transition.css')
import Vue from 'vue'
import Fullpage from '@/components/Fullpage.vue'
import Page1 from './page1.vue'
import Page2 from './page2.vue'

new Vue({
  el: '#app',
  components: {
    Fullpage,
    Page1,
    Page2,
  },
  data: {
    bgColor:['#c90','#c09','#09c','#9c0']
  }
})
