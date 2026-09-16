export const navigation = [
  { label: "home", href: "/", key: "home" },
  { label: "about us", href: "/about", key: "about" },
  { label: "our team", href: "/team", key: "team" },
  { label: "join us", href: "/join", key: "join" },
  { label: "news", href: "/news", key: "news" },
  { label: "contact us", href: "/contact", key: "contact" },
] as const;

export const submissionUrl =
  "https://docs.google.com/forms/d/10GU7NWCeuTSgyB5Lyr3P7bRSFU3xaTaXjzv4peoVmRo/edit";

export const categories = [
  {
    id: "visual-art",
    title: "Visual Art",
    image: "/assets/editorial/visual-art.jpg",
    credit: "A young girl gathering flowers in a field",
    description:
      "Submit original works in any visual medium—such as drawing, painting, collage, mixed media, digital art, or sculpture—that visually convey a message, idea, or issue you believe deserves attention. Each submission must be accompanied by a brief artist’s statement (up to 100 words) explaining the meaning or intention behind the piece.",
    guidelines: [
      "Take a picture of your work in natural daylight if possible (avoid direct sunlight or harsh shadows).",
      "Use a plain, clean background (white, black, or neutral preferred).",
      "Make sure the photo is in focus and not blurry.",
      "Do not use filters, heavy color editing, or digital enhancements.",
      "Do not trace or copy other artists’ work, including from books, the internet, or other media.",
      "The use of AI is strictly prohibited and will result in disqualification.",
    ],
  },
  {
    id: "music",
    title: "Music",
    image: "/assets/editorial/music.jpg",
    credit: "A violin resting on sheet music",
    description:
      "Record and submit original musical works in any style, including instrumental compositions, vocal pieces with lyrics, or other forms of musical expression. Your music should speak to a truth you want the world to hear. Each submission must include a brief statement (up to 100 words) describing the inspiration or message behind the piece.",
    guidelines: [
      "Memorization of the music score is not required.",
      "The video recording must not exceed 5 minutes.",
      "Video must be in one continuous shot (no cuts, fades, or edits).",
      "Record in a quiet environment free from background noise.",
      "Ensure that the instrument and the performer’s face and hands are clearly visible at all times.",
      "Live audio only (the use of sound effects, enhancements, overdubs are strictly prohibited).",
    ],
  },
  {
    id: "writing",
    title: "Writing",
    image: "/assets/editorial/writing.jpg",
    credit: "A hand writing on paper",
    description:
      "Submit original written work in any form, including poetry, short stories, personal essays, narratives, academic essays, or other creative or analytical writing (up to 1,500 words) that explores themes, experiences, or topics meaningful to you.",
    guidelines: [
      "All submissions must be original work by the author (plagiarism will result in disqualification).",
      "Submission must not exceed 1,500 words.",
    ],
  },
  {
    id: "photography",
    title: "Photography",
    image: "/assets/editorial/photography.jpg",
    credit: "A camera held in the photographer’s hands",
    description:
      "Submit photographs—color or black and white—that capture a subject, moment, or scene reflecting a truth or issue that matters to you. Submissions may be symbolic, abstract, or direct in representation. Each entry must be accompanied by a brief artist’s statement (up to 100 words) explaining the significance or intention behind the image.",
    guidelines: [
      "All photos must be original work by the submitting photographer.",
      "AI-generated or copyrighted images are strictly prohibited and will result in disqualification.",
      "Minimal retouching is allowed (i.e. exposure, contrast, color balance, etc…)",
    ],
  },
] as const;

export type NewsPost = {
  slug: string;
  title: string;
  eventDate: string;
  place: string;
  author: string;
  date: string;
  updated?: string;
  likes: number;
  cover: string;
  images: string[];
  summary?: string;
};

export const newsPosts: NewsPost[] = [
  {
    slug: "kensington",
    title: "July 22nd, 2025: The Kensington",
    eventDate: "July 22nd, 2025",
    place: "The Kensington",
    author: "Lin Zhang",
    date: "Aug 5, 2025",
    likes: 3,
    cover: "/assets/editorial/kensington-1.jpg",
    images: [
      "/assets/editorial/kensington-1.jpg",
      "/assets/editorial/kensington-2.jpg",
      "/assets/editorial/kensington-3.jpg",
      "/assets/editorial/kensington-4.jpg",
    ],
  },
  {
    slug: "arcadia-living",
    title: "July 20th, 2025: Arcadia Living",
    eventDate: "July 20th, 2025",
    place: "Arcadia Living",
    author: "Lin Zhang",
    date: "Jul 20, 2025",
    updated: "Updated: Jul 24, 2025",
    likes: 3,
    cover: "/assets/editorial/arcadia-1.jpg",
    images: [
      "/assets/editorial/arcadia-1.jpg",
      "/assets/editorial/arcadia-2.jpg",
      "/assets/editorial/arcadia-3.jpg",
      "/assets/editorial/arcadia-4.jpg",
      "/assets/editorial/arcadia-5.jpg",
      "/assets/editorial/arcadia-6.jpg",
      "/assets/editorial/arcadia-7.jpg",
    ],
  },
  {
    slug: "ivy-park-san-marino",
    title: "July 20th, 2025: Ivy Park at San Marino",
    eventDate: "July 20th, 2025",
    place: "Ivy Park at San Marino",
    author: "Lin Zhang",
    date: "Jul 20, 2025",
    updated: "Updated: Jul 24, 2025",
    likes: 0,
    cover: "/assets/editorial/ivy-park-1.jpg",
    images: [
      "/assets/editorial/ivy-park-1.jpg",
      "/assets/editorial/ivy-park-2.jpg",
      "/assets/editorial/ivy-park-3.jpg",
      "/assets/editorial/ivy-park-4.jpg",
      "/assets/editorial/ivy-park-5.jpg",
      "/assets/editorial/ivy-park-6.jpg",
    ],
  },
  {
    slug: "arcadia-retirement-village",
    title: "July 16th, 2025: Arcadia Retirement Village",
    eventDate: "July 16th, 2025",
    place: "Arcadia Retirement Village",
    author: "Lin Zhang",
    date: "Jul 16, 2025",
    likes: 0,
    cover: "/assets/editorial/arcadia-retirement-1.jpg",
    images: [
      "/assets/editorial/arcadia-retirement-1.jpg",
      "/assets/editorial/arcadia-retirement-2.jpg",
      "/assets/editorial/arcadia-retirement-3.jpg",
      "/assets/editorial/arcadia-retirement-4.jpg",
      "/assets/editorial/arcadia-retirement-5.jpg",
    ],
    summary: "Hope of Harmony's first event in 2025!",
  },
  {
    slug: "glenn-park-event-2",
    title: "June 29th, 2024: Glenn Park Event #2",
    eventDate: "June 29th, 2024",
    place: "Glenn Park Event #2",
    author: "Lin Zhang",
    date: "Aug 6, 2024",
    likes: 0,
    cover: "/assets/editorial/glenn-park-2-1.jpg",
    images: [
      "/assets/editorial/glenn-park-2-1.jpg",
      "/assets/editorial/glenn-park-2-2.jpg",
      "/assets/editorial/glenn-park-2-3.jpg",
    ],
    summary: "Hope of Harmony's first event made such an impact on the Glenn Park residents that the Glenn Park staff extended another invitation to the Hope of Harmony music branch. Although this event was smaller than the first, the senior residents and Hope Of harmony were still able to make meaningful connections through the beauty of the music.",
  },
  {
    slug: "glenn-park-event-1",
    title: "April 6, 2024: Glenn Park Event #1",
    eventDate: "April 6, 2024",
    place: "Glenn Park Event #1",
    author: "Lin Zhang",
    date: "Jul 22, 2024",
    likes: 0,
    cover: "/assets/editorial/glenn-park-1-1.jpg",
    images: [
      "/assets/editorial/glenn-park-1-1.jpg",
      "/assets/editorial/glenn-park-1-2.jpg",
      "/assets/editorial/glenn-park-1-3.jpg",
      "/assets/editorial/glenn-park-1-4.jpg",
    ],
    summary: "Music and laughter filled the halls of Glenn Park at Monrovia Nursing Home as fellow Hope of Harmony members led on a spectacular performance. Members demonstrated their area of expertise in music through playing the violin, the cello, guitar, and even singing. Yet, the fun does not end there. The following week, members of the organization came back to Glenn Park with enriching activities, such as jenga and ballon volleyball, to entertain the seniors. The event created a memorable, long-last memory in the hearts of the seniors as they voiced their appreciation for Hope of Harmony.",
  },
  {
    slug: "faith-united-methodist-church",
    title: "May 14, 2023: Performance at Faith United Methodist Church of San Gabriel Valley",
    eventDate: "May 14, 2023",
    place: "Faith United Methodist Church of San Gabriel Valley",
    author: "Lin Zhang",
    date: "Feb 29, 2024",
    updated: "Updated: Mar 19, 2024",
    likes: 0,
    cover: "/assets/editorial/faith-united-1.jpg",
    images: ["/assets/editorial/faith-united-1.jpg"],
    summary: "On a very special day, Mother’s Day, Hope Of Harmony was invited by the pastor of the Faith United Methodist Church, Zicong Li, to perform during the opening of the worship service. Moments later, the musicians also served as an accompaniment for the church choir, as the choir sang verses in praise of mothers. This was not only an event to uplift the spirit of the community but also an event to show appreciation towards the selfless and loving individuals within the community.",
  },
];

export function getNewsPost(slug: string) {
  return newsPosts.find((post) => post.slug === slug);
}
