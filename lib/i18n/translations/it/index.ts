import common from './common.json';
import pages from './pages.json';
import services from './services.json';
import destinations from './destinations.json';
import blogs from './blogs.json';
import luxury from './luxury.json';
import trips from './trips.json';
import tourData from './tourData.json';

export const it = {
  ...common,
  ...pages,
  ...services,
  ...destinations,
  ...blogs,
  ...luxury,
  ...trips,
  ...tourData,
} as const;
