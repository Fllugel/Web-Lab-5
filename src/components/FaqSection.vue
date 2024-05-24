<template>
  <div class="faq-section-container">
    <div class="faq-section">
      <div class="centered-text">
        <h2 class="faq-heading">Frequently Asked Questions</h2>
      </div>
      <div class="ui styled accordion">
        <div v-for="(faq, index) in faqs" :key="index" class="title" :class="{ active: activeIndex === index }">
          <div class="faq-title" @click="toggleAccordion(index)">
            <i class="dropdown icon"></i>
            {{ faq.question }}
          </div>
          <div v-if="activeIndex === index" class="content">
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'FaqSection',
  data() {
    return {
      faqs: [
        { question: 'What are the main features of PC courses?', answer: 'PC courses cover various aspects of computer skills and knowledge, including hardware, software, programming, and more.' },
        { question: 'What specific topics are covered in these courses?', answer: 'PC courses may include topics such as operating systems (Windows, MacOS, Linux), office productivity software (Microsoft Office, Google Workspace), programming languages (Python, Java, HTML/CSS), and computer networking.' },
        { question: 'How can I enroll in a PC course?', answer: 'Enrollment processes vary depending on the institution or platform offering the course. Typically, you can enroll online through the course website or platform and follow the provided instructions.' },
        { question: 'What are the payment options for PC courses?', answer: 'Payment options for PC courses may include credit/debit card, PayPal, bank transfer, or other online payment methods. Some courses may also offer installment plans or financial aid options.' }
      ],
      activeIndex: null
    };
  },
  methods: {
    toggleAccordion(index) {
      this.activeIndex = (this.activeIndex === index) ? null : index;
    }
  }
}
</script>

<style scoped>
.faq-section-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
  margin-bottom: 30px;
}

.centered-text {
  text-align: center;
  margin-bottom: 10px;
}

/* Additional styling if needed */
</style>
