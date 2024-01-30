<script>
export default {
  data() {
    return {
      people: [
        {name: 'Akram', age: 17, descrizione: 'Ciao, sono Akram', image: '.@/assets/img-team/user.png'},
        {name: 'Paolo', age: 32, descrizione: 'Ciao, sono paolo', image: './immagini/paolo.jpg'},
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
  <main class="container">
    <div class="row justify-content-center">
      <div v-for="person in people" :key="person.name" class="card col-3 m-3" style="width: 18rem;">
        <img :src="(person.image)" class="card-img-top" :alt="person.name">
        <div class="card-body">
          <p class="card-text">{{ person.name }} {{ person.age }} {{ person.descrizione }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>