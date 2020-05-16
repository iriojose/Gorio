<template>
    <v-app-bar app color="#202040" elevate-on-scroll>

        <v-app-bar-nav-icon 
            color="#fff"
            @click="change"
            v-if="$vuetify.breakpoint.smAndDown"
        />

        <v-spacer v-if="$vuetify.breakpoint.smAndDown"></v-spacer>

        <v-toolbar-title class="mx-5 headline font-weight-black white--text">
            G<span class="color-title">ORIO</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>

        <a @click="$vuetify.goTo('#home')" class="mx-4 font-weight-black white--text" v-if="!$vuetify.breakpoint.smAndDown">
            {{$t('lang.navbar.inicio')}}<span :class="home ? 'font-weight-black hove':'white--text font-weight-black'">{{$t('lang.navbar.inicio-after')}}</span>
        </a>
        <a @click="$vuetify.goTo('#about')" class="mx-4 font-weight-black white--text" v-if="!$vuetify.breakpoint.smAndDown">
             {{$t('lang.navbar.about')}}<span :class="about ? 'font-weight-black hove':'white--text font-weight-black'">{{$t('lang.navbar.about-after')}}</span>
        </a>
        <a @click="$vuetify.goTo('#services')" class="mx-4 font-weight-black white--text" v-if="!$vuetify.breakpoint.smAndDown">
            {{$t('lang.navbar.services')}}<span :class="services ? 'font-weight-black hove':'white--text font-weight-black'">{{$t('lang.navbar.services-after')}}</span>
        </a>
        <a @click="$vuetify.goTo('#portfolio')" class="mx-4 font-weight-black white--text" v-if="!$vuetify.breakpoint.smAndDown">
            {{$t('lang.navbar.portfolio')}}<span :class="portfolio ? 'font-weight-black hove':'white--text font-weight-black'">{{$t('lang.navbar.portfolio-after')}}</span>
        </a>
        <a @click="$vuetify.goTo('#contact')" class="mx-4 font-weight-black white--text" v-if="!$vuetify.breakpoint.smAndDown">
            {{$t('lang.navbar.contacto')}}<span :class="contact ? 'font-weight-black hove':'white--text font-weight-black'">{{$t('lang.navbar.contacto-after')}}</span>
        </a>
        
        <v-menu transition="slide-y-transition" bottom offset-y>
            <template v-slot:activator="{ on }">
                <v-btn v-if="!$vuetify.breakpoint.smAndDown" class="caption font-weight-black" color="#fff" v-on="on" text elevation="0">
                    <v-icon class="mx-2">
                        mdi-ideogram-cjk-variant
                    </v-icon>
                    {{select.text}}
                </v-btn>
            </template>
            <v-list>
                <v-list-item v-for="(item, i) in langs" :key="i" @click="changeLang(item)">
                    <v-list-item-title>{{ item.text }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>
</template>

<script>
import * as easings from 'vuetify/es5/services/goto/easing-patterns'
import {mapActions} from 'vuex';

    export default {
        props:{
            home:{
                type:Boolean,
                default:false,
            },
            about:{
                type:Boolean,
                default:false,
            },
            services:{
                type:Boolean,
                default:false,
            },
            portfolio:{
                type:Boolean,
                default:false,
            },
            contact:{
                type:Boolean,
                default:false,
            }
        },
        data() {
            return {
                duration: 500,
                offset: 0,
                easing: 'easeInOutCubic',
                langs:[
                    {lang:"en",text:"English",icon:""},
                    {lang:"es",text:"Español",icon:""}
                ],
                select:{lang:"en",text:"English",icon:""}
            }
        },
        methods:{
            ...mapActions(['setDrawer']),

            change(){
                this.setDrawer(true);
            },
            changeLang(evt){
                this.$i18n.locale = evt.lang;
                this.select = evt;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .hove{
        color: #ffbd69 !important;
        -moz-transition: all 500ms ease-in;
        -webkit-transition: all 500ms ease-in;
        -o-transition: all 500ms ease-in;
        transition: all 500ms ease-in;
    }
    span:hover {
        color: #ffbd69 !important;
        -moz-transition: all 500ms ease-in;
        -webkit-transition: all 500ms ease-in;
        -o-transition: all 500ms ease-in;
        transition: all 500ms ease-in;
    }
    .color-title{
        color:#ffbd69;
    }
</style>