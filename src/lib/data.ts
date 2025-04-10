// Data for the HPC website
export const stats = [
  { id: 1, label: 'CPU Servers', value: '184' },
  { id: 2, label: 'Disk Servers', value: '16' },
  { id: 3, label: 'Processor Cores', value: '2500+' },
  { id: 4, label: 'Memory', value: '8 TB' },
  { id: 5, label: 'Storage', value: '700+ TB' },
];

export const timelineEvents = [
  {
    id: 1,
    year: '2013',
    title: 'Collaboration with CERN begins',
    description: 'The scientific collaboration between Kathmandu University and CERN began with Masters Class in Particle Physics.'
  },
  {
    id: 2,
    year: '2017',
    title: 'First South Asian High Energy Physics Instrumentation Workshop',
    description: 'KU hosted the first SAHEPI workshop in June 2017.'
  },
  {
    id: 3,
    year: '2017',
    title: 'International Cooperation Agreement',
    description: 'The government of Nepal and CERN signed an International Cooperation Agreement.'
  },
  {
    id: 4,
    year: '2018',
    title: 'CERN Server Donation',
    description: 'CERN donated 200 servers, twelve network switches and cables to Kathmandu University.'
  },
];

export const achievements = [
  {
    id: 1,
    title: 'High-Performance Computing Facility',
    description: 'Established a computing facility with over 2500 processor cores and 700+ TB of storage, equivalent to more than 2000 typical desktop computers.',
    icon: 'server'
  },
  {
    id: 2,
    title: 'Medical Research Enhancement',
    description: 'Enabled the KU school of medicine to retain medical imaging data for preventative screening of diseases and population health studies.',
    icon: 'medical'
  },
  {
    id: 3,
    title: 'Local Research Capability',
    description: 'Eliminated the need for R&D projects to borrow computing time abroad, increasing local research efficiency and capabilities.',
    icon: 'research'
  },
  {
    id: 4,
    title: 'NUSI Initiative',
    description: 'Leading the Nepalese Unified Supercomputing Infrastructure initiative to provide computing resources across universities in Nepal.',
    icon: 'network'
  },
];

// Updated team structure with project supervisors, overseer, and technical members
export const teamMembers = {
  // Project Supervisors (leadership)
  supervisors: [
    {
      id: 1,
      name: 'Rajendra Adhikari',
      position: 'Assistant Professor, Department of Physics',
      role: 'Project Supervisor & Coordinator',
      description: 'Mentoring the HPC initiative at Kathmandu University and coordinator of the Supercomputer Center. Dr. Adhikari has been instrumental in establishing the partnership with CERN and developing the high-performance computing infrastructure.',
      email: 'rajendra.adhikari@ku.edu.np',
      linkedin: 'https://www.linkedin.com/in/rajendra-a-ba35982/',
      github: 'https://github.com/rpadhikari',
      image: '/rajendrasir.jpg'
    },
    /*  {
        id: 2,
        name: '',
        position: 'Vice Chancellor, Kathmandu University',
        role: 'Project Supervisor & Chair of Advisory Committee',
        description: 'Providing institutional leadership and guidance for the HPC initiative as chair of the NUSI Advisory Committee.',
        email: 'vc@ku.edu.np',
        linkedin: '#',
        website: '#',
        image: '/images/team/vice-chancellor.jpg'
      } */
  ],

  // Technical Overseer (mid-level leadership)
  overseer: {
    id: 2,
    name: 'James Bhattrai',
    position: 'Technical Lead',
    role: 'Project/Technical Overseer',
    description: 'Overseeing the technical operations of the Supercomputer Center and coordinating implementation of high-performance computing solutions across the university.',
    email: 'hello@jamesbhattarai.com',
    linkedin: 'https://www.linkedin.com/in/jamesbhattarai/',
    github: '/jamesii-b',
    image: '/james.jpg'
  },

  // Technical Members (operational team)
  members: [
    {
      id: 3,
      name: 'Sarbesh K.C.',
      position: 'Team Member',
      role: 'Technical Member',
      description: 'Managing the day-to-day operations of the HPC infrastructure, including hardware maintenance, system updates, and performance optimization.',
      github: '/sarbesh0x01',
      image: '/sarbeshkc.jpg'
    },
    {
      id: 4,
      name: 'Aaditya Yadav',
      position: 'Team Member',
      role: 'Technical Member',
      description: 'Focusing on high-energy physics simulations and data analysis using the supercomputing resources.',
      github: 'yvruffian7',
      image: '/Aaditya_team_member.jpg'
    },
    {
      id: 5,
      name: 'Shriharsh Sharma Acharya',
      position: 'Team Member',
      role: 'Technical Member',
      description: 'Managing the day-to-day operations of the HPC infrastructure, including hardware maintenance, system updates, and performance optimization.',
      github: 'https://github.com/shri-acha',
      image: '/shrishars.png'
    },
    {
      id: 6,
      name: 'Rajat Dahal',
      position: 'Team Member',
      role: 'Technical Member',
      description: 'Managing the day-to-day operations of the HPC infrastructure, including hardware maintenance, system updates, and performance optimization.',
      email: 'tazzarazzat@gmail.com',
      github: 'https://github.com/razzat008',
      image: '/rajat.jpg'
    },
    {
      id: 7,
      name: 'Suvesh Gurung',
      position: 'Team Member',
      role: 'Technical Member',
      description: 'Managing the day-to-day operations of the HPC infrastructure, including hardware maintenance, system updates, and performance optimization.',
      email: 'suveshgurung2@gmail.com',
      github: 'https://github.com/suveshgurung',
      image: '/pp.jpg'
    },

  ]
};

export const partnerInstitutions = [
  'Tribhuvan University',
  'Pokhara University',
  'Purwanchal University',
  'Mid-Western University',
  'Rajarshi Janak University',
  'Far Western University',
  'Nepal Open University',
  'Agriculture and Forestry University',
  'Madan Bhandari University of Science & Technology',
  'Nepal Academy of Science and Technology',
  'Department of Mines and Geology',
  'Department of Hydrology and Meteorology',
  'National Disaster Risk Reduction & Management Authority',
];
