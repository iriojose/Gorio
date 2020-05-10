<template>
    <v-card elevation="0" color="#202040" width="100%">
        <v-card-text>
            <v-row justify="center">
                <v-col cols="12" md="12" sm="12">
                    <div class="text-center display-1 white--text font-weight-black">
                        MY <span class="color">SERVICES</span>
                    </div>
                </v-col>
                <v-col cols="12" md="12" sm="12">
                    <v-row justify="center">
                        <v-hover v-slot:default="{hover}" v-for="(service,i) in services" :key="i">
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
                        <span class="color">SKILLS</span>
                    </div>

                    <v-row justify="center">
                        <v-img 
                            contain width="250" height="200" :src="require('@/assets/'+img.img)"
                            v-for="(img,i) in images" :key="i"
                            class="my-5 mx-4 scale"
                        >
                        </v-img>
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
        data() {
            return {
                services:[
                    {icon:'', title:'DEVELOPMENT',text:'Front-end, back-end development technologies.'},
                    {icon:'', title:'DESIGN',text:'Responsive designs, web design, movile design.'},
                    {icon:'', title:'ANALISTYC',text:'Systems analyst, software optimization, software auditor.'},
                ],
                images:[
                    {img:'html.svg'},
                    {img:'css.svg'},
                    {img:'php.svg'},
                    {img:'mysql.svg'},
                    {img:'js.svg'},
                    {img:'node.svg'},
                    {img:'vue.svg'},
                    {img:'react.svg'},
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