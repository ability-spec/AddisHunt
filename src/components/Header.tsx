"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Icon } from "@iconify/react";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-[var(--bg)] border-b border-[var(--border)] sticky top-0 z-50">
      <div className="flex justify-between items-center w-full px-6 max-w-[1240px] mx-auto h-16 gap-4">
        {/* Left: Brand logo + Search */}
        <div className="flex items-center gap-4 flex-1 max-w-xl">
          <Link href="/" className="flex items-center gap-2 shrink-0 group">
            <div className="w-10 h-10 rounded-full bg-[var(--ink-900)] text-[var(--bg)] font-bold text-xl flex items-center justify-center font-display tracking-tighter group-hover:opacity-90 transition-opacity">
              A
            </div>
            <span className="text-xl font-bold font-display text-[var(--ink-900)] tracking-tight hidden sm:inline-block">
              Addis Hunt
            </span>
          </Link>

          {/* Search bar matching ctrl+k style */}
          <div className="relative flex-1 max-w-md hidden sm:block">
            <Icon icon="solar:magnifer-linear" className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--ink-500)] text-lg" />
            <input
              type="text"
              placeholder="Search ( ctrl + k )"
              className="w-full bg-[var(--surface-50)] border border-transparent hover:border-[var(--border)] focus:border-[var(--border)] focus:bg-[var(--bg)] rounded-full pl-10 pr-4 py-2 text-sm text-[var(--ink-900)] placeholder-[var(--ink-500)] outline-none transition-all"
            />
          </div>
        </div>

        {/* Center: Nav links */}
        <nav className="hidden lg:flex items-center gap-6">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors flex items-center gap-1 ${
              pathname === "/" ? "text-[var(--ink-900)] font-semibold" : "text-[var(--ink-700)] hover:text-[var(--ink-900)]"
            }`}
          >
            Best Products
            <Icon icon="solar:alt-arrow-down-linear" className="text-sm" />
          </Link>
          <Link
            href="/launches"
            className={`text-sm font-medium transition-colors flex items-center gap-1 ${
              pathname === "/launches" ? "text-[var(--ink-900)] font-semibold" : "text-[var(--ink-700)] hover:text-[var(--ink-900)]"
            }`}
          >
            Launches
            <Icon icon="solar:alt-arrow-down-linear" className="text-sm" />
          </Link>
          <Link
            href="/categories"
            className={`text-sm font-medium transition-colors flex items-center gap-1 ${
              pathname === "/categories" ? "text-[var(--ink-900)] font-semibold" : "text-[var(--ink-700)] hover:text-[var(--ink-900)]"
            }`}
          >
            Categories
            <Icon icon="solar:alt-arrow-down-linear" className="text-sm" />
          </Link>
          <Link href="#" className="text-sm font-medium text-[var(--ink-700)] hover:text-[var(--ink-900)] transition-colors">
            Forums
          </Link>
          <Link href="#" className="text-sm font-medium text-[var(--ink-700)] hover:text-[var(--ink-900)] transition-colors">
            Advertise
          </Link>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-3 shrink-0">
          <button className="hidden md:flex items-center gap-1.5 px-4 py-2 border border-[var(--border)] rounded-full text-sm font-medium text-[var(--ink-900)] hover:bg-[var(--surface-50)] transition-colors">
            <Icon icon="solar:letter-linear" className="text-base" />
            Subscribe
          </button>
          <Link
            href="/submit"
            className="bg-[var(--ink-900)] text-[var(--bg)] px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity active:scale-95 duration-150 inline-block text-center flex items-center gap-1"
          >
            <Icon icon="solar:add-circle-linear" className="text-base" />
            Submit
          </Link>
          <Link
            href="/profile/kalkidandesigns"
            className="relative w-9 h-9 rounded-full overflow-hidden border border-[var(--border)] cursor-pointer ml-1 hover:opacity-90 transition-opacity inline-block shrink-0"
          >
            <Image
              alt="User profile"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSvdU_5rF4FNwUcQkiXWz79WI2-UbuTsiFyl1eeAZu3Yl7zGJjeW2XkHMD35QDXvG4Z0jJGct7aWWHHZWWBdQjqspomQdNeISLvoElngfzTELxHd1Pas5mBPhXJlA7k-jfh0qzHN1HCruDOglKzeVfg3PiqPRCVVVWOAIW3Fy56urUCwfelMRGqCsCpEll8o9Z6-JzhQkUhJKV_bve_ILFZyQ8hbUuZJswF9RnNOfy7NWdR19Q66oYFw"
              width={36}
              height={36}
              className="w-full h-full object-cover"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}