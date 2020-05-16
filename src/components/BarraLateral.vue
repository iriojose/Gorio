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

            <v-divider class="my-10"></v-divider>

            <ChangeLang />
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import ChangeLang from '@/components/ChangeLang';
import {mapState,mapActions} from 'vuex';

    export default {
        components:{
            ChangeLang
        },
        data() {
            return {
                opciones:[
                    {text:'HOME',icon:'mdi-home',path:'#home'},
                    {text:'ABOUT',icon:'mdi-account-circle',path:'#about'},
                    {text:'SERVICES',icon:'mdi-briefcase',path:'#services'},
                    {text:'PORTFOLIO',icon:'mdi-clipboard-text-multiple',path:'#portfolio'},
                    {text:'CONTACT',icon:'mdi-card-account-phone',path:'#contact'},
                ],
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
            ...mapActions(['setDrawer'])
        },     
    }
</script>

<style lang="scss" scoped>
    .color-title{
        color:#ffbd69;
    }
</style>