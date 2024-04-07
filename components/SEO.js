import Head from 'next/head';

export default function SEO({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:image" content=""/>
      <meta property="og:url" content=""/>
      <meta property="og:site_name" content=""/>
      <meta property="og:description" content=""/>
      <meta name="description" content={description} />
	    <meta name="author" content="nadeemimani.ca" />
      <meta name="keywords" content="A Portfolio of Work by Nadeem Imani" />
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <meta name="twitter:title" content="" />
      <meta name="twitter:image" content="" />
      <meta name="twitter:url" content="" />
      <meta name="twitter:card" content="" />
    </Head>
  );
}
