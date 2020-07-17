<template>
    <div>
        我的
    </div>
</template>

<script>
const TITLE = '我的'
export default {
    name:'Mine',
    data(){
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

<style lang="less" src='./mine.less' scoped>

</style>