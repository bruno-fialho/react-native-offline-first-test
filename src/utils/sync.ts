import {PackageDBProps, PackageStatus} from 'types/packages';
import api from 'services/api';
import {database} from 'db';
import {PackageModel} from 'db/model/packageModel';

interface SyncProps {
  packages: PackageDBProps[];
}

function sync({packages}: SyncProps): boolean | any {
  packages.map(async item => {
    if (item.status === PackageStatus.PENDING) {
      await api.post(`/${item.id}`, {
        latitude: item.latitude,
        longitude: item.longitude,
        speed: item.speed,
        time: item.time,
      });

      await database.write(async () => {
        const pkg = await database.get<PackageModel>('packages').find(item.id);
        await pkg.update(() => {
          pkg.status = PackageStatus.COMPLETED;
        });
      });
      setTimeout(() => {}, 500);
    }
  });
}

export {sync};
