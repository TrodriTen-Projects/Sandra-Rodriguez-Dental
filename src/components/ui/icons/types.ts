/**
 * Base props for all icon components
 */
export interface IconProps {
  className?: string;
  size?: number;
  color?: string;
  'aria-label'?: string;
}

export const defaultIconProps: Partial<IconProps> = {
  size: 24,
  color: 'currentColor',
};
