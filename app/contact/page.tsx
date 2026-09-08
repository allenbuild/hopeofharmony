import { ContactForm } from "../contact-form";
import Image from "next/image";
import { PageFrame } from "../components/page-frame";
import { PageHero } from "../components/page-hero";

export default function ContactPage() {
  return (
    <PageFrame active="contact">
      <PageHero
        className="contact-hero"
        title={<span id="contact-page-title">Email Us</span>}
        showMark={false}
        aside={
          <address className="contact-hero-card" style={{ fontStyle: "normal" }}>
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
          </address>
        }
      />

      <section
        className="section-space contact-page"
        aria-labelledby="contact-page-title"
      >
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
