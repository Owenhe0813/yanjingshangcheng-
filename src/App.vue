<template>
  <div id="app">
    <!-- 头部区域 -->
    <!-- <nav-view></nav-view> -->
    <van-nav-bar
      :title="title"
      class="navbar fixed"
      fixed
      v-show="showNav"
    >

    </van-nav-bar>
    <!-- 主题区域 -->
    <router-view 
    @onTitle="freshTitle"
    @onNavShow="showNav=$event"></router-view>
    <!-- 底部通栏 -->
    <!-- <tab-view></tab-view> -->
    <van-tabbar route active-color="#ff0000" inactive-color="#7d7e80">
        <van-tabbar-item to="/index" icon="wap-home-o">首页</van-tabbar-item>
        <van-tabbar-item to="/cate" icon="filter-o">分类</van-tabbar-item>
        <van-tabbar-item to="/search" icon="search">搜索</van-tabbar-item>
        <van-tabbar-item to="/car" icon="cart-o">购物车</van-tabbar-item>
        <van-tabbar-item to="/mine" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// import NavView from './components/NavView/NavView.vue'
// 引入底部栏
// import TabView from './components/TabView/TabView.vue'

import { NavBar, Tabbar , TabbarItem  } from 'vant';





export default {
  name: 'App',
  components: {
    // NavView,
    [NavBar.name]:NavBar,
    [Tabbar.name]:Tabbar,
    [TabbarItem.name]:TabbarItem,
    
    
  },
  data() {
    return {
      leftArrow:false,
      title:'',
      showNav:true
    }
  },
  methods:{
    freshTitle(newTitle){
      this.title = newTitle;
    },
    search(){

    }
  },
  computed:{

  },
  
}
</script>

<style lang="less" src="./App.less">

</style>
