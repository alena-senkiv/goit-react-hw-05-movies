import { lazy } from 'react';

export const lazyLoader = (componentName, folder) => {
  return lazy(() => import(`../${folder}/${componentName}`));
};

// lazy() for named import
// export const lazyLoader = componentName => {
//   return lazy(() =>
//     import(`../pages/${componentName}`).then(module => ({
//       default: module.HomePage,
//     }))
//   );
// };
