import { shallowMount } from '@vue/test-utils';
import HomePage from '@/pages/Home.vue';
import MainContent from '@/components/MainContent.vue';
import FaqSection from '@/components/FaqSection.vue';
import SearchSection from '@/components/SearchSection.vue';

describe('HomePage.vue', () => {
  it('renders HomePage component', () => {
    const wrapper = shallowMount(HomePage);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders child components', () => {
    const wrapper = shallowMount(HomePage);

    expect(wrapper.findComponent(MainContent).exists()).toBe(true);
    expect(wrapper.findComponent(FaqSection).exists()).toBe(true);
    expect(wrapper.findComponent(SearchSection).exists()).toBe(true);
  });
});
