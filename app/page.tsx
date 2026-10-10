import Link from "next/link";
import Image from "next/image";
import { posts } from "@/content/posts";

const Arrow = ({ diagonal = false }: { diagonal?: boolean }) => (
  <span aria-hidden="true" className="arrow">{diagonal ? "↗" : "→"}</span>
);

export default function Home() {
  return (
    <main>
      <header className="topbar shell">
        <Link className="wordmark" href="/">s<span>.</span></Link>
        <nav aria-label="Main navigation">
          <a href="#about">About</a><a href="#work">What I do</a><a href="#projects">Projects</a><Link href="/blog">Journal</Link>
        </nav>
        <a className="nav-cta" href="#contact">Let’s talk <Arrow diagonal /></a>
      </header>

      <section className="hero shell">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> ASPIRING DIGITAL MARKETER · <span className="label-highlight">OPEN TO INTERNSHIPS</span></div>
          <h1>Creative thinker.<br /><span>Digital</span> marketer.</h1>
          <p className="hero-intro">Hi, I’m Samana Bhandari — an aspiring digital marketer building practical experience with Meta ads, social media, SEO, and content.</p>
          <div className="hero-actions"><a className="button button-dark" href="#contact">Let’s work together <Arrow diagonal /></a><a className="text-link" href="#work">Explore my interests <Arrow /></a></div>
          <div className="hero-note"><span className="note-mark">✳</span><span>Currently training<br /><strong>Meta Ads · Google Ads · SEO</strong></span></div>
        </div>
        <div className="hero-art">
          <Image className="profile-photo" src="/samana-profile-pic.png" alt="Portrait of Samana" fill priority sizes="(max-width: 800px) 100vw, 48vw" />
          <div className="photo-caption"><span>HELLO, I’M SAMANA</span><span>CURIOUS BY NATURE <i>✳</i></span></div>
        </div>
        <div className="hero-bottom"><span>BASED IN KATHMANDU, NEPAL</span><span>MARKETING · WEB · ACCOUNTING EXPERIENCE</span><a href="#about">SCROLL TO EXPLORE ↓</a></div>
      </section>

      <section className="intro-section" id="about"><div className="shell intro-grid"><div className="about-aside"><Image className="about-photo" src="/samana-about.jpg" alt="Samana smiling" width={500} height={500} /></div><div className="about-copy"><h2 className="about-section-title">Introduction</h2><p className="body-copy">I’m an aspiring digital marketer with hands-on practice creating social pages and running Meta awareness, traffic, engagement, and lead campaigns. I’m currently completing practical digital marketing training and building my skills in SEO, Google Ads, Canva, and WordPress.</p><p className="body-copy">Before focusing on marketing, I worked as an accountant and completed internships in accounting and web development. Those roles helped me build care with details, confidence with records, and an appreciation for how websites work.</p><a className="underlined-link" href="#experience">Explore my experience <Arrow /></a></div></div></section>

      <section className="work-section shell" id="work"><div className="section-heading"><div><div className="section-label">02 / <span className="label-highlight">SKILLS I’M BUILDING</span></div><h2>Good marketing starts<br />with <em>good questions.</em></h2></div><p>Practical training and project work across paid social, search, content, and website tools.</p></div><div className="skill-grid"><article className="skill-card skill-lilac"><span className="skill-index">01</span><div className="skill-icon">⌕</div><h3>SEO &amp; WordPress</h3><p>Learning the fundamentals of SEO and building familiarity with WordPress websites.</p><span className="skill-tag">SEARCH &amp; WEB</span></article><article className="skill-card skill-yellow"><span className="skill-index">02</span><div className="skill-icon">✳</div><h3>Meta advertising</h3><p>Campaign, ad set, and ad structure, audience setup, and awareness, traffic, engagement, and lead objectives.</p><span className="skill-tag">META ADS</span></article><article className="skill-card skill-pink"><span className="skill-index">03</span><div className="skill-icon">↗</div><h3>Social &amp; creative</h3><p>Creating Facebook and Instagram business pages and using Canva for campaign creative.</p><span className="skill-tag">SOCIAL · CANVA</span></article><article className="skill-card skill-green"><span className="skill-index">04</span><div className="skill-icon">◷</div><h3>Google Ads &amp; content</h3><p>Developing practical skills in Google Ads, content marketing, and campaign planning.</p><span className="skill-tag">IN TRAINING</span></article></div></section>

      <section className="projects-section shell" id="projects"><div className="section-heading"><div><div className="section-label">03 / SELECTED PRACTICE PROJECTS</div><h2>Learning by<br /><em>doing the work.</em></h2></div><p>Campaign practice and social presence projects completed during digital marketing training.</p></div><div className="project-grid"><article className="project-card"><span className="skill-tag">LEAD CAMPAIGN</span><h3>Fitflow Gym Management Software</h3><p>Created a Facebook and Instagram business presence and ran a Meta lead campaign for gym management software.</p></article><article className="project-card"><span className="skill-tag">AWARENESS · ENGAGEMENT</span><h3>Sanu Beauty Parlour</h3><p>Created business pages and practiced Meta awareness campaigns with broad targeting, alongside an engagement campaign.</p></article><article className="project-card"><span className="skill-tag">TRAFFIC CAMPAIGN</span><h3>Sabu Furniture</h3><p>Created social business pages and ran a Meta traffic campaign, testing broad and detailed audience targeting.</p></article></div></section>

      <section className="experience-section"><div className="shell intro-grid"><div className="section-label" id="experience">04 / EXPERIENCE &amp; EDUCATION</div><div><h2>A varied foundation.<br /><em>A new direction.</em></h2><div className="timeline-item"><h3>Accountant · Travel Namaste Pvt. Ltd.</h3><p>January 2024 – June 2026 · Accounting and financial record keeping.</p></div><div className="timeline-item"><h3>Account Intern · Rastriya Beema Sanstha</h3><p>June – September 2019 · Financial records, reports, filing, and bookkeeping software.</p></div><div className="timeline-item"><h3>Web Developer Intern · Maksey Consultancy</h3><p>March – August 2016 · Web interfaces and web application development using JavaScript, HTML, and CSS.</p></div><div className="timeline-item"><h3>Master’s · School of Management, Tribhuvan University</h3><p>CGPA 3.69 · 2020</p></div><div className="timeline-item"><h3>Bachelor’s · Oxford College of Engineering and Management</h3><p>CGPA 3.06 · 2016</p></div><div className="timeline-item"><h3>Digital marketing training &amp; certification</h3><p>Skill Shikshya · Ongoing practical training<br />Google Digital Garage · Fundamentals of Digital Marketing, April 2020</p></div></div></div></section>

      <section className="journal-section"><div className="shell"><div className="journal-heading"><div><div className="section-label">05 / THE LEARNING JOURNAL</div><h2>Notes from the <em>process.</em></h2></div><Link className="underlined-link" href="/blog">All journal entries <Arrow /></Link></div><div className="post-grid">{posts.slice(0, 3).map((post, index) => <Link className={`post-card post-tone-${index + 1}`} href={`/blog/${post.slug}`} key={post.slug}><div className="post-top"><span>{post.category}</span><span>{post.readingTime}</span></div><div className="post-symbol">{["↗", "✳", "◌"][index]}</div><h3>{post.title}</h3><p>{post.excerpt}</p><div className="post-bottom"><span>{post.date}</span><span className="post-arrow">↗</span></div></Link>)}</div></div></section>

      <section className="contact-section" id="contact"><div className="shell contact-inner"><div className="section-label">06 / LET’S CONNECT</div><h2>Let’s make something<br /><em>meaningful.</em></h2><p>I’m looking for a digital marketing internship where I can learn, contribute, and grow. Based in Kathmandu, Nepal.</p><a className="button button-light" href="mailto:bhandarisamana198@gmail.com">Email me <Arrow diagonal /></a><p className="contact-details"><a href="tel:+9779863532813">+977 9863532813</a> · <a href="mailto:bhandarisamana198@gmail.com">bhandarisamana198@gmail.com</a></p><span className="contact-spark">✳</span></div></section>

      <footer className="footer shell"><Link className="wordmark" href="/">s<span>.</span></Link><span>MADE WITH CURIOSITY · © 2026 SAMANA</span><div><a href="mailto:bhandarisamana198@gmail.com">EMAIL</a><a href="https://www.linkedin.com/in/samanabhandari/" target="_blank" rel="noreferrer">LINKEDIN ↗</a></div></footer>
    </main>
  );
}
