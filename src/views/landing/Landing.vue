<template>
    <div class="landing">
        <Header id="header"></Header>
        <div class="banner">
            <div class="banner_text">
                <p>{{bannerText}}</p>
            </div>
            <div class="banner_img">
               <img src="../../assets/bolso.png" alt="" srcset="">
            </div>
        </div>
        <Catalog></Catalog>
    </div>
</template>

<script>
import Header from "../../components/Header.vue";
import Catalog from "./Catalog.vue";
export default {
    name: "Landing",
    components: { Header, Catalog },
    data() {
        return {
            bannerText: "Conoce nuestras ofertas!! ",
        };
    },
};
</script>

<style scoped>
.landing {
    width: 100%;
    display: grid;
    grid-template-rows: repeat(2, auto);
    overflow: hidden;
}

.banner{
    height: calc(100vh - 60px);
    width: 100%;
    background-image: url(../../assets/backgroundBanner.png);
    background-repeat: no-repeat;
	background-size: cover;

    display: flex;
    flex-direction: row;
}
.banner_text{
    display: flex;
    width: 50%;
    height: 100%;
    justify-content: center;
    align-items: center;
    font-family: 'Inter';
}

.banner_text p{
    width: 80%;
    line-height: 1em;
    font-size: 44pt;
    font-weight: 600;
    color: rgb(255, 255, 255);
    text-shadow: 0 0 8px rgb(0, 0, 0);
}
.banner_img {
    display: flex;
    width: 50%;
    height: 100%;
    justify-content: center;
    align-items: center;
}
.banner_img img{
    height: 60%;
}
#header {
    background-color: white;
}
#contacto{
    height: 300px;
    background-color: aquamarine;
}
.store{
    height: 300px;
}
</style>
