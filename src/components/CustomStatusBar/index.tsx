import React from 'react';

import {Wrapper} from './styles';

export interface CustomStatusBarProps {
  height: number;
}

export function CustomStatusBar({height}: CustomStatusBarProps) {
  return <Wrapper height={height} />;
}
