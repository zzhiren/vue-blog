import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Blog from '@/components/Blog/Blog'
import BlogList from '@/components/Blog/BlogList'
import BlogDetils from '@/components/Blog/BlogDetils'
import Music from '@/components/Music/Music'
import About from '@/components/About/About'
import Collection from '@/components/Collection/Collection'
import Project from '@/components/Project/Project'
import iView from 'iview';

Vue.use(Router)

const router = new Router({
  linkActiveClass: 'active',
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect:"/blog/bloglist",
      children: [
        {
          path: 'blog',
          name: 'Blog',
          redirect: '/blog/bloglist',
          component: Blog,
          children:[
            {
              path: 'bloglist',
              name: 'BlogList',
              component: BlogList,
            },
            {
              path: 'blogdetils/:id',
              name: 'BlogDetils',
              component: BlogDetils,
            },
            {
              path: 'bloglist',
              name: 'BlogList',
              component: BlogList,
            },
          ]
        },
        {
          path: 'music',
          name: 'Music',
          component: Music
        },
        {
          path: 'about',
          name: 'About',
          component: About
        },
        {
          path: 'collection',
          name: 'Collection',
          component: Collection
        },
        {
          path: 'project',
          name: 'Project',
          component: Project
        },
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  next();
});

router.afterEach(route => {
  iView.LoadingBar.finish();
});

export default router;
