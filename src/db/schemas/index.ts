import {appSchema} from '@nozbe/watermelondb';

import {packagesSchema} from './packagesSchema';

export const schemas = appSchema({
  version: 1,
  tables: [packagesSchema],
});
