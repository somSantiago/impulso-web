<template>
  <div>
    <a href="https://www.facebook.com/impulsocolectivoensenada/" target="_blank">
      <img src="../assets/banner.png" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <h1>{{ msg }}</h1>

  <div class="card">
    <p>
      Proximamente ....
    </p>
  </div>

</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Impulso Colectivo"
    }
  }
}
</script>

<style scoped>
.read-the-docs {
  color: #888;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
