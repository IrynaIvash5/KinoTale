import Vue from "vue";
import Router from "vue-router";
import Exit from "./../page/Exit.vue";
import Registration from "./../page/Registration.vue";
import MainPage from "./../page/MainPage.vue";
import PageFilm from "./../page/PageFilm.vue";
// console.log(Vue)
Vue.use(Router);



let router = new Router({
  routes: [
    {
      path: '/',
      component: MainPage
    },
    {
      path: "/exit",
      component: Exit,
    },
    {
      path: "/registration",
      component: Registration,
    },
    {
      path: "/pageFilm/:id",
      component: PageFilm,
    },
  ],
  mode: 'history'
});


export default router;