import { shallowMount } from '@vue/test-utils';
import SearchSection from '@/components/SearchSection.vue';

describe('SearchSection.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(SearchSection);
  });

  it('renders the component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('has a search input', () => {
    const input = wrapper.find('input[type="text"]');
    expect(input.exists()).toBe(true);
  });

  it('has a search button', () => {
    const button = wrapper.find('div.ui.green.button');
    expect(button.exists()).toBe(true);
  });

  it('has a canvas element', () => {
    const canvas = wrapper.find('canvas.background');
    expect(canvas.exists()).toBe(true);
  });

  it('renders the header', () => {
    const header = wrapper.find('h1.ui.inverted.header');
    expect(header.text()).toBe('Find your course');
  });

  it('matches the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
