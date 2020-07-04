import {ConsumersPage, ConsumerPage} from "../pages/consumer";
import {ContraceptoinsPage} from "../pages/contraception";
import {ProviencesPage} from "../pages/province";
import {ErrorPage} from "../pages/error";

const routes = [
  {
    path: '/',
    component: ConsumersPage
  },
  {
    path: '/consumer',
    component: ConsumersPage
  },
  {
    path: '/consumer/add',
    component: ConsumerPage
  },
  {
    path: '/consumer/:id',
    component: ConsumerPage
  },
  {
    path: '/province',
    component: ProviencesPage
  },
  {
    path: '/contraception',
    component: ContraceptoinsPage
  },
  {
    path: '*',
    component: ErrorPage,
    props: {code: 404}
  }
];

export default routes;
