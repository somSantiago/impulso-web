<template>
    <Header></Header>
</template>

<script>
import Header from "../../components/Header.vue";
export default {
    name: "Landing",
    components: {Header},
    data() {
        return {
            welcome: "Som"
        }
    }
}
</script>

<style scoped>
</style>