/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://bdgwinngames.com',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.9,
  exclude: ['/api/*','/private/*','/admin/*'],
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }]
  }
};
