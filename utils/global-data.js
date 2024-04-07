export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Nadeem Imani';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Next.js Blog Theme';
  const blogCaption = process.env.BLOG_CAPTION
    ? decodeURI(process.env.BLOG_CAPTION)
    : 'Over 15 years of professional experience working with virtually all types of industries and businesses. Always striving to be the best version of myself.';
  const blogKeywords = process.env.BLOG_KEYWORDS
    ? decodeURI(process.env.BLOG_KEYWORDS)
    : 'portfolio, resume';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : '2022 All Rights Reserved. Designed by Nadeem Imani';

  return {
    name,
    blogTitle,
    blogCaption,
    blogKeywords,
    footerText,
  };
};
