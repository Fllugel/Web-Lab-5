<template>
    <div class="ui inverted vertical masthead center aligned segment">
      <div class="ui text container">
        <canvas class="background"></canvas>
        <h1 class="ui inverted header">Find your course</h1>
        <div class="ui fluid big action input"> 
          <input ref="searchInput" type="text" v-model="searchQuery" @keyup.enter="searchCourses" placeholder="Search...">
          <div class="ui green button" @click="searchCourses"><i class="search icon"></i></div>
        </div>
      </div>            
    </div>
  </template>
  
  <script>
  import Particles from 'particlesjs';
  
  export default {
    data() {
      return {
        searchQuery: ''
      };
    },
    mounted() {
      // Initialize particles
      //this.initParticles();
    },
    methods: {
      searchCourses() {
        // Redirect to courses page with search query
        if (this.searchQuery.trim() !== '') {
          this.$router.push({ path: '/courses', query: { search: this.searchQuery } });
        } else {
          // If search query is empty, redirect to courses page without query
          this.$router.push('/courses');
        }
      },
      initParticles() {
        const background = document.querySelector(".background");
        const rect = background.getBoundingClientRect(); // Get dimensions of the background
  
        const minDistance = Math.min(rect.width, rect.height) * 0.8; // Adjust the multiplier as needed for desired spacing
  
        Particles.init({
          selector: ".background",
          color: "#99cd32",
          connectParticles: true,
          sizeVariations: 10,
          maxParticles: 100,
          minDistance: minDistance, // Set the minimum distance based on background size
        });
      }
    }
  }
  </script>
  
  <style scoped>
  /* Search section styles */
  </style>
  