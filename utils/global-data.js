export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Africa 🌍 New Space Ventures';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Space 🚀📡 Deep Tech Startups Insights';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : '2024 ©Africa New Space Ventures - Made with ☕ and ❤';

  return {
    name,
    blogTitle,
    footerText,
  };
};
