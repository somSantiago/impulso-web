<template>

    <div class="login">
        <div class="login-container">
            <div class="imgcontainer">
                <img src="../assets/banner.png" alt="Avatar" class="avatar">
            </div>

            <div class="container">
                <label for="uname"><b>Usuario</b></label>
                <input class="input-group" type="text" placeholder="...@gmail.com" name="uname" required>

                <label for="psw"><b>Password</b></label>
                <input class="input-group" type="password" placeholder="Ingresa tu password" name="psw" required>

                <button @click="login()">Acceder</button>
            </div>

            <div class="container" style="background-color:#f1f1f1">
                <button type="button" class="cancelbtn"><router-link to="/">Regresar</router-link></button>    
                <span class="psw">Olvidaste tu <router-link to="/login/resetPassword"> Password?</router-link> </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            welcome: "Som"
        }
    },
    methods: {
        login() {
            console.log("working ...");
        }
    }
}
</script>

<style scoped>
.login{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
}
.login-container{
    margin: 0 ;
    width: 30%;
    min-width: 350px;
    flex-direction: column;
}

/* Full-width inputs */
.input-group {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    border-radius: 10px;
    display: inline-block;
    background-color: rgb(223, 223, 223);
    border: 1px solid #ccc;
    box-sizing: border-box;

    font-family: Inter;
    color: black;
}
.input-group:focus{
    outline: none;
    font-weight: 600;
}
/* Set a style for all buttons */
button {
    background-color: #25251f;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
    outline: none;
}

/* Add a hover effect for buttons */
button:hover {
    opacity: 0.8;
}

/* Extra style for the cancel button (red) */
.cancelbtn {
    width: auto;
    padding: 10px 18px;
    background-color: #abad1f;
}
.cancelbtn a{
    text-decoration: none;
    color: #fff;
}

/* Center the avatar image inside this container */
.imgcontainer {
    text-align: center;
    margin: 24px 0 12px 0;
}

/* Avatar image */
img.avatar {
    width: 15%;
    border-radius: 50%;
}

/* Add padding to containers */
.container {
    padding: 0 16px;
}

/* The "Forgot password" text */
span.psw {
    float: right;
    padding-top: 16px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
    span.psw {
        display: block;
        float: none;
    }

    .cancelbtn {
        width: 100%;
    }
}
</style>