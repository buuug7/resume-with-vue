module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/resume-with-vue/'
    : '/',
  outputDir: 'docs'
}
