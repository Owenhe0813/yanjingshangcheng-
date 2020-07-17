<template>
    <div class="index">
        <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="1500" duration="500" indicator-color="white" height="4.16rem">
        <van-swipe-item v-for="img in imgArr" :key="img.id">
            <img v-lazy="img.img" class="swipe-image">
        </van-swipe-item>
    </van-swipe>
    <!-- 分类 -->
    <cate-gory :cate-arr="cateArr" class="category"></cate-gory>
    </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vant';
import CateGory from '../../components/Category/Category'

export default {
    name:'Index',
    data() {
        return {
            title:"全视眼镜商城",
            imgArr:[],
            cateArr:[{cateName:'框架'},{cateName:'框架'},{cateName:'框架'},{cateName:'框架'},{cateName:'框架'}]
        }
    },
    components:{
        [Swipe.name]:Swipe,
        [SwipeItem.name]:SwipeItem,
        CateGory
    },
    created(){
        console.log(this)
       this.$emit('onTitle',this.title)
       this.$emit('onNavShow',true)
       //请求轮播图数据
       ;
       (async ()=>{
           try {
               console.log(this)
               const backData=await this.axios.get('/json/banner.json')
               if(!backData.status) throw new Error('请求失败')
               const {data} = backData
               this.imgArr = data
           } catch (error) {
               console.log(error)
           }
       })()
    }
}
</script>

<style lang="less" src='./index.less' scoped>

</style>