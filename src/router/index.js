import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NotFound from "../views/NotFound.vue";
import LoginView from "../views/LoginView.vue";
import AboutView from "../views/AboutView.vue";
import PartnershipView from "../views/PartnershipView.vue";
import TermView from "../views/TermView.vue";
import ContactView from "../views/ContactView.vue";
import CareerView from "../views/CareerView.vue";
import ProfileView from "../views/ProfileView.vue";
import RegisterView from "../views/RegisterView.vue";
import GalleryView from "../views/GalleryView.vue";
import PaymentView from "../views/PaymentView.vue";
import CartView from "../views/CartView.vue";
import ShoesView from "../views/categories/ShoesView.vue";
import ShoesDetail from "../views/categories/ShoesDetail.vue";
import JacketView from "../views/categories/JacketView.vue";
import JacketDetail from "../views/categories/JacketDetail.vue";
import SandalView from "../views/categories/SandalView.vue";
import SandalDetail from "../views/categories/SandalDetail.vue";
import HatView from "../views/categories/HatView.vue";
import HatDetail from "../views/categories/HatDetail.vue";
import ShirtView from "../views/categories/ShirtView.vue";
import ShirtDetail from "../views/categories/ShirtDetail.vue";
import PantView from "../views/categories/PantView.vue";
import PantDetail from "../views/categories/PantDetail.vue";
import BeltView from "../views/categories/BeltView.vue";
import BeltDetail from "../views/categories/BeltDetail.vue";
import GloveView from "../views/categories/GloveView.vue";
import GloveDetail from "../views/categories/GloveDetail.vue";
import MountainView from "../views/categories/MountainView.vue";
import MountainDetail from "../views/categories/MountainDetail.vue";
import WalletView from "../views/categories/WalletView.vue";
import WalletDetail from "../views/categories/WalletDetail.vue";
import DaypackView from "../views/categories/DaypackView.vue";
import DaypackDetail from "../views/categories/DaypackDetail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
  {
    path: "/partnership",
    name: "Partnership",
    component: PartnershipView,
  },
  {
    path: "/term",
    name: "Term",
    component: TermView,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactView,
  },
  {
    path: "/career",
    name: "Career",
    component: CareerView,
  },
  {
    path: "/profile",
    name: "Profile",
    component: ProfileView,
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterView,
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: GalleryView,
  },
  {
    path: "/payment",
    name: "Payment",
    component: PaymentView,
  },
  {
    path: "/cart",
    name: "Cart",
    component: CartView,
  },
  {
    path: "/shoes",
    name: "Shoes",
    component: ShoesView,
  },
  {
    path: "/shoes/:id",
    name: "ShoesDetail",
    component: ShoesDetail,
  },
  {
    path: "/jacket",
    name: "Jacket",
    component: JacketView,
  },
  {
    path: "/jacket/:id",
    name: "JacketDetail",
    component: JacketDetail,
  },
  {
    path: "/sandal",
    name: "Sandal",
    component: SandalView,
  },
  {
    path: "/sandal/:id",
    name: "SandalDetail",
    component: SandalDetail,
  },
  {
    path: "/hat",
    name: "Hat",
    component: HatView,
  },
  {
    path: "/hat/:id",
    name: "HatDetail",
    component: HatDetail,
  },
  {
    path: "/shirt",
    name: "Shirt",
    component: ShirtView,
  },
  {
    path: "/shirt/:id",
    name: "ShirtDetail",
    component: ShirtDetail,
  },
  {
    path: "/pant",
    name: "Pant",
    component: PantView,
  },
  {
    path: "/pant/:id",
    name: "PantDetail",
    component: PantDetail,
  },
  {
    path: "/belt",
    name: "Belt",
    component: BeltView,
  },
  {
    path: "/belt/:id",
    name: "BeltDetail",
    component: BeltDetail,
  },
  {
    path: "/glove",
    name: "Glove",
    component: GloveView,
  },
  {
    path: "/glove/:id",
    name: "GloveDetail",
    component: GloveDetail,
  },
  {
    path: "/mountaineering",
    name: "Mountaineering",
    component: MountainView,
  },
  {
    path: "/mountaineering/:id",
    name: "MountainDetail",
    component: MountainDetail,
  },
  {
    path: "/wallet",
    name: "Wallet",
    component: WalletView,
  },
  {
    path: "/wallet/:id",
    name: "WalletDetail",
    component: WalletDetail,
  },
  {
    path: "/daypack",
    name: "Daypack",
    component: DaypackView,
  },
  {
    path: "/daypack/:id",
    name: "DaypackDetail",
    component: DaypackDetail,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = JSON.parse(localStorage.getItem("authenticated"));
  if (to.name !== "Login" && to.name !== "Register" && !isAuthenticated)
    next({
      name: "Login"
    });
  else if (to.name === "Login" && isAuthenticated)
    next({
      name: "Home"
    });
  else next();
});

export default router;
