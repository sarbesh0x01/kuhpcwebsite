import React from 'react';

type StatCardProps = {
  label: string;
  value: string;
};

const StatCard = ({ label, value }: StatCardProps) => {
  return (
    <div className="modern-card bg-card p-6 rounded-xl shadow-lg">
      <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-2">{value}</h3>
      <p className="text-muted-foreground font-medium">{label}</p>
    </div>
  );
};

export default StatCard;
