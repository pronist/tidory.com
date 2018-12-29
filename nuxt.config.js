const nodeExternals = require('webpack-node-externals');

module.exports = {
  css: [
    '~assets/css/nomalize.css',
	  '~assets/css/prism.css'
  ],
  plugins: [
    { src: '~plugins/prism', ssr: false },
    { src: '~plugins/vue-google-adsense', ssr: false }
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: '티스토리 스킨 프레임워크, 티도리(TIDORY)',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: '오직 티스토리 스킨만을 위한 프레임워크'},
      { name: 'author', content: '정만수'},
      { name: 'keywords', content: '티스토리, 티스토리 스킨, 티스토리 스킨 제작, 티스토리 프레임워크, 티도리, TISTORY, TIDORY'},
      { content: '/images/og.png', property: 'og:image' },
      { content: '오직 티스토리 스킨만을 위한 프레임워크', property: 'og:description' },
      { content: 'https://tidory.com', property: 'og:url' },
      { content: 'TIDORY', property: 'og:site_name' },
      { content: '티스토리 스킨 프레임워크, 티도리(TIDORY)', property: 'og:title' }
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/png', href: '/images/favicon.png' },
      { rel: 'apple-touch-icon', sizes: "180x180", href: '/images/180x180.png' },
      { rel: 'apple-touch-icon', sizes: "76x76", href: '/images/76x76.png' },
      { rel: 'apple-touch-icon', sizes: "120x120", href: '/images/120x152.png' },
      { rel: 'apple-touch-icon', sizes: "152x152", href: '/images/152x152.png' },
      { rel: 'canonical', href: 'https://tidory.com/' },
      { rel: 'alternate', type: 'application/rss+xml', href: 'https://tidory.com/rss'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/earlyaccess/notosanskr.css'},
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.6.3/css/all.css' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    publicPath: 'https://tidory.com/'
  },
}
