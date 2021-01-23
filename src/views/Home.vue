<template>
    <div id="home">
      <div id="main">
        <!-- <img class="animatedMe" src="./../assets/images/graduation (2).jpg"> -->
        <p class="animatedText">Donovan Olivarez<br>Software Engineer</p>
        <div class="contact-icons">
          <a href="https://www.linkedin.com/in/donovan-olivarez-571108191/"><img class="animatedMe" src="../assets/icons/linkedin.png" alt=""></a>
          <a href="https://github.com/donovanolivarez"><img class="animatedMe" src="../assets/icons/github.png" alt=""></a>
          <!-- <a href="#contact"><img class="animatedMe" src="../assets/icons/email.png" alt=""></a> -->
        </div>
      </div>
      <!-- <div id="contact">
        <Contact />
      </div> -->
    </div>

</template>

<script>
// import Contact from './../components/Contact'

export default {
    name: "Home",
    components: {
      // Contact
    },
}
</script>

<!-- use blue color palette for the home page -->
<style scoped>

  img {
    image-rendering: auto;
  }

  #home {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  #main {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 85vh;
    width: 100vw;
  }

  #contact {
    align-self: center;
    background-color: #557174;
    color: white;
  }

  .contact-icons {
    display: flex;
    justify-content: space-around;
  }

  #about {
    display: inline-block;
    background-color: #f5f5f5;
    margin-top: 8em;
    width: 40rem;
    align-self: center;
  }

  .animatedMe {
    opacity: 0;
    animation: fade ease-in 1s forwards;
    animation-delay: 2s;
    transition: all .2s ease-in-out;
  }

  .animatedMe:hover {
    transform: scale(1.2);
  }

  .animatedText {
    font-family: 'Montserrat', sans-serif;
    align-self: center;
    font-size: 6vh;
    animation: fade 1s ease-in;
  }

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>