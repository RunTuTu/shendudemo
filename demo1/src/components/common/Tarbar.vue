<template>
    <div>
        <mt-tabbar v-model="selected" fixed>
		  <mt-tab-item id="home">
		    首页 
		    <img slot="icon" src="../../assets/home2.png">
		  </mt-tab-item>
		  <mt-tab-item id="search" @click.native="home">
		   搜索
		    <img slot="icon" src="../../assets/search.png">
		  </mt-tab-item>
		  <mt-tab-item id="employment">
		    就业
		    <img slot="icon" src="../../assets/employment.png">
		  </mt-tab-item>
		  <mt-tab-item id="me">
		    <img slot="icon" src="../../assets/me.png">
		    我的
		  </mt-tab-item>
		</mt-tabbar>
    <router-view/>
    </div>
</template>
<script>
export default {
	props : ['title'],
    data : function(){
        return {
            selected : '首页'
        }
    },
    watch : {
        selected : function(newV,oldV){
					 this.$router.push({name : newV}) 
					 switch(this.selected){
						 case 'home' :
						 this.$store.commit('changeName','首页')
						 break;
						 case 'search' :
						 this.$store.commit('changeName','搜索')
						 break;
						 case 'employment' :
						 this.$store.commit('changeName','就业')
						 break;
						 case 'me' :
						 this.$store.commit('changeName','我的')
						 break;
					 }
        }
    },
    methods : {
    	home : function(){
    		
    	}
    }
}
</script>
<style>

</style>


