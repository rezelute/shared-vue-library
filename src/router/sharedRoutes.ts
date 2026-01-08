export type SharedRoute = {
   path: string
   name: string
   props?: Record<string, any>
   meta?: Record<string, any>
}

export const sharedRoutes: SharedRoute[] = [
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
      path: "/account",
      name: "account",
      // component: AccountPage,
      meta: { requiresAuth: true },
   },
   {
      path: "/profile-check",
      name: "profile-check",
      meta: { requiresAuth: true },
   },
   {
      path: "/profile",
      name: "profile",
      meta: { requiresAuth: true },
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
]
