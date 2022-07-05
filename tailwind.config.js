module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Playfair Display',
      body: 'Work Sans',
      logo: 'Proxima Nova'
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
        portfolio: 'url("/src/assets/img/outline-text/portfolio.svg")',
        services: 'url("/src/assets/img/outline-text/services.svg")',
        testimonials: 'url("/src/assets/img/outline-text/testimonials.svg")',
        contact: 'url("/src/assets/img/outline-text/contact.svg")',
      },

      colors: {
        primary: '#050402', //black
        secondary: '#1C1D24', //lightgray
        tertiary: '#131419', //darkgray
        primaryWhite: '#ffffff',
        error: '#bd321c', //red
        accent: {
          DEFAULT: '#4688a3', //teal
          hover: '#60b4d6', //lighteal
        },
        paragraph: '#878e99',
      },
    },
  },
  plugins: [],
};
