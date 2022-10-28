module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      primary: 'Playfair Display',
      body: 'Work Sans',
      logo: 'Proxima Nova',
      main: 'Abyssinica SIL',
      subtitle: 'Roboto Slab'
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '3rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      content: {
        about: 'url("/src/assets/img/outline-text/about.svg")',
        about2: 'url("/src/assets/img/outline-text/about2.svg")', // black font
        portfolio: 'url("/src/assets/img/outline-text/portfolio.svg")',
        portfolio2: 'url("/src/assets/img/outline-text/portfolio2.svg")', // black font
        services: 'url("/src/assets/img/outline-text/services.svg")',
        services2: 'url("/src/assets/img/outline-text/services2.svg")', // black font
        testimonials: 'url("/src/assets/img/outline-text/testimonials.svg")',
        testimonials2: 'url("/src/assets/img/outline-text/testimonials2.svg")', // black font
        contact: 'url("/src/assets/img/outline-text/contact.svg")',
        contact2: 'url("/src/assets/img/outline-text/contact2.svg")', // black font
      },
      
      colors: {
        primary: '#050402', //black
        primaryWhite: '#fdf9ff',
        secondary: '#1C1D24', //lightgray
        secondaryWhite: '#f2f2fc',
        tertiary: '#131419', //darkgray
        tertiaryWhite: '#f5f8fa',
        error: '#bd321c', //red
        accent: {
          DEFAULT: '#fc3d3d', // lightred
          hover: '#f20202', // red
        },
        paragraph: '#878e99',
      },
    },
  },
  plugins: [],
};

// DEFAULT: '#02b1c2', //skyblue