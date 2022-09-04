<template>
  <div class="landing">
    <Header id="header"></Header>
    <div class="banner">
      <div class="banner_text">
        <p>{{ bannerText }}</p>
      </div>
      <div class="banner_img">
        <img src="../../assets/bolso.png" alt="" srcset="" />
      </div>
    </div>
    <Catalog></Catalog>
    <div class="colaborators">
      <h3>Area de colaboradores</h3>
      <p>
        Te gustaria colaborar con nosotros?
        <br />
        <span>Conoce los beneficios que podemos ofrecerte</span>
      </p>
      <button>Solicitar Informacion</button>
    </div>
    <div class="location">
      <h3>Nuestra ubicacion</h3>
      <div class="location_content">
        <img src="../../assets/location.png" alt="local" />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3388.273122035364!2d-116.62557868537752!3d31.871989436884995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d8934596bd34ff%3A0x751f0b9866c7d945!2sImpulso%20Colectivo!5e0!3m2!1ses!2smx!4v1661668111236!5m2!1ses!2smx"
          width="700"
          height="280"
          style="border: 1px solid #ccc; border-radius: 10px; margin: 0 0 0 3em"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        >
        </iframe>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../../components/Header.vue";
import Catalog from "../landing/Catalog.vue";
import Footer from "../../components/Footer.vue"

export default {
  name: "Landing",
  components: { Header, Catalog , Footer},
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

.banner {
  height: calc(100vh - 60px);
  width: 100%;
  background-image: url(../../assets/backgroundBanner.png);
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: row;
}

.banner_text {
  display: flex;
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-family: "Inter";
}

.banner_text p {
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

.banner_img img {
  height: 60%;
}

#header {
  background-color: white;
}

#contacto {
  height: 300px;
  background-color: aquamarine;
}

.store {
  height: 300px;
}

.colaborators {
  text-align: center;
  height: auto;
  padding: 4em 0 4em 0;
}

h3 {
  font-size: xx-large;
}

.colaborators p {
  font-size: x-large;
  line-height: 1.5;
  font-weight: 400;
}

.colaborators button {
  font-size: x-large;
  background-color: rgb(36, 32, 39);
}

.location {
  text-align: center;
}

.location_content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 0 2em 0 2em;
}

.location_content img {
  height: 300px;
}

button{
    outline: none;
}

</style>
