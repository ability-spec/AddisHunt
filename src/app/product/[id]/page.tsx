"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

const product = {
  name: "PayStream Africa",
  tagline: "Seamless cross-border payments for modern African businesses.",
  description: [
    "PayStream Africa bridges the gap between local financial ecosystems and global commerce. Our API-first platform allows businesses to accept payments across 15 African nations with a single integration, handling everything from mobile money to local card schemes.",
    "Built for developers, loved by finance teams. We provide unified reconciliation, transparent FX rates, and enterprise-grade security, empowering the next generation of African digital commerce.",
  ],
  votes: 432,
  logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1PLNEZWQ8-qSHyZ3Mk61jod-CZlGQk6-UM1kDhhSiKGOn6Jkn4Q1WldxbtmIN-kiORhMUF1Tl0deg4pZ012woozhZ5yMQit-l3gUfJ93ZUbfeaKH6x1MJvFAtmeJsB8uuZJiu75I0Nwi6WF4N61v6OKsHqEdvJdfyDuryY4iwQpggTi-u0ptuNUzoPJEADDXym6pxhpUI-GjoviIBwGPKE1rPlIvGrj5c22-Do75WlcRqxGpn8XBM6A",
  logoAlt: "A sleek, modern startup logo consisting of abstract geometric shapes. Rendered in high contrast black and warm white, reflecting the editorial minimalist aesthetic of the site.",
  screenshots: [
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBV8dAZxSjB0_k6FxPBcKx-i1bFGBvBgH-VxvF101IsVQY53ROrbRL9oCV_zAljnR1WTJHA5Hib7HaX_ZYoiqawbIZCBag4oDjvcmFMZo9YhccI1KkqF7kQQWb_0_Km_6uP4rUT1P1NA__WxqHi8RLExHHHsQecMDcSU8weFk1Lq0K8lQufWnDvFKs-eMVcOluGJ4bBpzIGqemnMkuV00horjA4I1w8akM0nfJSokfdQzodDoWwddd30Q",
      alt: "A clean, modern user interface dashboard showing financial analytics. The design features minimalist charts, stark typography, and a warm-neutral color palette.",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzFioUa1w4vCX613GjHL2xq7FBa-QU6kZUuoO6hw8svyRaUF8I9H1nsBT9L2PEiw_8I3iEilENX02PMwAug8dfjBu0qhu2YNHxf4jrUhwBuFb9v1g0YpVjfUGniukXEMeEbUC_HWTyOCUuCKnSTiuf3CsgrwZHVRdJC0-JgaDwYtV1cu6-RpZYgAgG3BcqV7hhSfEQmrEy5um617O9MMycn0KYqjb50GZ5qOTRK9L9cYtNYRPNaj_2kg",
      alt: "A sleek mobile app interface displaying a successful payment transaction. The UI is minimalist, using high contrast black text on a warm white background with subtle layout lines.",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvR05jjl6SLrzuRzqTabfOJLCJCrSY8E32RhS4a0WIIIGEDWtVJLaZ5McIzwHyHmFHRb1kL4loVCPQEd1wVuenBOJH4r_TgEHmvAS0LQ636n5iHp61G9iDWQXYdrl4Oa-easwsZVwZA3wwSzefteQlBS9aPi5EiJX9S_J4z4PUw1qGyqVMe_xq-5S0BMxFeL127MZvTPLNgy8znzM45E4UhY5TNAF2FlSRJQq9v4SD4y3r6oNGBTQi-A",
      alt: "A developer documentation page featuring crisp, dark-mode code snippets against a stark, light-mode surrounding layout.",
    },
  ],
  makers: [
    { name: "Kwame D.", role: "Founder & CEO", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuASkejkm_RALXraxM_9_3WbHOFOnB16ngIVNiRvHrn6zS6gLuooNvYSm_E5vVGJTiIgpTnBhNx4hlZknhRG_ixx_O2zadRvkfGetqrXXm9MuBCYkgCv4neR5R3ZHoSBAtymHPDPeIahTjkyNEcLnUvwnEgU4cVeC_i1SXZ9ujeCT0q99tqIQmG_Bqwm8hmezAYYFYgYW29ZrGXvtd1Sw2dpRgz6vfFEnetQyruKk-QDttxbFNNnrtN1TQ", imageAlt: "Medium circular avatar of a tech CEO, confident smile, minimalist office setting in the background." },
    { name: "Sarah J.", role: "CTO", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA07SWhATHGJPX7dl3U6vqZ74PcV2Wdfy_w0jUdoQvxtlXwk8xT1GXKKxCCYCWQ-HeyEDMMVnH0gU4edpEzoeYJgaVtdBHDuKb4JkqSy1ClQUYMeaZtwPDHYnQhEg5_uzMf0SGYPPW2GOOiInQPhywAlG1JCuQwoqRfbjOb8SW0kSg4j49_GoYH6xolG4t51E4Ekv9XT2cLMJAMhuhtecsDhZW-0aE_4VyEN_N6k9WPyyrGDNPHDVyyAA", imageAlt: "Medium circular avatar of a CTO, focused expression, softly lit modern tech environment." },
  ],
  tags: ["Fintech", "API", "Payments", "B2B"],
  comments: [
    {
      id: 1,
      author: "Elena R.",
      time: "2 hours ago",
      content: "The API docs look incredibly clean. Have you implemented support for M-Pesa yet, or is that on the roadmap for Q3?",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBiv3kKzCMFbHiwgZJu0ZM3Vh39Z3jk1fegoIvkCmn34M14k9mH6J9Utg-dFAne03GKoQ9-5abUbS_h9MLNxostpAkyiXGB5Y6e6B-kVPdP_C0BzN__pdoVzTyfC7CqMUO_Q49rPPLZ0l175sgQa5LQJKuleRHBu5v6p0EtVHJjML48ziLGYp10lRySogFVsBVyc1xzF8xxH1BrC69srXAAJoXCDNfr7P-mAn5KuSoyzJ5bAKd5RHrQOg",
      avatarAlt: "Small circular avatar of a software engineer, casual attire, warm lighting.",
      replies: [
        {
          author: "Kwame D.",
          role: "Maker",
          time: "1 hour ago",
          content: "Thanks Elena! Yes, M-Pesa is fully supported in our current v1 release for Kenya and Tanzania.",
          avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAosQJ95FrxCOo0eHHbk5lO1kAkVu6XnS2f1brqzhZvDDu-ZCXZJeb7Euwj2b1KqR8-34Jsq2B4aIOQVVLlMqoLyLSZvVlHEEeRyZSUl8UxKVc267zQoIuEfddkTsHpYflF3047q8wsDsz-640xsnY8EtY_YapcKEDBkVLJ4UD6PcDE_qRF9Wvjo-A6vXk378elnkjKf_DJyP-kBCxKTp3wcWcNcjCj97I5IYrlVLgT96fSxLxyOhpzsw",
          avatarAlt: "Small circular avatar of a startup founder, professional yet approachable, neutral background.",
        },
      ],
    },
  ],
};

export default function ProductDetailPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "comments" | "makers">("overview");
  const [voted, setVoted] = useState(false);
  const [voteCount, setVoteCount] = useState(product.votes);

  const handleVote = () => {
    setVoted(!voted);
    setVoteCount(voted ? voteCount - 1 : voteCount + 1);
  };

  return (
    <div className="min-h-screen flex flex-col bg-bg text-ink-900">
      <Header />
      <main className="flex-grow w-full px-[var(--margin-mobile)] md:px-[var(--margin-desktop)] max-w-[var(--container-max)] mx-auto py-8">
        {/* Header Block */}
        <header className="flex flex-col md:flex-row gap-[var(--gutter)] items-start md:items-center mb-8">
          <Image
            src={product.logo}
            alt={product.logoAlt}
            width={80}
            height={80}
            className="w-[80px] h-[80px] rounded-xl object-cover border border-border shadow-sm shrink-0"
          />
          <div className="flex-grow">
            <h1 className="text-display-lg-mobile md:text-display-lg font-display mb-1">{product.name}</h1>
            <p className="text-headline-md font-display text-ink-500">{product.tagline}</p>
          </div>
          <div className="flex flex-col md:flex-row gap-[var(--gutter)] items-stretch md:items-center w-full md:w-auto mt-4 md:mt-0">
            <Link
              href="#"
              className="px-6 py-3 border border-border text-ink-900 rounded text-label-lg font-display font-semibold hover:bg-surface-100 transition-colors flex items-center justify-center gap-2 bg-surface-50"
            >
              Visit Website <Icon icon="solar:export-linear" className="text-sm" />
            </Link>
            <button
              onClick={handleVote}
              className={`px-6 py-3 rounded text-title-lg font-display font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 min-w-[120px] ${
                voted ? "bg-ink-900 text-bg" : "bg-ink-900 text-bg"
              }`}
              aria-pressed={voted}
            >
              <Icon icon={voted ? "solar:arrow-up-bold" : "solar:arrow-up-linear"} className="text-lg" /> {voteCount}
            </button>
          </div>
        </header>

        {/* Tabs */}
        <div className="border-b border-border mb-8 flex gap-[var(--gutter)] overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab("overview")}
            className={`text-label-lg font-display whitespace-nowrap pb-[12px] border-b-2 transition-colors ${
              activeTab === "overview" ? "text-ink-900 font-bold border-ink-900" : "text-ink-500 hover:text-ink-900 border-transparent"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("comments")}
            className={`text-label-lg font-display whitespace-nowrap pb-[12px] border-b-2 transition-colors ${
              activeTab === "comments" ? "text-ink-900 font-bold border-ink-900" : "text-ink-500 hover:text-ink-900 border-transparent"
            }`}
          >
            Comments (24)
          </button>
          <button
            onClick={() => setActiveTab("makers")}
            className={`text-label-lg font-display whitespace-nowrap pb-[12px] border-b-2 transition-colors ${
              activeTab === "makers" ? "text-ink-900 font-bold border-ink-900" : "text-ink-500 hover:text-ink-900 border-transparent"
            }`}
          >
            Makers
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-[32px]">
          {/* Main Column */}
          <div className="md:col-span-8 flex flex-col gap-8">
            {activeTab === "overview" && (
              <>
                {/* Description */}
                <section>
                  {product.description.map((para, i) => (
                    <p key={i} className="text-body-lg font-body text-ink-700 mb-4">{para}</p>
                  ))}
                </section>

                {/* Screenshots Grid */}
                <section>
                  <h2 className="text-headline-md font-display mb-[var(--gutter)]">Product Gallery</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-[var(--gutter)]">
                    {product.screenshots.map((shot, i) => (
                      <div
                        key={i}
                        className={`relative w-full ${i === 2 ? "aspect-[16/9] sm:col-span-2" : "aspect-video"} rounded border border-border overflow-hidden`}
                      >
                        <Image
                          src={shot.src}
                          alt={shot.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                      </div>
                    ))}
                  </div>
                </section>
              </>
            )}

            {activeTab === "comments" && (
              <section>
                <h2 className="text-headline-md font-display mb-[var(--gutter)]">Discussion</h2>

                {/* Comment Input */}
                <div className="flex gap-[var(--gutter)] mb-8">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLrb7iwcR8lKhS15WG9Awf4ykGekpmrxRCVV6WXzQnX5FRrOf7tVWhu0rSia5Q1rb4ALTJu8yARD-7r_v0Vfszj_mAzTib-DPscznVd1Nz96UTycXefdE_oBZSHyuYD7Tz19mg5go0avc3yKllM4JOc1M5Lu5AJ-tNrc9YEYPB8KZEy9lmVGWCJpFvgpO3A9BweTPaFWi09Km9yDw1Jcw4Ve_Lpfqq3f_cdYg3R9fs0o720qtA6wF70g"
                    alt="Current User"
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover border border-border shrink-0"
                  />
                  <div className="flex-grow flex flex-col gap-2">
                    <textarea
                      className="w-full p-[12px] border border-border rounded bg-surface-50 text-body-md font-body focus:outline-none focus:border-ink-900 focus:ring-1 focus:ring-ink-900 transition-all resize-none h-24"
                      placeholder="What do you think about PayStream Africa?"
                    />
                    <div className="flex justify-end">
                      <button className="px-4 py-2 bg-ink-900 text-bg rounded text-label-lg font-display font-semibold hover:opacity-90 transition-opacity">
                        Post Comment
                      </button>
                    </div>
                  </div>
                </div>

                {/* Comments List */}
                <div className="flex flex-col gap-8">
                  {product.comments.map((comment) => (
                    <div key={comment.id} className="flex gap-[var(--gutter)]">
                      <Image
                        src={comment.avatar}
                        alt={comment.avatarAlt}
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full object-cover border border-border shrink-0"
                      />
                      <div className="flex-grow">
                        <div className="flex items-baseline gap-2 mb-1">
                          <span className="text-label-lg font-display font-bold text-ink-900">{comment.author}</span>
                          <span className="text-body-sm font-body text-ink-500">{comment.time}</span>
                        </div>
                        <p className="text-body-md font-body text-ink-700 mb-2">{comment.content}</p>
                        <button className="text-label-sm font-display font-bold text-ink-500 hover:text-ink-900 transition-colors flex items-center gap-1">
                          <Icon icon="solar:reply-linear" className="text-xs" /> Reply
                        </button>

                        {/* Nested Replies */}
                        {comment.replies && comment.replies.length > 0 && (
                          <div className="flex gap-[var(--gutter)] mt-4 pl-4 border-l-2 border-surface-100">
                            {comment.replies.map((reply, idx) => (
                              <div key={idx}>
                                <Image
                                  src={reply.avatar}
                                  alt={reply.avatarAlt}
                                  width={32}
                                  height={32}
                                  className="w-8 h-8 rounded-full object-cover border border-border shrink-0"
                                />
                                <div>
                                  <div className="flex items-baseline gap-2 mb-1">
                                    <span className="text-label-lg font-display font-bold text-ink-900">
                                      {reply.author}{" "}
                                      <span className="bg-surface-100 px-2 py-0.5 rounded text-[10px] text-ink-900 ml-1 font-semibold uppercase tracking-wider">
                                        {reply.role}
                                      </span>
                                    </span>
                                    <span className="text-body-sm font-body text-ink-500">{reply.time}</span>
                                  </div>
                                  <p className="text-body-md font-body text-ink-700">{reply.content}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {activeTab === "makers" && (
              <section>
                <h2 className="text-headline-md font-display mb-[var(--gutter)]">Makers</h2>
                <div className="bg-surface-50 border border-border rounded p-[var(--gutter)]">
                  <ul className="flex flex-col gap-4">
                    {product.makers.map((maker) => (
                      <li key={maker.name} className="flex items-center gap-3">
                        <Image
                          src={maker.image}
                          alt={maker.imageAlt}
                          width={48}
                          height={48}
                          className="w-12 h-12 rounded-full object-cover border border-border"
                        />
                        <div>
                          <p className="text-label-lg font-display font-bold text-ink-900">{maker.name}</p>
                          <p className="text-body-sm font-body text-ink-500">{maker.role}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}
          </div>

          {/* Sidebar Column */}
          <aside className="md:col-span-4 flex flex-col gap-8">
            {/* Makers Card */}
            <div className="bg-surface-50 border border-border rounded p-[var(--gutter)]">
              <h3 className="text-headline-md font-display mb-4 border-b border-border pb-2">Makers</h3>
              <ul className="flex flex-col gap-4">
                {product.makers.map((maker) => (
                  <li key={maker.name} className="flex items-center gap-3">
                    <Image
                      src={maker.image}
                      alt={maker.imageAlt}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover border border-border"
                    />
                    <div>
                      <p className="text-label-lg font-display font-bold text-ink-900">{maker.name}</p>
                      <p className="text-body-sm font-body text-ink-500">{maker.role}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags/Categories */}
            <div className="bg-surface-50 border border-border rounded p-[var(--gutter)]">
              <h3 className="text-headline-md font-display mb-4 border-b border-border pb-2">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-surface-100 text-ink-900 text-label-sm font-display font-bold rounded hover:bg-ink-900 hover:text-bg transition-colors cursor-pointer border border-border uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}