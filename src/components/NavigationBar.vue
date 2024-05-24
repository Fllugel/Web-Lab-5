<template>
  <div class="pusher">
    <div class="ui inverted vertical center aligned segment">
      <div class="ui container">
        <div class="ui small secondary inverted pointing menu">
          <!-- Add dynamic class binding to apply 'active' class based on route -->
          <router-link to="/" class="item" exact :class="{ 'active': $route.path === '/' }">Home</router-link>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      username: '',
      token: '',
      userId: '' 
    };
  },
  computed: {
    isLoggedIn() {
      return !!this.token;
    }
  },
  created() {
    // Fetch username, token, and userId from localStorage on component creation
    this.username = localStorage.getItem('username');
    this.token = localStorage.getItem('token');
    this.userId = localStorage.getItem('userId'); 
  },
};
</script>

<style scoped>

</style>
