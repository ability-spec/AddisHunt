"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Icon } from "@iconify/react";

const profile = {
  name: "Kalkidan T.",
  handle: "@kalkidandesigns",
  bio: "Product Designer passionate about building accessible tools for African creators. Discovering the next wave of local tech.",
  followers: "1.2k",
  following: "450",
  avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6g2KOpeRxsUiHvu0gwgNa-NJ1P3WVGB0FUlRWDRGDO7BaGID4NtNEIYTiO0ny83byVnXZDLij4jcpVl8bQQIbO0tloWRrjpP8adMe1ieB3B-smHy3SNHALIvqwVF_VOqnMOU9Y9wyO4341btodxveQEdGdZjuDV0xZKDmzuFfaKPvIAhibRCuez9RIGBgnS5lTYOj9vyHZ82MAyFKJJMGd1TnH6L1dznnLl5fRhaowkw6b_hYX0BigQ",
  avatarAlt: "A large, striking portrait of an African female UI designer. She has a vibrant, creative aura, wearing stylish minimalist glasses and a subtle dark top. The lighting is high-contrast yet warm, reflecting a premium editorial style.",
};

const submissions = [
  {
    name: "BirrFlow",
    category: "Fintech",
    votes: 245,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9dUpxPNXbBuc1Tf-cNMewwpXOwQP6GgxluQGr2cZ-jvahTm7qJq8Maf0Jla_90I_Za38vo2uWYP_MXudu9WnOY6DfMLPcwNXxQRLe8gzARw5zeVpESyJx4rb5fNE5DKY7YViOTHFrnSW7qT6UPDieiajC2TOM7JK7qBoA0Mum5m3zZ9hBaC0V-rOBSndM1If1ml_SP4r8Niltd8QUy_0Wi164L_J-qdQag6LW1RvWXt9J0O30fQOtYw",
    imageAlt: "A sleek, modern dashboard interface mockup for a fintech application. The UI is minimalist, using sharp typography and a monochrome palette with subtle green accents.",
    voted: false,
  },
  {
    name: "CropSense",
    category: "Hardware / Agritech",
    votes: 189,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkMDVE4dlKUaUBDb-l3tUhaIwBKBaGeC25k_V0zdOtN9IDmHuLFrSAgYidpPO9ZNwbwbmtwed8uHSWrJWrnyNt73AS5svRzxzPKDK1XEggp3UWeY5qt163hn1UqLzxmtk4lXyNMmvVsBtbXQ57Tp_x36-E7ULSzdpXLXYqhkTEfgh51HBmmjwz6OXT93WY-7yRrA1lfmk9uGcL8LrokfziUFGmxx5pFOmZ2I9Hn-P38JVh-Bo3JfuUcg",
    imageAlt: "A conceptual 3D render of a smart agriculture sensor. The device is sleek, matte black with subtle glowing indicator lights. It sits on a minimal wooden pedestal against a warm beige background.",
    voted: false,
  },
  {
    name: "LearnEthio",
    category: "EdTech",
    votes: 412,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVfP6Xgr5gjeZ6hTXUihw9ET8OvlKWYClM-UirkaPbtjCUwFLM_jPWox6bd-A8QXtHBbbI0TMpUsOairuw6VDqPm-dvG4W70KXh5F9qB1dgsOdE3O-yUkLgc90rDYlWMYJ7onvsxvYIvtDF421w4SfPeeJGQn0bz5kdA5nKwg_khIGpAVTwdAbd3ZZuOR_VX2yz-uol-Hc0MbyVhfDbfr4utB8Y6TiDezH1FXA0IDViM-KzbeuUdfhtQ",
    imageAlt: "A vibrant, stylized illustration representing e-learning. It features abstract geometric shapes forming books and screens, colored in warm earth tones and stark black lines.",
    voted: true,
  },
];

const tabs = [
  { id: "submissions", label: "Submissions", count: 12 },
  { id: "upvoted", label: "Upvoted", count: 340 },
  { id: "collections", label: "Collections", count: 0 },
];

export default function ProfilePage() {
  return (
    <div className="min-h-screen flex flex-col bg-bg text-ink-900">
      <Header />
      <main className="flex-grow w-full max-w-[var(--container-max)] mx-auto px-[var(--margin-mobile)] md:px-[var(--margin-desktop)] py-8 flex flex-col md:flex-row gap-8">
        {/* Sidebar / Profile Info */}
        <aside className="w-full md:w-1/3 lg:w-1/4 flex flex-col gap-6 sticky top-24 h-max">
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
            <Image
              src={profile.avatar}
              alt={profile.avatarAlt}
              width={128}
              height={128}
              className="w-32 h-32 md:w-48 md:h-48 rounded-lg object-cover border border-border mb-2"
            />
            <div>
              <h1 className="text-display-lg-mobile md:text-display-lg font-display text-ink-900">{profile.name}</h1>
              <p className="text-ink-500 text-body-lg font-body mt-1">{profile.handle}</p>
            </div>
            <p className="text-body-lg font-body text-ink-700 max-w-sm mt-2">{profile.bio}</p>
            <div className="flex flex-row md:flex-row items-center gap-6 mt-4">
              <div className="flex flex-col items-center md:items-start">
                <span className="text-ink-900 text-body-lg font-bold">{profile.followers}</span>
                <span className="text-ink-500 text-body-sm">Followers</span>
              </div>
              <div className="w-px h-8 bg-border"></div>
              <div className="flex flex-col items-center md:items-start">
                <span className="text-ink-900 text-body-lg font-bold">{profile.following}</span>
                <span className="text-ink-500 text-body-sm">Following</span>
              </div>
            </div>
            <div className="w-full flex gap-2 mt-6">
              <button className="flex-1 bg-ink-900 text-bg py-2 px-4 rounded text-label-lg font-display hover:bg-ink-700 transition-colors">
                Follow
              </button>
              <button className="p-2 border border-border rounded text-ink-900 hover:bg-surface-100 transition-colors">
                <Icon icon="solar:settings-linear" className="text-base" />
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content Canvas */}
        <section className="w-full md:w-2/3 lg:w-3/4 flex flex-col gap-6">
          {/* Navigation Tabs */}
          <div className="flex gap-6 border-b border-border pb-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`text-body-md font-body pb-2 ${tab.id === "submissions" ? "text-ink-900 font-bold border-b-2 border-ink-900 -mb-[10px]" : "text-ink-500 font-medium hover:text-ink-900 transition-colors"}`}
              >
                {tab.label} <span className="ml-1 text-ink-400 font-normal">({tab.count})</span>
              </button>
            ))}
          </div>

          {/* Bento Grid Submissions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
            {submissions.map((submission) => (
              <article
                key={submission.name}
                className="group relative flex flex-col bg-surface-50 border border-border rounded-lg overflow-hidden hover:bg-surface-100 transition-colors duration-200"
              >
                <div className="relative h-48 w-full overflow-hidden bg-surface-100 border-b border-border p-4 flex items-center justify-center">
                  <Image
                    src={submission.image}
                    alt={submission.imageAlt}
                    fill
                    className="object-cover rounded shadow-sm"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="p-4 flex flex-col gap-2 relative">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-title-lg font-display text-ink-900 group-hover:underline cursor-pointer">{submission.name}</h3>
                      <p className="text-body-sm font-body text-ink-500 mt-1">{submission.category}</p>
                    </div>
                    <button
                      className={`flex flex-col items-center border rounded py-1 px-2 w-12 cursor-pointer transition-colors ${
                        submission.voted ? "bg-ink-900 text-bg border-ink-900" : "bg-surface-50 hover:bg-surface-100 border-border"
                      }`}
                    >
                      <Icon icon={submission.voted ? "solar:arrow-up-bold" : "solar:arrow-up-linear"} className="text-sm" />
                      <span className={`text-label-lg font-display font-bold ${submission.voted ? "text-bg" : "text-ink-900"}`}>{submission.votes}</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}

            {/* Empty State / Add New Card */}
            <article className="group relative flex flex-col bg-surface-50 border border-dashed border-border rounded-lg overflow-hidden items-center justify-center h-full min-h-[300px]">
              <div className="text-center p-6 flex flex-col items-center">
                <Icon icon="solar:add-circle-linear" className="text-4xl text-ink-300 mb-2" />
                <h3 className="text-title-lg font-display text-ink-500 mb-1">Submit a new product</h3>
                <p className="text-body-sm font-body text-ink-400">Got something new to share with the community?</p>
                <button className="mt-4 px-4 py-2 border border-ink-900 text-ink-900 text-label-lg font-display rounded hover:bg-surface-100 transition-colors">
                  Start Submission
                </button>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}