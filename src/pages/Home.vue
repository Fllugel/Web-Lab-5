<template>
    <div id="home">

      <SearchSection></SearchSection>
      <MainContent></MainContent>
      <FaqSection></FaqSection>

    </div>
</template>
  
<script>
import MainContent from '@/components/MainContent.vue';
import FaqSection from '@/components/FaqSection.vue';
import SearchSection from '@/components/SearchSection.vue';
  
export default {
    name: 'HomePage',
    components: {
        MainContent,
        FaqSection,
        SearchSection,
    },
}
</script>
  
<style scoped>
/* Add scoped CSS styles here */
</style>
