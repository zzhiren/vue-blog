import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Blog from '@/components/Blog/Blog'
import Music from '@/components/Music/Music'
import Resume from '@/components/Resume/Resume'
import Collection from '@/components/Collection/Collection'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect:"",
      children: [
        {
          path: 'blog',
          name: 'Blog',
          component: Blog
        },
        {
          path: 'music',
          name: 'Music',
          component: Music
        },
        {
          path: 'resume',
          name: 'Resume',
          component: Resume
        },
        {
          path: 'collection',
          name: 'Collection',
          component: Collection
        },
      ]
    }
  ]
})
