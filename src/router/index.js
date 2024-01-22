import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Main from '../views/Main.vue'
import Mail from '../views/Mail.vue'
import Page1 from "@/views/Page1.vue";
import Page2 from "@/views/Page2.vue";

// 1.创建路由组件,import进来

// 2.将路由与组件进行映射
const routes=[
    //主路由
    {
        path:'/',
        component: Main,
        redirect:'/Home',//重定向到home页
        children:[
            //子路由
            {path:'User',component:User},
            {path:'Home',component: Home},
            {path: 'Mail',component: Mail},
            {path: 'Page1',component: Page1},
            {path: 'Page2',component: Page2}
        ]
    }
]
//3.创建router实例,然后传入routes属性
const router=new VueRouter({
    routes
})

export default router
Vue.use(VueRouter)