<template>
    <v-card elevation="0" color="#202040" width="100%">
        <v-card-text>
            <v-row justify="center">
                <v-col cols="12" md="12" sm="12">
                    <div class="text-center display-1 white--text font-weight-black">
                        CONTACT <span class="color">US</span>
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
                                        label="Name"
                                        v-model="nombre"
                                    >
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" md="6" sm="12">
                                    <v-text-field
                                        solo
                                        :rules="[required('Email'),emailFormat()]"
                                        color="#ffbd69"
                                        label="Email"
                                        v-model="email"
                                    >
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" md="6" sm="12">
                                    <v-text-field
                                        solo
                                        :rules="[required('Sucject')]"
                                        color="#ffbd69"
                                        label="Subject"
                                        v-model="asunto"
                                    >
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" sm="12" md="12">
                                    <v-textarea 
                                        label="Message"
                                        :rules="[required('Message')]"
                                        solo
                                        color="#ffbd69"
                                    >
                                    </v-textarea>
                                </v-col>
                                <v-col cols="12" md="12" sm="12">
                                    <v-btn 
                                        :disabled="!valid" 
                                        block class="btn" 
                                        height="45" @click="enviando" 
                                        :loading="loading"
                                    >
                                        SEND Message
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-card>
                </v-col>
            </v-row>
        </v-card-text>

        <v-snackbar v-model="send" :timeout="2000" color="#388E3C" right>
            <div>
                <v-icon class="mx-2" color="#fff">mdi-check</v-icon>
                Enviado exitosamente.
            </div>
        </v-snackbar>
    </v-card>
</template>

<script>
import validations from '@/validations/validations';

    export default {
        data() {
            return {
                ...validations,
                valid:false,
                nombre:'',
                email:'',
                asunto:'',
                mensaje:'',
                loading:false,
                send:false,
            }
        },
        methods: {
            enviando(){
                this.loading = true;
                setTimeout(() => {
                    this.send = true;
                    this.loading = false;
                },2000);
            }
        },
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