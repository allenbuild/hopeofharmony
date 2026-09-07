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
            <h1>Our mission: to uplift the community through classical music &amp; various enrichment activities</h1>
            <div className="button-row">
              <Link className="button" href="/about">learn more <span aria-hidden="true">↗</span></Link>
              <Link className="text-link" href="/join">join us <span aria-hidden="true">→</span></Link>
            </div>
            <div className="home-truth-sticker">
              <Image
                src="/assets/editorial/speak-your-truth.png"
                alt="Speak Your Truth"
                width={1800}
                height={1800}
                priority
                unoptimized
              />
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
            <h2>Who we are:</h2>
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

      <section className="truth-feature truth-feature-rich">
        <div className="container truth-feature-grid">
          <div className="truth-art">
            <Image
              src="/assets/editorial/speak-your-truth.png"
              alt="Speak Your Truth creative competition"
              width={1800}
              height={1800}
              unoptimized
            />
          </div>
          <div className="truth-copy">
            <h2>SYT: Join the Competition!</h2>
            <p>
              In collaboration, Hope of Harmony and A.R.T.S proudly present the
              nationwide Speak Your Truth competition—an open call for creators
              of all ages to express their unique perspectives through art,
              music, writing, or photography. Winners in each category and
              division will be awarded certificates, with First Place receiving
              a $100 cash prize.
            </p>
            <p>
              Participants are encouraged to explore and communicate their truths
              through various artistic disciplines, responding to the issues and
              experiences that matter most to them.
            </p>
            <Link className="button button-dark" href="/speak-your-truth">learn more <span aria-hidden="true">↗</span></Link>
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
