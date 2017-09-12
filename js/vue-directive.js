/**
 * Created by lilei on 2017/9/12.
 */
Vue.directive('pined',function(el,binding){
    console.log(binding.value);
    var pained=binding.value;
    var position=binding.modifiers;
    var vip = binding.arg;
    if(pained){
        el.style.position="fixed";
        for( var key in position ){
            if(position[key]){
                el.style[key]="1px";
            }

            if(vip === 'true'){
                el.style.background="#ff9700";
            }
        }
    }else{
        el.style.position="static";
        el.style.background="#eee"
    }
})


new Vue({
    el:'#app',
    data:{
        card1:{
            pained:false
        },
        card2:{
            pained:false
        }
    }
})