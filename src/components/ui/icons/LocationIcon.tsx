import React from 'react';
import { IconProps, defaultIconProps } from './types';

export const LocationIcon: React.FC<IconProps> = ({
  className = '',
  size = defaultIconProps.size,
  color = defaultIconProps.color,
  'aria-label': ariaLabel = 'Location',
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    width={size}
    height={size}
    className={className}
    fill={color}
    aria-label={ariaLabel}
    role="img"
  >
    <path
      fillRule="evenodd"
      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
      clipRule="evenodd"
    />
  </svg>
);
