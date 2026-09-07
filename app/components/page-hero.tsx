import Image from "next/image";
import { ReactNode } from "react";
import { MusicMotif } from "./music-motif";

export function PageHero({
  className,
  eyebrow,
  title,
  intro,
  aside,
  showMark = true,
}: {
  className?: string;
  eyebrow?: string;
  title: ReactNode;
  intro?: string;
  aside?: ReactNode;
  showMark?: boolean;
}) {
  return (
    <section className={`page-hero${className ? ` ${className}` : ""}`}>
      <MusicMotif className="music-motif-hero" />
      <div className="container page-hero-grid">
        <div>
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1>{title}</h1>
          {intro ? <p className="hero-intro">{intro}</p> : null}
        </div>
        {aside ? <div className="page-hero-aside">{aside}</div> : null}
      </div>
      {showMark ? (
        <div className="page-hero-mark" aria-hidden="true">
          <Image
            src="/assets/harmony-monogram.png"
            alt=""
            width={1080}
            height={1080}
            priority
            unoptimized
          />
        </div>
      ) : null}
      <div className="page-hero-flower page-hero-flower-primary" aria-hidden="true">
        <Image
          src="/assets/daffodils.png"
          alt=""
          width={1200}
          height={675}
          priority
          unoptimized
        />
      </div>
      <div className="page-hero-flower-secondary" aria-hidden="true">
        <Image
          src="/assets/daffodils.png"
          alt=""
          width={1200}
          height={675}
          priority
          unoptimized
        />
      </div>
    </section>
  );
}
