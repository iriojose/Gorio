<template>
    <v-card elevation="0" color="#202040" width="100%">
        <v-card-text>
            <v-row justify="center">
                <v-col cols="12" md="12" sm="12">
                    <div class="text-center display-1 white--text font-weight-black">
                        {{$t('lang.contacto.titulo')}} <span class="color" v-if="$i18n.locale !== 'es'">{{$t('lang.contacto.titulo-after')}}</span>
                    </div>
                </v-col>
                <v-col cols="12" md="8" sm="12">
                    <v-card elevation="0" color="#202040" width="100%" height="100%">
                        <v-form v-model="valid">
                            <v-row justify="center" align="center" class="fill-height">
                                <v-col cols="12" md="12" sm="12">
                                    <v-text-field
                                        :rules="[required('Name')]"
                                        solo
                                        color="#ffbd69"
                                        :label="$t('lang.contacto.nombre')"
                                        v-model="template_params.name"
                                    >
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" md="6" sm="12">
                                    <v-text-field
                                        solo
                                        :rules="[required('Email'),emailFormat()]"
                                        color="#ffbd69"
                                        :label="$t('lang.contacto.correo')"
                                        v-model="template_params.email"
                                    >
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" md="6" sm="12">
                                    <v-text-field
                                        solo
                                        :rules="[required('Sucject')]"
                                        color="#ffbd69"
                                        :label="$t('lang.contacto.asunto')"
                                        v-model="template_params.subject"
                                    >
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" sm="12" md="12">
                                    <v-textarea 
                                        :label="$t('lang.contacto.mensaje')"
                                        :rules="[required('Message')]"
                                        solo
                                        v-model="template_params.message"
                                        color="#ffbd69"
                                    >
                                    </v-textarea>
                                </v-col>
                                <v-col cols="12" md="12" sm="12">
                                    <v-btn 
                                        :disabled="!valid" 
                                        block class="btn" 
                                        height="45" 
                                        @click="sendEmail" 
                                        :loading="loading"
                                    >
                                        {{$t('lang.contacto.boton')}}
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-card>
                </v-col>
            </v-row>
        </v-card-text>

        <v-snackbar v-model="snackbar" :timeout="2000" :color="color" right>
            <div>
                <v-icon class="mx-2" color="#fff">{{icon}}</v-icon>
                {{mensaje}}
            </div>
        </v-snackbar>
    </v-card>
</template>

<script>
import validations from '@/validations/validations';
import emailjs from 'emailjs-com';

    export default {
        data() {
            return {
                ...validations,
                valid:false,
                snackbar:false,
                loading:false,
                icon:'',
                color:'',
                mensaje:'',

                service_id:"default_service",
                template_id:"iriotemplate",
                user_id:"user_Lj58mznGqiGjPCnDe3f0K",
                template_params:{
                    "subject": "",
                    "name": "",
                    "email": "",
                    "message": ""
                },
            }
        },
        methods: {
            sendEmail(){
                this.loading = true;
                emailjs.send(this.service_id, this.template_id, this.template_params,this.user_id).then((result) => {
                    this.icon = "mdi-check-outline";
                    this.color = "#388E3C"
                    this.mensaje = "email sent correctly."
                    this.snackbar = true;
                    this.loading = false;
                }).catch(e => {
                    this.icon = "mdi-alert";
                    this.color = "#D32F2F"
                    this.mensaje = "error sending mail."
                    this.snackbar = true;
                    this.loading = false;
                });
            },
        }
    }
</script>

<style lang="scss" scoped>
    .btn:hover {
        color: #fff !important;
        background: #ffbd69 !important;
        -moz-transition: all 200ms ease-in;
        -webkit-transition: all 200ms ease-in;
        -o-transition: all 200ms ease-in;
        transition: all 200ms ease-in;
    }
    .btn{
        color: #232323 !important;
    }
    .color{
        color: #ffbd69 !important;
    }
</style>