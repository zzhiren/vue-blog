import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home/Home'
// import Blog from '@/components/Blog/Blog'
// import BlogList from '@/components/Blog/BlogList'
// import BlogListByTag from '@/components/Blog/BlogListByTag'
// import BlogDetils from '@/components/Blog/BlogDetils'
// import Music from '@/components/Music/Music'
// import About from '@/components/About/About'
// import Collection from '@/components/Collection/Collection'
// import Project from '@/components/Project/Project'
import iView from 'iview';

// 路由懒加载
const Home = () => import('@/components/Home/Home');
const Blog = () => import('@/components/Blog/Blog');
const BlogList = () => import('@/components/Blog/BlogList');
const Tag = () => import('@/components/Blog/Tag');
const BlogDetails = () => import('@/components/Blog/BlogDetails');
const Music = () => import('@/components/Music/Music');
const About = () => import('@/components/About/About');
const Collection = () => import('@/components/Collection/Collection');
const Project = () => import('@/components/Project/Project');

Vue.use(Router)

const router = new Router({
  linkActiveClass: 'active',
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect:"/blog",
      meta: {
      },
      children: [
        {
          path: 'blog',
          name: 'Blog',
          redirect: '/blog/bloglist',
          component: Blog,
          meta: {
          },
          children:[
            {
              path: 'bloglist',
              name: 'BlogList',
              component: BlogList,
              meta: {
                title: 'Zzhiren - BLOG'
              },
            },
            
            {
              path: 'blogdetails/:id',
              name: 'BlogDetails',
              component: BlogDetails,
              meta: {
                title: 'Zzhiren - DETAILS'
              },
            },
            {
              // path: 'bloglistbytag/:tagName/:tagAliasName/:tagIcon/:tagDsc',
              path: 'tag/:tagName',
              name: 'Tag',
              component: Tag,
              meta: {
                title: 'Zzhiren - TAG'
              },
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
          component: About,
          meta: {
            title: 'Zzhiren - ABOUT'
          },
        },
        {
          path: 'collection',
          name: 'Collection',
          component: Collection
        },
        {
          path: 'project',
          name: 'Project',
          component: Project,
          meta: {
            title: 'Zzhiren - Project'
          },
        },
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next();
});

router.afterEach(route => {
  iView.LoadingBar.finish();
  window.scrollTo(0,0);
});

export default router;
