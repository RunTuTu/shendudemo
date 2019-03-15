<template>
    <div>
         <Swiper></Swiper>
         <Infobtn></Infobtn>
         <Elite></Elite>
    </div>
</template>
<script>
import Infobtn from './Infobtn'
import Swiper from './Swiper'
import Elite from './Elite'
 
export default {
    components :{
        Swiper,
        Infobtn,
        Elite,
    },
  	mounted(){
  		this.$store.commit('backShow')
    	this.$store.commit('changeName','首页')
  	}
}
</script>
<style>

</style>

