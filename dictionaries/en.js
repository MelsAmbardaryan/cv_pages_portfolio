export default {
  meta: {
    title: 'Mels Ambardaryan | Frontend / Full-Stack Developer',
    description:
      'Portfolio of Mels Ambardaryan, a Frontend / Full-Stack Developer specializing in JavaScript and the Node.js ecosystem. Explore projects, skills, and get in touch.',
    siteName: 'Mels Ambardaryan Portfolio',
    jobTitle: 'Frontend / Full-Stack Developer',
    keywords: ['Mels Ambardaryan', 'Frontend Developer', 'Full-Stack Developer', 'JavaScript Developer', 'Node.js Developer', 'Web Developer', 'Portfolio', 'Armenia'],
  },
  skipLink: 'Skip to main content',
  nav: {
    logo: 'Portfolio',
    home: 'Home',
    services: 'Services',
    skills: 'Skills',
    works: 'Works',
    about: 'About',
    contact: 'Contact',
    menuToggleLabel: 'Toggle menu',
  },
  themeToggle: {
    toLight: 'Switch to light mode',
    toDark: 'Switch to dark mode',
  },
  langSwitch: {
    label: 'ՀԱՅ',
  },
  hero: {
    name: 'Mels Ambardaryan',
    role: 'Frontend / Full-Stack Developer',
    subtitle: 'I build fast, responsive and scalable web applications.',
    bio: 'I create modern user interfaces with JavaScript and the Node.js ecosystem — from complex e-commerce platforms to SEO-optimized websites. With 3+ years of experience, I focus on clean code, strong performance and seamless UX/UI.',
    social: { facebook: 'Facebook', instagram: 'Instagram', linkedin: 'LinkedIn', github: 'GitHub' },
    ctaViewWork: 'View My Work',
    ctaDownloadCv: 'Download CV',
    techChip: 'JavaScript',
  },
  services: {
    headingPrefix: 'What I',
    headingHighlight: 'Do',
    items: [
      {
        number: '01',
        title: 'Frontend Development',
        description:
          'Building functional, fast and accessible interfaces with modern JavaScript, HTML5 and CSS3.',
        link: 'View Work',
      },
      {
        number: '02',
        title: 'Responsive Web Design & UX',
        description:
          'Adapting websites for every screen — mobile, tablet and desktop — for a comfortable user experience.',
        link: 'View Work',
      },
      {
        number: '03',
        title: 'SEO & Performance Optimization',
        description:
          'Improving site speed and technical SEO to help you rank higher in search results.',
        link: 'View Work',
      },
      {
        number: '04',
        title: 'Full-Stack / API Integration',
        description:
          'Integrating backend services, REST APIs and databases using Node.js and Express.js.',
        link: 'View Work',
      },
    ],
  },
  skills: {
    headingPrefix: 'My',
    headingHighlight: 'Tech Stack',
    subtitle: 'Technologies I work with.',
    groups: [
      {
        title: 'Frontend',
        items: [
          { name: 'HTML5', icon: 'bx bxl-html5' },
          { name: 'CSS3', icon: 'bx bxl-css3' },
          { name: 'JavaScript', icon: 'bx bxl-javascript' },
        ],
      },
      {
        title: 'Backend',
        items: [
          { name: 'Node.js', icon: 'bx bxl-nodejs' },
          { name: 'Express.js', icon: 'bx bx-server' },
        ],
      },
      {
        title: 'Tools & Workflow',
        items: [
          { name: 'Git & GitHub', icon: 'bx bxl-github' },
          { name: 'Vercel', icon: 'bx bx-cloud' },
          { name: 'VS Code', icon: 'bx bx-code-alt' },
        ],
      },
    ],
  },
  works: {
    headingPrefix: 'My',
    headingHighlight: 'Works',
    featured: {
      eyebrow: 'Featured Project',
      title: 'ARM GROUP',
      description:
        'Full-stack e-commerce website built for an Armenian natural-food export company entering the Polish market. Features a product catalog with category filters, shopping cart, wishlist, a bilingual (Armenian/Polish) interface with a custom i18n system, and multi-currency pricing. Designed and developed end-to-end, frontend and backend.',
      ctaLive: 'Live Website',
      ctaCase: 'View Case Study',
    },
    moreLabel: 'More projects are on the way',
    moreCta: 'See more on GitHub',
    caseStudy: {
      backLabel: 'Back to Works',
      eyebrow: 'Case Study',
      title: 'ARM GROUP',
      subtitle: 'A full-stack e-commerce platform built for the Polish market',
      meta: {
        roleLabel: 'Role',
        role: 'Frontend + Backend Developer (solo)',
        typeLabel: 'Type',
        type: 'E-commerce',
        marketLabel: 'Market',
        market: 'Poland',
        stackLabel: 'Stack',
        stack: 'HTML · CSS · JavaScript · Node.js · Express · Swiper.js',
      },
      ctaLive: 'Visit Live Website',
      sections: {
        challenge: {
          heading: 'The Challenge',
          body: 'ARM GROUP is an Armenian natural-food export company preparing to enter the Polish market. They needed an online storefront that could present their product catalog to Polish customers — in the right language and currency — while still covering the shopping basics buyers expect: browsing, filtering, a cart and a wishlist.',
        },
        solution: {
          heading: 'The Solution',
          body: "I designed and built the platform end-to-end — a custom frontend paired with a Node.js/Express backend, rather than a templated e-commerce solution. That kept the codebase lean and gave full control over the two pieces that mattered most for this market: a bilingual Armenian/Polish interface and multi-currency pricing, both built from scratch instead of bolted on with third-party plugins.",
        },
        features: {
          heading: 'Key Features',
          items: [
            'Product catalog with category filtering',
            'Shopping cart',
            'Wishlist system',
            'Armenian / Polish bilingual interface (custom i18n)',
            'Multi-currency pricing',
            'Interactive product galleries (Swiper.js)',
            'Responsive design across devices',
          ],
        },
        architecture: {
          heading: 'Architecture',
          body: "The frontend is built with vanilla JavaScript, HTML and CSS, with Swiper.js powering interactive product galleries. The backend runs on Node.js and Express, serving product and catalog data to the frontend. Language and currency switching are handled by a custom-built i18n layer rather than a third-party library, keeping translation strings and pricing logic fully under the project's control.",
        },
        challenges: {
          heading: 'Technical Challenges',
          body: 'Building the bilingual and multi-currency system from scratch meant handling translation strings, layout differences between Armenian and Polish text, and currency conversion consistently across every page — without a ready-made i18n package to fall back on. Keeping cart and wishlist state reliable across page navigation, without a frontend framework managing state, was the other main challenge.',
        },
        result: {
          heading: 'Result',
          body: 'ARM GROUP launched with a fully working, bilingual e-commerce storefront live at armgroup.pl — giving the company a functioning digital presence to reach customers in the Polish market, with product browsing, filtering, cart and wishlist all working end-to-end.',
        },
      },
      techStackHeading: 'Tech Stack',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'Swiper.js'],
    },
  },
  about: {
    headingPrefix: 'About',
    headingHighlight: 'Me',
    subtitle: 'Frontend / Full-Stack Developer',
    bio: [
      "I'm a Frontend Developer with 3 years of hands-on experience. Since 2022 I've worked on freelance and volunteer projects, earning certificates both locally and internationally.",
      "I care not just about technical quality and clean code, but about solving real business problems. I'm constantly sharpening my technical skills and my English, to deliver strong results on international projects.",
    ],
    readMore: 'Read More',
    readMoreAriaLabel: 'Read more about Mels Ambardaryan (opens CV as PDF)',
  },
  contact: {
    headingPrefix: 'Contact',
    headingHighlight: 'Me',
    prompt: "Have a project or an idea? Let's make it real.",
    phoneLabel: 'Tele.',
    form: {
      fallbackBefore: 'Prefer email? Reach me directly at',
      fallbackAfter: '.',
      nameLabel: 'Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      submitIdle: 'Send Message',
      submitSending: 'Sending…',
      successMessage: "Thanks for reaching out! I'll get back to you soon.",
      errorBefore: 'Something went wrong. Please try again, or email me directly at',
      errorAfter: '.',
    },
  },
  footer: {
    wordmark: 'MELS.',
    tagline: 'Frontend / Full-Stack Developer',
    backToTopLabel: 'Back to top',
    copyright: '© 2026 Mels Ambardaryan. All rights reserved.',
    designedWithCare: 'Designed & built with care',
  },
}
