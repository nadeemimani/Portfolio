import Link from 'next/link';
import ArrowIcon from '../components/ArrowIcon';

export default function Body({ posts, globalData }) {
  return (
    <main className="w-full">
        <h1 className="text-3xl lg:text-5xl text-center mb-12">
          {globalData.blogTitle}
        </h1>
        <h2 className="text-3xl lg:text-5xl text-center mb-12">
          {globalData.blogCaption}
        </h2>
        <ul className="w-full">
          {posts.map((post) => (
            <li
              key={post.filePathn}
              className="md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0"
            >
              <Link
                as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                href={`/posts/[slug]`}
              >
                <a className="py-6 lg:py-10 px-6 lg:px-16 block focus:outline-none focus:ring-4">
                  {post.data.date && (
                    <p className="uppercase mb-3 font-bold opacity-60">
                      {post.data.date}
                    </p>
                  )}
                  <h2 className="text-2xl md:text-3xl">{post.data.title}</h2>
                  {post.data.description && (
                    <p className="mt-3 text-lg opacity-60">
                      {post.data.description}
                    </p>
                  )}
                  <ArrowIcon className="mt-4" />
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <nav className="primary-navigation" id="primary-navigation">
          <ul aria-label="Primary" role="list" className="nav-list">
            <li className="design-nav-toggle list-flex clear" aria-controls="design-navigation">
              <img src="/images/gallery/icons/ui/linkedin-icon-512x512-dhkaf9ri.png" className="logoicon designlogo"></img>
              <p>Design</p>
            </li>
            <li className="marketing-nav-toggle list-flex clear" aria-controls="marketing-navigation" nohighlight="">
              <div className="logoicon marketinglogo"></div>
              <p>Market</p>
            </li>
            <li className="development-nav-toggle list-flex clear" aria-controls="development-navigation" nohighlight="">
              <div className="logoicon developmentlogo"></div>
              <p>Develop</p>
            </li>
            <li className="consulting-nav-toggle list-flex clear" aria-controls="consulting-navigation" nohighlight="">
              <div className="logoicon consultinglogo"></div>
              <p>Consult</p>
            </li>
            <li className="portfolio-nav-toggle list-flex clear" aria-controls="portfolio-navigation" nohighlight="">
              <div className="logoicon portfoliologo"></div>
              <p>Portfolio</p>
            </li>
            <li className="resume-nav-toggle list-flex clear" aria-controls="resume-navigation" nohighlight="">
              <div className="logoicon resumelogo"></div>
              <p>Resume</p>
            </li>											
            <li className="linkedin-nav-toggle list-flex">
              <a href="https://www.linkedin.com/in/nadeem-imani-688883130/" target="_blank" rel="noreferrer">					
                <div className="logoicon linkedin"></div>
                <p>LinkedIn</p>
              </a>
            </li>
            <li className="contact-nav-toggle list-flex">					
              <div className="logoicon contactlogo"></div>
              <p>Contact</p>
            </li>
          </ul>
        </nav>
    </main>
  );
}
