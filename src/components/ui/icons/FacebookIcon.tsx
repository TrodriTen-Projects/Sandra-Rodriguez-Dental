import React from 'react';
import { IconProps, defaultIconProps } from './types';

export const FacebookIcon: React.FC<IconProps> = ({
  className = '',
  size = defaultIconProps.size,
  color = defaultIconProps.color,
  'aria-label': ariaLabel = 'Facebook',
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill={color}
    aria-label={ariaLabel}
    role="img"
  >
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
  </svg>
);
