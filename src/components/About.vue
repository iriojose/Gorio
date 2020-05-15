<template>
    <v-card elevation="0" color="#202040" width="100%">
        <v-card-text>
            <v-row justify="center">
                <v-col cols="12" md="6" sm="12">
                    <v-card elevation="0" color="#202040" width="100%" :height="$vuetify.breakpoint.smAndDown ? 400:'100%'">
                        <v-row justify="center" align="center" :class="$vuetify.breakpoint.smAndDown ? 'fill-height':'fill-height px-12'">
                            <div 
                                :class="$vuetify.breakpoint.smAndDown ?  null:'pa-12'">
                                <v-avatar :size="$vuetify.breakpoint.smAndDown ? 300:400" class="elevation-10">
                                    <v-img src="@/assets/iriop.jpeg"></v-img>
                                </v-avatar>
                            </div>
                        </v-row>
                    </v-card>
                </v-col>
                <v-col cols="12" md="6" sm="12">
                    <v-card elevation="0" color="#202040" width="100%" :height="$vuetify.breakpoint.smAndDown ? null:'100%'">
                        <v-row justify="start" align="top" :class="$vuetify.breakpoint.smAndDown ? 'px-12':''">
                            <div>
                                <div 
                                    :class="$vuetify.breakpoint.smAndDown ? 'title white--text font-weight-black my-5 text-center':'title white--text font-weight-black my-5'">
                                    ABOUT <span class="color">ME</span>
                                </div>
                                <div 
                                    :class="$vuetify.breakpoint.smAndDown ? 'subtitle-1 white--text text-center my-5':'subtitle-1 white--text mr my-5'">
                                    I'm Irio Gomez, a software engineer based on Venezuela. 
                                    Programming lover, specialized on web development using front-end 
                                    enviroments such as VueJS, ReactJS and Laravel. Also i've experience 
                                    working with backend enviroments such as NodeJS, ExpressJS.
                                </div>
                                <div :class="$vuetify.breakpoint.smAndDown ? 'subtitle-1 white--text my-5 text-center':'subtitle-1 white--text my-5'">
                                    <div class="mb-5 font-weight-black">
                                        <v-icon color="#fff" class="mx-2">mdi-account-circle</v-icon> 
                                        Name:<span > Irio Gómez</span>
                                    </div>
                                    <div class="mb-5 font-weight-black">
                                        <v-icon color="#fff" class="mx-2">mdi-account-tie</v-icon>
                                        Age: <span> 22</span>
                                    </div>
                                    <div class="mb-5 font-weight-black">
                                        <v-icon color="#fff" class="mx-2">mdi-map-marker</v-icon>
                                        Address:<span> Nueva esparta, Venezuela</span>
                                    </div>
                                    <div class="mb-5 font-weight-black">
                                        <v-icon color="#fff" class="mx-2">mdi-phone</v-icon>
                                        Phone number:<span> +58 412-795-9576</span>
                                        </div>
                                    <div class="mb-5 font-weight-black">
                                        <v-icon color="#fff" class="mx-2">mdi-email</v-icon>
                                        Email:<span> iriojgomezv@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
            <v-row justify="center" class="my-5">
                <v-hover v-slot:default="{hover}">
                    <a href="Irio Gomez CV.pdf" download class="text">
                        <v-btn 
                            class="subtitle-1 font-weight-black btn" 
                            tile large :elevation="hover ? 4:0"
                        >
                            DOWNLOAD CV 
                            <v-icon 
                                :color="hover ? '#fff':'#ffbd69'" 
                                class="mx-2"
                            >mdi-cloud-download</v-icon>
                        </v-btn>
                    </a>
                </v-hover>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<style lang="scss" scoped>
    .transition{
        animation: animat 2s 1;
    }
    @keyframes animat{
        0% {
            transform: translateX(-400px);
        }
    }
    .mr{
        margin-right:200px;
    }
    .mspan{
        margin-left:50px;
    }
    .color{
        color: #ffbd69 !important;
    }
    .btn:hover {
        color: #fff !important;
        background: #ffbd69 !important;
        -moz-transition: all 400ms ease-in;
        -webkit-transition: all 400ms ease-in;
        -o-transition: all 400ms ease-in;
        transition: all 400ms ease-in;
    }
    .btn{
        background: #fff !important;
        color: #ffbd69 !important;
    }
    .text{
        text-decoration:none;
    }
</style>