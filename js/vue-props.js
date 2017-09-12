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
new Vue({
    el:"#app",
})