import { timelineEvents } from '@/lib/data';

type TimelineEvent = {
  id: number;
  year: string;
  title: string;
  description: string;
};

const Timeline = () => {
  return (
    <div className="container mx-auto px-4 py-24 relative">
      <h2 className="text-4xl font-bold text-center mb-4 gradient-text">Our Journey</h2>
      <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
        Key milestones in our collaboration with CERN and development of HPC resources
      </p>

      <div className="relative">
        {/* Vertical line */}
        <div className="timeline-line"></div>

        {/* Timeline events */}
        {timelineEvents.map((event, index) => (
          <div
            key={event.id}
            className={`flex flex-col md:flex-row items-center mb-20 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
          >
            {/* Event content */}
            <div className="md:w-1/2 p-4">
              <div className={`modern-card bg-card p-6 rounded-xl ${index % 2 === 0 ? 'md:mr-10' : 'md:ml-10'
                }`}>
                <span className="text-sm text-accent font-semibold mb-1 block">{event.year}</span>
                <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                <p className="text-card-foreground/80">{event.description}</p>
              </div>
            </div>

            {/* Circle marker */}
            <div className="relative z-10 my-4 md:my-0">
              <div className="bg-primary w-14 h-14 rounded-full flex items-center justify-center relative">
                <span className="text-white font-bold">{event.year}</span>
                <div className="absolute -inset-2 bg-primary/30 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Empty div for layout */}
            <div className="md:w-1/2 p-4"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
