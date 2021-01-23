<template>
    <!-- <div class="container"> -->
    <v-container  fluid>
        <div class="bio">
            <img class="main-img animate fadeInLeft" src="./../assets/images/me (2).jpg">
            <p class="bio-text animate fadeIn">
                I'm a Software Developer from the Rio Grande Valley. I have been interested 
                in tech since high school, so I decided to pursue Computer Science at 
                The University of Texas at San Antonio to turn my passion and interests
                into a career in the tech industry.
            </p>
        </div>
        <div v-observe-visibility="{ callback: visibilityChanged, once: true, threshold: 0.3}" class="grad grad-background" id="grad-container">
            <p :class="{'bio-text animate fadeIn' : isVisible}">
                I graduated from UTSA in December of 2020 with a B.S. in Computer Science,
                concentrating in software engineering. My goal now is to continue to refine my skills
                through my personal and professional endeavors.
            </p>
            <img v-if="isVisible" :class="{ 'main-img animate fadeInRight' : isVisible }" src="./../assets/images/graduation (2).jpg">
        </div>
        <h2 id="tech-title">Some Tech that I use...</h2>
        <div id="tech-container">
            <div class="tech-item" v-for="(img, index) in techImages" :key="index">
                <img :src="require(`@/assets/icons/${img.source}`)">
            </div>
        </div>
    </v-container>
    <!-- </div> -->
</template>

<script>
export default {
    name: "About",
    data() {
        return {
            show: false,
            isVisible: false,
            techImages: [
                {source: 'java.png' },
                {source: 'javascript.png' },
                {source: 'python.png'},
                {source: 'html.png'},
                {source: 'css-3.png'},
                {source: 'sql-server.png'},
                {source: 'c.png'},
            ]
        }
    },
    methods: {
        visibilityChanged(isVisible, entry) {
            this.isVisible = this.show = isVisible
            console.log(entry)
        },
    },
}
</script>

<style scoped>

    .container {
        display: flex;
        flex-direction: column;
        width: 100vw;
       /* margin: 4em 16em 4em 16em; */
    }

    .bio, .grad{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
        height: 85vh;
    }

    .grad-background {
        background-color: #557174;
    }

    .bio-text {
        max-width: 45vw;
        font-size: 2.85vw;
        -webkit-animation-delay: 1s;
        -moz-animation-delay: 1;
        animation-delay: 1;
    }

    .main-img {
        max-width: 100%;
        max-height:60%;
        border-radius: 10px;
        -webkit-animation-delay: 0.4s;
        -moz-animation-delay: 0.4;
        animation-delay: 0.4;
    }

    #grad-container {
        color: #f7f7e8;
    }

    #tech-title {
        margin: 10vh
    }

    #tech-container {
        display: flex;
        height: 50vh;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }

    .tech-item {
        padding-left: 3rem;
        padding-right: 3rem;
    }

    .animate {
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
    }

    /*=== FADE IN LEFT ===*/
    @-webkit-keyframes fadeInLeft {
    from {
        opacity: 0;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
    }

    to {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
    }
    }
    @keyframes fadeInLeft {
    from {
        opacity: 0;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
    }

    to {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
    }
    }

    .fadeInLeft {
    -webkit-animation-name: fadeInLeft;
    animation-name: fadeInLeft;
    }

    /*==== FADE IN RIGHT ===*/
    @-webkit-keyframes fadeInRight {
    from {
        opacity: 0;
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
    }

    to {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
    }
    }
    @keyframes fadeInRight {
    from {
        opacity: 0;
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
    }

    to {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
    }
    }

    .fadeInRight {
    -webkit-animation-name: fadeInRight;
    animation-name: fadeInRight;
    }

    @-webkit-keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
    }
    @keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
    }

    /*--keyframe pointer --*/
    .fadeIn { 
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;
    }
</style>