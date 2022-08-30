<template>
    <div class="footer">
        <div class="columns">
            <div class="banner">
                <h3>Impulso Colectivo</h3>
                <img src="../assets/banner.png" alt="" srcset="" >
                <p>@Impulso Colectivo 2022  ❤️ Ensenada, Baja California, Mexico</p>
            </div>
            <div class="explore">
                <h3>Explora</h3>
                <ul v-for="(list,index) in exploreList" :key="index">
                    <ul> <p>{{list.name}}</p></ul>
                </ul>
            </div>
            <div class="contact">
                <h3>Visitanos</h3>
                <p>Av. Ruiz y 9na, Zona Centro, Plaza Ruiz, local 20 22800</p>
                <h3>Contacto</h3>
                <p>646 - 1273932 <br>
                    impulso_colectivo@gmail.com
                </p>
            </div>
            <div class="social-media">
                <h3>Siguenos en:</h3>
                <ul>
                    <li> <img src="../assets/vue.svg" alt="" width="30px"/> <p>/impulsocolectivoensenada</p></li>
                    <li> <img src="../assets/vue.svg" alt="" width="30px"/> <p>/impulsocolectivoensenada</p></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            exploreList: [{
                name: 'Inicio'
            },{
                name:'Secciones'
            },{
                name:'Nosotros'
            },{
                name:'Contacto'
            }]
        }
    },
}
</script>
<style scoped>
    .footer{
        width: 100%;
        height: 320px;
        margin-top: 2em ;
        background: rgb(206, 206, 206);
    }
    .columns{
        display: grid;
        grid-template-columns: 35%  10% repeat(2, 1fr);
    }
    .banner{
        display: flex;
        flex-direction: column;
        padding: 1em;
        align-items: center;
    }
    .banner h3{
        font-family: Inter;
        font-size: 40px;
        font-weight: 600;
        margin: 20px 0 20px 0;
    }
    .banner img{
        margin: 1em;
        width: 160px;
    }
    .banner p{
        font-family: Inter;
        font-size: 9pt;
        font-weight: bold;
    }
    .explore{
        list-style-type: none;
        padding: 1em;
        line-height: 1em;
    }
    .explore ul{
        margin: 0;
        padding-left: 5px;
    }
    .explore li{
        margin: 0;
        list-style: none;
    }
    p{
        font-weight: 400;
    }
    .contact{
        display: flex;
        flex-direction: column;
        padding: 1em;
        line-height: 1em;
    }
    .social-media{
        display: flex;
        flex-direction: column;
        padding: 1em;
        align-items: center;
    }
    .social-media li{
        list-style: none;
        font-size: 13pt;
        font-weight: 400;
        display: flex;
        flex-direction: row;
    }
</style>