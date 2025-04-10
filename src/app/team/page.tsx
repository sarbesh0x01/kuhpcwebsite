"use client";

import Image from 'next/image';
import { teamMembers } from '@/lib/data';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';

export default function Team() {
  // Function to safely build links
  // Fix for the buildLink function
  const buildLink = (url: string, type: string) => {
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

  // Fix for the getImagePath function
  const getImagePath = (imagePath: string) => {
    if (!imagePath) return '/placeholder-profile.jpg';

    // Return the path since we're now using the public directory
    return imagePath;
  }; return (
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
                  <div className="relative h-[400px] w-full modern-card overflow-hidden">
                    <Image
                      src={getImagePath(supervisor.image)}
                      alt={supervisor.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-6">
                        <span className="text-white/70">{supervisor.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full max-w-md mx-auto">
                  <h2 className="text-3xl font-bold mb-2">{supervisor.name}</h2>
                  <p className="text-primary font-medium mb-4">{supervisor.position}</p>
                  <p className="text-foreground/90 mb-6">
                    {supervisor.description}
                  </p>
                  <div className="flex space-x-4">

                    {supervisor.linkedin && (
                      <a
                        href={buildLink(supervisor.linkedin, 'linkedin')}
                        className="bg-muted p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors cursor-pointer"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiLinkedin size={20} />
                      </a>
                    )}
                    {supervisor.github && (
                      <a
                        href={buildLink(supervisor.github, 'github')}
                        className="bg-muted p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors cursor-pointer"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiGithub size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Overseer Section */}
      <section className="py-20 relative">
        <div className="tech-dots absolute inset-0 -z-0"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl font-bold text-center mb-8 gradient-text">Technical Overseer</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Coordinating technical operations and implementation of our HPC resources
          </p>

          <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
            <div className="md:w-1/2">
              <div className="relative h-[400px] w-full modern-card overflow-hidden">
                <Image
                  src={getImagePath(teamMembers.overseer.image)}
                  alt={teamMembers.overseer.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <span className="text-white/70">{teamMembers.overseer.role}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-2">{teamMembers.overseer.name}</h2>
              <p className="text-primary font-medium mb-4">{teamMembers.overseer.position}</p>
              <p className="text-foreground/90 mb-6">
                {teamMembers.overseer.description}
              </p>
              <div className="flex space-x-4">
                {teamMembers.overseer.email && (
                  <a
                    href={buildLink(teamMembers.overseer.email, 'email')}
                    className="bg-muted p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiMail size={20} />
                  </a>
                )}
                {teamMembers.overseer.linkedin && (
                  <a
                    href={buildLink(teamMembers.overseer.linkedin, 'linkedin')}
                    className="bg-muted p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiLinkedin size={20} />
                  </a>
                )}
                {teamMembers.overseer.github && (
                  <a
                    href={buildLink(teamMembers.overseer.github, 'github')}
                    className="bg-muted p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiGithub size={20} />
                  </a>
                )}
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
                <div className="relative h-64 w-full">
                  <Image
                    src={getImagePath(member.image)}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.position}</p>
                  <p className="text-foreground/80 mb-6">{member.description}</p>

                  <div className="flex space-x-4 z-10 relative">
                    {member.github && (
                      <a
                        href={buildLink(member.github, 'github')}
                        className="bg-muted p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors cursor-pointer"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiGithub size={18} />
                      </a>
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
