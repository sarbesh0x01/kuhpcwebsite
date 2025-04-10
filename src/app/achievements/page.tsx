import Image from 'next/image';
import { achievements, stats } from '@/lib/data';
import { FiCheck, FiTrendingUp, FiAward, FiUsers } from 'react-icons/fi';

export default function Achievements() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-background to-background z-0"></div>
        <div className="absolute inset-0 tech-grid z-0 opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Our Achievements</h1>
          <p className="text-xl max-w-3xl text-foreground/80">
            Exploring the impact of high-performance computing on research and education at Kathmandu University.
          </p>
        </div>
      </div>

      {/* Computing Power */}
      <section className="py-20 relative">
        <div className="tech-dots absolute inset-0 -z-0"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl font-bold text-center mb-8 gradient-text">Computing Power</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Our high-performance computing facility provides researchers with powerful computational resources
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            {stats.map((stat) => (
              <div key={stat.id} className="modern-card bg-card p-6 rounded-xl text-center">
                <h3 className="text-3xl font-bold gradient-text mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="modern-card bg-card p-8 rounded-xl mt-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/comp.jpg"
                    alt="HPC Facility"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4">CERN-Grade Infrastructure</h3>
                <p className="text-foreground/90 mb-4">
                  Our high-performance computing facility has computing capacity equivalent to more than 2000 typical desktop computers,
                  providing researchers and students with the resources they need for data-intensive projects.
                </p>
                <p className="text-foreground/90">
                  The equipment, donated by CERN in 2018, includes 184 CPU servers with more than 2500 processor cores and 8 TB of memory,
                  as well as 16 disk servers providing more than 700 TB of storage, along with 12 network switches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 gradient-text">Key Achievements</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Significant milestones and accomplishments of our HPC initiative
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement) => (
              <div key={achievement.id} className="modern-card bg-card p-8 rounded-xl flex flex-col h-full">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  {achievement.icon === 'server' && <FiCheck size={28} className="text-primary" />}
                  {achievement.icon === 'medical' && <FiTrendingUp size={28} className="text-primary" />}
                  {achievement.icon === 'research' && <FiAward size={28} className="text-primary" />}
                  {achievement.icon === 'network' && <FiUsers size={28} className="text-primary" />}
                </div>
                <h3 className="text-xl font-bold mb-3">{achievement.title}</h3>
                <p className="text-foreground/80 flex-grow">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Impact */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 gradient-text">Research Impact</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            How our HPC facility has enhanced research capabilities across various fields
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="modern-card bg-card p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Medical Research</h3>
              <p className="text-foreground/80 mb-4">
                The School of Medicine can now store and analyze medical imaging data for preventative screening and population health studies.
                This has significantly improved the ability to conduct longitudinal studies on disease patterns.
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <span className="font-semibold block mb-1">Key Impact:</span>
                <span className="text-foreground/80">Prevention of data loss and enhanced diagnostic capabilities through advanced image processing.</span>
              </div>
            </div>

            <div className="modern-card bg-card p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Scientific Modeling</h3>
              <p className="text-foreground/80 mb-4">
                Researchers in physics and engineering can now perform complex simulations and modeling that were previously impossible
                due to computational constraints, eliminating the need to send data abroad for processing.
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <span className="font-semibold block mb-1">Key Impact:</span>
                <span className="text-foreground/80">Faster research cycles and increased collaboration with international research groups.</span>
              </div>
            </div>

            <div className="modern-card bg-card p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Climate Research</h3>
              <p className="text-foreground/80 mb-4">
                The HPC facility has enabled sophisticated climate modeling specific to Nepal's diverse topography,
                allowing for better prediction and management of weather patterns and natural disasters.
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <span className="font-semibold block mb-1">Key Impact:</span>
                <span className="text-foreground/80">Improved disaster preparedness and environmental policy development.</span>
              </div>
            </div>

            <div className="modern-card bg-card p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Data Science</h3>
              <p className="text-foreground/80 mb-4">
                The facility supports advanced data analytics and machine learning research, providing students and
                faculty with the computational power needed for training complex models on large datasets.
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <span className="font-semibold block mb-1">Key Impact:</span>
                <span className="text-foreground/80">Development of locally-relevant AI applications and data-driven solutions.</span>
              </div>
            </div>

            <div className="modern-card bg-card p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Engineering Applications</h3>
              <p className="text-foreground/80 mb-4">
                Engineering departments now utilize the HPC for finite element analysis, computational fluid dynamics,
                and structural modeling, enhancing both research and educational outcomes.
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <span className="font-semibold block mb-1">Key Impact:</span>
                <span className="text-foreground/80">Innovation in engineering solutions specific to Nepal's infrastructure needs.</span>
              </div>
            </div>

            <div className="modern-card bg-card p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Educational Enhancement</h3>
              <p className="text-foreground/80 mb-4">
                Students now have hands-on experience with high-performance computing, preparing them for
                careers in computational science and increasing their competitiveness in the global job market.
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <span className="font-semibold block mb-1">Key Impact:</span>
                <span className="text-foreground/80">Skilled workforce development and reduced brain drain of technical talent.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications and Metrics */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 gradient-text">Research Output</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Measuring the impact of our high-performance computing resources on academic output
          </p>

          <div className="modern-card bg-card p-8 rounded-xl max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-muted p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">45+</div>
                <div className="text-muted-foreground">Research Papers</div>
              </div>
              <div className="bg-muted p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">12</div>
                <div className="text-muted-foreground">PhD Projects</div>
              </div>
              <div className="bg-muted p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">28</div>
                <div className="text-muted-foreground">Master's Theses</div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6">Key Research Areas</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="text-foreground/90">Particle Physics Simulations</span>
              </div>
              <div className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="text-foreground/90">Medical Image Processing</span>
              </div>
              <div className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="text-foreground/90">Climate Modeling</span>
              </div>
              <div className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="text-foreground/90">Natural Language Processing</span>
              </div>
              <div className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="text-foreground/90">Computational Fluid Dynamics</span>
              </div>
              <div className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="text-foreground/90">Structural Engineering</span>
              </div>
              <div className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="text-foreground/90">Machine Learning Applications</span>
              </div>
              <div className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="text-foreground/90">Big Data Analytics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-20 animated-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 glow-text">Looking Forward</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto text-white/90">
            Building on our achievements, we're working toward even more ambitious goals
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl text-left">
              <h3 className="text-2xl font-bold mb-6">Technical Goals</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Establishing KU as a Technical Institute for HPC in Nepal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Inclusion in the Worldwide LHC Computing Grid (WLCG)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Designing and implementing a peta-scale supercomputer</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Developing diverse compute fleets for different research domains</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Implementing high-speed interconnect infrastructure</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl text-left">
              <h3 className="text-2xl font-bold mb-6">Research & Education Goals</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Training 5,000 professionals in data management and computing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Supporting 20 PhD awards per member institution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Facilitating 40 Masters degrees per member institution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Publishing 200 research papers per member institution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Developing a high-throughput computing culture in Nepal</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
