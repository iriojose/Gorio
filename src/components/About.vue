<template>
    <v-card elevation="0" color="#202040" width="100%">
        <v-card-text>
            <v-row justify="center">
                <v-col cols="12" md="6" sm="12">
                    <v-card elevation="0" color="#202040" width="100%" :height="$vuetify.breakpoint.smAndDown ? 400:'100%'">
                        <v-row justify="center" align="center" :class="$vuetify.breakpoint.smAndDown ? 'fill-height':'fill-height px-12'">
                            <div 
                                :class="$vuetify.breakpoint.smAndDown ?  null:'pa-12'">
                                <v-img contain :width="$vuetify.breakpoint.smAndDown ? 200:400" height="400" src="@/assets/iriop.png"></v-img>
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
                                    My name is Irio Gómez, I am a systems engineer, 
                                    Lover of programming specialized 
                                    in web development using front-end development environments 
                                    such as vuejs, reactjs and laravel, Also I have experience in 
                                    development on the back-end with nodejs.
                                </div>
                                <div :class="$vuetify.breakpoint.smAndDown ? 'subtitle-1 white--text my-5 text-center':'subtitle-1 white--text my-5'">
                                    <div class="mb-5">Name:           <span >Irio Gómez</span></div>
                                    <div class="mb-5">Age:            <span >22</span></div>
                                    <div class="mb-5">Address:        <span >Nueva esparta, Venezuela</span></div>
                                    <div class="mb-5">Phone number:   <span >+58 412-795-9576</span></div>
                                    <div class="mb-5">Email:          <span >iriojgomezv@gmail.com</span></div>
                                </div>
                            </div>
                        </v-row>
                    </v-card>
                </v-col>
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
</style>