const routes = {
  transition: {
    title: 'Transition',
    route: '/transition',
  },
  batching: {
    title: 'Automatic batching',
    route: '/batching',
  },
  deferredValue: {
    title: 'Deferred Value',
    route: '/deferred-value',
  },
};

type RouteKey = keyof typeof routes;
type RouteConfig = typeof routes[RouteKey];
const routeKeys = Object.keys(routes);

export const getRoute = (key: RouteKey) => routes[key].route;

export const mapRoutes = <T>(mapFn: (routeConfig: RouteConfig) => T) => {
  return routeKeys.map((key) => mapFn(routes[key]));
};
