import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../pages/LandingPage.vue";
import HomePage from "../pages/HomePage.vue";
import AccountPage from "../pages/AccountPage.vue";
import SignupPage from "@/pages/AuthPage.vue";
import SigninPage from "@/pages/AuthPage.vue";
import GoodbyePage from "@/pages/GoodbyePage.vue";
import NotFoundPage from "@/pages/NotFoundPage.vue";
import Session from "supertokens-web-js/recipe/session";

const authRoutes = [
   {
      path: "/home",
      name: "home",
      component: HomePage,
      meta: { requiresAuth: true },
   },
   {
      path: "/account",
      name: "account",
      component: AccountPage,
      meta: { requiresAuth: true },
   },
];

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path: "/",
         name: "landing",
         component: LandingPage,
      },
      {
         path: "/goodbye",
         name: "goodbye",
         component: GoodbyePage,
      },
      {
         path: "/signup",
         name: "signup",
         component: SignupPage,
         props: { authType: "signup" },
         meta: { guestOnly: true }, // Prevents logged-in users from accessing
      },
      {
         path: "/signin",
         name: "signin",
         component: SigninPage,
         props: { authType: "signin" },
         meta: { guestOnly: true }, // Prevents logged-in users from accessing
      },
      ...authRoutes,
      {
         path: "/:pathMatch(.*)*",
         name: "not-found",
         component: NotFoundPage,
      },
   ],
});

// 🔐 Global Guard: Handle authentication logic
router.beforeEach(async (to, from, next) => {
   const isLoggedIn = await Session.doesSessionExist();

   // Redirect unauthenticated users trying to access protected pages
   if (to.meta.requiresAuth && !isLoggedIn) {
      next("/signin");
   }
   // Redirect logged-in users trying to access signup or signin
   else if (to.meta.guestOnly && isLoggedIn) {
      next("/home");
   } else {
      next();
   }
});

export default router;
