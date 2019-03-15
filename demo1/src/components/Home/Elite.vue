<template>
	<div class="elite">
		<p class="elite-p1"><span></span>{{elite}}</p>
		<div class="max-box" style="height:500px;">
	        <ul
	        class="box-ul"
	        v-infinite-scroll="loadMore"
	        infinite-scroll-disabled="loading"
	        infinite-scroll-distance="10">
	            <router-link v-for="(item,i) in list" :key="i" :to="{name : 'details',param : {}}" tag="li">
	                <div class="box">
	                    <div class="con-box">
	                        <div class="box-img">
	                            <img :src="sr" alt="">
	                        </div>
	                        <div class="box-right">
	                            <p class="right-title">{{text}}{{s}}</p>
	                            <div class="right-nan">
	                                <p class="nan-p">{{nan}}</p>
	                                <p class="time-p">{{time}}</p>
	                            </div>
	                        </div>
	                    </div>
	                </div>
	            </router-link>    
	        </ul>  
   		</div>
	</div>
</template>

<script>
export default{
	data : function(){
		return {
			elite : "就业精英榜",
			text : "山西临汾翼城朱江入职高科技企业斩获年薪16万",
            s : "...",
            nan : 1234,
            time : "2019-03",
            list : ["今年事2019年，今天是星期天发送大附件圣诞快乐房价是领导尽快"]

		}
	}
}
</script>

<style>
.elite-p1{
	font-weight:800;
	line-height:4rem;
}
.elite-p1 span{
	width:.2rem;
	height:1rem;
	display: block;
	background:#5e35b1;
	float: left;
	margin:1.5rem .8rem 0 0;
	
}
</style>