<script setup>
import {RouterView} from 'vue-router'
import Header from "@/components/header/Header.vue";
import Footer from "@/components/Footer.vue";
</script>
<template>
  <body class="bg-image ">
  <div class="m-4 " id="container">
    <Header/>
    <RouterView/>
    <Footer/>
  </div>
  </body>
</template>
<style scoped>
h1, h2, h3, h4, h5, h6 {
  font-family: "Playfair Display", Georgia, "Times New Roman", serif;
}
body {
  min-width: 46rem;
  max-width: 100%;
  background-image:  url('/pexels-eberhard-grossgasteiger-10620142.jpg'); /* Add your background image */
  background-size: cover;
  background-position: center;
  overflow: hidden; /* Add overflow hidden */
}
#container {
  background-color: rgba(255, 255, 255, 0.13);
  border-radius: 10px;
  backdrop-filter: blur(5px);
  border: 2px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 40px rgba(35, 15, 25, 0.6);
}
$color-mode-type: data;
</style>
