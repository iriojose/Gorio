<template>
    <v-navigation-drawer
        v-model="barraLateral"
        width="250"
        color="#fff"
        app
    >
        <v-list flat>
            <v-list-item v-for="(opcion,i) in opciones" :key="i" @click="$vuetify.goTo(opcion.path) && setDrawer(false)">
                <v-list-item-icon>
                    <v-icon>
                        {{opcion.icon}}
                    </v-icon>
                </v-list-item-icon>
                <v-list-item-title class="font-weight-black">
                    {{opcion.text}}
                </v-list-item-title>
            </v-list-item>
            <v-list-item>
                <v-list-item-icon>
                    <v-icon>
                        mdi-ideogram-cjk-variant
                    </v-icon>
                </v-list-item-icon>
                <v-list-item-title>
                    <v-menu transition="slide-y-transition" bottom offset-y>
                        <template v-slot:activator="{ on }">
                            <v-btn class="subtitle-2 font-weight-black black--text" color="#fff" v-on="on" text elevation="0">
                                {{select.text}}
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item v-for="(item, i) in langs" :key="i" @click="changeLang(item)">
                                <v-list-item-title>{{ item.text }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-list-item-title>
            </v-list-item>
            
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import {mapState,mapActions} from 'vuex';

    export default {
        data() {
            return {
                opciones:[
                    {text:'HOME',icon:'mdi-home',path:'#home'},
                    {text:'ABOUT',icon:'mdi-account-circle',path:'#about'},
                    {text:'SERVICES',icon:'mdi-briefcase',path:'#services'},
                    {text:'PORTFOLIO',icon:'mdi-clipboard-text-multiple',path:'#portfolio'},
                    {text:'CONTACT',icon:'mdi-card-account-phone',path:'#contact'},
                ],
                langs:[
                    {lang:"en",text:"English",icon:""},
                    {lang:"es",text:"Español",icon:""}
                ],
                select:{lang:"en",text:"English",icon:""}
            }
        },
        computed:{
            ...mapState(['drawer']),

            barraLateral:{
                get(){
                    return this.drawer;
                },
                set(val){
                    this.setDrawer(val);
                }
            }
        },
        methods: {
            ...mapActions(['setDrawer']),

            home(){

            },
            changeLang(evt){
                this.$i18n.locale = evt.lang;
                this.select = evt;
            }
        },     
    }
</script>

<style lang="scss" scoped>
    .color-title{
        color:#ffbd69;
    }
</style>