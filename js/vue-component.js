/**
 * Created by lilei on 2017/9/11.
 */
Vue.component('like',{
    template:'#like_template',
    data:function(){
        return {
            like_count:10,
            islike:false
        }
    },
    methods:{
        toggle_click:function(){
            if(!this.islike)
                this.like_count++;
            else
                this.like_count--;
            this.islike= !this.islike
        }
    }

})
new Vue({
    el:"#app"
})