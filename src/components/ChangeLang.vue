<template>
    <v-menu transition="slide-y-transition" bottom offset-y>
        <template v-slot:activator="{ on }">
            <v-btn class="caption font-weight-black" v-on="on" text elevation="0">
                <v-icon :color="$vuetify.breakpoint.smAndDown ? '#232323':'#ffbd69'">
                    mdi-ideogram-cjk-variant
                </v-icon>
                <div :class="$vuetify.breakpoint.smAndDown ? 'black--text':'white--text'">{{select.text}}</div>
                <v-icon :color="$vuetify.breakpoint.smAndDown ? '#232323':'#fff'">mdi-menu-down</v-icon>
            </v-btn>
        </template>
        <v-list dense flat>
            <v-list-item 
                @click="changeLang(item)"
                v-for="(item, i) in langs" :key="i"
                :disabled="$i18n.locale == item.lang ? true:false"
            >
                <v-list-item-title>{{ item.text }}</v-list-item-title>
                <v-list-item-avatar tile>
                    <v-img :src="require('@/assets/'+item.img)"></v-img>
                </v-list-item-avatar>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<script>
    export default {
        data(){
            return {
                langs:[
                    {lang:"en",text:"English",img:"eu.png"},
                    {lang:"es",text:"Español",img:"venezuela.png"}
                ],
                select:{lang:"en",text:"English"}
            }
        },
        mounted() {
            let lang = window.localStorage.getItem("lang");

            if(lang){
                if(lang == "es"){
                    this.select = {lang:"es",text:"Español"}
                }else if(lang == "en"){
                    this.select = {lang:"en",text:"English"}
                }
            }else{
                this.select = {lang:"en",text:"English"}
            }
        },
        methods:{
            changeLang(evt){
                this.$i18n.locale = evt.lang;
                this.select = evt;
                window.localStorage.setItem("lang",evt.lang);
            }
        }
    }
</script>
