import { shallowMount } from '@vue/test-utils';
import TopCourses from '@/components/MainContent.vue';  // Adjust the import path as needed

describe('TopCourses.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(TopCourses, {
      data() {
        return {
          courses: [
            { id: 1, image: 'image1.jpg', start_date: '2023-01-01', end_date: '2023-01-31' },
            { id: 2, image: 'image2.jpg', start_date: '2023-02-01', end_date: '2023-02-28' },
            { id: 9, image: 'image9.jpg', start_date: '2023-03-01', end_date: '2023-03-31' },
          ],
          coursesLoaded: true,
        };
      }
    });
  });

  it('renders the component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('displays the correct number of courses', () => {
    const courseElements = wrapper.findAll('.ui.centered.card');
    expect(courseElements.length).toBe(3);
  });

  it('displays course details correctly', () => {
    const firstCourse = wrapper.findAll('.ui.centered.card').at(0);
    expect(firstCourse.find('img.image-card').attributes('src')).toBe('image1.jpg');
    expect(firstCourse.find('.header').text()).toBe('');
    expect(firstCourse.find('.meta').text()).toContain('Start Date: 2023-01-01');
    expect(firstCourse.find('.meta').text()).toContain('End Date: 2023-01-31');
  });

  it('matches the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
