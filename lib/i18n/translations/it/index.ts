import { common } from './common';
import { pages } from './pages';
import { services } from './services';
import { destinations } from './destinations';
import { blogs } from './blogs';
import { luxury } from './luxury';
import { trips } from './trips';
import { tourData } from './tourData';

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
