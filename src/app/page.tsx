"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Icon } from "@iconify/react";

const products = [
  {
    rank: 1,
    name: "Video Agent by Fotor",
    tagline: "Create and edit precision motion graphics & video with chat",
    category: "Artificial Intelligence",
    tags: ["Design Tools", "Artificial Intelligence", "Video"],
    votes: 342,
    comments: 31,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCc_ilBidrsf3xEc0mzfIHSbzECMhOyipuPld9CxrwAwr8ZgpRLAbU2AJDVS7YJAgw6eSUNMelInTmDaSNnK7_m3OIiS03TEc1OTumF7BEOwVIQGJA3L8hlsYekh3WFv8aBSea0NY3WmAi5v_3CKOy-NU9iHll7bQQlFkIvaPdrEqWYAx_cMITNba5iTzix1IE0n_Fb_ZBAo1v6P_CO9ZF1Io0u9ezX08NaLI5XstC5kjQdkbXgbjPxg",
    imageAlt: "Fotor logo",
  },
  {
    rank: 2,
    name: "BrandJet",
    tagline: "Turn public buying signals into sales pipeline",
    category: "Sales",
    tags: ["Sales", "Marketing", "Artificial Intelligence"],
    votes: 256,
    comments: 26,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYLxPRPK1JHxdvSZ0LAwHA05SPWjesTi3js_C_x_i0cJ6w61Utr35xuPb0brDEF5zURCTvvfMR7O0DYMTlO_hmyO67iUp7IP6ti4ZQXw9STWrMXcKz-MCLy3ka4pkFe3h4MFDFsKWTYyC99YAgNS4_UzyrAUHvsTs516I4yQiF3tphATghvmyMG9RyS3oT9sTVYaeFW3ia-9_NVs3CbtbO6Vk7ji7Q3nkjPhCE0VNltOvSjYeq9bJlTg",
    imageAlt: "BrandJet logo",
  },
  {
    rank: 3,
    name: "Interactive Sessions",
    tagline: "Drive the full SDLC with AI agents, step by step",
    category: "Developer Tools",
    tags: ["Software Engineering", "Developer Tools", "Artificial Intelligence"],
    votes: 238,
    comments: 83,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNMONhfLZ1yo3Bmq6uUIzqneAOPWirGjx0Pk8DnFwJysEVDCsTs75vG4DSG7OV5TqtjzPZRI-O36Nghf1R0nJkknNPSGf_uVAKmJJpc0PZLIO-qPJdrKY5RlzNEQRrMw6onZMl0J4xB3VZuWfLym9ISTcogo0wr_j3eNxsea0rghn-D3uuwxixD1JELn9YjnJ0DVum6RcdySoWbbyBaB_WHsU0gCSBHqnGVMVZHR8YmGa7Dib5clYVrA",
    imageAlt: "Interactive Sessions logo",
  },
  {
    rank: 4,
    name: "Tether",
    tagline: "A ball for boring meetings to keep you busy",
    category: "Productivity",
    tags: ["Mac", "Productivity", "Menu Bar Apps"],
    votes: 209,
    comments: 22,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVfP6Xgr5gjeZ6hTXUihw9ET8OvlKWYClM-UirkaPbtjCUwFLM_jPWox6bd-A8QXtHBbbI0TMpUsOairuw6VDqPm-dvG4W70KXh5F9qB1dgsOdE3O-yUkLgc90rDYlWMYJ7onvsxvYIvtDF421w4SfPeeJGQn0bz5kdA5nKwg_khIGpAVTwdAbd3ZZuOR_VX2yz-uol-Hc0MbyVhfDbfr4utB8Y6TiDezH1FXA0IDViM-KzbeuUdfhtQ",
    imageAlt: "Tether logo",
  },
];

const forumThreads = [
  {
    channel: "p/general",
    title: "Product Hunt's State of Tech Discovery: Q2 2026",
    upvotes: 230,
    comments: 14,
    online: 7,
  },
  {
    channel: "p/general",
    title: "When is the right time to launch on Product Hunt?",
    upvotes: 643,
    comments: 587,
    online: 12,
  },
  {
    channel: "p/runevr",
    title: "📢 What social media do you use as a maker?",
    upvotes: 189,
    comments: 102,
  },
  {
    channel: "p/runevr",
    title: "🧠 Do solo makers need a UI/UX designer?",
    upvotes: 351,
    comments: 169,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--ink-900)] font-body antialiased">
      <Header />
      <main className="flex-grow w-full max-w-[1240px] mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Content Column (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            {/* Header Title */}
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold font-display text-[var(--ink-900)] tracking-tight">
                Top Products Launching Today
              </h1>
            </div>

            {/* Products List */}
            <div className="space-y-3.5">
              {products.map((product) => (
                <ProductCard key={product.name} product={product} />
              ))}
            </div>

            {/* Featured Banner Card matching Product Hunt screenshot */}
            <div className="rounded-2xl overflow-hidden bg-[#0A3D31] text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-[var(--border)] shadow-sm relative">
              <div className="space-y-4 max-w-md">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-lg tracking-tight text-[#4ADE80]">Flow</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif italic font-normal leading-tight">
                  This was spoken, <span className="not-italic">not typed.</span>
                </h2>
                <div>
                  <button className="px-5 py-2.5 bg-[#FF8D71] text-[#0A3D31] font-bold rounded-xl text-sm hover:opacity-90 transition-opacity">
                    Try Flow for free
                  </button>
                </div>
              </div>
              <div className="bg-[#134e40] p-4 rounded-xl border border-white/10 text-xs font-mono max-w-sm text-gray-200 shadow-inner">
                &quot;Hey Ayushi, thanks for the intro to Priya and Krishnemorthy. I sent her the Q2 deck. Can we sync this Thursday at 3:30 p.m. EST? Also, the Figma link is figma.com/file/x812...&quot;
              </div>
            </div>
          </div>

          {/* Right Sidebar (4 cols matching screenshot) */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="space-y-5">
              <h2 className="text-lg font-bold font-display text-[var(--ink-900)] tracking-tight">
                Trending Forum Threads
              </h2>

              <div className="space-y-4">
                {forumThreads.map((thread, i) => (
                  <div key={i} className="space-y-1 pb-3 border-b border-[var(--border)] last:border-b-0">
                    <span className="text-xs font-medium text-[var(--ink-500)] block">
                      {thread.channel}
                    </span>
                    <h3 className="text-sm font-bold font-display text-[var(--ink-900)] hover:underline cursor-pointer leading-snug">
                      {thread.title}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-[var(--ink-500)] pt-1">
                      <span className="flex items-center gap-1 font-medium hover:text-[var(--ink-900)] cursor-pointer">
                        <Icon icon="solar:arrow-up-linear" className="text-xs" />
                        Upvote ({thread.upvotes})
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Icon icon="solar:chat-round-line-linear" className="text-xs" />
                        {thread.comments}
                      </span>
                      {thread.online && (
                        <>
                          <span>•</span>
                          <span className="flex items-center gap-1 text-emerald-600 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
                            {thread.online} online
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Sidebar Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <button className="w-full py-2.5 border border-[var(--border)] rounded-full text-sm font-semibold text-[var(--ink-900)] hover:bg-[var(--surface-50)] transition-colors text-center block">
                  View all
                </button>
                <button className="w-full py-2.5 border border-[var(--border)] rounded-full text-sm font-semibold text-[var(--ink-900)] hover:bg-[var(--surface-50)] transition-colors flex items-center justify-center gap-1.5">
                  <Icon icon="solar:add-circle-linear" className="text-base" />
                  Start new thread
                </button>
              </div>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}