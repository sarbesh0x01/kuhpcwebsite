import Hero from '@/components/Hero';
import StatCard from '@/components/StatCard';
import AchievementCard from '@/components/AchievementCard';
import Timeline from '@/components/Timeline';
import { stats, achievements } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';
import { FiCpu, FiServer, FiDatabase } from 'react-icons/fi';
import cernPartnerImage from '../../assets/CernPartner.jpg';

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Tech Background Elements */}
      <div className="fixed inset-0 tech-dots -z-10"></div>

      {/* Hero Section */}
      <Hero />

      {/* CERN-Donated Infrastructure Stats */}
      <section className="py-20 relative overflow-hidden">
        <div className="tech-grid absolute inset-0 -z-10"></div>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 gradient-text">CERN-Donated Infrastructure</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Precise specifications of our high-performance computing resources donated by CERN in 2018
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="modern-card bg-card p-6 rounded-xl text-center">
              <h3 className="text-3xl font-bold gradient-text mb-2">184</h3>
              <p className="text-muted-foreground">CPU Servers</p>
              <div className="mt-4 bg-muted/50 h-1 w-full rounded-full">
                <div className="bg-primary h-1 rounded-full" style={{ width: '92%' }}></div>
              </div>
              <p className="text-xs mt-1 text-muted-foreground">92% of total servers</p>
            </div>

            <div className="modern-card bg-card p-6 rounded-xl text-center">
              <h3 className="text-3xl font-bold gradient-text mb-2">16</h3>
              <p className="text-muted-foreground">Disk Servers</p>
              <div className="mt-4 bg-muted/50 h-1 w-full rounded-full">
                <div className="bg-primary h-1 rounded-full" style={{ width: '8%' }}></div>
              </div>
              <p className="text-xs mt-1 text-muted-foreground">8% of total servers</p>
            </div>

            <div className="modern-card bg-card p-6 rounded-xl text-center">
              <h3 className="text-3xl font-bold gradient-text mb-2">2500+</h3>
              <p className="text-muted-foreground">Processor Cores</p>
              <div className="relative h-12 w-12 mx-auto mt-2">
                <Image
                  src="/images/processor-icon.png"
                  alt="Processor Cores"
                  fill
                  className="object-contain opacity-70"
                />
              </div>
            </div>

            <div className="modern-card bg-card p-6 rounded-xl text-center">
              <h3 className="text-3xl font-bold gradient-text mb-2">8 TB</h3>
              <p className="text-muted-foreground">Memory</p>
              <div className="relative h-12 w-12 mx-auto mt-2">
                <Image
                  src="/images/memory-icon.png"
                  alt="Memory"
                  fill
                  className="object-contain opacity-70"
                />
              </div>
            </div>

            <div className="modern-card bg-card p-6 rounded-xl text-center">
              <h3 className="text-3xl font-bold gradient-text mb-2">700+ TB</h3>
              <p className="text-muted-foreground">Storage</p>
              <div className="relative h-12 w-12 mx-auto mt-2">
                <Image
                  src="/images/storage-icon.png"
                  alt="Storage"
                  fill
                  className="object-contain opacity-70"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 bg-card p-4 rounded-lg border border-border">
            <p className="text-center text-sm text-muted-foreground">
              <span className="font-semibold">Note:</span> These specifications are verified from the official CERN donation documentation from June 28, 2018.
              The computing capacity is equivalent to more than 2000 typical desktop computers.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-lg modern-card border border-border">
                <Image
                  src={cernPartnerImage}
                  alt="CERN Server Donation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <span className="text-white font-semibold p-6">CERN Server Donation Ceremony, 2018</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 gradient-text">CERN Partnership</h2>
              <p className="text-foreground/90 mb-4">
                In June 2018, CERN donated 200 servers to Kathmandu University, marking a significant milestone in our journey to establish a high-performance computing facility in Nepal. This equipment, while no longer meeting CERN's highly specific requirements, has provided KU with computing capacity equivalent to more than 2000 typical desktop computers.
              </p>
              <p className="text-foreground/90 mb-8">
                The donation included 184 CPU servers and 16 disk servers, in addition to 12 network switches. The CPU servers' capacity represents more than 2500 processor cores and 8 TB of memory, while the disk servers provide more than 700 TB of storage.
              </p>
              <Link
                href="/about"
                className="btn btn-primary"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="tech-dots absolute inset-0 -z-10"></div>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 gradient-text">Our Achievements</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Advancing research capabilities and technological innovation in Nepal
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement) => (
              <AchievementCard
                key={achievement.id}
                title={achievement.title}
                description={achievement.description}
                icon={achievement.icon}
              />
            ))}
          </div>
          <div className="text-center mt-16">
            <Link
              href="/achievements"
              className="btn btn-primary"
            >
              View All Achievements
            </Link>
          </div>
        </div>
      </section>

      {/* Hardware Features */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 gradient-text">HPC Infrastructure</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            State-of-the-art hardware powering advanced computational research
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="modern-card bg-card p-8 rounded-xl">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FiCpu size={28} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Processor Cores</h3>
              <p className="text-muted-foreground mb-4">
                Over 2500 processor cores providing massive parallel computing power for complex simulations and data analysis.
              </p>
              <div className="relative h-48 w-full rounded-lg overflow-hidden mt-6">
                <Image
                  src="/images/server-processors.jpg"
                  alt="Server Processors"
                  fill
                  className="object-cover"
                />
              </div>
              <ul className="space-y-2 mt-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>High-performance CPU clusters</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Optimized for scientific computing</span>
                </li>
              </ul>
            </div>

            <div className="modern-card bg-card p-8 rounded-xl">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FiServer size={28} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Server Infrastructure</h3>
              <p className="text-muted-foreground mb-4">
                200 servers including 184 CPU servers and 16 dedicated disk servers, forming a robust computing environment.
              </p>
              <div className="relative h-48 w-full rounded-lg overflow-hidden mt-6">
                <Image
                  src="/images/server-racks.jpg"
                  alt="Server Racks"
                  fill
                  className="object-cover"
                />
              </div>
              <ul className="space-y-2 mt-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Research-grade hardware</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Enterprise-level reliability</span>
                </li>
              </ul>
            </div>

            <div className="modern-card bg-card p-8 rounded-xl">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FiDatabase size={28} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Storage Capacity</h3>
              <p className="text-muted-foreground mb-4">
                Over 700 TB of storage enabling large dataset retention for research projects and medical imaging data.
              </p>
              <div className="relative h-48 w-full rounded-lg overflow-hidden mt-6">
                <Image
                  src="/images/storage-arrays.jpg"
                  alt="Storage Arrays"
                  fill
                  className="object-cover"
                />
              </div>
              <ul className="space-y-2 mt-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>High-capacity data storage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Fast I/O performance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <Timeline />

      {/* Facility Gallery */}
      <section className="py-20 bg-muted relative">
        <div className="tech-dots absolute inset-0 -z-0"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl font-bold text-center mb-4 gradient-text">Our Facility</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            A visual tour of our high-performance computing infrastructure
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="md:col-span-2 lg:col-span-2 modern-card rounded-xl overflow-hidden relative group h-80">
              <Image
                src="/images/facility-main.jpg"
                alt="HPC Facility Main Server Room"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-white text-xl font-bold">Main Server Room</h3>
                <p className="text-white/80">Housing our primary computing clusters</p>
              </div>
            </div>

            <div className="modern-card rounded-xl overflow-hidden relative group h-80">
              <Image
                src="/images/facility-cooling.jpg"
                alt="Cooling Infrastructure"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-white text-lg font-bold">Cooling Systems</h3>
                <p className="text-white/80">Temperature control infrastructure</p>
              </div>
            </div>

            <div className="modern-card rounded-xl overflow-hidden relative group h-80">
              <Image
                src="/images/facility-network.jpg"
                alt="Network Infrastructure"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-white text-lg font-bold">Network Hub</h3>
                <p className="text-white/80">High-speed connectivity backbone</p>
              </div>
            </div>

            <div className="modern-card rounded-xl overflow-hidden relative group h-80">
              <Image
                src="/images/facility-control.jpg"
                alt="Control Room"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-white text-lg font-bold">Control Center</h3>
                <p className="text-white/80">Monitoring and management systems</p>
              </div>
            </div>

            <div className="modern-card rounded-xl overflow-hidden relative group h-80">
              <Image
                src="/images/facility-storage.jpg"
                alt="Storage Systems"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-white text-lg font-bold">Storage Systems</h3>
                <p className="text-white/80">Mass data storage infrastructure</p>
              </div>
            </div>

            <div className="md:col-span-2 lg:col-span-2 modern-card rounded-xl overflow-hidden relative group h-80">
              <Image
                src="/images/facility-researchers.jpg"
                alt="Researchers Working"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-white text-xl font-bold">Research Teams</h3>
                <p className="text-white/80">Scientists leveraging our computational power</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NUSI Specific Section - New section with accurate partnership information */}
      <section className="py-20 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 gradient-text">Nepalese Unified Supercomputing Infrastructure</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A nationwide initiative led by Kathmandu University to provide shared computing resources across Nepal
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5">
              <div className="modern-card bg-card p-8 rounded-xl h-full">
                <h3 className="text-2xl font-bold mb-6">Partner Institutions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                    <span>Tribhuvan University</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                    <span>Pokhara University</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                    <span>Purwanchal University</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                    <span>Mid-Western University</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                    <span>Rajarshi Janak University</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                    <span>Far Western University</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                    <span>Nepal Open University</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                    <span>Agriculture and Forestry</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Government Partners</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-secondary mr-2"></div>
                    <span>Nepal Academy of Science and Technology</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-secondary mr-2"></div>
                    <span>Department of Mines and Geology</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-secondary mr-2"></div>
                    <span>Department of Hydrology and Meteorology</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-secondary mr-2"></div>
                    <span>National Disaster Risk Reduction & Management Authority</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="modern-card bg-card p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold mb-6">10-Year Academic Goals</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-muted p-6 rounded-lg text-center">
                    <div className="text-4xl font-bold text-primary mb-2">20</div>
                    <div className="text-muted-foreground">PhD Awards per Institution</div>
                  </div>
                  <div className="bg-muted p-6 rounded-lg text-center">
                    <div className="text-4xl font-bold text-primary mb-2">40</div>
                    <div className="text-muted-foreground">Masters Degrees per Institution</div>
                  </div>
                  <div className="bg-muted p-6 rounded-lg text-center">
                    <div className="text-4xl font-bold text-primary mb-2">200</div>
                    <div className="text-muted-foreground">Publications per Institution</div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-muted rounded-lg text-center">
                  <div className="text-5xl font-bold gradient-text mb-4">5,000</div>
                  <div className="text-xl">Skilled Human Resources in Data Management and Computing</div>
                </div>
              </div>

              <div className="modern-card bg-card p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Management Structure</h3>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <div className="font-semibold mb-2 text-primary">NUSI Advisory Committee</div>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Chair: Vice Chancellor of Kathmandu University</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Members: Representatives from each institution</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold mb-2 text-primary">NUSI Technical Committee</div>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Chair: Coordinator of Supercomputer Center, KU</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Members: Technical representatives from member institutions</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
