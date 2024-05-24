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
  
  export default {
    data() {
      return {
        searchQuery: ''
      };
    },
    methods: {

    }
  }
  </script>
  
  <style scoped>
  /* Search section styles */
  </style>
  