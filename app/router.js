import { createRouter } from '@exponent/ex-navigation';

import PresentationsScreen from 'containers/PresentationsScreen';
import BlogScreen from 'containers/BlogScreen';
import PeopleScreen from 'containers/PeopleScreen';

export default createRouter(() => ({
  presentations: () => PresentationsScreen,
  blog: () => BlogScreen,
  people: () => PeopleScreen,
}));
