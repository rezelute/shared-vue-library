const e = [
  {
    path: "/goodbye",
    name: "goodbye"
    // component: GoodbyePage,
  },
  {
    path: "/signup",
    name: "signup",
    props: { authType: "signup" },
    meta: { guestOnly: !0 }
    // component: SignupPage,
  },
  {
    path: "/signin",
    name: "signin",
    props: { authType: "signin" },
    meta: { guestOnly: !0 }
    // component: SigninPage,
  },
  {
    path: "/account",
    name: "account",
    // component: AccountPage,
    meta: { requiresAuth: !0 }
  },
  {
    path: "/profile-check",
    name: "profile-check",
    meta: { requiresAuth: !0 }
  },
  {
    path: "/profile",
    name: "profile",
    meta: { requiresAuth: !0 }
  },
  {
    path: "/error",
    name: "error"
    // component: ErrorPage,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found"
    // component: NotFoundPage,
  }
], t = {
  sharedRoutes: e
};
export {
  t as default,
  e as sharedRoutes
};
