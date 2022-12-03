import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import AboutView from '../views/AboutView.vue'
import PartnershipView from '../views/PartnershipView.vue'
import TermView from '../views/TermView.vue'
import ContactView from '../views/ContactView.vue'
import CareerView from '../views/CareerView.vue'
import UserView from '../views/UserView.vue'
import RegisterView from '../views/RegisterView.vue'
import GalleryView from '../views/GalleryView.vue'
import PaymentView from '../views/PaymentView.vue'
import ShoesView from '../views/categories/ShoesView.vue'
import JacketView from '../views/categories/JacketView.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
  },
  {
    path: '/partnership',
    name: 'Partnership',
    component: PartnershipView,
  },
  {
    path: '/term',
    name: 'Term',
    component: TermView,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView,
  },
  {
    path: '/career',
    name: 'Career',
    component: CareerView,
  },
  {
    path: '/user',
    name: 'User',
    component: UserView
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: GalleryView
  },
  {
    path: '/payment',
    name: 'Payment',
    component: PaymentView
  },
  {
    path: '/shoes',
    name: 'Shoes',
    component: ShoesView
  },
  {
    path: '/jacket',
    name: 'Jacket',
    component: JacketView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router


