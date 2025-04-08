import { timelineEvents } from '@/lib/data';
import Image from 'next/image';
import cernPartnerImage from '../../assets/CernPartner.jpg';

type TimelineEvent = {
  id: number;
  year: string;
  title: string;
  description: string;
};

const Timeline = () => {
  // Updated timeline events with accurate information from the documents
  const verifiedEvents = [
    {
      id: 1,
      year: '2013',
      title: 'Collaboration with CERN Begins',
      description: 'The scientific collaboration between Kathmandu University and CERN began in December 2013 with Masters Class in Particle Physics.',
      image: '/images/timeline-2013.jpg'
    },
    {
      id: 2,
      year: '2017 (June)',
      title: 'First South Asian High Energy Physics Instrumentation Workshop',
      description: 'KU hosted the first South Asian High Energy Physics Instrumentation (SAHEPI 2017) workshop.',
      image: '/images/timeline-2017-workshop.jpg'
    },
    {
      id: 3,
      year: '2017',
      title: 'International Cooperation Agreement',
      description: 'The government of Nepal and CERN signed an International Cooperation Agreement, formalizing their relationship.',
      image: '/images/timeline-2017-agreement.jpg'
    },
    {
      id: 4,
      year: '2018 (June 28)',
      title: 'CERN Server Donation Ceremony',
      description: 'A ceremony at CERN marked the donation of 200 servers, twelve network switches and cables to Kathmandu University.',
      image: '/images/timeline-2018-donation.jpg'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-24 relative">
      <h2 className="text-4xl font-bold text-center mb-4 gradient-text">Our Chronological Journey</h2>
      <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
        Key milestones in our collaboration with CERN and development of HPC resources at Kathmandu University
      </p>

      <div className="relative">
        {/* Vertical line */}
        <div className="timeline-line"></div>

        {/* Timeline events */}
        {verifiedEvents.map((event, index) => (
          <div
            key={event.id}
            className={`flex flex-col md:flex-row items-center mb-20 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
          >
            {/* Event content */}
            <div className="md:w-1/2 p-4">
              <div className={`modern-card bg-card p-6 rounded-xl ${index % 2 === 0 ? 'md:mr-10' : 'md:ml-10'
                }`}>
                <div className="mb-4 relative h-40 w-full rounded-lg overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <span className="p-2 text-white/90 text-sm">{event.title}, {event.year}</span>
                  </div>
                </div>
                <span className="text-sm text-accent font-semibold mb-1 block">{event.year}</span>
                <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                <p className="text-card-foreground/80">{event.description}</p>
              </div>
            </div>

            {/* Circle marker */}
            <div className="relative z-10 my-4 md:my-0">
              <div className="bg-primary w-14 h-14 rounded-full flex items-center justify-center relative">
                <span className="text-white font-bold">{event.year.substring(0, 4)}</span>
                <div className="absolute -inset-2 bg-primary/30 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Empty div for layout */}
            <div className="md:w-1/2 p-4"></div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-muted rounded-xl max-w-3xl mx-auto">
        <h3 className="text-xl font-bold mb-4">Future Plans</h3>
        <div className="flex items-start mb-4">
          <div className="bg-accent/20 p-2 rounded-full mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold">Working towards inclusion in the Worldwide LHC Computing Grid (WLCG)</p>
            <p className="text-muted-foreground">Connecting Nepal to the global grid for particle physics data processing</p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="bg-accent/20 p-2 rounded-full mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <div>
            <p className="font-semibold">Establishing KU as a Technical Institute for supercomputing in Nepal</p>
            <p className="text-muted-foreground">Becoming a center of excellence for high-performance computing in the region</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
