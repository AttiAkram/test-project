<script>
export default {
  data() {
    return {
      people: [
        {name: 'Akram', age: 17, descrizione: 'Ciao, sono Akram', image: './../../assets/img-team/user.png'},
        {name: 'Paolo', age: 32, descrizione: 'Ciao, sono paolo', image: './immagini/paolo.jpg'},
        {name: 'Paolo', age: 32, descrizione: 'Ciao, sono paolo', image: './immagini/paolo.jpg'},
        {name: 'Paolo', age: 32, descrizione: 'Ciao, sono paolo', image: './immagini/paolo.jpg'},
        {name: 'Paolo', age: 32, descrizione: 'Ciao, sono paolo', image: './immagini/paolo.jpg'},
        {name: 'Paolo', age: 32, descrizione: 'Ciao, sono paolo', image: './immagini/paolo.jpg'},
        {name: 'Paolo', age: 32, descrizione: 'Ciao, sono paolo', image: './immagini/paolo.jpg'},

      ],
    };
  },
};
</script>

<template>
  <main class="container justify-content-center">
    <div v-for="person in people" :key="person.name" class="card m-3">
      <div class=" mb-3">
        <div class="row g-0">
          <div class="col-4">
            <img src="./../../assets/img-team/user.png" class="img-fluid rounded-start my-4" :alt="person.name">
          </div>
          <div class="col-8">
            <p class="card-body m-5"><h1>{{ person.name }}</h1>{{ person.age }} {{ person.descrizione }}</p>
          </div>
        </div>
      </div>
      <div  class="row g-0 mx-4">
        <img src="./../../assets/img-team/user.png" class="col-4 m-4" alt="" style="width: 300px;">
        <img src="./../../assets/img-team/user.png" class="col-4 m-4" alt="" style="width: 300px;">
        <img src="./../../assets/img-team/user.png" class="col-4 m-4" alt="" style="width: 300px;">
      </div>
    </div>

  </main>
</template>

<style scoped>

</style>