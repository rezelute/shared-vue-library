// SHARED ROUTING
import { sharedRoutes } from "./sharedRoutes";
import { setupAuthGuard } from "./routeGuards";

export { setupAuthGuard, sharedRoutes };

export default {
   sharedRoutes,
   setupAuthGuard,
};
