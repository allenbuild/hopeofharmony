import Image from "next/image";
import Link from "next/link";
import { MusicMotif } from "./music-motif";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <MusicMotif className="music-motif-footer" />
      <div className="footer-flower" aria-hidden="true">
        <Image
          src="/assets/editorial/team-portrait-b.png"
          alt=""
          width={1600}
          height={900}
          unoptimized
        />
      </div>
      <div className="footer-daffodil" aria-hidden="true">
        <Image
          src="/assets/editorial/team-portrait-a.png"
          alt=""
          width={1600}
          height={900}
          unoptimized
        />
      </div>
      <div className="container footer-grid">
        <div className="footer-brand-lockup">
          <Image
            src="/assets/harmony-logo.png"
            alt="Hope of Harmony"
            width={1024}
            height={1024}
            unoptimized
          />
        </div>
        <p className="footer-mission">
          Our mission: to uplift the community through classical music &amp;
          various enrichment activities
        </p>
        <div className="footer-contact">
          <p className="footer-label">Email us</p>
          <a href="mailto:harmonyofhope.org@gmail.com">
            harmonyofhope.org@gmail.com
          </a>
          <Link className="button button-light" href="/join">join us <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </footer>
  );
}
