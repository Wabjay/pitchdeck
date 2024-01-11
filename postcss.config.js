module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
}
