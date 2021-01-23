<template>
    <div>
        <nav class="container">
            <router-link to="/"><img class="logo" src="../assets/icons/hot-coffee.png"></router-link>
            <ul>
                <li><router-link to="/Projects">Projects</router-link></li>
                <li><router-link to="/about">Get to Know Me</router-link></li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: "Navigation"
}
</script>

<style scoped>

.container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 1%;
    border-radius: .5em;
    margin-top: 10px;
}

.logo {
    cursor: pointer;
    /*justify-content: left; */
}

nav {
    justify-content: space-around;
}
ul {
    list-style: none;
}

ul li {
    display: inline-block;
    padding-right: 2rem;
    font-size: 1.3em;
}

ul li a:hover {
    color: blue;
}

ul li a{
    transition: all 0.3s ease 0s;
    text-decoration: none;
}
</style>