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

export const getRoute = (key: keyof typeof routes) => routes[key].route;
