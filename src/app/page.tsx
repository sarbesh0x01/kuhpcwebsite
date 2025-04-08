import Hero from '@/components/Hero';
import StatCard from '@/components/StatCard';
import AchievementCard from '@/components/AchievementCard';
import Timeline from '@/components/Timeline';
import { stats, achievements } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';
import { FiCpu, FiServer, FiDatabase } from 'react-icons/fi';

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Tech Background Elements */}
      <div className="fixed inset-0 tech-dots -z-10"></div>

      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="tech-grid absolute inset-0 -z-10"></div>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 gradient-text">Computing Power</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our high-performance computing facility provides cutting-edge resources for research and innovation
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {stats.map((stat) => (
              <StatCard key={stat.id} label={stat.label} value={stat.value} />
            ))}
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
                  src="/images/cern-donation.jpg"
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

      {/* CTA Section */}
      <section className="py-20 animated-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 glow-text">Advancing Science & Technology in Nepal</h2>
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
              className="btn btn-primary text-lg"
            >
              Meet Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
