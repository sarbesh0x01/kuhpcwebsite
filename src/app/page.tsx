import Hero from '@/components/Hero';
import AchievementCard from '@/components/AchievementCard';
import Timeline from '@/components/Timeline';
import { achievements } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';
import {
  FiCpu, FiServer, FiDatabase, FiThermometer, FiWifi,
  FiMonitor, FiHardDrive, FiUsers
} from 'react-icons/fi';

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
              <div className="mt-4 text-center">
                <FiServer size={40} className="mx-auto text-primary/60" />
              </div>
            </div>

            <div className="modern-card bg-card p-6 rounded-xl text-center">
              <h3 className="text-3xl font-bold gradient-text mb-2">16</h3>
              <p className="text-muted-foreground">Disk Servers</p>
              <div className="mt-4 bg-muted/50 h-1 w-full rounded-full">
                <div className="bg-primary h-1 rounded-full" style={{ width: '8%' }}></div>
              </div>
              <p className="text-xs mt-1 text-muted-foreground">8% of total servers</p>
              <div className="mt-4 text-center">
                <FiHardDrive size={40} className="mx-auto text-primary/60" />
              </div>
            </div>

            <div className="modern-card bg-card p-6 rounded-xl text-center">
              <h3 className="text-3xl font-bold gradient-text mb-2">2500+</h3>
              <p className="text-muted-foreground">Processor Cores</p>
              <div className="mt-4 text-center">
                <FiCpu size={40} className="mx-auto text-primary/60" />
              </div>
            </div>

            <div className="modern-card bg-card p-6 rounded-xl text-center">
              <h3 className="text-3xl font-bold gradient-text mb-2">8 TB</h3>
              <p className="text-muted-foreground">Memory</p>
              <div className="mt-4 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto text-primary/60" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 19v-3"></path>
                  <path d="M10 19v-3"></path>
                  <path d="M14 19v-3"></path>
                  <path d="M18 19v-3"></path>
                  <rect x="4" y="4" width="16" height="12" rx="2"></rect>
                </svg>
              </div>
            </div>

            <div className="modern-card bg-card p-6 rounded-xl text-center">
              <h3 className="text-3xl font-bold gradient-text mb-2">700+ TB</h3>
              <p className="text-muted-foreground">Storage</p>
              <div className="mt-4 text-center">
                <FiDatabase size={40} className="mx-auto text-primary/60" />
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
                  src="/CernPartner.jpg"
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
                In June 2018, CERN donated 200 servers to Kathmandu University, marking a significant milestone in our journey to establish a high-performance computing facility in Nepal. This equipment, while no longer meeting CERN&apos;s highly specific requirements, has provided KU with computing capacity equivalent to more than 2000 typical desktop computers.
              </p>
              <p className="text-foreground/90 mb-8">
                The donation included 184 CPU servers and 16 disk servers, in addition to 12 network switches. The CPU servers&apos; capacity represents more than 2500 processor cores and 8 TB of memory, while the disk servers provide more than 700 TB of storage.
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
              <div className="bg-muted h-48 w-full rounded-lg overflow-hidden mt-6 flex items-center justify-center">
                <div className="grid grid-cols-5 gap-1 p-4 w-full">
                  {[...Array(25)].map((_, i) => (
                    <div
                      key={i}
                      className="aspect-square bg-primary/20 rounded-sm flex items-center justify-center"
                    >
                      <FiCpu size={16} className="text-primary/60" />
                    </div>
                  ))}
                </div>
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
              <div className="bg-muted h-48 w-full rounded-lg overflow-hidden mt-6 flex items-center justify-center">
                <div className="grid grid-cols-4 gap-2 p-4 w-full">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="h-8 bg-primary/20 rounded-sm flex items-center justify-center"
                    >
                      <FiServer size={16} className="text-primary/60" />
                    </div>
                  ))}
                </div>
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
              <div className="bg-muted h-48 w-full rounded-lg overflow-hidden mt-6 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-3 p-4 w-full">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className="aspect-square bg-primary/20 rounded-sm flex flex-col items-center justify-center p-2"
                    >
                      <FiHardDrive size={16} className="text-primary/60 mb-1" />
                      <span className="text-xs text-primary/80">{70 + i * 10} TB</span>
                    </div>
                  ))}
                </div>
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

      {/* Facility Overview */}
      <section className="py-20 bg-muted relative">
        <div className="tech-dots absolute inset-0 -z-0"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl font-bold text-center mb-4 gradient-text">Our Facility</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Key components of our high-performance computing infrastructure
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Main Server Room */}
            <div className="modern-card bg-card p-8 rounded-xl">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FiServer size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Main Server Room</h3>
              <p className="text-muted-foreground mb-4">
                Our main facility houses the primary computing clusters with specialized racks designed for high-density computing. The environment is carefully controlled to ensure optimal performance.
              </p>
              <div className="grid grid-cols-4 gap-1">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="h-16 bg-muted rounded flex items-center justify-center">
                    <FiServer size={20} className="text-primary/70" />
                  </div>
                ))}
              </div>
            </div>

            {/* Cooling Systems */}
            <div className="modern-card bg-card p-8 rounded-xl">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FiThermometer size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Cooling Systems</h3>
              <p className="text-muted-foreground mb-4">
                Advanced cooling infrastructure ensures all computing equipment operates at optimal temperatures, with redundant systems to prevent overheating and maintain energy efficiency.
              </p>
              <div className="flex justify-around p-4 bg-muted rounded-lg">
                <div className="text-center">
                  <div className="mb-2 bg-blue-100 text-blue-700 p-2 rounded-full">
                    <FiThermometer size={24} />
                  </div>
                  <span className="text-sm">18°C</span>
                </div>
                <div className="text-center">
                  <div className="mb-2 bg-blue-100 text-blue-700 p-2 rounded-full">
                    <FiThermometer size={24} />
                  </div>
                  <span className="text-sm">20°C</span>
                </div>
                <div className="text-center">
                  <div className="mb-2 bg-blue-100 text-blue-700 p-2 rounded-full">
                    <FiThermometer size={24} />
                  </div>
                  <span className="text-sm">19°C</span>
                </div>
              </div>
            </div>

            {/* Network Hub */}
            <div className="modern-card bg-card p-8 rounded-xl">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FiWifi size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Network Hub</h3>
              <p className="text-muted-foreground mb-4">
                High-speed networking equipment provides reliable connectivity for data transfer and cluster communication, with redundant pathways to ensure continuous operation.
              </p>
              <div className="flex items-center justify-center p-4 bg-muted rounded-lg h-24">
                <div className="flex items-center space-x-2">
                  <div className="h-16 w-4 bg-primary/20 rounded"></div>
                  <div className="grid grid-cols-3 grid-rows-3 gap-1">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="w-3 h-3 bg-primary/40 rounded-full"></div>
                    ))}
                  </div>
                  <div className="h-16 w-4 bg-primary/20 rounded"></div>
                </div>
              </div>
            </div>

            {/* Control Center */}
            <div className="modern-card bg-card p-8 rounded-xl">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FiMonitor size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Control Center</h3>
              <p className="text-muted-foreground mb-4">
                Our monitoring and management systems provide real-time insights into cluster performance, allowing for proactive maintenance and resource optimization.
              </p>
              <div className="bg-muted p-3 rounded-lg">
                <div className="h-4 w-full bg-gray-700 rounded mb-2"></div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-12 bg-gray-800 rounded p-1">
                    <div className="h-2 w-3/4 bg-green-500 rounded-full mb-1"></div>
                    <div className="h-2 w-1/2 bg-blue-500 rounded-full mb-1"></div>
                    <div className="h-2 w-5/6 bg-purple-500 rounded-full"></div>
                  </div>
                  <div className="h-12 bg-gray-800 rounded p-1">
                    <div className="h-2 w-2/3 bg-yellow-500 rounded-full mb-1"></div>
                    <div className="h-2 w-4/5 bg-red-500 rounded-full mb-1"></div>
                    <div className="h-2 w-1/3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Storage Systems */}
            <div className="modern-card bg-card p-8 rounded-xl">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FiHardDrive size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Storage Systems</h3>
              <p className="text-muted-foreground mb-4">
                Mass data storage infrastructure provides researchers with reliable access to large datasets, with specialized hardware for high-speed I/O and data redundancy.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-16 bg-muted rounded flex items-center justify-center">
                    <div className="text-xs text-center">
                      <FiHardDrive size={20} className="mx-auto mb-1 text-primary/70" />
                      <span>{175 * (i + 1)} TB</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Research Teams */}
            <div className="modern-card bg-card p-8 rounded-xl">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FiUsers size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Research Teams</h3>
              <p className="text-muted-foreground mb-4">
                Scientists from across the university leverage our computational power for research in fields ranging from medical imaging and climate science to particle physics and engineering.
              </p>
              <div className="flex justify-center space-x-4 bg-muted p-4 rounded-lg">
                <div className="text-center">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-1">
                    <span className="text-blue-700 font-bold">P</span>
                  </div>
                  <span className="text-xs">Physics</span>
                </div>
                <div className="text-center">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-1">
                    <span className="text-green-700 font-bold">M</span>
                  </div>
                  <span className="text-xs">Medicine</span>
                </div>
                <div className="text-center">
                  <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-1">
                    <span className="text-purple-700 font-bold">E</span>
                  </div>
                  <span className="text-xs">Engineering</span>
                </div>
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

      {/* CTA Section */}
      <section className="py-20 bg-primary/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Advancing Science & Technology in Nepal</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto text-white/90">
            Our high-performance computing resources accelerate research and innovation across diverse scientific fields, from medicine to fundamental physics.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/about"
              className="btn btn-secondary text-lg"
            >
              Learn More
            </Link>
            <Link
              href="/team"
              className="btn btn-primary text-lg bg-white text-primary"
            >
              Meet Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
