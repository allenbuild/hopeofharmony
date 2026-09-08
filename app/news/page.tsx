import Image from "next/image";
import Link from "next/link";
import { LikeButton } from "../components/like-button";
import { PageFrame } from "../components/page-frame";
import { PageHero } from "../components/page-hero";
import { newsPosts } from "../site-data";

export default function NewsPage() {
  return (
    <PageFrame active="news">
      <PageHero
        className="news-hero"
        title={<>News</>}
      />

      <section className="section-space news-index">
        <div className="container news-index-list">
          {newsPosts.map((post, index) => (
            <article key={post.slug} className="news-index-card">
              <div className="news-index-number">0{index + 1}</div>
              <Link href={`/news/${post.slug}`} className="news-index-image">
                <Image
                  src={post.cover}
                  alt={post.title}
                  width={1600}
                  height={1067}
                  priority={index === 0}
                  unoptimized
                />
              </Link>
              <div className="news-index-copy">
                <p>{post.author}</p>
                <h2>
                  <span className="news-event-date">{post.eventDate}</span>
                  <Link aria-label={post.title} href={`/news/${post.slug}`}>
                    {post.place}
                  </Link>
                </h2>
                <div className="news-meta-row">
                  <LikeButton slug={post.slug} initialLikes={post.likes} />
                  <Link href={`/news/${post.slug}`}>View story <span aria-hidden="true">↗</span></Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageFrame>
  );
}
