export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Design | Development | Marketing';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Nadeem Imani';
  const blogCaption = process.env.BLOG_CAPTION
    ? decodeURI(process.env.BLOG_CAPTION)
    : 'Over 15 years of professional experience.';
  const blogKeywords = process.env.BLOG_KEYWORDS
    ? decodeURI(process.env.BLOG_KEYWORDS)
    : 'portfolio, resume';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : '2024 All Rights Reserved. Media Builders';

  return {
    name,
    blogTitle,
    blogCaption,
    blogKeywords,
    footerText,
  };
};
