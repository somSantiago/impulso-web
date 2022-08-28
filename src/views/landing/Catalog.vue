<template >
    <div id="catalog">
        <Filters id="filters"></Filters>
        <Products id="products"></Products>
    </div>

</template>
<script>
import Filters from './Filters.vue';
import Products from './Products.vue';
export default {
    name: "Catalog",
    components: { Filters, Products }
}
</script>
<style scoped>
    #catalog{
        display: flex;
        flex-direction: row;
        width: 100%;
    }
    #filters{
        width: 20%;
        min-width: 255px;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 2em;
    }
    #products{
        width: 80%;
    }
</style>