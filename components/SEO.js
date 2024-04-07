import Head from 'next/head';

export default function SEO({ title, description }) {
  return (
    <Head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title>Nadeem Imani's Portfolio</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="description" content="A Portfolio of Work by Nadeem Imani" />
      <meta name="keywords" content="A Portfolio of Work by Nadeem Imani" />
      <meta name="author" content="nadeemimani.ca" />

      <!-- Facebook and Twitter integration -->
      <!-- <meta property="og:title" content=""/>
      <meta property="og:image" content=""/>
      <meta property="og:url" content=""/>
      <meta property="og:site_name" content=""/>
      <meta property="og:description" content=""/>
      <meta name="twitter:title" content="" />
      <meta name="twitter:image" content="" />
      <meta name="twitter:url" content="" />
      <meta name="twitter:card" content="" /> -->

      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
      
      <!-- Animate.css -->
      <link rel="stylesheet" href="css/animate.css">
      <!-- Icomoon Icon Fonts-->
      <link rel="stylesheet" href="css/icomoon.css">
      <!-- Bootstrap  -->
      <link rel="stylesheet" href="css/bootstrap.css">

      <!-- Theme style  -->
      <link rel="stylesheet" href="css/style.css">

      <!-- Modernizr JS -->
      <script src="js/modernizr-2.6.2.min.js"></script>
      <!-- FOR IE9 below -->
      <!--[if lt IE 9]>
      <script src="js/respond.min.js"></script>
      <![endif]-->
    </Head>
  );
}
