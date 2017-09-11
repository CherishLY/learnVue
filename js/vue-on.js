/**
 * Created by lilei on 2017/9/11.
 */
var app= new Vue({
    el:"#app",
    methods:{
        onClick:function(){
            console.log("clicked")
        },
        onEnter:function(){
            console.log("enter");
        },
        onOut:function(){
            console.log("out 了");
        },
        onSubmit:function(){
            console.log("submit");
        },
        keyPress:function(){
            console.log("keypressed");
        }
    }
})