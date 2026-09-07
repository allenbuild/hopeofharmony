import { ContactForm } from "../contact-form";
import Image from "next/image";
import { PageFrame } from "../components/page-frame";
import { PageHero } from "../components/page-hero";

export default function ContactPage() {
  return (
    <PageFrame active="contact">
      <PageHero
        className="contact-hero"
        title={<>Email us</>}
        showMark={false}
        aside={
          <div className="contact-hero-card">
            <Image
              src="/assets/editorial/team-portrait-a.png"
              alt=""
              width={1600}
              height={900}
              unoptimized
            />
            <a className="hero-email" href="mailto:harmonyofhope.org@gmail.com">
              harmonyofhope.org@gmail.com
            </a>
          </div>
        }
      />

      <section className="section-space contact-page">
        <div className="container contact-page-grid">
          <div className="contact-art" aria-hidden="true">
            <Image src="/assets/editorial/team-portrait-b.png" alt="" width={1600} height={900} unoptimized />
          </div>
          <ContactForm />
        </div>
      </section>
    </PageFrame>
  );
}
