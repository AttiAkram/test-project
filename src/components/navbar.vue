<script setup lang="ts">

</script>

<template>
  <header>
    <nav class="bg-light rounded navbar navbar-light fixed-top navbar-expand-lg mb-5">
      <div class="container">
        <a class="navbar-brand" href="#">
          <div class="col-4 text-center">
            <a class="blog-header-logo text-body-emphasis text-decoration-none" href="#">UniFE Behavioural Biology
              Lab</a>
          </div>
        </a>
      </div>
      <button class=" navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu"
              aria-expanded="false" aria-controls="navbarMenu">
        <Span class="navbar-toggle-icon"></Span>
      </button>
      <div class="collapse navbar-collapse" id="navbarMenu">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">Team</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Youtube</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Portfolio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style scoped>

nav {
  margin-top: 0.5%;
  box-sizing: content-box;
}

.navbar-light .navbar-brand {
  color: #000000;
  font-size: 25px;
  font-weight: bold;
  letter-spacing: 2px;
  transition: color 0.3s ease;
}

.navbar-nav .nav-item .nav-link {
  color: #000000;
  transition: color 0.3s ease;
}

.navbar-toggler {
  background: #ebe6e6;
  outline: none !important;
  font-size: 18px;
  line-height: 0.3;
  padding: 1px 5px;
}

.navbar-nav {
  text-align: center;
}

.nav-link {
  padding: 5px;
}


h1, h2, h3, h4, h5, h6 {
  font-family: "Playfair Display", Georgia, "Times New Roman", serif /*rtl:Amiri, Georgia, "Times New Roman", serif*/;
}
</style>