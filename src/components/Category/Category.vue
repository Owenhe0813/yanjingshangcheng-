<template>
    <div class="cate-list" v-if="cateArr.length">
        <div v-for="(cate,index) in cateArr" 
            :key="index"
            class="cate-item"
        >
            <slot :name="'icon'+index" 
                v-bind:cate="'cate'" 
            >
                <img :src="cate.src" v-if="cate.src" class="cate-icon">
                <div :class="['cate-icon','cate-icon-'+index]" v-else></div>
            </slot>
            <slot 
                :name="'name'+index">
                    <span class="cate-name">{{cate.cateName}}</span>
            </slot>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        cateArr:{
            type:Array,
            required:true,
            default:function(){
                return []
            }
        }
    }
}
</script>

<style lang="less" src="./category.less" scoped>

</style>