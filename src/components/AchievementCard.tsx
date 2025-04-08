import React from 'react';
import { FiServer, FiActivity, FiDatabase, FiGlobe } from 'react-icons/fi';

type AchievementCardProps = {
  title: string;
  description: string;
  icon: string;
};

const AchievementCard = ({ title, description, icon }: AchievementCardProps) => {
  const getIcon = () => {
    switch (icon) {
      case 'server':
        return <FiServer size={28} className="text-primary" />;
      case 'medical':
        return <FiActivity size={28} className="text-primary" />;
      case 'research':
        return <FiDatabase size={28} className="text-primary" />;
      case 'network':
        return <FiGlobe size={28} className="text-primary" />;
      default:
        return <FiServer size={28} className="text-primary" />;
    }
  };

  return (
    <div className="modern-card bg-card p-8 rounded-xl">
      <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
        {getIcon()}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-card-foreground/80">{description}</p>
    </div>
  );
};

export default AchievementCard;
