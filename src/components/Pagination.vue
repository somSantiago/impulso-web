<template>
  <div class="pagination:container">
    <div class="pagination:number arrow">
      <svg width="18" height="18">
        <use xlink:href="#left" />
      </svg>
      <span class="arrow:text">Previous</span>
    </div>

    <div class="pagination:number">1</div>
    <div class="pagination:number">2</div>

    <div class="pagination:number pagination:active">3</div>

    <div class="pagination:number">...</div>

    <div class="pagination:number">540</div>

    <div class="pagination:number arrow">
      <svg width="18" height="18">
        <use xlink:href="#right" />
      </svg>
    </div>
  </div>

  <svg class="hide">
    <symbol
      id="left"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M15 19l-7-7 7-7"
      ></path>
    </symbol>
    <symbol
      id="right"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 5l7 7-7 7"
      ></path>
    </symbol>
  </svg>
</template>
<script>
export default {};
</script>
<style scoped>



.hide {
    display: none;
    visibility: hidden;
    height: 0;
}

.pagination\:container {
  display: flex;
  align-items: center;
}

.arrow\:text {
  display: block;
  vertical-align: middle;
  font-size: 13px;
  vertical-align: middle;
}

.pagination\:number {
  --size: 32px;
  --margin: 6px;
  margin: 0 var(--margin);
  border-radius: 6px;
  background: #c0c0c0;
  max-width: auto;
  min-width: var(--size);
  height: var(--size);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0 6px;
  font-weight: 500;
}

.pagination\:active {
  background: lighten(#bebebe, 3%);
  position: relative;
}
</style>
