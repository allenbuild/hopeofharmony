import Image from "next/image";
import { PageFrame } from "../components/page-frame";
import { PageHero } from "../components/page-hero";

const interestForm = "https://forms.gle/Rxo3mqPqjCaG6pBh7";

export default function JoinPage() {
  return (
    <PageFrame active="join">
      <PageHero
        className="join-hero"
        title={<>Interest Form:</>}
        showMark={false}
        intro="Open to students, 6th grade and above."
        aside={<a className="button join-hero-link" href={interestForm}>Join us <span aria-hidden="true">↗</span></a>}
      />

      <section className="section-space join-story">
        <div className="container editorial-grid">
          <div className="editorial-botanical" aria-hidden="true">
            <Image src="/assets/editorial/team-portrait-a.png" alt="" width={1600} height={900} unoptimized />
          </div>
          <div className="editorial-copy">
            <p className="drop-copy">
              Hope of Harmony is a student-made organization, operating as an
              extension of the Speranza Youth Chamber Orchestra, which is a
              501(c)3 nonprofit organization.
            </p>
            <p>
              Here, we strive to make the community a better place through the
              performance of orchestral concerts, as well as various other
              enrichment activities, all free of any charge. Hope of Harmony is
              a diverse organization, where individuals with all sorts of talents
              and qualities are welcomed.
            </p>
          </div>
        </div>
      </section>

      <section className="pathways">
        <div className="container pathways-grid">
          <div className="pathway-title pathway-art" aria-hidden="true">
            <Image src="/assets/editorial/team-portrait-b.png" alt="" width={1600} height={900} unoptimized />
          </div>
          <article>
            <span>01</span>
            <h3>Music Team</h3>
          </article>
          <article>
            <span>02</span>
            <h3>Activity Team</h3>
          </article>
        </div>
      </section>

      <section className="section-space join-final">
        <div className="container join-final-grid">
          <div>
            <h2>Interest Form:</h2>
          </div>
          <div>
            <p>
              If you are interested in joining the nonprofit organization, Hope
              of Harmony, please fill this form out. If you are confused or have
              questions, please DM <a href="https://www.instagram.com/hopeofharmony_">hopeofharmony_</a> on Instagram or reach us through email: <a href="mailto:harmonyofhope.org@gmail.com">harmonyofhope.org@gmail.com</a>.
            </p>
            <a className="button" href={interestForm}>Join us <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
