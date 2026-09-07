import Image from "next/image";
import Link from "next/link";
import { PageFrame } from "../components/page-frame";
import { PageHero } from "../components/page-hero";

export default function AboutPage() {
  return (
    <PageFrame active="about">
      <PageHero
        title={<>Who we are:</>}
      />

      <section className="section-space about-editorial">
        <div className="container editorial-grid">
          <div className="editorial-botanical" aria-hidden="true">
            <Image src="/assets/editorial/team-portrait-a.png" alt="" width={1600} height={900} unoptimized />
          </div>
          <div className="editorial-copy">
            <p className="drop-copy">
              Hope of Harmony is a student-led 501(c)(3) nonprofit organization
              dedicated to making a positive impact in our community through
              music and enrichment. We provide free orchestral concerts and a variety of other
              activities that bring people together and make the arts more
              accessible. We are an inclusive organization that welcomes
              individuals with all kinds of talents, interests and experiences.
              We believe everyone has something meaningful to contribute and
              strive to create opportunities for students to share their passions
              while making a difference in their community.
            </p>
            <div className="president-note ornamental-note">
              <p>Co-Presidents</p>
              <h2>Alyssa Guo and Tyler Chin</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="botanical-statement">
        <div className="container botanical-statement-grid">
          <div className="botanical-statement-copy">
            <blockquote>
              “Everyone has something meaningful to contribute.”
            </blockquote>
            <Link className="button button-light" href="/team">
              our team <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
