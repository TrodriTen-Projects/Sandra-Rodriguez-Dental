import React from 'react';

interface SectionTitleProps {
  header: 'h1' | 'h2' | 'h3';
  uppercase?: boolean;
  className?: string;
  children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  header,
  uppercase = false,
  className = '',
  children,
}) => {
  // Default: h1 is uppercase, h2 is not
  const isUppercase =
    typeof uppercase === 'boolean'
      ? uppercase
      : header === 'h1'
      ? true
      : false;

  const Tag = header;
  const baseStyles =
    header === 'h1'
      ? 'text-4xl md:text-5xl font-bold mb-4'
      : header === 'h2'
      ? 'text-4xl mb-4'
      : 'text-4xl mb-4';
  const transform = isUppercase ? 'uppercase' : 'normal-case';

  return (
    <Tag className={`${baseStyles} ${transform} ${className}`.trim()}>
      {children}
    </Tag>
  );
};

export default SectionTitle; 