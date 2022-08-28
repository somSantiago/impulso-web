<template>
    <div id="products">
        <div class="matriz">
            <div class="product-square"></div>
            <div class="product-square"></div>
            <div class="product-square"></div>
            <div class="product-square"></div>
            <div class="product-square"></div>
            <div class="product-square"></div>
            <div class="product-square"></div>
            <div class="product-square"></div>
            <div class="product-square"></div>
            <div class="product-square"></div>
            <div class="product-square"></div>
            <div class="product-square"></div>
        </div>
        <div class="pagination">
            <Pagination></Pagination>
        </div>
    </div>
</template>
<script>
import Pagination from '../../components/Pagination.vue';
export default {
    components: { Pagination }
}
</script>
<style scoped>

    .matriz{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 15px;
        grid-auto-rows: minmax(200px, auto);

        padding: 2em;
    }
    .product-square{
        width: 100%;
        height: 100%;
        background-color: rgb(226, 226, 226);

    }
    .pagination{
        display: flex;
        padding-right: 2em;
        margin-bottom: 1em;
        justify-content: end;
    }
</style>