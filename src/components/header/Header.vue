<script setup>
import Linknavbar from "@/components/header/Linknavbar.vue";
</script>

<template>
  <div class="container ">
    <header class="border-bottom lh-1 py-3">
      <div class="row flex-nowrap justify-content-between align-items-center">
        <div class="col-4 pt-1">
          <a class="link-secondary" href="#">Logo UNIFE</a>
        </div>
        <div class="col-4 text-center">
          <a class="blog-header-logo text-body-emphasis text-decoration-none">UniFE Behavioural Biology Lab</a>
        </div>
        <div class="col-4 dropdown  justify-content-end align-items-center ">

        </div>
      </div>

    </header>
    <div class="nav-scroller px-4 py-1 mb-3 border-bottom border-5">
      <nav class="nav nav-underline justify-content-between ">
        <Linknavbar></Linknavbar>
      </nav>
    </div>
  </div>

</template>

<style scoped>
.nav-scroller .nav {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}

.blog-header-logo {
  font-family: "Playfair Display", Georgia, "Times New Roman", serif /*rtl:Amiri, Georgia, "Times New Roman", serif*/;
  font-size: 2.25rem;
}

.blog-header-logo:hover {
  text-decoration: none;
}

h1, h2, h3, h4, h5, h6 {
  font-family: "Playfair Display", Georgia, "Times New Roman", serif /*rtl:Amiri, Georgia, "Times New Roman", serif*/;
}
</style>