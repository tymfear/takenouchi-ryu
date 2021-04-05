module.exports = {
  prefix: '',
  important: true,
  purge: {
    enabled: process.env.ENABLE_PURGE,
    content: [
      './src/**/*.{html,ts}'
    ]
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography')
  ]
};
