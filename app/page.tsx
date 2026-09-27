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
          <a href="#about">About</a><a href="#work">What I do</a><Link href="/blog">Journal</Link>
        </nav>
        <a className="nav-cta" href="#contact">Let’s talk <Arrow diagonal /></a>
      </header>

      <section className="hero shell">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> OPEN TO DIGITAL MARKETING INTERNSHIPS</div>
          <h1>Curious mind.<br /><span>Creative</span> marketer.</h1>
          <p className="hero-intro">Hi, I’m Samana — a digital marketing student learning how thoughtful strategy and good stories help brands grow.</p>
          <div className="hero-actions"><a className="button button-dark" href="#contact">Let’s work together <Arrow diagonal /></a><a className="text-link" href="#work">Explore my interests <Arrow /></a></div>
          <div className="hero-note"><span className="note-mark">✳</span><span>Currently learning<br /><strong>SEO · Content · Social</strong></span></div>
        </div>
        <div className="hero-art">
          <Image className="profile-photo" src="/samana-profile.png" alt="Portrait of Samana" fill priority sizes="(max-width: 800px) 100vw, 48vw" />
          <div className="photo-caption"><span>HELLO, I’M SAMANA</span><span>CURIOUS BY NATURE <i>✳</i></span></div>
        </div>
        <div className="hero-bottom"><span>BASED IN NEPAL</span><span>STUDENT BY DAY · STORYTELLER ALWAYS</span><a href="#about">SCROLL TO EXPLORE ↓</a></div>
      </section>

      <section className="intro-section" id="about"><div className="shell intro-grid"><div className="section-label">01 / A LITTLE ABOUT ME</div><div><h2>Learning the craft.<br /><em>Ready to make a difference.</em></h2><p className="body-copy">I’m building a foundation in digital marketing, one curious question at a time. I’m especially drawn to the mix of creative thinking and real-world insight that makes a campaign connect with people.</p><p className="body-copy">Now I’m looking for an internship where I can contribute, learn from a thoughtful team, and turn classroom ideas into meaningful work.</p><a className="underlined-link" href="#contact">A bit more about me <Arrow /></a></div></div></section>

      <section className="work-section shell" id="work"><div className="section-heading"><div><div className="section-label">02 / WHAT I’M EXPLORING</div><h2>Good marketing starts<br />with <em>good questions.</em></h2></div><p>I’m growing my skills across the digital landscape, with curiosity at the center of it all.</p></div><div className="skill-grid"><article className="skill-card skill-lilac"><span className="skill-index">01</span><div className="skill-icon">⌕</div><h3>Search &amp; SEO</h3><p>Helping the right people find the right things through search intent, keywords, and useful content.</p><span className="skill-tag">DISCOVERABILITY</span></article><article className="skill-card skill-yellow"><span className="skill-index">02</span><div className="skill-icon">✳</div><h3>Content &amp; storytelling</h3><p>Turning ideas into clear, engaging content that sounds human and gives people a reason to care.</p><span className="skill-tag">THE RIGHT WORDS</span></article><article className="skill-card skill-pink"><span className="skill-index">03</span><div className="skill-icon">↗</div><h3>Social &amp; community</h3><p>Exploring how brands can show up consistently, connect with people, and build a community.</p><span className="skill-tag">REAL CONNECTION</span></article><article className="skill-card skill-green"><span className="skill-index">04</span><div className="skill-icon">◷</div><h3>Analytics &amp; insight</h3><p>Learning to read the signals behind a campaign and turn numbers into smarter next steps.</p><span className="skill-tag">ALWAYS LEARNING</span></article></div></section>

      <section className="journal-section"><div className="shell"><div className="journal-heading"><div><div className="section-label">03 / THE LEARNING JOURNAL</div><h2>Notes from the <em>process.</em></h2></div><Link className="underlined-link" href="/blog">All journal entries <Arrow /></Link></div><div className="post-grid">{posts.slice(0, 3).map((post, index) => <Link className={`post-card post-tone-${index + 1}`} href={`/blog/${post.slug}`} key={post.slug}><div className="post-top"><span>{post.category}</span><span>{post.readingTime}</span></div><div className="post-symbol">{["↗", "✳", "◌"][index]}</div><h3>{post.title}</h3><p>{post.excerpt}</p><div className="post-bottom"><span>{post.date}</span><span className="post-arrow">↗</span></div></Link>)}</div></div></section>

      <section className="contact-section" id="contact"><div className="shell contact-inner"><div className="section-label">04 / YOUR NEXT INTERN?</div><h2>Let’s make something<br /><em>meaningful.</em></h2><p>I’m looking for a digital marketing internship where I can learn, contribute, and grow. Have an opportunity or just want to say hello?</p><a className="button button-light" href="mailto:hello@example.com">Let’s start a conversation <Arrow diagonal /></a><span className="contact-spark">✳</span></div></section>

      <footer className="footer shell"><Link className="wordmark" href="/">s<span>.</span></Link><span>MADE WITH CURIOSITY · © 2026 SAMANA</span><div><a href="mailto:hello@example.com">EMAIL</a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LINKEDIN ↗</a></div></footer>
    </main>
  );
}
