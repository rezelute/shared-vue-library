import { type Router } from "vue-router"
import { useUserStore } from "../stores/userStore"

export function setupAuthGuard(router: Router) {
   router.beforeEach(async (to, from, next) => {
      const userStore = useUserStore()
      await userStore.updateAuth()

      // if the user is not signed in and trying to access a route that requires authentication
      // redirect to signin
      if (to.meta.requiresAuth && !userStore.isSignedIn) {
         next("/signin")
      }
      // trying to access guest only routers like signup/signin while signed in
      // redirect to home
      else if (to.meta.guestOnly && userStore.isSignedIn) {
         next("/home")
      }
      // continue to the requested route
      // Note: We dont force profile check here otherwise this could be a disruptive user journey
      else {
         next()
      }
   })
}
