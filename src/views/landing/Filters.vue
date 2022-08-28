<template lang="">
    <div>
        <h4>Categoria de productos</h4>
        <ul>
            <li v-for="(filter, index) in filters" :key="index">
                <label class="form-control">
                <input type="checkbox" name={{filter}} />
                {{filter}}
                </label>   
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "Filters",
    data() {
        return {
            filters: [
                'Todos',
                'Joyeria',
                'Ropa',
                'Accesorios',
                'Comestibles',
                'Videojuegos',
                'Heramientas',
                '+18'
            ],
        }
    },
}
</script>
<style scoped>
    h4{
        margin: 0;
        font-family: Inter;
    }
    ul{
        padding-left: 10px;
    }
    li {
        margin: 5px;
        list-style: none;

    }
    li label{
        margin-left: 10px;
    }
    .form-control {
        line-height: 1.8;
        display: grid;
        grid-template-columns: 1em auto;
        gap: 1em;
        align-items: center;
    }
    .form-control + .form-control {
        margin-top: 1em;
    }
    input[type="checkbox"] {
        /* Add if not using autoprefixer */
        -webkit-appearance: none;
        appearance: none;
        /* For iOS < 15 to remove gradient background */
        background-color: #fff;
        /* Not removed via appearance */
        margin: 0;
        font: inherit;
        color: currentColor;
        width: 1.15em;
        height: 1.15em;
        border: 0.15em solid currentColor;
        border-radius: 0.15em;
        transform: translateY(-0.075em);
        display: grid;
        place-content: center;
    }
    input[type="checkbox"]::before {
        content: "";
        width: 0.65em;
        height: 0.65em;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        box-shadow: inset 1em 1em rebeccapurple;
    }
    input[type="checkbox"]:checked::before {
        transform: scale(1);
        transform-origin: bottom left;
        clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    }
</style>