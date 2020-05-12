<template>
    <v-card elevation="0" color="#202040" width="100%" :height="$vuetify.breakpoint.smAndDown ? null:700">
        <v-card-text>
            <v-row justify="center">
                <v-col cols="12" md="6" sm="12" v-if="$vuetify.breakpoint.smAndDown">
                    <v-card elevation="0" color="#202040" width="100%" :height="$vuetify.breakpoint.smAndDown ? 400:700">
                        <v-row justify="center" align="center" class="fill-height">
                            <v-avatar size="300" class="elevation-15 transition">
                                <v-img src="@/assets/logoirio.png"></v-img>
                            </v-avatar>
                        </v-row>
                    </v-card>
                </v-col>
                <v-col cols="12" md="6" sm="12">
                    <v-card elevation="0" color="#202040" width="100%" :height="$vuetify.breakpoint.smAndDown ? null:700" class="px-10">
                        <v-row justify="center" align="center" class="fill-height">
                            <div>
                                <div class="headline white--text font-weight-black my-5">HELLO!</div>

                                <div :class="$vuetify.breakpoint.smAndDown ? 'my-5 altura':'my-5 altura2'">
                                    <typewriter
                                        :speed="200"
                                        :full-erase="true"
                                        :interval="1000"
                                        :words='["web developer","web designer","a systems ingenieer"]'
                                        class="display-1 white--text font-weight-black"
                                    >
                                        I Am Irio Gómez,
                                    </typewriter>
                                </div>

                                <div class="subtitle-1 white--text font-weight-black my-5">
                                    I've over 2 years of experience working with web architecture applications. 
                                    I like to write readable code, design pretty and minimalist UI and much more...
                                </div>

                                <div class="my-5 text-center">
                                    <v-hover v-slot:default="{hover}">
                                        <a href="https://www.facebook.com/iriojose.gomezvillarroel">
                                            <v-btn small fab outlined class="btn mx-2">
                                                <IconMessenger :color="hover ? '#ffbd69':'#ffffff'" />
                                            </v-btn>
                                        </a>
                                    </v-hover>
                                    <v-hover v-slot:default="{hover}">
                                        <a href="https://www.instagram.com/iriogomez/?hl=es-la">
                                            <v-btn small fab outlined class="btn mx-2">
                                                <IconIg :color="hover ? '#ffbd69':'#ffffff'" />
                                            </v-btn>
                                        </a>
                                    </v-hover>
                                    <v-hover v-slot:default="{hover}">
                                        <a href="https://www.upwork.com/o/profiles/users/~01c274f65e9478fb0d/">
                                            <v-btn small fab outlined class="btn mx-2">
                                                <IconUp :color="hover ? '#ffbd69':'#ffffff'" />
                                            </v-btn>
                                        </a>
                                    </v-hover>
                                    <v-hover v-slot:default="{hover}">
                                        <a href="https://github.com/iriojose">
                                            <v-btn small fab outlined class="btn mx-2">
                                                <IconGit :color="hover ? '#ffbd69':'#ffffff'" />
                                            </v-btn>
                                        </a>
                                    </v-hover>
                                </div>
                            </div>
                        </v-row>
                    </v-card>
                </v-col>
                <v-col cols="12" md="6" sm="12" v-if="!$vuetify.breakpoint.smAndDown">
                    <v-card elevation="0" color="#202040" width="100%" height="700">
                        <v-row justify="center" align="center" class="fill-height">
                            <v-avatar size="300" class="elevation-15 transition">
                                <v-img src="@/assets/logoirio.png"></v-img>
                            </v-avatar>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
import IconGit from '@/components/IconGit';
import IconUp from '@/components/IconUp';
import IconIg from '@/components/IconIg';
import IconMessenger from '@/components/IconMessenger';

    export default {
        components:{
            IconGit,
            IconUp,
            IconIg,
            IconMessenger
        },
    }
</script>

<style lang="scss" scope>
    .transition{
        animation: animat 2s 1;
    }
    @keyframes animat{
        0% {
            transform: translateX(400px);
        }
    }
    .btn:hover {
        color: #fff !important;
        background: #ffbd69 !important;
        -moz-transition: all 200ms ease-in;
        -webkit-transition: all 200ms ease-in;
        -o-transition: all 200ms ease-in;
        transition: all 200ms ease-in;
    }
    .btn{
        color: #fff !important;
    }
    .altura{
        height:140px;
    }
    .altura2{
        height:80px;
    }
</style>