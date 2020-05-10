<template>
    <v-app-bar app color="#202040" elevate-on-scroll>

        <v-app-bar-nav-icon 
            color="#fff"
            v-if="$vuetify.breakpoint.smAndDown"
        />

        <v-spacer v-if="$vuetify.breakpoint.smAndDown"></v-spacer>

        <v-toolbar-title class="mx-5 headline font-weight-black white--text">
            G<span class="color-title">ORIO</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>

        <a @click="$vuetify.goTo(0)" class="mx-4 font-weight-black white--text" v-if="!$vuetify.breakpoint.smAndDown">
            H<span :class="home ? 'font-weight-black hove':'white--text font-weight-black'">OME</span>
        </a>
        <a @click="$vuetify.goTo(790)" class="mx-4 font-weight-black white--text" v-if="!$vuetify.breakpoint.smAndDown">
            A<span :class="about ? 'font-weight-black hove':'white--text font-weight-black'">BOUT</span>
        </a>
        <a @click="$vuetify.goTo(1620)" class="mx-4 font-weight-black white--text" v-if="!$vuetify.breakpoint.smAndDown">
            S<span :class="services ? 'font-weight-black hove':'white--text font-weight-black'">ERVICES</span>
        </a>
        <a @click="$vuetify.goTo(2470)" class="mx-4 font-weight-black white--text" v-if="!$vuetify.breakpoint.smAndDown">
            P<span :class="portfolio ? 'font-weight-black hove':'white--text font-weight-black'">ORTFOLIO</span>
        </a>
        <a @click="$vuetify.goTo(3220)" class="mx-4 font-weight-black white--text" v-if="!$vuetify.breakpoint.smAndDown">
            C<span :class="contact ? 'font-weight-black hove':'white--text font-weight-black'">ONTACT</span>
        </a>
    </v-app-bar>
</template>

<script>
import * as easings from 'vuetify/es5/services/goto/easing-patterns'

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
            }
        },
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