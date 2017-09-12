/**
 * Created by lilei on 2017/9/12.
 */
Vue.component('art',{
    template:'<button @click="show_id()">显示id</button>',
    props:['artid'],
    methods:{
        show_id:function(){
            alert(this.artid);
        }
    }
})


Vue.component('newsbutton',{
    template:'<div> <showid @show_news="show_id"></showid> </div>',
    data:function(){
        return {
            newsid:null
        }
    },
    methods:{
        show_id:function(data){
            this.newsid=data.artid;
            alert(this.newsid);
        }
    }
})

Vue.component('showid',{
    template:'<button @click="show_id()" artid="123456" >查询文章id</button>',
    methods:{
        show_id:function(e){
           this.$emit("show_news",{artid:123456})
        }
    }
})

new Vue({
    el:"#app",
})