// SHARED ROUTING
import { setupAuthGuard } from "./routeGuards";
import { sharedRoutes } from "./sharedRoutes";

export { setupAuthGuard, sharedRoutes };

export default {
   sharedRoutes,
   setupAuthGuard,
};
