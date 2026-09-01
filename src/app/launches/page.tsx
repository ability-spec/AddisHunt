import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

const launches = [
  {
    rank: 1,
    name: "Kacha Pay",
    tagline: "Seamless mobile money interoperability for East Africa.",
    category: "Fintech",
    votes: 342,
    comments: 42,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCc_ilBidrsf3xEc0mzfIHSbzECMhOyipuPld9CxrwAwr8ZgpRLAbU2AJDVS7YJAgw6eSUNMelInTmDaSNnK7_m3OIiS03TEc1OTumF7BEOwVIQGJA3L8hlsYekh3WFv8aBSea0NY3WmAi5v_3CKOy-NU9iHll7bQQlFkIvaPdrEqWYAx_cMITNba5iTzix1IE0n_Fb_ZBAo1v6P_CO9ZF1Io0u9ezX08NaLI5XstC5kjQdkbXgbjPxg",
    imageAlt: "A minimalist, abstract app logo design in monochrome warm grays, featuring geometric shapes representing finance and growth, flat vector style on a light background.",
    day: "Today",
  },
  {
    rank: 2,
    name: "FarmSense",
    tagline: "AI-driven crop yield predictions based on local soil data.",
    category: "Agritech",
    votes: 289,
    comments: 28,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYLxPRPK1JHxdvSZ0LAwHA05SPWjesTi3js_C_x_i0cJ6w61Utr35xuPb0brDEF5zURCTvvfMR7O0DYMTlO_hmyO67iUp7IP6ti4ZQXw9STWrMXcKz-MCLy3ka4pkFe3h4MFDFsKWTYyC99YAgNS4_UzyrAUHvsTs516I4yQiF3tphATghvmyMG9RyS3oT9sTVYaeFW3ia-9_NVs3CbtbO6Vk7ji7Q3nkjPhCE0VNltOvSjYeq9bJlTg",
    imageAlt: "A minimalist tech logo for an agriculture startup, a stylized leaf forming a data chart, monochrome line art style, warm neutral background.",
    day: "Today",
  },
  {
    rank: 3,
    name: "DeliverEase",
    tagline: "Last-mile logistics orchestration for informal address systems.",
    category: "Logistics",
    votes: 215,
    comments: 15,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNMONhfLZ1yo3Bmq6uUIzqneAOPWirGjx0Pk8DnFwJysEVDCsTs75vG4DSG7OV5TqtjzPZRI-O36Nghf1R0nJkknNPSGf_uVAKmJJpc0PZLIO-qPJdrKY5RlzNEQRrMw6onZMl0J4xB3VZuWfLym9ISTcogo0wr_j3eNxsea0rghn-D3uuwxixD1JELn9YjnJ0DVum6RcdySoWbbyBaB_WHsU0gCSBHqnGVMVZHR8YmGa7Dib5clYVrA",
    imageAlt: "A clean, modern logo featuring a stylized delivery box morphing into an arrow, monochrome gray aesthetic, flat design, editorial minimalism.",
    day: "Today",
  },
  {
    rank: 4,
    name: "HealthLink",
    tagline: "Telemedicine platform connecting rural patients with specialists.",
    category: "Healthtech",
    votes: 178,
    comments: 23,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNMONhfLZ1yo3Bmq6uUIzqneAOPWirGjx0Pk8DnFwJysEVDCsTs75vG4DSG7OV5TqtjzPZRI-O36Nghf1R0nJkknNPSGf_uVAKmJJpc0PZLIO-qPJdrKY5RlzNEQRrMw6onZMl0J4xB3VZuWfLym9ISTcogo0wr_j3eNxsea0rghn-D3uuwxixD1JELn9YjnJ0DVum6RcdySoWbbyBaB_WHsU0gCSBHqnGVMVZHR8YmGa7Dib5clYVrA",
    imageAlt: "A minimal health tech logo with a cross and network nodes, monochrome style.",
    day: "Yesterday",
  },
  {
    rank: 5,
    name: "EduBridge",
    tagline: "Offline-first learning platform for underserved communities.",
    category: "Edtech",
    votes: 156,
    comments: 19,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVfP6Xgr5gjeZ6hTXUihw9ET8OvlKWYClM-UirkaPbtjCUwFLM_jPWox6bd-A8QXtHBbbI0TMpUsOairuw6VDqPm-dvG4W70KXh5F9qB1dgsOdE3O-yUkLgc90rDYlWMYJ7onvsxvYIvtDF421w4SfPeeJGQn0bz5kdA5nKwg_khIGpAVTwdAbd3ZZuOR_VX2yz-uol-Hc0MbyVhfDbfr4utB8Y6TiDezH1FXA0IDViM-KzbeuUdfhtQ",
    imageAlt: "A vibrant, stylized illustration representing e-learning with abstract geometric shapes forming books and screens.",
    day: "Yesterday",
  },
  {
    rank: 6,
    name: "TradeFlow",
    tagline: "B2B marketplace for cross-border African trade.",
    category: "E-commerce",
    votes: 134,
    comments: 12,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9dUpxPNXbBuc1Tf-cNMewwpXOwQP6GgxluQGr2cZ-jvahTm7qJq8Maf0Jla_90I_Za38vo2uWYP_MXudu9WnOY6DfMLPcwNXxQRLe8gzARw5zeVpESyJx4rb5fNE5DKY7YViOTHFrnSW7qT6UPDieiajC2TOM7JK7qBoA0Mum5m3zZ9hBaC0V-rOBSndM1If1ml_SP4r8Niltd8QUy_0Wi164L_J-qdQag6LW1RvWXt9J0O30fQOtYw",
    imageAlt: "A sleek, modern dashboard interface mockup for a fintech application.",
    day: "Yesterday",
  },
];

export default function LaunchesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-bg text-ink-900">
      <Header />
      <main className="flex-grow w-full max-w-[var(--container-max)] mx-auto px-[var(--margin-desktop)] py-12 pt-12">
        {/* Hero Section */}
        <div className="mb-8">
          <h1 className="text-display-lg-mobile md:text-display-lg font-display text-ink-900 mb-2 tracking-tight">
            Recent Launches
          </h1>
          <p className="text-headline-md font-display text-ink-500 font-medium">
            The latest products from African founders
          </p>
        </div>

        {/* Date Sections */}
        <div className="space-y-8">
          {["Today", "Yesterday", "This Week"].map((day) => {
            const dayProducts = launches.filter((p) => p.day === day);
            if (dayProducts.length === 0) return null;
            return (
              <div key={day} className="space-y-4">
                <h2 className="text-title-lg font-display font-semibold text-ink-900 border-b border-border pb-2">{day}</h2>
                {dayProducts.map((product) => (
                  <ProductCard key={product.name} product={product} />
                ))}
              </div>
            );
          })}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-6 py-3 border border-border rounded-lg text-ink-900 hover:bg-surface-100 transition-colors text-label-lg font-display font-medium">
            Load More Launches
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}