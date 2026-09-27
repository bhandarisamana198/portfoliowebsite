export type Post = {
  slug: string;
  title: string;
  date: string;
  category: string;
  readingTime: string;
  excerpt: string;
  content: string[];
};

// Add new learning notes here. Each entry becomes a page at /blog/[slug].
export const posts: Post[] = [
  {
    slug: "my-own-corner-of-the-internet",
    title: "A little corner of the internet to call my own",
    date: "September 27, 2026",
    category: "PERSONAL NOTE",
    readingTime: "2 MIN READ",
    excerpt: "I have my own domain now, and this is my first blog post. Here’s to having a place to share what I’m learning as I go.",
    content: [
      "I have my own domain now. It feels like a small thing, but seeing a little corner of the internet with my name on it makes the next step feel real.",
      "And this is my first blog post. I’m starting this space to share what I’m learning about digital marketing, the ideas I’m curious about, and the lessons I pick up along the way. I’m still figuring things out, so these notes will be part of the process—not a finished playbook.",
      "I’m excited to keep learning, writing, and making this space my own. Thanks for being here at the beginning."
    ],
  },
  {
    slug: "seo-starts-with-the-searcher",
    title: "SEO starts with the searcher, not the keyword",
    date: "September 18, 2026",
    category: "SEARCH & SEO",
    readingTime: "4 MIN READ",
    excerpt: "A beginner’s reminder to look beyond search volume and ask what someone actually needs.",
    content: [
      "When I first started learning SEO, I thought the job was mostly about finding popular keywords. The more I learn, the more I see that the better starting point is a person and a question.",
      "Search intent is the reason behind a query. Someone looking up a definition needs a different page than someone comparing products or ready to make a purchase. Matching the page to that need is what makes the result useful.",
      "My takeaway: before I choose a keyword, I want to look at the words people use, the results already appearing, and the next step a searcher might need. Helpful content starts with listening."
    ],
  },
  {
    slug: "a-content-calendar-with-a-purpose",
    title: "A content calendar should leave room for curiosity",
    date: "September 10, 2026",
    category: "CONTENT & STORYTELLING",
    readingTime: "3 MIN READ",
    excerpt: "Planning helps a team show up consistently. The best plans still leave space to respond and experiment.",
    content: [
      "A content calendar is useful because it takes the pressure out of starting from scratch every day. It gives a team a shared view of what is coming and why each piece exists.",
      "But a calendar can become a checklist if every post is fixed too far in advance. Conversations shift, new questions appear, and sometimes a timely idea deserves a spot on the schedule.",
      "I’m learning to think of a calendar as a framework: plan around a few clear themes, set a sustainable rhythm, and keep room for listening. Consistency matters, and so does being present."
    ],
  },
  {
    slug: "metrics-are-clues",
    title: "Metrics are clues, not the whole story",
    date: "August 28, 2026",
    category: "ANALYTICS & INSIGHT",
    readingTime: "5 MIN READ",
    excerpt: "A click or a like only means something when it connects back to the goal of the work.",
    content: [
      "It’s easy to focus on the number that went up. I’m learning to pause and ask what that number tells us about the people we’re trying to reach.",
      "A high reach can be encouraging, but reach alone doesn’t tell us whether someone understood the message or took a useful next step. The metric needs context: the campaign goal, the audience, and what happened after the impression.",
      "The question I’m keeping close is simple: what would we do differently because of this data? If I can answer that, the metric is starting to become an insight."
    ],
  },
];
