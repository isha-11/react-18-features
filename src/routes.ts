const routes = {
  batching: {
    title: 'Automatic Batching',
    route: '/batching',
  },
  transition: {
    title: 'Transition: useTransition',
    route: '/transition',
  },
  deferredValue: {
    title: 'Transition: useDeferredValue',
    route: '/deferred-value',
  },
};

/* types */
type RouteKey = keyof typeof routes;
type RouteConfig = typeof routes[RouteKey];

/* static views */
const routeKeys = Object.keys(routes);
const routeTitleMap: Record<string, string> = routeKeys.reduce((acc, key) => {
  const { route, title } = routes[key];
  return { ...acc, [route]: title };
}, {});

/* accessors */
export const getRoute = (key: RouteKey) => routes[key].route;
export const getTitleByRoute = (route: string) => routeTitleMap[route];
export const mapRoutes = <T>(mapFn: (routeConfig: RouteConfig) => T) => {
  return routeKeys.map((key) => mapFn(routes[key]));
};
