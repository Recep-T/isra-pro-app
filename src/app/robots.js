// app/robots.js
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://isra-pro-app.vercel.app/sitemap.xml',
  }
}