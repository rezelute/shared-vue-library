import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../pages/LandingPage.vue";
import HomePage from "../pages/HomePage.vue";
import AccountPage from "../pages/AccountPage.vue";
import SignupPage from "@/pages/AuthPage.vue";
import SigninPage from "@/pages/AuthPage.vue";
import GoodbyePage from "@/pages/GoodbyePage.vue";
import NotFoundPage from "@/pages/NotFoundPage.vue";
import ErrorPage from "@/pages/ErrorPage.vue";
import { useUserStore } from "@/stores/userStore";
// import Session from "supertokens-web-js/recipe/session";

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
         path: "/error",
         name: "error",
         component: ErrorPage,
      },
      {
         path: "/:pathMatch(.*)*",
         name: "not-found",
         component: NotFoundPage,
      },
   ],
});

// let isFirstVisit = true; // Global flag outside of beforeEach

// 🔐 Global Guard: Handle authentication logic
router.beforeEach(async (to, from, next) => {
   const userStore = useUserStore();

   await userStore.updateAuth();
   // // Only run updateAuth() if it's NOT the first visit
   // // On first visit, App.vue will call updateAuth() alongside a Server Health Check (and do loading once for both)
   // if (!isFirstVisit) {
   // } else {
   //    isFirstVisit = false; // Set flag to false after the first navigation
   // }

   // Redirect unauthenticated users trying to access protected pages
   if (to.meta.requiresAuth && !userStore.isSignedIn) {
      next("/signin");
   }
   // Redirect logged-in users trying to access signup or signin
   else if (to.meta.guestOnly && userStore.isSignedIn) {
      next("/home");
   } else {
      next();
   }
});
export default router;
