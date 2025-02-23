import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => {
  return (
    <div className={`bg-white shadow-md rounded-lg p-4 ${className}`}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children }: CardProps) => (
  <div className="border-b pb-2 font-bold text-lg">{children}</div>
);

export const CardTitle = ({ children }: CardProps) => (
  <h2 className="text-xl font-semibold">{children}</h2>
);

export const CardContent = ({ children }: CardProps) => (
  <div className="mt-2">{children}</div>
);
