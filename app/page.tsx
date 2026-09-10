import Image from "next/image";
import Link from "next/link";
import { MusicMotif } from "./components/music-motif";
import { PageFrame } from "./components/page-frame";
import { newsPosts } from "./site-data";

export default function HomePage() {
  return (
    <PageFrame active="home">
      <section className="home-hero home-hero-rich">
        <MusicMotif className="music-motif-home" />
        <div className="hero-petal hero-petal-one" />
        <div className="hero-petal hero-petal-two" />
        <div className="container home-rich-grid">
          <div className="home-logo-panel">
            <Image
              src="/assets/harmony-logo.png"
              alt="Hope of Harmony"
              width={1024}
              height={1024}
              priority
              unoptimized
            />
          </div>
          <div className="home-mission-card">
            <h1>Our Mission: To Uplift the Community Through Classical Music &amp; Various Enrichment Activities</h1>
            <div className="button-row">
              <Link className="button" href="/about">learn more <span aria-hidden="true">↗</span></Link>
              <a
                className="text-link"
                href="https://forms.gle/Rxo3mqPqjCaG6pBh7"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Join us via Google Forms (opens in a new tab)"
              >
                join us <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="home-about-rich">
        <div className="container home-about-rich-grid">
          <div className="home-about-mark" aria-hidden="true">
            <Image src="/assets/harmony-monogram.png" alt="" width={1080} height={1080} unoptimized />
          </div>
          <div className="home-about-copy">
            <h2>Who We Are:</h2>
            <p>
              Hope of Harmony is a student-led 501(c)(3) nonprofit organization
              dedicated to making a positive impact in our community through
              music and enrichment. We provide free orchestral concerts and a
              variety of other activities that bring people together and make
              the arts more accessible.
            </p>
            <Link className="button" href="/about">about us <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="section-space latest-news latest-news-rich">
        <div className="container section-heading-row">
          <h2>News</h2>
          <Link className="text-link" href="/news">All Posts <span aria-hidden="true">→</span></Link>
        </div>
        <div className="container news-grid">
          {newsPosts.slice(0, 2).map((post, index) => (
            <article className="news-card" key={post.slug}>
              <Link href={`/news/${post.slug}`} className="news-image">
                <Image src={post.cover} alt={post.title} width={1800} height={1200} unoptimized />
                <span>0{index + 1}</span>
              </Link>
              <div className="news-card-copy">
                <p>{post.date} · {post.author}</p>
                <h3><Link href={`/news/${post.slug}`}>{post.place}</Link></h3>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageFrame>
  );
}
