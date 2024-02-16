<script>
export default {
  data() {
    return {
      people: [
        {
          name: 'Francesca Conti', descrizione: 'My name is Francesca Conti and ever since I decided to study Biology, I have always wanted to work in the environmental field which is why I opted to study for a master’s degree in Biomolecular and Evolutionary Sciences, with a focus on Biodiversity and Evolution. Currently, I am involved in the EASYTRAIN ‘Eco-Innovative Aquaculture System Training’ for European Industrial Doctorates project, and I will have the opportunity to collaborate with several partners, exploring both academic and company realities and expanding my experience in the field of scientific research. Specifically, I will study the underlying molecular mechanisms involved in fish food intake control and investigate the impact of environmental cycles (light and temperature)  on fish production.', user: '/img-team/FrancescaC/fc_cappa.png', userimg: {
            img1: '/img-team/FrancescaC/Gradient tank-2.png',
            img2: '/img-team/FrancescaC/Schermata 2023-08-01 alle 15.58.19.png',
            img3: '/img-team/FrancescaC/Untitled-9.png',
          }
        },
        {
          name: 'Marco', age: 23, descrizione: 'Ciao, sono Marco', user: '/img-team/Marco/user.png', userimg: {
            img1: '/img-team/Marco/user.png',
            img2: '/img-team/Marco/user.png',
            img3: '/img-team/Marco/user.png',
          }
        },
        {
          name: 'Claudio', age: 23, descrizione: 'Ciao, sono Claudio', user: '/img-team/Claudio/user.png', userimg: {
            img1: '/img-team/Claudio/user.png',
            img2: '/img-team/Claudio/user.png',
            img3: '/img-team/Claudio/user.png',
          }
        },
        {
          name: 'Paolo', age: 47, descrizione: 'Ciao, sono Paolo', user: '/img-team/Paolo/user.png', userimg: {
            img1: '/img-team/Paolo/user.png',
            img2: '/img-team/Paolo/user.png',
            img3: '/img-team/Paolo/user.png',
          }
        },
      ]
    };
  },
};
</script>

<template>
  <main class="container">
    <div class="justify-content-center">
      <div v-for="person in people" :key="person.name" class="border-bottom p-5 m-3 rounded text-body-emphasis bg-body-secondary">
        <div class="row">
          <!-- Immagine principale -->
          <img :src="person.user" class="card-img-top col-3 rounded-circle" :alt="person.name" style="width: 250px; height: 250px; object-fit: cover;">
          <div class="card-body col-7">
            <h1 class="card-title">{{ person.name }}</h1>
            <h2 class="card-subtitle mb-2 text-muted">{{ person.age }}</h2>
            <p class="card-text">{{ person.descrizione }}</p>
            <p class="card-text ">{{ person.name }} {{ person.age }} {{ person.descrizione }}</p>
          </div>
        </div>
        <!-- Immagini rettangolari -->
        <div class="container justify-content-center">
          <div class="row g-0 mx-4 d-none d-lg-flex custom-lg-flex">
            <img :src="person.userimg.img1" class="col-3 m-4 rounded" style="height: 10rem; width: auto; object-fit: cover;" alt="">
            <img :src="person.userimg.img2" class="col-3 m-4 rounded" style="height: 15rem; width: auto; object-fit: cover;" alt="">
            <img :src="person.userimg.img3" class="col-3 m-4 rounded" style="height: 15rem; width: auto; object-fit: cover;" alt="">
          </div>
        </div>
      </div>
    </div>
  </main>
</template>


<style scoped>
@media (min-width: 1460px) {
  .custom-lg-flex {
    display: flex;
  }
}
</style>