import React from 'react';

interface SystemBorderProps {
  children: React.ReactNode;
  className?: string;
}

export function SystemBorder({ children, className = '' }: SystemBorderProps) {
  return (
    <div className={`system-border ${className}`}>
      {children}
    </div>
  );
}