module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js', './pages/**/*.mdx'],
  theme: {
    extend: {}
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')]
};
