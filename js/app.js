/**
 * Created by lilei on 2017/9/13.
 */
var routes=[
    {
        path:'/',
        component:{
            template:'#index'
        }
    },
    {
        path:'/login',
        component:{
            template:'#login'
        }
    },
    {
        path:'/about',
        component:{
            template:'#about'
        }
    }
]
var router=new VueRouter({
    routes:routes
})

new Vue({
    el:'#app',
    router:router,
})