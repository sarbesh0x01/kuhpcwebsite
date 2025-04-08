import Image from 'next/image';
import { teamMembers } from '@/lib/data';
import { FiMail, FiLink, FiLinkedin, FiGithub } from 'react-icons/fi';

export default function Team() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-background to-background z-0"></div>
        <div className="absolute inset-0 tech-grid z-0 opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Our Team</h1>
          <p className="text-xl max-w-3xl text-foreground/80">
            Meet the dedicated professionals behind Kathmandu University's High Performance Computing initiative.
          </p>
        </div>
      </div>

      {/* Featured Team Member */}
      <section className="py-20 relative">
        <div className="tech-dots absolute inset-0 -z-0"></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative h-[400px] w-full modern-card overflow-hidden">
                <Image
                  src="/images/team-placeholder.jpg"
                  alt="Rajendra Adhikari"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <span className="text-white/70">Project Leader</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-2">Rajendra Adhikari</h2>
              <p className="text-primary font-medium mb-4">Assistant Professor, Department of Physics</p>
              <p className="text-foreground/90 mb-6">
                Leading the HPC initiative at Kathmandu University and coordinator of the Supercomputer Center.
                Dr. Adhikari has been instrumental in establishing the partnership with CERN and developing the
                high-performance computing infrastructure at Kathmandu University.
              </p>
              <p className="text-foreground/90 mb-6">
                His vision and leadership have been key to the success of the HPC center, and he continues to
                drive innovation and research excellence through computational resources.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-muted p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors">
                  <FiMail size={20} />
                </a>
                <a href="#" className="bg-muted p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors">
                  <FiLinkedin size={20} />
                </a>
                <a href="#" className="bg-muted p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors">
                  <FiLink size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 gradient-text">Core Team</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            The experts behind our high-performance computing infrastructure
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.slice(1).map((member) => (
              <div key={member.id} className="modern-card bg-card overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src="/images/team-placeholder.jpg"
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
                  <div className="flex space-x-3">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <FiMail size={18} />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <FiLinkedin size={18} />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <FiGithub size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Administrative Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 gradient-text">Advisory Committee</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Leadership guiding our high-performance computing initiatives
          </p>

          <div className="modern-card bg-card p-8 rounded-xl max-w-4xl mx-auto">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Committee Structure</h3>
              <div className="bg-muted p-6 rounded-lg mb-4">
                <div className="font-semibold mb-2">Chair:</div>
                <p>Vice Chancellor of Kathmandu University</p>
              </div>
              <div className="bg-muted p-6 rounded-lg">
                <div className="font-semibold mb-2">Members:</div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Representatives appointed by each member institution</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Head of member institutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Internationally renowned experts in supercomputing</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Technical Committee</h3>
              <div className="bg-muted p-6 rounded-lg">
                <div className="font-semibold mb-2">Chair:</div>
                <p>Coordinator of Supercomputer Center, Kathmandu University</p>
                <div className="font-semibold mt-4 mb-2">Members:</div>
                <p>Technical representatives appointed by member institutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 animated-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 glow-text">Join Our Team</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90">
            We're always looking for talented individuals passionate about high-performance computing
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
