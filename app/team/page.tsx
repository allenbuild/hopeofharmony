import { PageFrame } from "../components/page-frame";
import { PageHero } from "../components/page-hero";

const openRoles = ["Vice President", "Secretary", "Public Relations", "Treasurer"];

export default function TeamPage() {
  return (
    <PageFrame active="team">
      <PageHero
        className="team-hero"
        title={<>Our team</>}
      />

      <section className="section-space team-leads">
        <div className="container team-lead-grid">
          <article className="team-profile">
            <div className="profile-number">01</div>
            <div className="profile-heading">
              <p>President</p>
              <h2>Alyssa Guo</h2>
            </div>
            <p>
              Alyssa loves exploring new cafés and restaurants and discovering
              different cultures. She enjoys playing cello and listening to
              music. Alyssa believes Hope of Harmony is a meaningful organization
              because it makes music accessible to everyone in the community. She
              hopes to share her love of music with others and help them enjoy it
              as much as she does.
            </p>
          </article>

          <article className="team-profile offset">
            <div className="profile-number">02</div>
            <div className="profile-heading">
              <p>President</p>
              <h2>Tyler Chin</h2>
            </div>
            <p>
              When he&apos;s not busy, Tyler enjoys trying new foods, traveling to
              new places, and finding unique pieces while thrifting. He believes
              music has a unique way of bringing people together, and hopes to
              help Hope of Harmony share that experience with more people in the
              community.
            </p>
          </article>
        </div>
      </section>

      <section className="roles-section">
        <div className="container roles-grid">
          <div className="role-list">
            {openRoles.map((role, index) => (
              <div key={role}>
                <span>0{index + 3}</span>
                <p>{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </PageFrame>
  );
}
