import React from 'react';
import {Svg, Circle, Polygon} from 'react-native-svg';

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
}

export function CompassIcon({width, height, color}: IconProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round">
      <Circle cx="12" cy="12" r="10" />
      <Polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </Svg>
  );
}
