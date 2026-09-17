import { PageFrame } from "../components/page-frame";
import { PageHero } from "../components/page-hero";

const openRoles = ["Public Relations", "Treasurer"];

const additionalMembers = [
  {
    role: "Vice President",
    name: "Olivia Hui",
    bio: "Olivia likes shopping and taking photos in her free time, as well as, playing viola and looking at music for string quartets. She joined Hope of Harmony to bring more accessibility to music and have a great time with the friends she will be making music with.",
  },
  {
    role: "Secretary",
    name: "Jonathan Leung",
    bio: "Jonathan Leung is a junior at Arcadia High School. In his free time he enjoys cooking, traveling, eating with friends, and playing volleyball. Jonathan is joining Hope Of Harmony because he loves music and hopes to share that passion with others around him.",
  },
  {
    role: "Outreach Director",
    name: "Isabella Budasz",
    bio: "Isabella really likes collecting stuff like LPS figures and cute stickers. She loves to play her cello and sight read new pieces. For Isabella, Hope of Harmony is such an incredible opportunity to connect with her community and bring music to those it may help the most. She hopes to make people smile and rejoice through their love for music.",
  },
];

export default function TeamPage() {
  return (
    <PageFrame active="team">
      <PageHero
        className="team-hero"
        title={<>Our Team</>}
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
          {additionalMembers.map((member, index) => (
            <article
              className={`team-profile${index % 2 === 1 ? " offset" : ""}`}
              key={member.role}
            >
              <div className="profile-number">0{index + 3}</div>
              <div className="profile-heading">
                <p>{member.role}</p>
                <h2>{member.name}</h2>
              </div>
              <p>{member.bio}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="roles-section">
        <div className="container roles-grid">
          <div className="role-list">
            {openRoles.map((role, index) => (
              <div key={role}>
                <span>0{index + additionalMembers.length + 3}</span>
                <p>{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </PageFrame>
  );
}
