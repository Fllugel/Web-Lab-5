<template>
  <div class="ui vertical container">
    <h1 class="ui horizontal divider title-home">TOP COURSES</h1>
    <div class="ui three column doubling grid">
      <!-- Display courses using Vue data -->
      <template v-if="coursesLoaded">
        <div v-for="course in courses" :key="course.id" class="column">
          <div class="ui special cards">
            <div class="ui centered card">
              <div class="blurring dimmable image">
                <img class="image-card" :src="course.image" alt="Course Image">
              </div>
              <div class="content">
                <a class="header" :href="getCourseLink(course.id)">{{ course.name }}</a>
                <div class="meta">
                  <span class="date">Start Date: {{ course.start_date }}</span><br>
                  <span class="date">End Date: {{ course.end_date }}</span>
                </div>
              </div>
              <div class="ui green button fluid">
                <i class="cart icon"></i>
                Buy now
              </div>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <!-- Placeholder for courses loading -->
        <div v-for="index in 3" :key="index" class="column">
          <div class="ui special cards">
            <div class="ui centered card">
              <div class="blurring dimmable image" style="height: 200px;"> <!-- Adjusted height for placeholder -->
                <div class="ui placeholder image"></div> <!-- Placeholder for image -->
              </div>
              <div class="content">
                <div class="ui placeholder">
                  <div class="header">
                    <div class="line"></div> <!-- Placeholder for course name -->
                    <div class="line"></div> <!-- Placeholder for meta info -->
                  </div>
                </div>
              </div>
              <div class="ui placeholder">
                <div class="button"></div> <!-- Placeholder for button -->
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
    <div class="ui section divider"></div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      courses: [], // Initialize courses array
      coursesLoaded: false // Set initial loading state to false
    };
  },
  mounted() {
    this.fetchCourses(); // Fetch courses when component mounts
  },
  methods: {
    async fetchCourses() {
      const courseIds = [1, 2, 9];

      try {
        for (const courseId of courseIds) {
          const course = await this.fetchCourse(courseId);
          this.courses.push(course); // Add fetched course to courses array
        }
        this.coursesLoaded = true; // Set loading state to true after courses are loaded
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    },
    fetchCourse(courseId) {
      return fetch(`http://127.0.0.1:8000/course/${courseId}/`, {
        method: 'GET',
        headers: {
          'accept': 'application/json'
        }
      })
      .then(response => response.json())
      .then(course => course)
      .catch(error => {
        console.error('Error fetching course:', error);
        throw error;
      });
    },
    getCourseLink(courseId) {
      return `course.html?id=${courseId}`; // Modify the course link as per your requirements
    }
  }
};
</script>

<style scoped>
/* Main content styles */
</style>
