<template>
	<v-app style="background:#202040;">
        <Navbar 
            id="top"
            :home="isHome" 
            :about="isAbout" 
            :services="isServices" 
            :portfolio="isPortfolio" 
            :contact="isContact"
        />

        <BarraLateral />

        <Home id="home" v-intersect="onIntersect" class="mb-12" />

        <About id="about" v-intersect="onAbout" class="mb-12" />

        <Services id="services" v-intersect="onServices" class="mb-12" />

        <Portfolio id="portfolio" v-intersect="onPortfolio" class="mb-12"/>

        <Contact id="contact" v-intersect="onContact" class="mb-12"/>
        
        <v-divider dark></v-divider>

        <Footer />
        <v-hover v-slot:default="{hover}">
            <v-btn 
                v-show="isAbout || isServices || isPortfolio || isContact"
                @click="$vuetify.goTo('#top')" 
                fab dark bottom 
                right color="rgba(255,255,255,0.2)"
                class="v-btn--example btn" 
            >
                <v-icon :color="hover ? '#ffbd69':'#232323'">mdi-apple-keyboard-control</v-icon>
            </v-btn>
        </v-hover>
	</v-app>
</template>

<script>
import Navbar from '@/components/Navbar';
import Home from '@/components/Home';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BarraLateral from '@/components/BarraLateral';

	export default {
        components:{
            Navbar,
            Footer,
            Home,
            About,
            Services,
            Portfolio,
            Contact,
            BarraLateral
        },
        data() {
            return {
                isHome: false,
                isAbout:false,
                isServices:false,
                isPortfolio:false,
                isContact:false
            }
        },
        methods: {
            onIntersect (entries, observer) {
                this.isHome = entries[0].isIntersecting;
            },
            onAbout (entries, observer) {
                this.isAbout = entries[0].isIntersecting;
            },
            onServices (entries, observer) {
                this.isServices = entries[0].isIntersecting;
            },
            onPortfolio (entries, observer) {
                this.isPortfolio = entries[0].isIntersecting;
            },
            onContact (entries, observer) {
                this.isContact = entries[0].isIntersecting;
            },
        },
	};
</script>

<style lang="scss" scope>
    .v-btn--example {
        bottom: 0;
        right:0;
        position: fixed;
        margin: 16px;
        animation: animat 0.5s 1;
        //transform:translateX(-15px) rotate(10deg);
    }
    .out{
        bottom: 0;
        right:0;
        position: fixed;
        margin: 16px;
        animation: animat2 0.5s 1;
    }
    @keyframes animat{
        0% {
            transform: translateX(100px);
        }
    }
    @keyframes animat2{
        0% {
            transform: translateX(-100px);
        }
    }
    .btn:hover {
        color: #fff !important;
        background: #fff !important;
        -moz-transition: all 200ms ease-in;
        -webkit-transition: all 200ms ease-in;
        -o-transition: all 200ms ease-in;
        transition: all 200ms ease-in;
    }
    ::-webkit-scrollbar {
        width: 8px;     
        height: 8px;   
    }
    ::-webkit-scrollbar-thumb {
        background: #ccc;
        border-radius: 12px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #b3b3b3;
        box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
    }
    ::-webkit-scrollbar-thumb:active {
        background-color: #999999;
    }
    ::-webkit-scrollbar-track {
        background: #fff;
        border-radius: 12px;
    }
    ::-webkit-scrollbar-track:hover,
    ::-webkit-scrollbar-track:active {
        background: #fff;
    }
    .grueso{
        border-width: 10px;
        border-color:#ffbd69;
        border-left: solid;
        border-right: solid;
        border-bottom: solid;
        border-top:solid;
    }
</style>