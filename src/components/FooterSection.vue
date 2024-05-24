<template>
    <footer class="footer">
      <div class="ui inverted vertical footer segment">
        <div class="ui center aligned container">
          <div class="ui stackable inverted divided grid">
            <div class="three wide column">
              <h4 class="ui inverted header">Quick Links</h4>
              <div class="ui inverted link list">
                <router-link to="/" class="item">Home</router-link>
                <router-link to="/courses" class="item">Courses</router-link>
                <!-- Add more router links as needed -->
                <!-- Example: <router-link to="/about" class="item">About</router-link> -->
              </div>
            </div>
            <div class="seven wide column">
              <h4 class="ui inverted header">Get Started with PC Courses Today!</h4>
              <p>Explore our wide range of PC courses designed to enhance your computer skills and advance your
                career. Enroll now and unlock your full potential!</p>
            </div>
          </div>
          <div class="ui inverted section divider"></div>
          <div class="ui horizontal inverted small divided link list">
            <a class="item" href="#">Terms of Service</a>
            <a class="item" href="#">Privacy Policy</a>
            <a class="item" href="#">Accessibility</a>
            <a class="item" href="#">Site Map</a>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterSection'
  }
  </script>
  
  <style scoped>
  </style>
  