import Link from 'next/link';
import { FiMapPin, FiGithub, FiLinkedin, FiFacebook } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">HPC Kathmandu University</h3>
            <p className="mb-4 text-muted-foreground">
              Dedicated to bringing knowledge and technology to the service of mankind through high-performance computing resources.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition duration-300">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition duration-300">About</Link>
              </li>
              <li>
                <Link href="/achievements" className="text-muted-foreground hover:text-primary transition duration-300">Achievements</Link>
              </li>
              <li>
                <Link href="/team" className="text-muted-foreground hover:text-primary transition duration-300">Our Team</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">Contact Information</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-muted-foreground">
                <FiMapPin className="mr-2 text-primary" />
                <span>Kathmandu University, Dhulikhel, Kavre, Nepal</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">&copy; {new Date().getFullYear()} HPC Kathmandu University. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

