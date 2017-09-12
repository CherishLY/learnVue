/**
 * Created by lilei on 2017/9/12.
 */

Vue.filter('meter',function(val,unit){
    var val=val || 0;
    var unit=unit || "m";
    return (val /1000).toFixed(2) + unit;
})

new Vue({
    el:"#app",
    data:{
        length:'',
    }
})