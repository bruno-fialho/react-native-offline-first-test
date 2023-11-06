import {tableSchema} from '@nozbe/watermelondb';

export const packagesSchema = tableSchema({
  name: 'packages',
  columns: [
    {
      name: 'status',
      type: 'string',
    },
    {
      name: 'latitude',
      type: 'number',
    },
    {
      name: 'longitude',
      type: 'number',
    },
    {
      name: 'speed',
      type: 'number',
    },
    {
      name: 'time',
      type: 'string',
    },
  ],
});
