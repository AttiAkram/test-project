<script>
export default {
  data() {
    return {
      people: [
        {
          name: 'Akram', age: 17, descrizione: 'Ciao, sono Akram ', user: '/img-team/Akram/user.png', userimg: [
            {img1: '/img-team/Akram/user.png'},
            {img2: '/img-team/Akram/user.png'},
            {img3: '/img-team/Akram/user.png'},
          ]
        },
        {
          name: 'Claudio', age: 38, descrizione: 'Ciao, sono Claudio', user: '/img-team/Claudio/user.png', userimg: [
            {img1: '/img-team/Claudio/user.png'},
            {img2: '/img-team/Claudio/user.png'},
            {img3: '/img-team/Claudio/user.png'},
          ]
        },
        {
          name: 'Marco', age: 23, descrizione: 'Ciao, sono Marco', user: '/img-team/Marco/user.png', userimg: [
            {img1: '/img-team/Marco/user.png'},
            {img2: '/img-team/Marco/user.png'},
            {img3: '/img-team/Marco/user.png'},
          ]
        },
        {
          name: 'Paolo', age: 47, descrizione: 'Ciao, sono Paolo', user: '/img-team/Paolo/user.png', userimg: [
            {img1: '/img-team/Paolo/user.png'},
            {img2: '/img-team/Paolo/user.png'},
            {img3: '/img-team/Paolo/user.png'},
          ]
        },
      ]
    };
  },
};
</script>

<template>
  <main class="container">
    <div class="justify-content-center">
      <div v-for="person in people" :key="person.name" class=" border-bottom m-3">
        <div class="row">
          <img :src="person.user" class="card-img-top col-3" :alt="person.name" style="width: 18rem">
          <div class="card-body col-7">
            <h1 class="card-title">{{ person.name }}</h1>
            <h2 class="card-subtitle mb-2 text-muted">{{ person.age }}</h2>
            <p class="card-text">{{ person.descrizione }}</p>
            <p class="card-text ">{{ person.name }} {{ person.age }} {{ person.descrizione }}</p>
          </div>
        </div>
        <div class="container justify-content-center">
          <div class="row overflow-hidden g-0 mx-4  d-none d-lg-flex custom-lg-flex">
            <img :src="'/img-team/Paolo/user.png'" class="col-3 m-4" alt="">
            <img :src="'/img-team/Paolo/user.png'" class="col-3 m-4" alt="">
            <img :src="'/img-team/Paolo/user.png'" class="col-3 m-4" alt="">
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