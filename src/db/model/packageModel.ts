import {Model} from '@nozbe/watermelondb';
import {field} from '@nozbe/watermelondb/decorators';
import {PackageStatus} from 'types/packages';

export class PackageModel extends Model {
  static table = 'packages';

  @field('status')
  status!: PackageStatus;

  @field('latitude')
  latitude!: number;

  @field('longitude')
  longitude!: number;

  @field('speed')
  speed!: number;

  @field('time')
  time!: string;
}
