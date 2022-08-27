<template>
    <div class="navbar">
        <div class="logo">
            <img src="../assets/banner.png" class="icon" alt="store icon colectivo" />
            <p>Impulso Colectivo</p>
        </div>
        <div class="menu">
            <ul>
                <li> Ingresar </li>
                <li> Colaboradores </li>
                <li> Contacto </li>
            </ul>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
p {
    margin: 0px !important;
    font-family: 'Qwitcher Grypen', cursive;;
    font-size: 36pt;
    font-weight: 700;
}

.navbar {
    display: flex;
    width: 100vw;
    justify-content: space-between;
    align-items: center;
    height: 60px;
}
.logo{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.icon {
    height: 35px;
    margin: 5px 20px;
}

ul {
    display: flex;
    flex-direction: row;
}

li {
    font-family: Inter, Roboto;
    font-weight: 500;
    list-style: none;
    margin: 0px 20px;
}
</style>
