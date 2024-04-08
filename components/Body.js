import Link from 'next/link';
import Icon from '../components/Icons';

export default function Body({ posts, globalData }) {
  return (
    <div className="wrapper">
      <main className="">
          <h1 className="text-3xl lg:text-5xl text-center mb-12">
            {globalData.blogTitle}
          </h1>
          <h2 className="text-3xl lg:text-2xl text-center mb-12">
            {globalData.blogCaption}
          </h2>
          <nav className="primary-navigation" id="primary-navigation">
            <ul className="nav-list clear">
              {posts.map((post) => (
                <li
                  key={post.filePathn}
                  className="category-button list-flex clear"
                >
                  <Link
                    as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                    href={`/posts/[slug]`}
                  >
                    <a className="">
                      
                      <Icon className="logoicon" iconType={post.data.logo}/>
                      <p className="">{post.data.title}</p>

                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

      </main>
    </div>
  );
}
