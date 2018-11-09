import Vue from "vue";
import VueRouter from "vue-router";
import Hello from "./components/Hello.vue";

Vue.use(VueRouter);

const routes = [
    {path: '/',component:Hello,name:'hello'}
]

const router = new VueRouter({
    routes
})

new Vue({router, render: h => h('router-view')}).$mount(document.body)