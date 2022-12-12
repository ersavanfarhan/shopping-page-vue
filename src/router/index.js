import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import AboutView from "../views/AboutView.vue";
import PartnershipView from "../views/PartnershipView.vue";
import TermView from "../views/TermView.vue";
import ContactView from "../views/ContactView.vue";
import CareerView from "../views/CareerView.vue";
import UserView from "../views/UserView.vue";
import RegisterView from "../views/RegisterView.vue";
import GalleryView from "../views/GalleryView.vue";
import PaymentView from "../views/PaymentView.vue";
import ShoesView from "../views/categories/ShoesView.vue";
import ShoesDetail from "../views/categories/ShoesDetail.vue";
import JacketView from "../views/categories/JacketView.vue";
import JacketDetail from "../views/categories/JacketDetail.vue";
import SandalView from "../views/categories/SandalView.vue";
import HatView from "../views/categories/HatView.vue";
import ShirtView from "../views/categories/ShirtView.vue";
import PantView from "../views/categories/PantView.vue";
import BeltView from "../views/categories/BeltView.vue";
import GloveView from "../views/categories/GloveView.vue";
import MountainView from "../views/categories/MountainView.vue";
import WalletView from "../views/categories/WalletView.vue";
import DaypackView from "../views/categories/DaypackView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView
  },
  {
    path: "/about",
    name: "About",
    component: AboutView
  },
  {
    path: "/partnership",
    name: "Partnership",
    component: PartnershipView
  },
  {
    path: "/term",
    name: "Term",
    component: TermView
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactView
  },
  {
    path: "/career",
    name: "Career",
    component: CareerView
  },
  {
    path: "/user",
    name: "User",
    component: UserView
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterView
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: GalleryView
  },
  {
    path: "/payment",
    name: "Payment",
    component: PaymentView
  },
  {
    path: "/shoes",
    name: "Shoes",
    component: ShoesView
  },
  {
    path: '/shoes/:id',
    name: "ShoesDetail",
    component: ShoesDetail
  },
  {
    path: "/jacket",
    name: "Jacket",
    component: JacketView
  },
  {
    path: '/jacket/:id',
    name: "JacketDetail",
    component: JacketDetail
  },
  {
    path: "/sandal",
    name: "Sandal",
    component: SandalView
  },
  {
    path: "/hat",
    name: "Hat",
    component: HatView 
  },
  {
    path: "/shirt",
    name: "Shirt",
    component: ShirtView 
  },
  {
    path: "/pant",
    name: "Pant",
    component: PantView 
  },
  {
    path: "/belt",
    name: "Belt",
    component: BeltView 
  },
  {
    path: "/glove",
    name: "Glove",
    component: GloveView  
  },
  {
    path: "/mountaineering",
    name: "Mountaineering",
    component: MountainView 
  },
  {
    path: "/wallet",
    name: "Wallet",
    component: WalletView
  },
  {
    path: "/daypack",
    name: "Daypack",
    component: DaypackView
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = JSON.parse(localStorage.getItem('authenticated'))
  if (to.name !== "Login" && !isAuthenticated)
    next({
      name: "Login",
    });
  else if (to.name === "Login" && isAuthenticated)
    next({
      name: "Home",
    });
  else next();
});

export default router;
