<template>
    <div class="swiper">
		<mt-swipe :auto="4000"  :show-indicators="false">
			<mt-swipe-item v-for="item in swipers" :key="item.id">
				<img :src="item.img">
			</mt-swipe-item>
		</mt-swipe>
    </div>
</template>
<script>
export default {
		name : "Swiper",
		data : function(){
			return{
				swipers : []
			}
		},
		created(){
			//实例在创建的时候获取数据
			this.$axios.get('http://www.liulongbin.top:3005/api/getlunbo').then(response=>{
//				console.log(response)
				this.swipers = response.data.message
			},error=>{
				console.log("错误信息"+error.message)
			})
		}
}
</script>
<style>
	.swiper{
		height:12rem;
		background: red;
	}
	.swiper img{
		width: 100%;
		height: 100%;
	}
</style>
