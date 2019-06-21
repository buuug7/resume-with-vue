module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/your-resume/'
    : '/',
  outputDir: 'docs'
};
