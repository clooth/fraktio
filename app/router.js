import { createRouter } from '@exponent/ex-navigation';

import BlogScreen from 'containers/BlogScreen';
import BlogPostFull from 'components/BlogPostFull';
import PeopleScreen from 'containers/PeopleScreen';

export default createRouter(() => ({
  blog: () => BlogScreen,
  people: () => PeopleScreen,
  blogPostFull: () => BlogPostFull,
}));
