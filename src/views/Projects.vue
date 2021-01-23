<template>
    <div id="project-container">
        <v-container >
            <!-- use a v-for here to loop through project objects -->
            <v-row >
                <v-col 
                v-for="(project, index) in projects" :key="index"
                align="center"
                >
                    <v-card
                    max-width="400"
                    raised="true"
                    >
                        <v-img
                        class="white--text align-end"
                        height="200px"
                        :src="require(`@/assets/images/previews/${project.src}`)"
                        >
                            <v-card-title>{{project.title}}</v-card-title>
                        </v-img>

                        <v-card-text class="text--primary">
                            {{project.description}}
                        </v-card-text>

                        <v-card-actions>
                            <v-btn
                                color="orange"
                                text
                            >
                            <a :href="project.links.demo">
                                App
                                </a>
                            </v-btn>

                            <v-btn
                                color="orange"
                                text
                            >
                                Explore
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "Projects",
    data() {
        return {
            projects: [
                {
                    title: "PomoSession",
                    src: "pomosession-preview.png",
                    description: "A simple Pomodoro Timer built with React.",
                    links: {
                        "repo": "",
                        "demo": "https://donovanolivarez.github.io/pomosession/"
                    }
                },
                {
                    title: "Netless",
                    src: "netless-card-preview.png",
                    description: "E-Commerce Site built using NodeJS and MongoDB",
                    links: {
                        "repo": "",
                        "demo": "https://donovanolivarez.github.io/pomosession/"
                    }
                },
            ] 
        }
    }
}
</script>

<style scoped>
a {
    text-decoration: none;
}

#project-container {
    margin-top: 10vh;
}
</style>