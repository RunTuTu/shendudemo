<template>
    <div>
        <mt-header :title="name" class="header-bg" fixed>
            <router-link to="/" slot="left" v-show="show">
             <mt-button icon="back" @click="back"></mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    props : ['title'],
    methods :{
    	back:function(){
    		//返回上一级的
    		this.$router.back(-1)
    	}
    },
    computed : {
    	...mapGetters([
    		'show',
    		'name'
    	])
//  	isShow : function(){
//  		return this.$store.getters.show;
//  	}
    }
}
</script>
<style>
    .header-bg{
        background: black;
        color: wheat;
    }
</style>
