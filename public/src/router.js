import {Router} from '@vaadin/router';

const outlet = document.querySelector('#outlet');
export const router = new Router(outlet);

router.setRoutes([
  {path: '/', component: 'my-hello'},
  {path: '/element', component: 'my-element'},
  {path: '/users/:user', component: 'my-user'},
]);