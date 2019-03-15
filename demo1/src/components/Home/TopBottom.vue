<template>
    <div>
      上写层级
    </div>
</template>
<script>
export default {
	mounted(){
    	this.$store.commit('changeShow');
    	this.$store.commit('changeName','上下层级')
    }
}
</script>
<style>

</style>
