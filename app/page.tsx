export default function KoblessePage() {
  const services = [
    {
      title: "Hospitality Strategy & Asset Positioning",
      description:
        "Strategic counsel for hotels, resorts, branded residences, and mixed-use destinations seeking clearer market positioning, stronger commercial performance, and sustained asset relevance.",
    },
    {
      title: "Wellness & Experience Development",
      description:
        "Development of wellness-led guest journeys, recovery programs, spa strategy, lifestyle activations, and differentiated experiences that strengthen brand value and incremental revenue opportunity.",
    },
    {
      title: "Brand, Revenue & Experience Strategy",
      description:
        "From concept narrative to guest touchpoints, we shape brands that are distinctive in market, persuasive in presentation, and commercially disciplined across the full customer journey.",
    },
    {
      title: "Board, Ownership & Executive Advisory",
      description:
        "Board-level counsel for ownership groups, investors, family offices, and senior leadership teams navigating repositioning, expansion, pre-opening, investment review, and market-entry decisions.",
    },
  ];

  const sectors = [
    "Hotels & Resorts",
    "Wellness Retreats",
    "Branded Residences",
    "Private Clubs",
    "Luxury Lifestyle Brands",
    "Mixed-Use Destinations",
  ];

  const principles = [
    "Strategic discipline",
    "Commercial rigor",
    "Owner-aligned advisory",
    "Brand and revenue perspective",
    "Guest and market relevance",
    "Long-term value creation",
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <section className="relative overflow-hidden border-b border-stone-200">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(120,113,108,0.12),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(214,211,209,0.5),transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-8 lg:px-10">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl uppercase tracking-[.50em] text-stone-500">
                Koblesse
              </div>
            </div>
            <nav className="hidden gap-8 text-sm text-stone-600 md:flex">
              <a href="#about" className="transition hover:text-stone-900">
                About
              </a>
              <a href="#services" className="transition hover:text-stone-900">
                Services
              </a>
              <a href="#sectors" className="transition hover:text-stone-900">
                Sectors
              </a>
              <a href="#founders" className="transition hover:text-stone-900">
                Founders
              </a>
              <a
                href="#case-studies"
                className="transition hover:text-stone-900"
              >
                Mandates
              </a>
              <a href="#contact" className="transition hover:text-stone-900">
                Contact
              </a>
            </nav>
          </div>

          <div className="grid items-end gap-12 py-20 lg:grid-cols-[1.25fr_0.75fr] lg:py-28">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-stone-300 bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.25em] text-stone-600 backdrop-blur">
                Luxury Lifestyle Consultancy
              </div>
              <h1 className="max-w-xl text-xl font-light leading-tight tracking-tight md:text-xl lg:text-6xl">
                Advisory for luxury assets, hospitality platforms, and lifestyle
                brands pursuing disciplined growth.
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-stone-600">
                Koblesse advises at the intersection of hospitality, wellness,
                lifestyle, and investment-grade brand strategy—supporting
                owners, boards, and executive teams as they sharpen
                positioning, improve performance, and build durable long-term
                value.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-2xl bg-stone-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5"
                >
                  Arrange a Conversation
                </a>
                <a
                  href="#services"
                  className="rounded-2xl border border-stone-300 bg-white px-6 py-3 text-sm font-medium text-stone-800 transition hover:-translate-y-0.5"
                >
                  Explore Services
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-stone-200 bg-white/90 p-8 shadow-xl shadow-stone-200/50 backdrop-blur">
              <div className="text-xs uppercase tracking-[0.3em] text-stone-500">
                Positioning
              </div>
              <div className="mt-4 text-2xl font-light leading-snug">
                Board-level thinking for high-value assets, market-facing
                brands, and commercially ambitious luxury propositions.
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {principles.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-stone-100 px-4 py-4 text-sm text-stone-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="text-sm uppercase tracking-[0.25em] text-stone-500">
              About Koblesse
            </div>
            <h2 className="mt-4 text-3xl font-light tracking-tight md:text-4xl">
              A consultancy designed for discerning brands, ownership groups,
              and decision-makers.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-8 text-stone-600">
            <p>
              Koblesse was conceived for a market that expects more than
              conventional advisory. We work with luxury hospitality, wellness,
              and lifestyle businesses that require clear strategic thinking,
              market intelligence, and commercial judgment delivered with
              precision.
            </p>
            <p>
              Our work spans concept creation, repositioning, pre-opening
              strategy, guest experience refinement, wellness integration,
              revenue-aware brand development, and executive advisory. The aim
              is straightforward: to help strong brands become better run,
              better positioned, and better valued.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="border-y border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="max-w-2xl">
            <div className="text-sm uppercase tracking-[0.25em] text-stone-500">
              Services
            </div>
            <h2 className="mt-4 text-3xl font-light tracking-tight md:text-4xl">
              Consultancy across hospitality, wellness, lifestyle, and
              strategic growth.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-[2rem] border border-stone-200 bg-stone-50 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-2xl font-light tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-stone-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sectors" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="text-sm uppercase tracking-[0.25em] text-stone-500">
              Sector Focus
            </div>
            <h2 className="mt-4 text-3xl font-light tracking-tight md:text-4xl">
              Built for premium sectors where brand strength, pricing power, and
              lived experience matter.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-stone-600">
              Koblesse supports businesses and owners who understand that in
              luxury, every detail carries strategic weight—from concept
              narrative and service choreography to pricing power, loyalty, and
              long-term market standing.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {sectors.map((sector) => (
              <div
                key={sector}
                className="rounded-[1.75rem] border border-stone-200 bg-white p-6 text-lg text-stone-800 shadow-sm"
              >
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-900 text-stone-100">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <div className="text-sm uppercase tracking-[0.25em] text-stone-400">
                Approach
              </div>
              <h2 className="mt-4 text-3xl font-light tracking-tight md:text-4xl">
                Measured in counsel. Commercial in orientation.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-stone-300">
                We bring an owner-minded approach to every assignment—balancing
                brand ambition with operational realism, and creative thinking
                with disciplined commercial outcomes.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
              <div className="space-y-5 text-sm leading-7 text-stone-300">
                <p>Asset positioning and strategic narrative</p>
                <p>Market-facing hospitality and wellness differentiation</p>
                <p>Pre-opening, repositioning, and performance advisory</p>
                <p>Board and leadership counsel for complex decisions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="founders"
        className="border-t border-stone-200 bg-stone-50"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid items-stretch gap-8 lg:grid-cols-2">
            <div className="h-full rounded-[2rem] border border-stone-200 bg-white p-10 shadow-xl shadow-stone-200/40">
              <div className="text-sm uppercase tracking-[0.25em] text-stone-500">
                Co-Founder
              </div>
              <h2 className="mt-4 text-3xl font-light tracking-tight">
                Brian M. Harris
              </h2>
              <div className="mt-2 text-sm text-stone-600">
                Global Hospitality Executive | Board Director
              </div>
              <p className="mt-6 text-base leading-8 text-stone-600">
                With over two decades across luxury hospitality in Asia and
                North America, Brian brings a rare blend of operational
                leadership, commercial acumen, and board-level governance.
                Currently serving as Independent Director for a leading global
                hospitality group, his perspective bridges ownership priorities
                with on-the-ground execution.
              </p>
              <p className="mt-4 text-base leading-8 text-stone-600">
                His career has been defined by repositioning flagship assets,
                elevating brand presence, and driving sustained revenue
                performance—while maintaining the nuance required in owner-led
                environments.
              </p>
            </div>

            <div className="h-full rounded-[2rem] border border-stone-200 bg-white p-10 shadow-xl shadow-stone-200/40">
              <div className="text-sm uppercase tracking-[0.25em] text-stone-500">
                Co-Founder
              </div>
              <h2 className="mt-4 text-3xl font-light tracking-tight">
                Bomi Kim
              </h2>
              <div className="mt-2 text-sm text-stone-600">
                Chief Executive Officer | Global Wellness Expert
              </div>
              <p className="mt-6 text-base leading-8 text-stone-600">
                Bomi leads Koblesse with a perspective shaped by modern luxury,
                wellness-led experience, and brand sensitivity. As Chief
                Executive Officer, she brings a disciplined understanding of how
                hospitality, lifestyle, and well-being converge to create
                concepts that feel both commercially relevant and emotionally
                resonant.
              </p>
              <p className="mt-4 text-base leading-8 text-stone-600">
                Her leadership is defined by an instinct for guest behavior,
                aesthetic clarity, and experience design—helping translate
                market shifts into offerings that strengthen differentiation,
                deepen engagement, and elevate long-term brand value.
              </p>
            </div>

            <div className="lg:col-span-2 rounded-[2rem] border border-stone-200 bg-white p-10 shadow-xl shadow-stone-200/30">
              <div className="text-sm uppercase tracking-[0.25em] text-stone-500">
                Perspective
              </div>
              <p className="mt-6 max-w-5xl text-base leading-8 text-stone-600">
                Koblesse is informed by direct experience operating within
                complex ownership structures, working alongside boards and
                property leadership, and delivering results where expectations
                are both high and immediate.
              </p>
              <p className="mt-4 max-w-5xl text-base leading-8 text-stone-600">
                The advisory approach reflects this reality—clear,
                commercially grounded, and designed to support decisions that
                impact asset value, brand strength, and long-term positioning.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="case-studies"
        className="border-t border-stone-200 bg-white"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="max-w-2xl">
            <div className="text-sm uppercase tracking-[0.25em] text-stone-500">
              Selected Mandates
            </div>
            <h2 className="mt-4 text-3xl font-light tracking-tight md:text-4xl">
              Strategic interventions with measurable commercial and brand
              outcomes.
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-[2rem] border border-stone-200 bg-stone-50 p-8 shadow-sm">
              <div className="text-xs uppercase tracking-[0.3em] text-stone-500">
                Repositioning
              </div>
              <h3 className="mt-3 text-xl font-light">
                Luxury Urban Hotel Transformation
              </h3>
              <p className="mt-4 text-sm leading-7 text-stone-600">
                Led strategic repositioning of a flagship luxury hotel, aligning
                product, pricing, and brand narrative. Resulted in significant
                ADR growth and repositioned the asset as a market leader within
                its competitive set.
              </p>
            </div>

            <div className="rounded-[2rem] border border-stone-200 bg-stone-50 p-8 shadow-sm">
              <div className="text-xs uppercase tracking-[0.3em] text-stone-500">
                Wellness
              </div>
              <h3 className="mt-3 text-xl font-light">
                Integrated Wellness Revenue Model
              </h3>
              <p className="mt-4 text-sm leading-7 text-stone-600">
                Developed a wellness-led concept focused on recovery and sleep
                optimization, introducing new revenue streams and enhancing
                guest engagement beyond traditional spa offerings.
              </p>
            </div>

            <div className="rounded-[2rem] border border-stone-200 bg-stone-50 p-8 shadow-sm">
              <div className="text-xs uppercase tracking-[0.3em] text-stone-500">
                Pre-Opening
              </div>
              <h3 className="mt-3 text-xl font-light">
                Luxury Resort Market Entry
              </h3>
              <p className="mt-4 text-sm leading-7 text-stone-600">
                Advised on pre-opening strategy including positioning,
                commercial framework, and experience design to ensure a strong
                launch trajectory and early market penetration.
              </p>
            </div>

            <div className="rounded-[2rem] border border-stone-200 bg-stone-50 p-8 shadow-sm">
              <div className="text-xs uppercase tracking-[0.3em] text-stone-500">
                Advisory
              </div>
              <h3 className="mt-3 text-xl font-light">
                Board-Level Hospitality Strategy
              </h3>
              <p className="mt-4 text-sm leading-7 text-stone-600">
                Provided governance and strategic counsel to support
                international expansion, asset-light direction, and long-term
                brand positioning across multiple markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-stone-100">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <div className="text-sm uppercase tracking-[0.25em] text-stone-400">
                Environment
              </div>
              <h2 className="mt-4 text-3xl font-light tracking-tight md:text-4xl">
                The sensibility of a chairman’s office, softened by wellness.
              </h2>
              <p className="mt-6 text-base leading-8 text-stone-300">
                Koblesse operates with the quiet confidence of a private
                office—measured, discreet, and intentional—balanced with a
                modern understanding of wellness, recovery, and human-centered
                experience.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur">
              <div className="space-y-4 text-sm text-stone-300">
                <p>Warm woods, stone, and architectural restraint</p>
                <p>Soft lighting and considered spatial flow</p>
                <p>Quiet luxury over visible excess</p>
                <p>Wellness integrated, not applied</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="rounded-[2rem] border border-stone-200 bg-white p-10 shadow-xl shadow-stone-200/40">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <div className="text-sm uppercase tracking-[0.25em] text-stone-500">
                Contact
              </div>
              <h2 className="mt-4 text-3xl font-light tracking-tight md:text-4xl">
                For mandates that require judgment, discretion, and commercial
                intelligence.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-stone-600">
                Whether you are shaping a new luxury proposition, refining a
                hospitality asset, or evaluating a growth opportunity, Koblesse
                offers discreet and commercially grounded advisory for brands
                and owners with ambition.
              </p>
            </div>
            <div className="space-y-4 rounded-[1.5rem] bg-stone-50 p-8">
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-stone-500">
                  Email
                </div>
                <div className="mt-2 text-lg text-stone-900">
                  bomi.kim@koblesse.com
                </div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-stone-500">
                  Inquiries
                </div>
                <div className="mt-2 text-lg text-stone-900">
                  Private consultations by appointment
                </div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-stone-500">
                  Focus
                </div>
                <div className="mt-2 text-lg text-stone-900">
                  Hospitality, wellness, luxury lifestyle, and strategic
                  advisory
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}