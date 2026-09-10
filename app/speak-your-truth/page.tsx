import Image from "next/image";
import { notFound } from "next/navigation";
import { PageFrame } from "../components/page-frame";
import { PageHero } from "../components/page-hero";
import { categories, submissionUrl } from "../site-data";

export default function SpeakYourTruthPage() {
  notFound();

  return (
    <PageFrame active="truth">
      <PageHero
        className="truth-hero"
        title={<>Speak Your Truth</>}
        showMark={false}
        intro="In collaboration, Hope of Harmony and A.R.T.S proudly present the nationwide Speak Your Truth competition—an open call for creators of all ages to express their unique perspectives through art, music, writing, or photography. Winners in each category and division will be awarded certificates, with First Place receiving a $100 cash prize."
        aside={
          <div className="prize-note">
            <span className="prize-note-symbol" aria-hidden="true">♫</span>
            <p>First place</p>
            <strong>$100</strong>
            <span>cash prize + trophy</span>
          </div>
        }
      />

      <section className="competition-intro section-space">
        <div className="container competition-intro-grid">
          <div className="truth-seal">
            <Image
              src="/assets/editorial/speak-your-truth.png"
              alt="Speak Your Truth"
              width={1800}
              height={1800}
              priority
              unoptimized
            />
          </div>
          <div>
            <h2>About the Theme</h2>
            <p className="large-copy">
              What change do you want to see in the world? What injustice weighs on your heart? This year’s theme, Speak Your
              Truth, calls on artists, musicians, writers, and photographers to
              explore the issues that matter to them most.
            </p>
            <p>
              Entries may respond to global issues like climate change, racial
              injustice, mental health, gender equity, poverty, or other topics
              that deserve awareness and action. The theme is intentionally
              broad—your truth is yours to define.
            </p>
            <p>
              Participants are encouraged to explore and communicate their
              truths through various artistic disciplines, responding to the
              issues and experiences that matter most to them.
            </p>
          </div>
        </div>
      </section>

      <section className="category-section">
        <div className="container section-heading-row">
          <h2>Categories</h2>
          <div className="category-heading-art" aria-hidden="true">
            <span>♪</span>
            <span>♫</span>
            <Image
              src="/assets/daffodils.png"
              alt=""
              width={1200}
              height={675}
              unoptimized
            />
          </div>
        </div>
        <div className="category-list">
          {categories.map((category, index) => (
            <article className="category-item" id={category.id} key={category.id}>
              <div className="container category-layout">
                <div className="category-image">
                  <Image
                    src={category.image}
                    alt={category.credit}
                    width={1960}
                    height={704}
                    unoptimized
                  />
                </div>
                <div className="category-copy-grid">
                  <span className="category-number">0{index + 1}</span>
                  <div>
                    <h3>{category.title}</h3>
                    <p className="category-description">{category.description}</p>
                    <details className="guidelines">
                      <summary>
                        <span>Specific Guidelines</span>
                        <span aria-hidden="true">+</span>
                      </summary>
                      <div>
                        <p className="eyebrow">SYT: {category.title}</p>
                        <ul>
                          {category.guidelines.map((guideline) => (
                            <li key={guideline}>{guideline}</li>
                          ))}
                        </ul>
                      </div>
                    </details>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="competition-details section-space">
        <div className="container detail-columns">
          <div className="detail-block">
            <h2>Divisions</h2>
            <p>
              Entries will be judged within their respective divisions to ensure
              fairness and age-appropriate evaluation.
            </p>
            <ol className="division-list">
              <li><span>Junior Division</span><strong>Grades K–7</strong></li>
              <li><span>Senior Division</span><strong>Grade 8 and above (open to all ages regardless of school enrollment)</strong></li>
            </ol>
          </div>
          <div className="detail-block submission-block">
            <h2>Submission Guidelines</h2>
            <h3>Speak Your Truth</h3>
            <ul>
              <li>All entries must be submitted through the official submission form.</li>
              <li>Participants may submit multiple entries, either within the same category or across different categories.</li>
              <li>All work must be original. Plagiarism of any kind will result in disqualification. Entries that are heavily influenced by the work of other artists (even without direct copying) will not be considered original. Additionally, we do not accept work created using AI tools or incorporating AI-generated content.</li>
              <li>All judging decisions are final. Winners will be recognized within each category and division. First-place recipients will receive a $100 award and a trophy; second- and third-place recipients will receive a trophy.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="submission-cta">
        <div className="container submission-cta-grid">
          <div className="submission-heading-group">
            <div>
              <p className="eyebrow">Submission Deadline</p>
              <h2>Rolling Basis</h2>
            </div>
          </div>
          <a
            className="button submission-button"
            href={submissionUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Submit your work via Google Forms (opens in a new tab)"
          >
            Submit your work <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </PageFrame>
  );
}
