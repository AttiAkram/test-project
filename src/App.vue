<script setup>
import {RouterLink, RouterView} from 'vue-router'
import Header from "@/components/header/Header.vue";
import Footer from "@/components/Footer.vue";

</script>

<template>
  <body>
  <div class=" row  ">
    <div class="col-1 bg-primary">

    </div>
    <div class="col-10 p-3">
      <Header/>
      <RouterView/>
      <Footer/>
    </div>
    <div class="col-1 bg-primary">

    </div>
  </div>
  </body>
</template>
<style scoped>
h1, h2, h3, h4, h5, h6 {
  font-family: "Playfair Display", Georgia, "Times New Roman", serif/*rtl:Amiri, Georgia, "Times New Roman", serif*/;
}
body{
  display: flex;
  min-width: 46rem;
}
</style>
