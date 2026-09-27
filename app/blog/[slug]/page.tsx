import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/content/posts";

export function generateStaticParams() { return posts.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  return { title: post ? `${post.title} | Samana` : "Journal | Samana", description: post?.excerpt };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) notFound();
  return <main><header className="topbar shell"><Link className="wordmark" href="/">s<span>.</span></Link><nav aria-label="Main navigation"><Link href="/#about">About</Link><Link href="/#work">What I do</Link><Link href="/blog">Journal</Link></nav><a className="nav-cta" href="mailto:hello@example.com">Let’s talk <span className="arrow">↗</span></a></header><article className="article shell"><Link className="back-link" href="/blog">← BACK TO THE JOURNAL</Link><div className="eyebrow"><span className="status-dot"/> {post.category}</div><h1>{post.title}</h1><div className="article-meta"><span>{post.date}</span><span>{post.readingTime}</span><span>BY SAMANA</span></div><p className="article-deck">{post.excerpt}</p><div className="article-rule"/>{post.content.map((paragraph, i) => <p className="article-body" key={i}>{paragraph}</p>)}<div className="article-signoff"><span>That’s a note from my learning journey.</span><Link className="underlined-link" href="/blog">Read another entry <span className="arrow">→</span></Link></div></article><footer className="footer shell"><Link className="wordmark" href="/">s<span>.</span></Link><span>MADE WITH CURIOSITY · © 2026 SAMANA</span><div><a href="mailto:hello@example.com">EMAIL</a><Link href="/">HOME ↗</Link></div></footer></main>;
}
