export enum PackageStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
}

export interface PackageAPIProps {
  id: string;
  latitude: number;
  longitude: number;
  speed: number;
  time: string;
}

export interface PackageDBProps extends PackageAPIProps {
  status: PackageStatus;
}

export interface IntervalProps {
  isActiveInterval: boolean;
}

export interface OnlineProps {
  isOnline: boolean;
}

export interface LocationProps {
  latitude: number;
  longitude: number;
  speed: number;
}
