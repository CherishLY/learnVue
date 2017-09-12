/**
 * Created by lilei on 2017/9/12.
 */

var Event=new Vue();

Vue.component('huahua', {
    template: '<div>我说：<input @keyup="huahua_say" v-model="i_said" type="text">{{ i_said }}</div>',
    data: function () {
        return {
            i_said: ""
        }
    },
    methods: {
        huahua_say: function () {
            Event.$emit("huahua-said-something",this.i_said);
        }
    }
})
Vue.component('meimei', {
    template: '<div>花花说：{{huahua_said}}</div>',
    data: function () {
        return {
            huahua_said: ""
        }
    },
    mounted:function(){
        var me=this;
        Event.$on("huahua-said-something",function(data){
            console.log(data);
            me.huahua_said=data;
        })
    }
})

new Vue({
    el:'#app'
})