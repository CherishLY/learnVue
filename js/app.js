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
    },{
        path:'/article',
        component:{
            template:"#article_list"
        }


    },{
        path:'/article/detail:nid',
        component:{
            template:'#detail',
            methods:{

            }
        },
        beforeRouteEnter: function(to, from, next){

            next(function(vm){
                vm.list=false;
                return vm.list;
            })
        }


    }
]
var router=new VueRouter({
    routes:routes
})

new Vue({
    el:'#app',
    router:router,
    data:{
        list:true
    }
})