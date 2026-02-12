import CTASection from '../../components/CTASection';

export default function MarketplacePage() {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-green-600 font-medium text-sm uppercase tracking-wider mb-4 block">
                Solution
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Marketplace
              </h1>
              <p className="text-xl text-gray-700 font-semibold mb-3">
                Where Verified Projects Meet the Market
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                A future trading layer designed to connect credible projects with verified offtakers and suppliers.
              </p>
              <div className="mt-8">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-[#00A63E] text-white text-base font-semibold rounded-full hover:bg-[#009032] transition-colors"
                >
                  Request a Demo
                </a>
              </div>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-emerald-50 p-8 shadow-lg">
              <p className="text-sm uppercase tracking-wider text-gray-500 mb-3">Visual Section</p>
              <p className="text-gray-600">Conceptual flow, verified participants, gated access</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">What It Is</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                The Marketplace is the market interaction layer of the GreenEarthX platform. It is designed to
                enable offtake and supply matching once projects meet defined credibility and compliance thresholds.
              </p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Why It Matters</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Markets do not function without trust. The Marketplace is intentionally positioned downstream of
                project structuring, plausibility, and compliance, ensuring that only credible projects reach market
                interaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">How It Fits into GreenEarthX</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            The Marketplace completes the digital pathway from project definition to market participation. Its
            activation depends on the maturity of upstream tools and market readiness.
          </p>
        </div>
      </section>

      <CTASection
        title="Prepare for Market Participation"
        description="Build credibility upstream so projects can meet the market with confidence."
        buttonText="Request a Demo"
      />
    </>
  );
}
