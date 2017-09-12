/**
 * Created by lilei on 2017/9/12.
 */

var base={
    methods:{
        toggle:function(){
            this.visible=!this.visible;
        },
        show:function(){
            this.visible=true;
        },
        hide:function(){
            this.visible=false;
        }
    }
}

Vue.component('tooltip',{
    template:`
    <div>
    <button @mouseenter='show' @mouseleave='hide'>tooltip</button>
    <p v-if="visible">白岩松</p>
    </div>
    `,
    data:function(){
        return {
            visible:false
        }
    },
    mixins:[base]
})
Vue.component('popup',{
    template:`
    <div>
    <button @click='toggle'>popup</button>
    
    <p v-if="visible"><button @click="hide">X</button>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab earum harum hic, nihil pariatur possimus quo quod saepe sed vel. Architecto autem eum id nostrum numquam ratione, repudiandae rerum voluptatem!</p>
</div>
    `,
    data:function(){
        return {
            visible:false
        }
    },
    mixins:[base]
})

new Vue({
    el:'#app'
})