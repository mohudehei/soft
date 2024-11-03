import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/sider'
import practice from '@/components/practice'
import course from '@/components/course'
import ranking from '@/components/ranking'
import statistic from '@/components/statistic'
import user_page from '@/components/user_page'
import ask from '@/components/ask'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'ask',
      component: ask
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
        {
          path:'/practice',
          name:'practice',
          component: practice
        },
        {
          path:'/course',
          name:'course',
          component: course
        },
        {
          path:'/ranking',
          name:'ranking',
          component: ranking
        },
        {
          path:'/statistic',
          name:'statistic',
          component: statistic
        },
        {
          path:'/user_page',
          name:'user_page',
          component: user_page
        }
      ]
    }
  ]
})
