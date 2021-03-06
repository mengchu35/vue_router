import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Travels from '../views/Travels.vue'
import NotFound from '../views/NotFound.vue'
import Rose from '../components/Rose.vue'
import Hydrangea from '../components/Hydrangea.vue'
import Tulipa from '../components/Tulipa.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/travels',
    name: 'Travels',
    component: Travels,
    children: [
      { path: 'rose', name: 'rose', component: Rose },
      { path: 'hydrangea', name: 'hydrangea', component: Hydrangea },
      { path: 'tulipa', name: 'tulipa', component: Tulipa },
    ],
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound,
  },
  //{
  //  path: '*',
  //  redirect: '/404',
  //}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (!to.matched.length) {
    next('/404');
  } else {
    next();
  }
});

export default router
