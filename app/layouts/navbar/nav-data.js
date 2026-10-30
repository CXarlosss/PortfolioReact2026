import config from '~/config.json';

export const navLinks = [
  {
    label: 'projects',
    pathname: '/#project-1',
  },
  {
    label: 'details',
    pathname: '/#details',
  },
  {
    label: 'articles',
    pathname: '/articles',
  },
  {
    label: 'contact',
    pathname: '/contact',
  },
];

export const socialLinks = [
  {
    label: 'LinkedIn',
    url: config.linkedin,
    icon: 'linkedin',
  },
  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
];
