"use client";

import Image from 'next/image';
import { teamMembers } from '@/lib/data';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';

// Define interface for team members
interface TeamMember {
  id: number | string;
  name: string;
  position: string;
  role: string;
  description: string;
  email?: string;
  linkedin?: string;
  github?: string;
  linked?: string;  // For handling typo in data
  website?: string; // For additional property in data
  image?: string;
}

export default function Team() {
  // Function to safely build links
  const buildLink = (url: string | undefined, type: string): string => {
    if (!url) return "#";

    if (type === 'email') {
      return `mailto:${url}`;
    } else if (type === 'github') {
      return url.startsWith('http') ? url : `https://github.com/${url}`;
    } else if (type === 'linkedin') {
      return url.startsWith('http') ? url : `https://linkedin.com/in/${url}`;
    } else {
      return url.startsWith('http') ? url : `https://${url}`;
    }
  };

  // Helper function to get initials from name
  const getInitials = (name: string): string => {
    return name
      .split(' ')
      .map(part => part.charAt(0))
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  // Function to render either an image or a letter avatar
  const renderImageOrName = (person: TeamMember, height = "h-[400px]") => {
    if (person.image) {
      return (
        <div className={`relative ${height} w-full modern-card overflow-hidden`}>
          <Image
            src={person.image}
            alt={person.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-6">
              <span className="text-white/70">{person.role}</span>
            </div>
          </div>
        </div>
      );
    } else {
      // Letter avatar with initials
      const initials = getInitials(person.name);

      return (
        <div className={`${height} w-full modern-card overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center relative`}>
          <div className="rounded-full bg-primary w-3/5 h-3/5 flex items-center justify-center shadow-lg">
            <div className="text-5xl font-bold text-white">
              {initials}
            </div>
          </div>
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/40 to-transparent p-6">
            <span className="text-white/90">{person.role}</span>
          </div>
        </div>
      );
    }
  };

  // Social link component
  const SocialLink = ({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) => (
    <a
      href={href}
      className="bg-muted p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors cursor-pointer"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {icon}
    </a>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-background to-background z-0"></div>
        <div className="absolute inset-0 tech-grid z-0 opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Our Team</h1>
          <p className="text-xl max-w-3xl text-foreground/80">
            Meet the dedicated professionals behind Kathmandu University&apos;s High Performance Computing initiative.
          </p>
        </div>
      </div>

      {/* Project Supervisors Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 gradient-text">Project Supervisors</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Leadership guiding our high-performance computing infrastructure development
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {teamMembers.supervisors.map((supervisor) => (
              <div key={supervisor.id} className="flex flex-col items-center md:items-start gap-12">
                <div className="w-full max-w-md mx-auto">
                  {renderImageOrName(supervisor)}
                </div>
                <div className="w-full max-w-md mx-auto">
                  <h2 className="text-3xl font-bold mb-2">{supervisor.name}</h2>
                  <p className="text-primary font-medium mb-4">{supervisor.position}</p>
                  <p className="text-foreground/90 mb-6">
                    {supervisor.description}
                  </p>
                  <div className="flex space-x-4">
                    {supervisor.email && (
                      <SocialLink
                        href={buildLink(supervisor.email, 'email')}
                        icon={<FiMail size={20} />}
                        label={`Email ${supervisor.name}`}
                      />
                    )}

                    {(supervisor.linkedin || supervisor.linkedin) && (
                      <SocialLink
                        href={buildLink(supervisor.linkedin || supervisor.linkedin, 'linkedin')}
                        icon={<FiLinkedin size={20} />}
                        label={`LinkedIn profile for ${supervisor.name}`}
                      />
                    )}
                    {supervisor.github && (
                      <SocialLink
                        href={buildLink(supervisor.github, 'github')}
                        icon={<FiGithub size={20} />}
                        label={`GitHub profile for ${supervisor.name}`}
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 relative">
        <div className="tech-dots absolute inset-0 -z-0"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl font-bold text-center mb-8 gradient-text">Technical Overseer</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Coordinating technical operations and implementation of our HPC resources
          </p>

          <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
            <div className="w-full md:w-1/2 max-w-md mx-auto">
              {/* Mobile-responsive image container with aspect ratio */}
              <div className="aspect-[3/4] w-full modern-card overflow-hidden relative">
                {teamMembers.overseer.image ? (
                  <>
                    <Image
                      src={teamMembers.overseer.image}
                      alt={teamMembers.overseer.name}
                      fill
                      sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 400px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-6">
                        <span className="text-white/70">{teamMembers.overseer.role}</span>
                      </div>
                    </div>
                  </>
                ) : (
                  // Letter avatar with initials
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center relative">
                    <div className="rounded-full bg-primary w-2/3 h-2/3 flex items-center justify-center shadow-lg">
                      <div className="text-5xl font-bold text-white">
                        {getInitials(teamMembers.overseer.name)}
                      </div>
                    </div>
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/40 to-transparent p-6">
                      <span className="text-white/90">{teamMembers.overseer.role}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="w-full md:w-1/2 max-w-lg mx-auto">
              <h2 className="text-3xl font-bold mb-2">{teamMembers.overseer.name}</h2>
              <p className="text-primary font-medium mb-4">{teamMembers.overseer.position}</p>
              <p className="text-foreground/90 mb-6">
                {teamMembers.overseer.description}
              </p>
              <div className="flex space-x-4">
                {/* Social links remain the same */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Team Members */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 gradient-text">Technical Team</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            The experts managing our high-performance computing infrastructure
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.members.map((member) => (
              <div key={member.id} className="modern-card bg-card overflow-hidden relative">
                {member.image ? (
                  <div className="relative h-64 w-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                ) : (
                  <div className="h-64 w-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center relative">
                    <div className="rounded-full bg-primary w-32 h-32 flex items-center justify-center shadow-lg">
                      <div className="text-3xl font-bold text-white">
                        {getInitials(member.name)}
                      </div>
                    </div>
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/40 to-transparent p-4">
                      <span className="text-white/90 text-sm">{member.role}</span>
                    </div>
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.position}</p>
                  <p className="text-foreground/80 mb-6">{member.description}</p>

                  <div className="flex space-x-4 z-10 relative">
                    {member.github && (
                      <SocialLink
                        href={buildLink(member.github, 'github')}
                        icon={<FiGithub size={18} />}
                        label={`GitHub profile for ${member.name}`}
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 animated-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 glow-text">Join Our Team</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90">
            We&apos;re always looking for talented individuals passionate about high-performance computing
            and advancing scientific research in Nepal.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Research Opportunities</h3>
              <p className="text-white/80">
                Join our research teams working on cutting-edge computational problems.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Technical Positions</h3>
              <p className="text-white/80">
                Help maintain and expand our high-performance computing infrastructure.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Academic Collaboration</h3>
              <p className="text-white/80">
                Partner with us on computational research and educational initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
