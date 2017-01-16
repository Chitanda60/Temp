/**
 * Created by shemei
 */

const routes = {
  path: '/',
  component: null,
  childRoutes: [    
    {
      path: '/home',
      component: require('./containers/home').default,
    },    
    {
      path: '/home/card',
      component: require('./containers/card/index').default
    }
  ]
}

export default routes;