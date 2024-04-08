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
            <ul className="cardrow gallery nav-list clear">
              {posts.map((post) => (
                <li
                  key={post.filePathn}
                  className="clear card card-border"
                >
                  <Link
                    as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                    href={`/posts/[slug]`}
                  >
                  
                    <a className="">
                      <div class="card-image">
                        <Icon className="img" iconType={post.data.logo}/>
                        <Icon className="img2" iconType={post.data.logo}/>
                      </div>
                      <div class="card-text">
                        <p>{post.data.title}</p>
                      </div>
                        
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
