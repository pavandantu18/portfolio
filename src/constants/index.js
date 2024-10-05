export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const myProjects = [
  {
    title: 'Bank Loan Report Project',
    desc: 'Created detailed reports to monitor loan metrics, such as applications and funded amounts. Developed Good vs. Bad Loan KPIs for clear differentiation, tracking fund amounts and percentages. Designed interactive dashboards with diverse visualizations like bar charts, line charts, and maps for comprehensive trend analysis.',
    subdesc:
      'Implemented grid view reporting for real-time loan status tracking, helping to monitor Month-to-Date (MTD) metrics.',
    href: '',
    texture: '',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Amazon Dashboard Creation',
    desc: 'Connected databases (Excel, SQL, Web) for data extraction and preparation. Analyzed tables and established relationships between datasets. Performed data cleaning using Power Query Editor and DAX functions.',
    subdesc:'Developed various visualization models to represent key insights. Created and pinned reports to live dashboards for monitoring and decision-making. Published the report and created a live dashboard for continuous data updates.',
    href: '',
    texture: '',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Excel',
        path: '/assets/excel.png',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/sql.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
      
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Chegg',
    pos: 'Q/A Expert (Computer Science)',
    duration: '2023 - Present',
    title: "The job involves working as a freelance subject expert to provide quality answers uploaded on Chegg Q&A portal and provide support to student subscribers over the globe. Solved 150+ questions on various topics of Computer science.",
    icon: '/assets/chegg_logo.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Teaching Assistant for Introduction to Computer on University of North Carolina',
    pos: 'TA',
    duration: '2023 - 2024',
    title: "Assisted faculty in designing curriculum, addressing student queries, and developing assessment materials. Played a key role in creating and grading test papers, ensuring fair evaluations and timely feedback.",
    icon: '/assets/unc_charlotte_logo.jpg',
    animation: 'clapping',
  },
];
