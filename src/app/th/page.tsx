import { DiscoverScreen, ProfileScreen, LeaderboardScreen, MapScreen } from "@/components/AppMockups";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BallR â à¹à¸­à¸à¸à¸¸à¸à¸à¸­à¸¥à¸à¹à¸²à¸à¸ªà¸à¸²à¸¡",
  description: "BallR à¸à¹à¸§à¸¢à¹à¸«à¹à¸à¸¸à¸à¸«à¸²à¹à¸à¸¡ à¹à¸à¹à¸²à¸£à¹à¸§à¸¡à¸à¹à¸§à¸¢à¸à¸²à¸£à¹à¸à¸°à¹à¸à¸µà¸¢à¸§ à¹à¸¥à¸°à¹à¸¥à¹à¸à¹à¸à¹ à¸à¸µà¸¡à¸à¸µà¹à¸¢à¸¸à¸à¸´à¸à¸£à¸£à¸¡ à¹à¸£à¸à¸à¸´à¹à¸à¸à¸µà¸¡à¸·à¸­à¸à¸£à¸´à¸",
};

export default function ThaiHomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <Image
          src="https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=1920&q=80"
          alt="à¸à¸à¹à¸¥à¹à¸à¸à¸¸à¸à¸à¸­à¸¥à¸à¸¥à¸²à¸à¹à¸à¹à¸à¹à¸à¸à¸£à¸¸à¸à¹à¸à¸à¸¯"
          fill className="object-cover" priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/75 to-background" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-block bg-surface border border-border/30 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs text-accent font-medium">à¹à¸à¸´à¸à¹à¸«à¹à¸à¸£à¸´à¸à¸²à¸£à¹à¸¥à¹à¸§à¹à¸à¸à¸£à¸¸à¸à¹à¸à¸à¸¯ à¹à¸¥à¸°à¸à¸²à¸«à¸¥à¸µ</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-6">
            à¹à¸­à¸à¸ªà¸³à¸«à¸£à¸±à¸<br /><span className="text-accent">à¸à¸¸à¸à¸à¸­à¸¥à¸à¹à¸²à¸à¸ªà¸à¸²à¸¡</span>
          </h1>
          <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
            BallR à¸à¹à¸§à¸¢à¹à¸«à¹à¸à¸¸à¸à¸«à¸²à¹à¸à¸¡ à¹à¸à¹à¸²à¸£à¹à¸§à¸¡à¸à¹à¸§à¸¢à¸à¸²à¸£à¹à¸à¸°à¹à¸à¸µà¸¢à¸§ à¹à¸¥à¸°à¹à¸¥à¹à¸à¹à¸à¹ â à¸à¸µà¸¡à¸à¸µà¹à¸¢à¸¸à¸à¸´à¸à¸£à¸£à¸¡ à¹à¸£à¸à¸à¸´à¹à¸à¸à¸µà¸¡à¸·à¸­à¸à¸£à¸´à¸ à¹à¸¡à¹à¸à¹à¸­à¸à¸§à¸¸à¹à¸à¸§à¸²à¸¢à¸à¸±à¸ WhatsApp
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#download" className="bg-primary hover:bg-primary-dark text-text font-bold px-8 py-4 rounded-2xl text-lg transition-all hover:scale-105 duration-200 w-full sm:w-auto">
              à¸à¸²à¸§à¸à¹à¹à¸«à¸¥à¸ BallR
            </a>
            <Link href="/th/different" className="border border-border/50 hover:border-accent/50 text-text-secondary hover:text-text font-semibold px-8 py-4 rounded-2xl text-lg transition-all w-full sm:w-auto text-center">
              à¸à¸³à¹à¸¡à¸à¹à¸­à¸ BallR?
            </Link>
          </div>
          <p className="text-text-muted text-xs mt-4">à¸à¸£à¸µà¸à¸ iOS à¹à¸¥à¸° Android</p>
        </div>
      </section>

      {/* à¸§à¸´à¸à¸µà¸à¸²à¸£à¸à¸³à¸à¸²à¸ */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              <span className="text-accent">BallR</span> à¸à¸³à¸à¸²à¸à¸­à¸¢à¹à¸²à¸à¹à¸£
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              à¸ªà¸²à¸¡à¸à¸±à¹à¸à¸à¸­à¸ à¹à¸à¹à¸à¸±à¹à¸ à¸à¸²à¸ &ldquo;à¸­à¸¢à¸²à¸à¹à¸¥à¹à¸&rdquo; à¹à¸à¸à¸¶à¸ &ldquo;à¹à¸¥à¹à¸à¸à¸£à¸´à¸&rdquo;
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "à¸«à¸²à¹à¸à¸¡", desc: "à¹à¸à¸´à¸ BallR à¹à¸¥à¸·à¸­à¸à¹à¸à¸¡à¹à¸à¸¥à¹à¸à¸¸à¸ à¸à¸£à¸­à¸à¸à¸²à¸¡à¸£à¸°à¸à¸±à¸à¸à¸µà¸¡à¸·à¸­ à¸à¸à¸²à¸à¹à¸à¸¡ à¹à¸§à¸¥à¸² à¹à¸¥à¸°à¸ªà¸à¸²à¸¡", img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80", alt: "à¹à¸à¸·à¹à¸­à¸à¸¡à¸²à¸à¸¶à¸à¸ªà¸à¸²à¸¡à¸à¸¸à¸à¸à¸­à¸¥" },
              { step: "02", title: "à¹à¸à¹à¸²à¸£à¹à¸§à¸¡à¹à¸¥à¸°à¸à¹à¸²à¸¢à¹à¸à¸´à¸", desc: "à¸à¸­à¸à¸à¸µà¹à¸à¹à¸§à¸¢à¸à¸²à¸£à¹à¸à¸°à¹à¸à¸µà¸¢à¸§ à¸à¹à¸²à¸¢à¹à¸à¸´à¸à¹à¸à¹à¸­à¸à¹à¸à¸¢à¸à¸£à¸ à¹à¸¡à¹à¸à¹à¸­à¸à¹à¸à¹à¸à¹à¸à¸´à¸à¸ªà¸", img: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=600&q=80", alt: "à¸à¸¹à¹à¹à¸¥à¹à¸à¸à¸¹à¸à¸£à¸­à¸à¹à¸à¹à¸²à¸à¸¸à¸à¸à¸­à¸¥" },
              { step: "03", title: "à¸¡à¸²à¹à¸¥à¹à¸à¹à¸¥à¸¢", desc: "à¸à¸µà¸¡à¸à¸°à¸à¸¹à¸à¹à¸à¹à¸à¸­à¸±à¸à¹à¸à¸¡à¸±à¸à¸´à¸à¸²à¸¡à¹à¸£à¸à¸à¸´à¹à¸à¸à¸µà¸¡à¸·à¸­ à¹à¸à¹à¸¡à¸²à¹à¸¥à¹à¸ à¹à¸¥à¸°à¸à¸¹à¸à¸°à¹à¸à¸ ELO à¸à¸­à¸à¸à¸¸à¸à¹à¸à¸´à¹à¸¡à¸à¸¶à¹à¸", img: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&q=80", alt: "à¸à¸¸à¸à¸à¸­à¸¥à¸à¸à¸ªà¸à¸²à¸¡à¸«à¸à¹à¸²" },
            ].map((item) => (
              <div key={item.step} className="group">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                  <Image src={item.img} alt={item.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-accent text-background text-xs font-black px-2.5 py-1 rounded-lg">{item.step}</div>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 à¸à¸¸à¸à¸à¸²à¸¢ */}
      <section className="py-24 bg-surface/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              à¸­à¸°à¹à¸£à¸à¸³à¹à¸«à¹à¸¡à¸±à¸<span className="text-accent">à¸à¸´à¹à¸¨à¸©</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="text-accent text-sm font-semibold uppercase tracking-wider mb-2">à¸à¸¸à¸à¹à¸à¹à¸ #1</div>
              <h3 className="text-2xl sm:text-3xl font-black mb-4">à¸à¸µà¸¡à¸à¸µà¹à¸¢à¸¸à¸à¸´à¸à¸£à¸£à¸¡ à¸à¸¸à¸à¹à¸à¸¡</h3>
              <p className="text-text-secondary leading-relaxed">
                à¸à¸¹à¹à¹à¸¥à¹à¸à¸à¸¸à¸à¸à¸à¸¡à¸µà¹à¸£à¸à¸à¸´à¹à¸ ELO à¸à¸²à¸à¸à¸¥à¹à¸à¸¡à¸à¸£à¸´à¸ à¹à¸¡à¸·à¹à¸­à¸à¸¸à¸à¹à¸à¹à¸²à¸£à¹à¸§à¸¡à¹à¸à¸¡ à¸­à¸±à¸¥à¸à¸­à¸£à¸´à¸à¸¶à¸¡à¸à¸°à¹à¸à¹à¸à¸à¸µà¸¡à¸­à¸¢à¹à¸²à¸à¸ªà¸¡à¸à¸¸à¸¥à¸­à¸±à¸à¹à¸à¸¡à¸±à¸à¸´ à¹à¸¡à¹à¸¡à¸µà¸à¸µà¸¡à¸à¸µà¹à¹à¸¡à¹à¹à¸à¹à¸²à¸à¸±à¸à¸­à¸µà¸à¸à¹à¸­à¹à¸
              </p>
            </div>
            <div className="flex justify-center"><LeaderboardScreen /></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1 flex justify-center"><ProfileScreen /></div>
            <div className="order-1 md:order-2">
              <div className="text-accent text-sm font-semibold uppercase tracking-wider mb-2">à¸à¸¸à¸à¹à¸à¹à¸ #2</div>
              <h3 className="text-2xl sm:text-3xl font-black mb-4">à¸£à¸¹à¹à¸§à¹à¸²à¹à¸à¸£à¸¡à¸²à¹à¸¥à¹à¸</h3>
              <p className="text-text-secondary leading-relaxed">
                à¸à¸¹à¹à¹à¸¥à¹à¸à¸à¸¸à¸à¸à¸à¸¡à¸µà¹à¸à¸£à¹à¸à¸¥à¹à¸à¸£à¹à¸­à¸¡à¸à¸°à¹à¸à¸à¸à¸§à¸²à¸¡à¸à¹à¸²à¹à¸à¸·à¹à¸­à¸à¸·à¸­ à¹à¸£à¸à¸à¸´à¹à¸à¸à¸µà¸¡à¸·à¸­ à¹à¸¥à¸°à¸£à¸µà¸§à¸´à¸§à¸à¸²à¸à¹à¸à¸·à¹à¸­à¸à¸£à¹à¸§à¸¡à¹à¸à¸¡ à¸à¸à¹à¸¡à¹à¸¡à¸²à¸à¸°à¸à¸¹à¸à¸¥à¸à¹à¸à¸© à¸à¸à¸¡à¸²à¸ªà¸¡à¹à¸³à¹à¸ªà¸¡à¸­à¸à¸°à¹à¸à¹à¸£à¸±à¸à¸£à¸²à¸à¸§à¸±à¸¥
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-accent text-sm font-semibold uppercase tracking-wider mb-2">à¸à¸¸à¸à¹à¸à¹à¸ #3</div>
              <h3 className="text-2xl sm:text-3xl font-black mb-4">à¹à¸à¸¡à¸­à¸¢à¸¹à¹à¸à¸¥à¸²à¸¢à¸à¸´à¹à¸§</h3>
              <p className="text-text-secondary leading-relaxed">
                à¸à¸¹à¹à¸à¸¡à¸à¸±à¹à¸à¸«à¸¡à¸à¸à¸à¹à¸à¸à¸à¸µà¹à¸ªà¸ à¸à¸£à¸­à¸à¸à¸²à¸¡à¸£à¸°à¸à¸±à¸à¸à¸µà¸¡à¸·à¸­ à¹à¸§à¸¥à¸² à¸£à¸²à¸à¸² à¸à¸à¸²à¸à¹à¸à¸¡ à¹à¸à¹à¸²à¸£à¹à¸§à¸¡à¹à¸à¹à¹à¸à¹à¸¡à¹à¸à¸µà¹à¸§à¸´à¸à¸²à¸à¸µ à¹à¸¥à¹à¸à¸à¸·à¸à¸à¸µà¹
              </p>
            </div>
            <div className="flex justify-center"><MapScreen /></div>
          </div>
        </div>
      </section>

      {/* App Screens */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">à¸ à¸²à¸¢à¹à¸<span className="text-accent">à¹à¸­à¸</span></h2>
          </div>
          <div className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory md:grid md:grid-cols-4 md:overflow-visible md:pb-0 md:gap-6 justify-items-center">
            <div className="snap-center shrink-0"><DiscoverScreen /></div>
            <div className="snap-center shrink-0"><ProfileScreen /></div>
            <div className="snap-center shrink-0"><LeaderboardScreen /></div>
            <div className="snap-center shrink-0"><MapScreen /></div>
          </div>
        </div>
      </section>

      {/* à¸ªà¸à¸´à¸à¸´ */}
      <section className="py-16 border-y border-border/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "87+", label: "à¸à¸¹à¹à¹à¸¥à¹à¸à¸à¸µà¹à¹à¸à¹à¸à¸²à¸à¸­à¸¢à¸¹à¹" },
              { value: "100+", label: "à¹à¸à¸¡à¸à¸µà¹à¹à¸¥à¹à¸à¹à¸¥à¹à¸§" },
              { value: "2", label: "à¹à¸¡à¸·à¸­à¸à¸à¸µà¹à¹à¸à¸´à¸à¹à¸«à¹à¸à¸£à¸´à¸à¸²à¸£" },
              { value: "4.8", label: "à¸à¸°à¹à¸à¸à¹à¸à¸¥à¸µà¹à¸¢à¸à¸¹à¹à¹à¸¥à¹à¸" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-black text-accent">{stat.value}</div>
                <div className="text-sm text-text-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* à¸à¸²à¸§à¸à¹à¹à¸«à¸¥à¸ */}
      <section id="download" className="relative py-24 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1459865264687-595d652de67e?w=1920&q=80" alt="à¸£à¸­à¸à¹à¸à¹à¸²à¸à¸¸à¸à¸à¸­à¸¥à¸à¸à¸ªà¸à¸²à¸¡à¸«à¸à¹à¸²" fill className="object-cover" />
        <div className="absolute inset-0 bg-background/85" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-5xl font-black mb-6">
            à¸à¸£à¹à¸­à¸¡<span className="text-accent">à¹à¸¥à¹à¸</span>à¸«à¸£à¸·à¸­à¸¢à¸±à¸?
          </h2>
          <p className="text-text-secondary text-lg mb-10 max-w-xl mx-auto">
            à¸à¸²à¸§à¸à¹à¹à¸«à¸¥à¸ BallR à¸«à¸²à¹à¸à¸¡à¸à¸·à¸à¸à¸µà¹ à¹à¸¥à¹à¸§à¹à¸£à¸´à¹à¸¡à¸ªà¸£à¹à¸²à¸à¹à¸£à¸à¸à¸´à¹à¸à¸à¸­à¸à¸à¸¸à¸
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="bg-primary hover:bg-primary-dark text-text font-bold px-8 py-4 rounded-2xl text-lg transition-all hover:scale-105 inline-flex items-center justify-center gap-3">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" /></svg>
              App Store
            </a>
            <a href="#" className="bg-primary hover:bg-primary-dark text-text font-bold px-8 py-4 rounded-2xl text-lg transition-all hover:scale-105 inline-flex items-center justify-center gap-3">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.3 2.3-8.636-8.632z" /></svg>
              Google Play
            </a>
          </div>
          <p className="text-text-muted text-sm mt-6">à¸à¸­à¸à¹à¸à¸·à¹à¸­à¸à¸§à¹à¸²à¸à¸¸à¸à¹à¸à¹à¸à¸à¸±à¸à¹à¸à¸°</p>
        </div>
      </section>
    </>
  );
}
