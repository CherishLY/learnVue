/**
 * Created by lilei on 2017/9/11.
 */
var app=new Vue({
    el:"#app",
    data:{
        math:85,
        english:80,
        lanague:90.
    },
    computed:{
        sum:function(){
            return this.math + this.english +this.lanague;
        },
        average:function(){
            return Math.round(this.sum/3);
        }
    }
})