<template>
  <div id="app">
    <Header></Header>
    <Tarbar></Tarbar>   
  </div>
</template>

<script>
import Tarbar from './components/common/Tarbar'
import Header from './components/common/Header'

export default {
  name : 'App',
  components : {
    Tarbar,
    Header,
  },
  data : function(){
    return{
    }
  },
//computed : {
//	flag : function(){
////		return this.$store.getters.changeFlag;
//	}
//}
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  body{
  	padding-top:2.5rem;
  }
</style>
