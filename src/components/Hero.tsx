import Link from 'next/link';
import { FiChevronRight, FiCpu, FiServer, FiDatabase } from 'react-icons/fi';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Dark background with tech elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050816] via-[#081130] to-[#0a1740] z-0"></div>
      <div className="absolute inset-0 tech-grid z-0 opacity-20"></div>

      {/* Glowing circuit patterns */}
      <div className="absolute inset-0 circuit-pattern z-0"></div>

      {/* Animated nodes */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-accent/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* Main content */}
      <div className="container mx-auto px-4 z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Text content - 7 columns on large screens */}
          <div className="lg:col-span-7">
            <div className="bg-white/5 backdrop-blur-xl p-1 rounded-lg inline-block mb-4">
              <span className="px-3 py-1 text-sm font-medium text-accent flex items-center">
                Powered by CERN Technology
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white">
              Supercomputing Power at <span className="gradient-text">Kathmandu University</span>
            </h1>

            <p className="text-xl mb-8 text-white/80 max-w-2xl">
              Nepal&apos;s premier high-performance computing facility with the processing
              power of 2,000+ computers and 700+ TB storage capacity.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="/about"
                className="btn btn-primary text-lg px-8 py-4 flex items-center group"
              >
                Explore Our Capabilities
                <FiChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                href="/achievements"
                className="btn btn-secondary text-lg px-8 py-4"
              >
                See Our Impact
              </Link>
            </div>

            {/* Key stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                <div className="flex items-center text-accent mb-2">
                  <FiCpu className="mr-2" />
                  <span className="font-semibold">CPU Power</span>
                </div>
                <p className="text-3xl font-bold text-white">2500+</p>
                <p className="text-white/60 text-sm">Processor Cores</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                <div className="flex items-center text-accent mb-2">
                  <FiServer className="mr-2" />
                  <span className="font-semibold">Servers</span>
                </div>
                <p className="text-3xl font-bold text-white">200</p>
                <p className="text-white/60 text-sm">High-performance</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                <div className="flex items-center text-accent mb-2">
                  <FiDatabase className="mr-2" />
                  <span className="font-semibold">Storage</span>
                </div>
                <p className="text-3xl font-bold text-white">700+ TB</p>
                <p className="text-white/60 text-sm">Data Capacity</p>
              </div>
            </div>
          </div>

          {/* Visual representation instead of image - 5 columns on large screens */}
          <div className="lg:col-span-5 relative">
            {/* Stylized server visualization */}
            <div className="relative">
              {/* Glowing border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent opacity-70 blur-sm rounded-xl"></div>

              {/* Server visualization container */}
              <div className="relative h-[500px] w-full overflow-hidden rounded-xl border border-white/20 bg-black/40 backdrop-blur-sm">
                {/* Server racks visualization */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="grid grid-cols-3 gap-3 w-full max-w-md">
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className="h-32 bg-primary/10 rounded-sm border border-primary/30 relative flex flex-col justify-between p-1"
                      >
                        {/* Small server units within each rack */}
                        {[...Array(6)].map((_, j) => (
                          <div
                            key={j}
                            className="h-4 bg-black/40 rounded-sm flex items-center"
                          >
                            <div className="w-1 h-1 rounded-full bg-accent ml-1 animate-pulse"
                              style={{ animationDelay: `${(i + j) * 0.1}s` }}></div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Data flow animation */}
                <div className="absolute top-0 left-0 w-full h-full">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-accent rounded-full animate-ping"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${1 + Math.random() * 3}s`
                      }}
                    ></div>
                  ))}
                </div>

                {/* Top decorative elements */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <span className="h-3 w-3 bg-accent rounded-full animate-pulse"></span>
                  <span className="h-3 w-3 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></span>
                  <span className="h-3 w-3 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '1s' }}></span>
                </div>

                {/* Bottom caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <span className="text-white font-semibold block">High-Performance Computing Cluster</span>
                  <span className="text-white/60 text-sm">Kathmandu University, Nepal</span>
                </div>

                {/* Status indicators */}
                <div className="absolute top-4 left-4 bg-black/40 rounded px-2 py-1 text-xs flex items-center space-x-2">
                  <span className="inline-block h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-white/80">SYSTEM ONLINE</span>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-10 -right-10 bg-black/50 backdrop-blur-xl p-4 rounded-xl border border-white/10 shadow-lg">
              <div className="text-accent text-xs font-medium mb-1">PROCESSING POWER</div>
              <div className="text-2xl font-bold text-white">2000+</div>
              <div className="text-white/60 text-xs">Desktop Equivalents</div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-black/50 backdrop-blur-xl py-2 px-4 rounded-xl border border-white/10 shadow-lg rotate-3">
              <span className="text-xs text-white/80">In partnership with</span>
              <div className="flex items-center mt-1">
                <div className="bg-white rounded-full h-6 w-6 flex items-center justify-center mr-2">
                  <span className="text-xs font-bold text-black">C</span>
                </div>
                <span className="text-white font-bold">CERN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
