<template >
    <div class="container">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "Layout",
    data() {
        return {
            welcome: "Som"
        }
    }
}
</script>

<style scoped>
.container{
    width: 100%;
    height: 100%;
}

</style>