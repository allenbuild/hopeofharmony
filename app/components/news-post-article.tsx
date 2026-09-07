import Image from "next/image";
import Link from "next/link";
import type { NewsPost } from "../site-data";
import { LikeButton } from "./like-button";
import { PageFrame } from "./page-frame";

export function NewsPostArticle({ post }: { post: NewsPost }) {
  return (
    <PageFrame active="news">
      <article className="post-page">
        <header className="post-header container">
          <Link className="back-link" href="/news">← All Posts</Link>
          <h1>{post.title}</h1>
          <div className="post-meta">
            <span>{post.author}</span>
            <span>{post.date}</span>
            <span>{post.readTime}</span>
            {post.updated ? <span>{post.updated}</span> : null}
          </div>
        </header>
        {post.summary ? <p className="container post-summary">{post.summary}</p> : null}
        <div className="container post-gallery">
          {post.images.map((image, index) => (
            <figure key={image} className={index === 0 ? "wide" : undefined}>
              <Image
                src={image}
                alt={`${post.title}, photograph ${index + 1}`}
                width={1600}
                height={1067}
                priority={index === 0}
                unoptimized
              />
            </figure>
          ))}
        </div>
        <footer className="container post-footer">
          <LikeButton slug={post.slug} initialLikes={post.likes} />
          <Link href="/news">Recent Posts →</Link>
        </footer>
      </article>
    </PageFrame>
  );
}
