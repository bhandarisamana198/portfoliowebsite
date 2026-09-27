import Link from "next/link";
import { posts } from "@/content/posts";

export const metadata = { title: "Learning Journal | Samana" };

export default function BlogIndex() {
  return <main><header className="topbar shell"><Link className="wordmark" href="/">s<span>.</span></Link><nav aria-label="Main navigation"><Link href="/#about">About</Link><Link href="/#work">What I do</Link><Link href="/blog">Journal</Link></nav><a className="nav-cta" href="mailto:hello@example.com">Let’s talk <span className="arrow">↗</span></a></header><section className="blog-hero shell"><div className="eyebrow"><span className="status-dot"/> A STUDENT’S LEARNING JOURNAL</div><h1>Notes from the<br/><span>learning curve.</span></h1><p>Ideas, questions, and small discoveries as I learn my way around digital marketing.</p></section><section className="blog-list shell"><div className="section-label">THE JOURNAL / {String(posts.length).padStart(2, "0")} ENTRIES</div>{posts.map((post, i) => <Link className="blog-row" href={`/blog/${post.slug}`} key={post.slug}><span className="blog-row-number">0{i + 1}</span><div><span className="post-category">{post.category} · {post.date}</span><h2>{post.title}</h2><p>{post.excerpt}</p></div><span className="blog-row-arrow">↗</span></Link>)}</section><footer className="footer shell"><Link className="wordmark" href="/">s<span>.</span></Link><span>MADE WITH CURIOSITY · © 2026 SAMANA</span><div><a href="mailto:hello@example.com">EMAIL</a><Link href="/">HOME ↗</Link></div></footer></main>;
}
