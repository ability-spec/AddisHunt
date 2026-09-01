"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

interface Product {
  rank: number;
  name: string;
  tagline: string;
  category: string;
  tags?: string[];
  votes: number;
  comments: number;
  image: string;
  imageAlt: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [voted, setVoted] = useState(false);
  const [voteCount, setVoteCount] = useState(product.votes);

  const handleVote = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setVoted(!voted);
    setVoteCount(voted ? voteCount - 1 : voteCount + 1);
  };

  const productTags = product.tags || [product.category, "Software", "Ethiopian Tech"];

  return (
    <Link
      href="/product/1"
      className="flex items-start sm:items-center justify-between p-4 sm:p-5 rounded-2xl border border-[var(--border)] bg-[var(--bg)] hover:bg-[var(--surface-50)] transition-all group gap-4"
    >
      <div className="flex items-start sm:items-center gap-4 flex-1 min-w-0">
        {/* Startup logo */}
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden border border-[var(--border)] shrink-0 bg-[var(--surface-50)]">
          <Image
            src={product.image}
            alt={product.imageAlt}
            width={56}
            height={56}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
          />
        </div>

        {/* Content column */}
        <div className="flex-1 min-w-0 pr-2">
          <h3 className="text-base sm:text-lg font-bold font-display text-[var(--ink-900)] group-hover:underline underline-offset-2 truncate">
            {product.rank}. {product.name}
          </h3>
          <p className="text-sm font-body text-[var(--ink-500)] line-clamp-1 mt-0.5">
            {product.tagline}
          </p>

          {/* Tags row matching Product Hunt style */}
          <div className="flex items-center gap-2 mt-2 flex-wrap text-xs text-[var(--ink-500)]">
            <Icon icon="solar:tag-horizontal-linear" className="text-sm text-[var(--ink-300)]" />
            {productTags.map((tag, idx) => (
              <span key={tag} className="flex items-center gap-1.5">
                <span className="hover:text-[var(--ink-900)] transition-colors cursor-pointer">{tag}</span>
                {idx < productTags.length - 1 && <span className="text-[var(--ink-300)]">•</span>}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action boxes matching Product Hunt (Comment box + Upvote box) */}
      <div className="flex items-center gap-2.5 shrink-0 self-center">
        {/* Comment count box */}
        <div className="flex flex-col items-center justify-center w-12 h-14 sm:w-13 sm:h-14 rounded-xl border border-[var(--border)] bg-[var(--bg)] hover:bg-[var(--surface-100)] transition-colors cursor-pointer text-[var(--ink-700)]">
          <Icon icon="solar:chat-round-line-linear" className="text-base mb-0.5" />
          <span className="text-xs font-bold font-display">{product.comments}</span>
        </div>

        {/* Upvote box */}
        <button
          onClick={handleVote}
          className={`flex flex-col items-center justify-center w-12 h-14 sm:w-14 sm:h-14 rounded-xl border transition-all cursor-pointer ${
            voted
              ? "bg-[var(--ink-900)] text-[var(--bg)] border-[var(--ink-900)]"
              : "bg-[var(--bg)] text-[var(--ink-900)] border-[var(--border)] hover:bg-[var(--surface-100)] hover:border-[var(--ink-900)]"
          }`}
          aria-pressed={voted}
          aria-label={voted ? "Remove upvote" : "Upvote"}
        >
          <Icon
            icon={voted ? "solar:arrow-up-bold" : "solar:arrow-up-linear"}
            className="text-base mb-0.5"
          />
          <span className="text-xs sm:text-sm font-bold font-display leading-none">{voteCount}</span>
        </button>
      </div>
    </Link>
  );
}