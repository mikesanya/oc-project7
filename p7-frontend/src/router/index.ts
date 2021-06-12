import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Forumpostview from '../views/Forum-post-view.vue'
import Editpost from '../views/EditPost.vue'
import Profileaccountsetting from '../views/Profile-account-setting.vue'



const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      hideNavbar: true,
    }
  },
  {
    path: '/forum-post-view/:id',
    name: 'Forum-post-view',
    component: Forumpostview
  },
  {
    path: '/edit-post/:id',
    name: 'Editpost',
    component: Editpost
  },
  {
    path: '/profile-account-setting',
    name: 'Profile-account-setting',
    component: Profileaccountsetting
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


const userId = localStorage.getItem('userId')
let isAuthenticated= false;
		if(userId != null) {
      isAuthenticated= true;  
				} 
router.beforeEach((to,from,next) => {
  if (to.name !== 'Login' && !isAuthenticated) next({name: 'Login'})
  else next()
})

export default router
