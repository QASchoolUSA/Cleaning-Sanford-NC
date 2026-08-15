import SectionImage from "@/components/SectionImage";

export default function HouseCleaningArticle() {
  return (
    <section className="border-y border-slate-100 bg-slate-50/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="section-eyebrow">Expert advice</p>
          <h2 className="section-title mt-2">A practical guide to a cleaner Sanford home</h2>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
            <SectionImage
              image="kitchen"
              className="aspect-[4/3]"
              sizes="(max-width: 768px) 50vw, 360px"
            />
            <SectionImage
              image="bathroom"
              className="aspect-[4/3]"
              sizes="(max-width: 768px) 50vw, 360px"
            />
          </div>

          <div className="prose prose-slate mt-10 max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-slate-900 prose-p:leading-relaxed prose-p:text-slate-600 prose-strong:text-slate-800">
            <p>
              Keeping your home clean with a busy schedule is hard. If you&apos;re looking for reliable{" "}
              <strong>house cleaning in Sanford, NC</strong>, Cleaning Sanford is built for Lee County
              homes—clear scopes, local crews, and results you can see in kitchens and baths first.
            </p>

            <h3 className="mt-10 text-2xl">Why hire professional house cleaning?</h3>
            <p>
              A professional crew saves weekends and reaches the places a quick wipe misses: fans,
              baseboards, shower film, and pollen on sills. When you search for{" "}
              <strong>house cleaning near me</strong>, you want someone trustworthy and consistent.
              That&apos;s what we deliver.
            </p>

            <h3 className="mt-10 text-2xl">What to expect from Cleaning Sanford</h3>
            <p>
              Our <strong>Sanford house cleaning</strong> services range from regular maintenance to
              deep cleans and move-in/out resets. Vetted cleaners use quality products—with eco-friendly
              options on request—and follow a checklist matched to your home size and priorities.
            </p>
            <p>
              Book online for an instant estimate, then confirm access notes and any rooms that need
              extra attention. One-time or recurring—we schedule around your week.
            </p>

            <h3 className="mt-10 text-2xl">The benefits of a clean home</h3>
            <p>
              A clean home supports health and calm: better indoor air, less clutter stress, and fewer
              germs on high-touch surfaces. Let us help you maintain that with professional{" "}
              <strong>house cleaning in Sanford</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
