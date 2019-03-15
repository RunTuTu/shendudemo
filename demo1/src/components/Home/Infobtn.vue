<template>
    <div class="Infobtn">
        <ul class="infobtn">
            <router-link class="topbottom" :to="{name : 'topbottom',param : {}}" tag="li"><a>上 下 层 级</a></router-link>
            <router-link class="mestudent" :to="{name : 'mestudent',param : {}}" tag="li"><a>我 的 学 生</a></router-link>
        </ul>
    </div>
</template>
<script>
export default {
    name : 'Infobtn'
}
</script>
<style>
.Infobtn{
	width: 100%;
	background: #f4f4f4;
}
.infobtn{
  width: 85%;
  height: 6.5rem;
  list-style: none;
  margin: auto;
}
ul li{
	width: 39%;
	height:3.5rem;
    border-radius: .5rem;
    text-align:right;
    padding-right: 5%;
    line-height:3.5rem;
    margin-top:1.5rem;
}
.topbottom{
    border: 1px solid #f59faf;
    float: left;
    background: white url(../../assets/organization.png)no-repeat 12% center;
    background-size: 20%;
}
.topbottom a{
	color: #f59faf;	
}
.mestudent{
	float: right;
    border: 1px solid #308fd7;
    background: white url(../../assets/student.png)no-repeat 12% center;
    background-size: 20%;
}
.mestudent a{
	color: #308fd7;
}
ul li a{
   text-decoration: none; 
}
</style>
