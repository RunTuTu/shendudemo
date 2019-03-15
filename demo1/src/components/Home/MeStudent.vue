<template>
    <div>
        我的学生
    </div>
</template>
<script>
export default {
    mounted(){
    	this.$store.commit('changeShow');
    	this.$store.commit('changeName','我的学生')
    }
}
</script>
<style>

</style>
