import arch from "./asserts/arch.jpg";
import vim from "./asserts/vim.png";


// constants.js
export const cardContents = [
  {
    title: 'Arch Linux',
    description: 'My cool desktop!! Which is actually just the most efficient way I’ve found to do my work.',
    link: '/Arch',
    linkText: 'Learn More',
    image: arch, // Replace with actual image path
    imagePosition: 'left'
  },
  {
    title: 'Neovim',
    description: 'A guide to getting started with Neovim, the powerful text editor that\'s extensible and highly configurable.',
    link: '/Neovim',
    linkText: 'Discover More',
    image: vim, // Replace with actual image path
    imagePosition: 'right'
  },
  {
    title: 'Docker',
    description: 'This is the description or content of the third card. It highlights key aspects and functionality.',
    link: '#',
    linkText: 'Explore',
    image: arch, // Replace with actual image path
    imagePosition: 'left'
  },
  // Add more card objects as needed
];

