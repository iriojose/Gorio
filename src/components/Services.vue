<template>
    <v-card elevation="0" color="#202040" width="100%">
        <v-card-text>
            <v-row justify="center">
                <v-col cols="12" md="12" sm="12">
                    <div class="text-center display-1 white--text font-weight-black">
                        {{$t('lang.servicios.titulo1')}} <span class="color">{{$t('lang.servicios.titulo1-after')}}</span>
                    </div>
                </v-col>
                <v-col cols="12" md="12" sm="12">
                    <v-row justify="center">
                        <v-hover v-slot:default="{hover}" v-for="(service,i) in servis" :key="i">
                            <v-card 
                                class="mx-5 mb-10 transition" 
                                color="#1b1b37" elevation="0"
                                width="350" height="300" 
                            >
                                <v-row justify="center" class="mt-8">
                                    <v-btn v-if="i==0" :outlined="hover ? false:true" tile height="50" width="50" color="#ffbd69">
                                        <IconGit tama="30px" />
                                    </v-btn>
                                    <v-btn v-if="i==1" :outlined="hover ? false:true" tile height="50" width="50" color="#ffbd69">
                                        <IconDesign tama="30px" />
                                    </v-btn>
                                    <v-btn v-if="i==2" :outlined="hover ? false:true" tile height="50" width="50" color="#ffbd69">
                                        <v-img contain width="30" height="30" :src="require('@/assets/window.png')"></v-img>
                                    </v-btn>
                                </v-row>
                                <div class="text-center title white--text font-weight-black mt-10">
                                    {{service.title}}
                                </div>
                                <div class="text-center subtitle-1 white--text font-weight-black mt-10 mx-10">
                                    {{service.text}}
                                </div>
                            </v-card>
                        </v-hover>
                    </v-row>
                
                    <div class="text-center display-1 white--text font-weight-black my-5">
                        <span class="color">{{$t('lang.servicios.titulo2')}}</span>
                    </div>

                    <v-row justify="center">
                        <div v-for="(img,i) in images" :key="i">
                            <v-img 
                                contain width="250" height="200" :src="require('@/assets/'+img.img)"
                                class="my-5 mx-4 scale"
                            >
                            </v-img>
                            <v-progress-linear
                                v-model="img.value"
                                height="25"
                                class="px-1"
                                :color="img.color"
                                reactive
                            >
                                <strong :class="img.img == 'expressjs.png' || img.img == 'php.svg' ?'black--text':'white--text'"
                                >
                                    {{ Math.ceil(img.value) }}%
                                </strong>
                            </v-progress-linear>
                        </div>
                    </v-row>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
import IconGit from '@/components/IconGit';
import IconDesign from '@/components/IconDesign';

    export default {
        components:{
            IconGit,
            IconDesign
        },
        computed: {
            servis(){
                return this.services;
            }
        },
        watch: {
            '$i18n.locale'(){
                this.services = this.services.filter((a,i) => a.title = this.$t('lang.servicios.card'+`${i+1}`));
                this.services = this.services.filter((a,i) => a.title = this.$t('lang.servicios.card'+`${i+1}-content`));
            }
        },
        data() {
            return {
                services:[
                    {icon:'', title:this.$t('lang.servicios.card1'),text:this.$t('lang.servicios.card1-content')},
                    {icon:'', title:this.$t('lang.servicios.card2'),text:this.$t('lang.servicios.card2-content')},
                    {icon:'', title:this.$t('lang.servicios.card3'),text:this.$t('lang.servicios.card3-content')},
                ],
                images:[
                    {img:'html.svg',value:100,color:"#e65100"},
                    {img:'css.svg',value:90,color:"#0277bd"},
                    {img:'php.svg',value:90,color:"#dcd5f2"},
                    {img:'mysql.svg',value:80,color:"#232323"},
                    {img:'js.svg',value:100,color:"#0277bd"},
                    {img:'node.svg',value:90,color:"#4caf50"},
                    {img:'vue.svg',value:100,color:"#455a64"},
                    {img:'react.svg',value:70,color:"#80dde9"},
                    {img:'laravel.png',value:80,color:"#d4362e"},
                    {img:'vuetify.png',value:100,color:"#166ac3"},
                    {img:'expressjs.png',value:90,color:"#ffffff"},
                    {img:'mongodb.png',value:90,color:"#4fb23f"},
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>
    .color{
        color: #ffbd69 !important;
    }
    .transition{
        transition:all 0.3s;
    }
    .transition:hover{
        transform:translateY(-15px);
    }
    .scale{
        transition:all 0.3s;
    }
    .scale:hover{
        transform:scale(1.2);
    }
</style>