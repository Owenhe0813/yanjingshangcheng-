<template>
    <div>
        车
    </div>
</template>

<script>
const TITLE = '购物车'
export default {
    name:'Car',
    data() {
        return {
            title:TITLE
        }
    },
    created(){
        this.$emit('onTitle',this.title)
        this.$emit('onNavShow',true)
    }
}
</script>

<style lang="less" src='./car.less' scoped>

</style>