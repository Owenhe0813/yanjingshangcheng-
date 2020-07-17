<template>
    <div>
        类
    </div>
</template>

<script>
export default {
    name:'Cate',
    data() {
        return {
            title:'分类',
        }
    },
    mounted(){
        this.$emit('onTitle',this.title)
        this.$emit('onNavShow',true)
    }
}
</script>

<style lang="less" src='./cate.less' scoped>

</style>