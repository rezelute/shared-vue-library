export type SharedRoute = {
   path: string;
   name: string;
   props?: Record<string, any>;
   meta?: Record<string, any>;
};

export const sharedRoutes: SharedRoute[] = [
   {
      path: "/account",
      name: "account",
      // component: AccountPage,
      meta: { requiresAuth: true },
   },
   {
      path: "/goodbye",
      name: "goodbye",
      // component: GoodbyePage,
   },
   {
      path: "/signup",
      name: "signup",
      props: { authType: "signup" },
      meta: { guestOnly: true },
      // component: SignupPage,
   },
   {
      path: "/signin",
      name: "signin",
      props: { authType: "signin" },
      meta: { guestOnly: true },
      // component: SigninPage,
   },
   {
      path: "/error",
      name: "error",
      // component: ErrorPage,
   },
   {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      // component: NotFoundPage,
   },
];
