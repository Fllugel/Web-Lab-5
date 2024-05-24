<template>
  <div>
    <NavigationBar></NavigationBar>
    <router-view></router-view>
    <FooterSection></FooterSection>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue';
import FooterSection from './components/FooterSection.vue';

import 'semantic-ui-css/semantic.min.css';

export default {
  name: 'App',
  components: {
    NavigationBar,
    FooterSection
  }
}
</script>

<style>
</style>
