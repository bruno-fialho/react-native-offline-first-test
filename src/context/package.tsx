import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  ReactNode,
} from 'react';
import {database} from 'db';
import {PackageModel} from 'db/model/packageModel';
import {PackageDBProps} from 'types/packages';

interface PackageProviderProps {
  children: ReactNode;
}

type IntervalType = 10 | 5 | 3 | 1;

interface PackageContextData {
  packages: PackageDBProps[];
  isOnline: boolean;
  interval: IntervalType;
  updatePackages(): Promise<void>;
  toggleIsOnline(): void;
  updateInterval(value: IntervalType): void;
}

const PackageContext = createContext<PackageContextData>(
  {} as PackageContextData,
);

const PackageProvider = ({children}: PackageProviderProps) => {
  const [packages, setPackages] = useState<PackageDBProps[]>([]);
  const [isOnline, setIsOnline] = useState(false);
  const [interval, setInterval] = useState<IntervalType>(10); // seconds

  const updatePackages = useCallback(async () => {
    const response = await database
      .get<PackageModel>('packages')
      .query()
      .fetch();

    const formatedPackages: PackageDBProps[] = response.map(item => {
      return {
        id: item.id,
        status: item.status,
        latitude: item.latitude,
        longitude: item.longitude,
        speed: item.speed,
        time: item.time,
      };
    });

    if (formatedPackages && formatedPackages.length > 0) {
      setPackages(formatedPackages);
    }
  }, []);

  const updateInterval = useCallback((value: IntervalType) => {
    setInterval(value);
  }, []);

  const toggleIsOnline = useCallback(() => {
    setIsOnline(!isOnline);
  }, [isOnline]);

  return (
    <PackageContext.Provider
      value={{
        packages,
        isOnline,
        interval,
        updatePackages,
        toggleIsOnline,
        updateInterval,
      }}>
      {children}
    </PackageContext.Provider>
  );
};

function usePackage(): PackageContextData {
  const context = useContext(PackageContext);

  if (!context) {
    throw new Error('usePackage must be used within an PackageProvider');
  }

  return context;
}

export {PackageProvider, usePackage};
