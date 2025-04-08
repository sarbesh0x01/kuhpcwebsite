import Link from 'next/link';
import { FiChevronRight } from 'react-icons/fi';

const Hero = () => {
  return (
    <div className="animated-gradient text-white py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 tech-grid"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight glow-text">
            High-Performance Computing at Kathmandu University
          </h1>
          <p className="text-xl mb-8 text-white/90">
            Powering research and innovation with computing capacity equivalent to over 2000 desktop computers.
            A collaboration with CERN to advance science and technology in Nepal.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
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
              Our Team <FiChevronRight className="ml-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Abstract tech decoration */}
      <div className="absolute bottom-0 right-0 w-1/3 h-64 bg-accent/20 rounded-tl-full blur-3xl"></div>
      <div className="absolute top-12 right-12 w-24 h-24 bg-primary/30 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-secondary/20 rounded-full blur-xl"></div>
    </div>
  );
};

export default Hero;

