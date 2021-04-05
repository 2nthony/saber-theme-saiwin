# saber-theme-saiwin

```js
module.exports = {
  theme: 'saiwin',
  plugins: [
    { resolve: 'saber-plugin-query-posts', options: { perPage: 20 } },
    { resolve: 'saber-plugin-prismjs' },
    { resolve: 'saber-theme-saiwin/windicss' },
  ],
  siteConfig: {
    title: `EvilLT`,
    author: 'JC (evillt)',
    url: 'https://evila.me',
    email: 'ijoec123@gmail.com',
  },
  themeConfig: {
    nav: [{ title: 'About', link: '/about' }],
    bio: {
      avatar: 'your avatar.jpg',
      html: `you description`,
    },
  },
}
```
