import { shallowMount } from '@vue/test-utils';
import FaqSection from '@/components/FaqSection.vue';  // Adjust the import path as needed

describe('FaqSection.vue', () => {
  it('renders the component', () => {
    const wrapper = shallowMount(FaqSection);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the correct number of FAQs', () => {
    const wrapper = shallowMount(FaqSection);
    expect(wrapper.findAll('.title').length).toBe(wrapper.vm.faqs.length);
  });
});
