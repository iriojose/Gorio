<template>
    <v-card elevation="0" color="#202040" width="100%">
        <v-card-text>
            <v-row justify="center">
                <v-col cols="12" md="12" sm="12">
                    <div class="text-center display-1 white--text font-weight-black">
                        MY <span class="color">PORTFOLIO</span>
                    </div>
                </v-col>
                <v-col cols="12" md="5" sm="12" v-for="(img,i) in images" :key="i">
                    <v-card elevation="0" width="100%" :height="$vuetify.breakpoint.smAndDown ? 350:300" color="transparent">
                        <div class="div-img hidden" >
                            <img class="img" :src="require('@/assets/'+img.img)">
                            <div class="overlay"></div>
                            <div class="titulo title font-weight-black">{{img.title}}</div>
                            <div class="descripcion subtitle-2 font-weight-black">
                                {{img.descripcion}}
                            </div>
                            <v-hover v-slot:default="{hover}">
                                <div class="link subtitle-2 font-weight-black">
                                    <a :href="img.path">
                                        See On GitHub 
                                        <v-btn small fab :class="hover ? 'background mx-2':'btn mx-2'">
                                            <IconGit :color="hover ? '#ffbd69':'#fff'" />
                                        </v-btn>
                                    </a>
                                </div>
                            </v-hover>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
import IconGit from '@/components/IconGit';

    export default {
        components:{
            IconGit
        },
        data() {
            return {
                images:[
                    {
                        img:'hoyprovoca.png',
                        title:'PROJECT LEADER',
                        descripcion:'This is an e-commerce based product and service sales management system developed with vuejs and vuetify',
                        path:'https://github.com/iriojose/hoyprovoca',
                    },
                    {
                        img:'dashboard.png',
                        title:'PROJECT LEADER',
                        descripcion:'This is an administrative system for the sales management of an online store developed with vuejs and vuetify',
                        path:'https://github.com/iriojose/hoyprovoca-admin',
                    },
                    {
                        img:'reporteador.png',
                        title:'COLLABORATOR',
                        descripcion:'This is a management system for financial intelligence developed with vuejs and vuetify ',
                        path:'https://github.com/rubengp99/reporteador',
                    },
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>
    .color{
        color: #ffbd69 !important;
    }
    .btn:hover {
        background: #fff !important;
        -moz-transition: all 200ms ease-in;
        -webkit-transition: all 200ms ease-in;
        -o-transition: all 200ms ease-in;
        transition: all 200ms ease-in;
    }
    .btn{
        text-decoration:none;
        background: #ffbd69 !important;
    }
    .background{
        background: #fff !important;
        -moz-transition: all 200ms ease-in;
        -webkit-transition: all 200ms ease-in;
        -o-transition: all 200ms ease-in;
        transition: all 200ms ease-in;
    }
    a{
        text-decoration:none;
        color: #fff !important;
    }

    @font-face {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0e.ttf) format('truetype');
    }
    .div-img {
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    .div-img.hidden {
        overflow: hidden;
    }
    .div-img .img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 400px;
        height: 300px;
        //border-radius: 150px;
        //-webkit-border-radius: 150px;
        //-moz-border-radius: 150px;
        transform: translate(0px);
        -ms-transform: translate(0px);
        -moz-transform: translate(0px);
        -webkit-transform: translate(0px);
        -o-transform: translate(0px);
        -webkit-transition: all 300ms ease-in-out;
        -moz-transition: all 300ms ease-in-out;
        -ms-transition: all 300ms ease-in-out;
        -o-transition: all 300ms ease-in-out;
    }
    .titulo{
        font-family: 'Open Sans';
        position: absolute;
        z-index: 10;
        color: #fff;
        display: block;
        top: 10%;
        padding-left: 40px;
        padding-right:20px;
        opacity: 0;
        transition: all 1s;
        -webkit-transition: all 1s ease-in;
        -moz-transition: all 1s ease-in;
        -ms-transition: all 1s ease-in;
        -o-transition: all 1s ease-in;
    }

    .descripcion{
        font-family: 'Open Sans';
        position: absolute;
        z-index: 10;
        color: #fff;
        display: block;
        top: 25%;
        padding-left: 40px;
        padding-right:40%;
        opacity: 0;
        transition: all 1s;
        -webkit-transition: all 1s ease-in;
        -moz-transition: all 1s ease-in;
        -ms-transition: all 1s ease-in;
        -o-transition: all 1s ease-in;
    }
    .link{
        font-family: 'Open Sans';
        position: absolute;
        z-index: 10;
        color: #fff;
        display: block;
        top: 80%;
        padding-left: 40px;
        padding-right:20px;
        opacity: 0;
        transition: all 1s;
        -webkit-transition: all 1s ease-in;
        -moz-transition: all 1s ease-in;
        -ms-transition: all 1s ease-in;
        -o-transition: all 1s ease-in;
    }
    .div-img .overlay {
        position: absolute;
        z-index: 10;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        /*dim the background*/
        opacity: 0;
        transition: opacity 1s;
        -webkit-transition: opacity 1s ease-in-out;
        -moz-transition: opacity 1s ease-in-out;
        -ms-transition: opacity 1s ease-in-out;
        -o-transition: opacity 1s ease-in-out;
    }
    .div-img:hover .img {
        transform: translate(300px, 0px);
        -ms-transform: translate(300px, 0px);
        -moz-transform: translate(300px, 0px);
        -webkit-transform: translate(300px, 0px);
        -o-transform: translate(300px, 0px);
    }
    .div-img:hover .overlay {
        opacity: 1;
    }
    .div-img:hover .titulo {
        opacity: 1;
    }
    .div-img:hover .descripcion {
        opacity: 1;
    }
    .div-img:hover .link {
        opacity: 1;
    }
 
</style>