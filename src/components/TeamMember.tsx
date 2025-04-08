import React from 'react';
import Image from 'next/image';

type TeamMemberProps = {
  name: string;
  position: string;
  description: string;
};

const TeamMember = ({ name, position, description }: TeamMemberProps) => {
  return (
    <div className="bg-card rounded-lg shadow-soft-md overflow-hidden card-hover border border-border">
      <div className="relative h-64 w-full group">
        <Image
          src="/images/team-placeholder.jpg"
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6 border-t border-border">
        <h3 className="text-xl font-bold mb-1 text-primary">{name}</h3>
        <p className="text-secondary font-medium mb-3">{position}</p>
        <p className="text-card-foreground/80">{description}</p>
      </div>
    </div>
  );
};

export default TeamMember;
