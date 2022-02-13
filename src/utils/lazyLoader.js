import { lazy } from 'react';

export const lazyLoader = componentName => {
  return lazy(() => import(`../pages/${componentName}`));
};

// lazy() for named import
// export const lazyLoader = componentName => {
//   return lazy(() =>
//     import(`../pages/${componentName}`).then(module => ({
//       default: module.HomePage,
//     }))
//   );
// };
