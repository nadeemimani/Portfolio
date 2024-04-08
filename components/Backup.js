import Link from 'next/link';
import Icon from './Icons';

export default function Body({ posts, globalData }) {
  return (
    <div className="wrapper">
      <nav className="primary-navigation" id="primary-navigation">
          <ul aria-label="Primary" role="list" className="nav-list clear">
            <li className="category-button list-flex clear" aria-controls="design-navigation">
              <Icon className="logoicon" iconType="Design"/>
              <p>Design</p>
            </li>
            <li className="category-button list-flex clear" aria-controls="marketing-navigation" nohighlight="">
              <Icon className="logoicon" iconType="Marketing"/>
              <p>Market</p>
            </li>
            <li className="category-button list-flex clear" aria-controls="development-navigation" nohighlight="">
              <Icon className="logoicon" iconType="Development"/>
              <p>Develop</p>
            </li>
            <li className="category-button list-flex clear" aria-controls="consulting-navigation" nohighlight="">
              <Icon className="logoicon" iconType="Consulting"/>
              <p>Consult</p>
            </li>
            <li className="category-button list-flex clear" aria-controls="portfolio-navigation" nohighlight="">
              <Icon className="logoicon" iconType="Portfolio"/>
              <p>Portfolio</p>
            </li>
            <li className="category-button list-flex clear" aria-controls="resume-navigation" nohighlight="">
              <Icon className="logoicon" iconType="Resume"/>
              <p>Resume</p>
            </li>											
            <li className="category-button list-flex clear" aria-controls="resume-navigation" nohighlight="">
                <Icon className="logoicon" iconType="Linkedin"/>
                <p>LinkedIn</p>
            </li>
            <li className="category-button list-flex">					
              <Icon className="logoicon" iconType="Contact"/>
              <p>Contact</p>
            </li>
          </ul>
      </nav>
      <main className="">
          <h1 className="text-3xl lg:text-5xl text-center mb-12">
            {globalData.blogTitle}
          </h1>
          <h2 className="text-3xl lg:text-2xl text-center mb-12">
            {globalData.blogCaption}
          </h2>
          <ul className="nav-list clear">
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
                    <Icon className="arrow mt-4" iconType="Arrow" />
                  </a>
                </Link>
              </li>
            ))}
          </ul>

      </main>
    </div>
  );
}
