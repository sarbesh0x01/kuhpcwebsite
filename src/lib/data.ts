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
      description: 'Leading the HPC initiative at Kathmandu University and coordinator of the Supercomputer Center. Dr. Adhikari has been instrumental in establishing the partnership with CERN and developing the high-performance computing infrastructure.',
      email: 'rajendra.adhikari@ku.edu.np',
      linkedin: 'https://www.linkedin.com/in/rajendra-a-ba35982/',
      github: 'https://github.com/rpadhikari',
      image: '/rajendrasir.jpg'
    },
    {
      id: 2,
      name: 'Vice Chancellor',
      position: 'Vice Chancellor, Kathmandu University',
      role: 'Project Supervisor & Chair of Advisory Committee',
      description: 'Providing institutional leadership and guidance for the HPC initiative as chair of the NUSI Advisory Committee.',
      email: 'vc@ku.edu.np',
      linkedin: '#',
      website: '#',
      image: '/images/team/vice-chancellor.jpg'
    }
  ],

  // Technical Overseer (mid-level leadership)
  overseer: {
    id: 3,
    name: 'James Bhattrai',
    position: 'Technical Director, HPC Center',
    role: 'Project/Technical Overseer',
    description: 'Overseeing the technical operations of the Supercomputer Center and coordinating implementation of high-performance computing solutions across the university.',
    email: 'technical.director@ku.edu.np',
    linkedin: '#',
    github: '#',
    image: '/images/team/technical-director.jpg'
  },

  // Technical Members (operational team)
  members: [
    {
      id: 4,
      name: 'Sarbesh K.C.',
      position: 'Team Member',
      role: 'Technical Member',
      description: 'Managing the day-to-day operations of the HPC infrastructure, including hardware maintenance, system updates, and performance optimization.',
      github: '/sarbesh0x01',
      image: '/sarbeshkc.jpg'
    },
    {
      id: 5,
      name: 'Aaditya Yadav',
      position: 'Team Member',
      role: 'Technical Member',
      description: 'Focusing on high-energy physics simulations and data analysis using the supercomputing resources.',
      github: 'yvruffian7',
      image: '/Aaditya_team_member.jpg'
    },
    {
      id: 6,
      name: 'Shriharsh Sharma Acharya',
      position: 'Team Member',
      role: 'Technical Member',
      description: 'Managing the day-to-day operations of the HPC infrastructure, including hardware maintenance, system updates, and performance optimization.',
      github: 'https://github.com/shri-acha',
      image: '/shrishars.png'
    },
    {
      id: 7,
      name: 'Software Developer',
      position: 'HPC Applications Developer',
      role: 'Technical Member',
      description: 'Creating and maintaining software tools that enable researchers to effectively utilize the supercomputing resources.',
      email: 'developer@ku.edu.np',
      github: '#',
      image: '/images/team/team-member-4.jpg'
    },
    {
      id: 8,
      name: 'Technical Support Specialist',
      position: 'User Support Coordinator',
      role: 'Technical Member',
      description: 'Providing training and support to researchers and students using the HPC facilities.',
      email: 'support@ku.edu.np',
      github: '#',
      image: '/images/team/team-member-5.jpg'
    },
    {
      id: 9,
      name: 'Network Engineer',
      position: 'Network Infrastructure Specialist',
      role: 'Technical Member',
      description: 'Managing the high-speed network infrastructure that connects the supercomputing resources.',
      email: 'network@ku.edu.np',
      github: '#',
      image: '/images/team/team-member-6.jpg'
    },
    {
      id: 10,
      name: 'Research Assistant',
      position: 'Graduate Research Assistant',
      role: 'Technical Member',
      description: 'Supporting research projects and helping implement computational workflows on the HPC system.',
      email: 'research.assistant@ku.edu.np',
      github: '#',
      image: '/sarbeshkc.jpg'
    }
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
