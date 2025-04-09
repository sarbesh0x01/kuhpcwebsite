import Image from 'next/image';
import { FiServer, FiUsers, FiActivity, FiGlobe } from 'react-icons/fi';
import { partnerInstitutions } from '@/lib/data';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-background to-background z-0"></div>
        <div className="absolute inset-0 tech-grid z-0 opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">About Our HPC Center</h1>
          <p className="text-xl max-w-3xl text-foreground/80">
            Discover the story behind Kathmandu University&apos;s High Performance Computing initiative
            and our mission to advance scientific research in Nepal.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="modern-card bg-card p-8 rounded-xl">
              <h2 className="text-3xl font-bold mb-6 gradient-text">Our Mission</h2>
              <p className="text-foreground/90 mb-4">
                The mission statement of Kathmandu University is &quot;to provide quality education for leadership.&quot; Our HPC center extends this mission by providing cutting-edge computing resources that enable advanced research and education in various scientific fields.
              </p>
              <p className="text-foreground/90">
                We aim to create a sustainable research environment that promotes both applied science and technology in the Nepalese context, as well as fundamental science with cost sharing among partner institutions.
              </p>
            </div>
            <div className="modern-card bg-card p-8 rounded-xl">
              <h2 className="text-3xl font-bold mb-6 gradient-text">Our Vision</h2>
              <p className="text-foreground/90 mb-4">
                The vision of Kathmandu University is &quot;to become a world-class university devoted to bringing knowledge and technology to the service of mankind.&quot; Our HPC center contributes to this vision by:
              </p>
              <ul className="space-y-3 text-foreground/90">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Providing advanced computing resources for research and education</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Training students and researchers in high-level software/hardware for scientific applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Attracting young talents by providing incentives to stay and serve the nation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Developing data awareness and high throughput computing culture</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CERN Partnership */}
      <section className="py-20 bg-muted relative overflow-hidden">
        <div className="tech-dots absolute inset-0 -z-0"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl font-bold text-center mb-8 gradient-text">Our Partnership with CERN</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            A significant collaboration that has transformed computing capabilities in Nepal
          </p>

          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-lg modern-card">
                <Image
                  src="/images/cern-donation.jpg"
                  alt="CERN Server Donation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <span className="text-white font-semibold block text-lg">CERN Director for Research and Computing, Eckhard Elsen with Ram Prasad Subedi</span>
                    <span className="text-white/70">CERN Server Donation Ceremony, 2018</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <p className="text-foreground/90 mb-6">
                The scientific collaboration between Kathmandu University and the European Organization for Nuclear Research (CERN) began in December 2013 with Masters Class in Particle Physics. This partnership has grown over the years, culminating in a significant donation of computing equipment in 2018.
              </p>
              <p className="text-foreground/90 mb-6">
                On June 28, 2018, CERN donated 200 servers to Kathmandu University, providing us with computing capacity equivalent to more than 2000 typical desktop computers. This generous contribution has been instrumental in establishing our high-performance computing facility.
              </p>
              <p className="text-foreground/90 mb-6">
                The government of Nepal and CERN signed an International Cooperation Agreement in 2017, formalizing the relationship between the two entities and paving the way for future collaborative efforts.
              </p>
              <div className="bg-card p-4 rounded-lg border border-border">
                <h4 className="font-semibold mb-2">Equipment Donated:</h4>
                <ul className="space-y-1 text-foreground/90">
                  <li className="flex items-center">
                    <span className="text-primary mr-2">•</span>
                    <span>184 CPU servers (2500+ processor cores, 8TB memory)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">•</span>
                    <span>16 disk servers (700+ TB storage)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">•</span>
                    <span>12 network switches and cables</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NUSI Initiative */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 gradient-text">Nepalese Unified Supercomputing Infrastructure</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Expanding high-performance computing resources across Nepal
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FiServer size={28} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Sustainable Research</h3>
              <p className="text-foreground/80 mb-4">
                Promoting applied science & technology in the Nepalese context and fundamental science with cost sharing among participating institutions.
              </p>
              <p className="text-foreground/80">
                NUSI provides a unified computing resource that significantly reduces operating costs, time to manage, and simplifies service delivery to researchers across Nepal.
              </p>
            </div>

            <div>
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FiUsers size={28} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Brain Gain</h3>
              <p className="text-foreground/80 mb-4">
                Attracting young talents and providing incentive for them to stay and serve the nation, rather than seeking computing resources abroad.
              </p>
              <p className="text-foreground/80">
                By creating local infrastructure for advanced computing, we enable Nepalese researchers to conduct world-class research without leaving the country.
              </p>
            </div>

            <div>
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FiActivity size={28} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Training & Education</h3>
              <p className="text-foreground/80 mb-4">
                Regular hands-on sessions on high-level software and hardware of top scientific applications as well as low-level programming, data analysis, and visualization.
              </p>
              <p className="text-foreground/80">
                Building capacity within Nepalese academic institutions to utilize and maintain advanced computing systems.
              </p>
            </div>

            <div>
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FiGlobe size={28} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Outreach</h3>
              <p className="text-foreground/80 mb-4">
                Developing a data awareness and high throughput computing culture throughout Nepal&apos;s academic and research institutions.
              </p>
              <p className="text-foreground/80">
                Creating networks of researchers who can collaborate on computationally intensive projects across different domains.
              </p>
            </div>
          </div>

          <div className="modern-card bg-card p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Partner Institutions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4">
              {partnerInstitutions.map((institution, index) => (
                <div key={index} className="flex items-center">
                  <span className="bg-primary w-2 h-2 rounded-full mr-3"></span>
                  <span className="text-foreground/90">{institution}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Academic Goals */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 gradient-text">10-Year Academic Goals</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Our vision for advancing research and education through high-performance computing
          </p>

          <div className="modern-card bg-card p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Per Member Academic Institution</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-muted p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">20</div>
                <div className="text-muted-foreground">PhD Awards</div>
              </div>
              <div className="bg-muted p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">40</div>
                <div className="text-muted-foreground">Masters Degrees</div>
              </div>
              <div className="bg-muted p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">200</div>
                <div className="text-muted-foreground">Research Publications</div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6">Human Resource Development</h3>
              <div className="bg-muted p-6 rounded-lg text-center">
                <div className="text-5xl font-bold gradient-text mb-3">5,000</div>
                <div className="text-xl text-muted-foreground">
                  Skilled professionals in data management and computing
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
