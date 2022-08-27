<template>
    <div class="landing">
        <Header id="header"></Header>
        <div class="banner">
            <div class="banner_text">
                <p>{{bannerText}}</p>
            </div>
            <div class="banner_img">

            </div>
        </div>
    </div>
</template>

<script>
import Header from "../../components/Header.vue";
export default {
    name: "Landing",
    components: { Header },
    data() {
        return {
            bannerText: "Proximamente ... ",
        };
    },
};
</script>

<style scoped>
.landing {
    width: 100%;
    display: grid;
    grid-template-rows: repeat(2, auto);
}
.banner{
    height: calc(100vh - 60px);
    background-image: url(../../assets/backgroundBanner.png);
}
.banner_text{
    display: flex;
    width: 50%;
    height: 100%;
    justify-content: center;
    align-items: center;
}
.banner_text p{
    font-family: 'Inter';
    width: 70%;
    line-height: 1em;
    font-size: 40pt;
}
#header {
    background-color: white;
}
</style>
