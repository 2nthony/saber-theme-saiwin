/** @type {import('saber').SaberConfig} */
const config = {
  // theme: '../src',
  theme: 'tailsaw',
  siteConfig: {
    title: `EvilLT`,
    author: 'JC (evillt)',
    url: 'https://evila.me',
    email: 'ijoec123@gmail.com',
  },
  plugins: [
    { resolve: 'saber-plugin-query-posts', options: { perPage: 20 } },
    { resolve: 'saber-plugin-prismjs' },
    { resolve: '../windicss' },
  ],
  themeConfig: {
    nav: [{ title: '关于我', link: '/about' }],
    bio: {
      avatar:
        'https://evilaassets.oss-cn-shanghai.aliyuncs.com/assets/avatar.JPG?x-oss-process=style/70',
      html: `我的名字叫胡杰豪，广东江门恩平人。今年 ${
        new Date().getFullYear() - 1995
      } 岁仍然一事无成，却想着如何提早退休。`,
    },
  },
  permalinks: { post: '/posts/:slug', page: '/:slug' },
}
module.exports = config
