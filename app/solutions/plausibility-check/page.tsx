import CTASection from '../../components/CTASection';

export default function PlausibilityCheckPage() {
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
                Plausibility Check
              </h1>
              <p className="text-xl text-gray-700 font-semibold mb-3">
                Assemble Trust Before You Seek Approval
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Validate whether project data is internally consistent across physical, commercial, and documentation
                layers.
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
            <div className="rounded-2xl border border-gray-200 bg-gray-50 overflow-hidden shadow-lg">
              <img
                src="/screenshots/plausibility-result.png"
                alt="Plausibility Check interface"
                className="w-full h-auto max-h-[520px] object-cover"
              />
              <div className="px-6 py-4 border-t border-gray-200 bg-white">
                <p className="text-sm text-gray-600">
                  Three-step trust blocks: energy, contracts, records
                </p>
              </div>
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
                The Plausibility Check is a consistency verification mechanism that evaluates whether a structured
                project description can withstand basic scrutiny before external engagement. It focuses on internal
                coherence, not certification or approval.
              </p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Why It Matters</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Inconsistent data undermines trust long before regulators or auditors are involved. The Plausibility
                Check identifies mismatches and inconsistencies early, reducing friction and rework later in the
                project lifecycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">What It Enables</h2>
          <ul className="space-y-3 text-gray-600 text-lg">
            <li>Energy and mass flow consistency checks</li>
            <li>Alignment between contractual commitments and declared outputs</li>
            <li>Cross-checking of records and documentation</li>
            <li>Early identification of red flags and inconsistencies</li>
          </ul>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">How It Works</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A three-stage pathway from document extraction to verified consistency.
            </p>
          </div>

          <div className="space-y-12">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="rounded-2xl border border-gray-200 bg-gray-50 overflow-hidden shadow-lg">
                <img
                  src="/screenshots/plausibility-ocr.png"
                  alt="OCR results preview"
                  className="w-full h-72 object-cover"
                />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">Step 1 — OCR Extraction</p>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  Turn Documents into Structured Data
                </h3>
                <p className="text-gray-600 mb-4">
                  Convert project documents into machine-readable, structured inputs.
                </p>
                <p className="text-gray-600 mb-3">
                  The OCR step extracts key data fields from Proof of Sustainability (PoS), invoices, PPAs, and term
                  sheets. It transforms unstructured PDFs into structured, verifiable data.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Identifies counterparties (supplier, buyer)</li>
                  <li>Extracts quantities, units, prices, and dates</li>
                  <li>Detects certification references</li>
                  <li>Structures data into standardized JSON format</li>
                </ul>
                <p className="mt-4 font-medium text-gray-700">
                  Output: Structured project dataset ready for minting and validation.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="order-2 lg:order-1">
                <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">Step 2 — Minting (Digital Anchoring)</p>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  Anchor Documents into a Verifiable Digital Record
                </h3>
                <p className="text-gray-600 mb-4">
                  Cross-document verification and digital anchoring to preserve provenance.
                </p>
                <p className="text-gray-600">
                  Minting establishes a traceable record that ties extracted data back to the source documents,
                  enabling reliable downstream checks and auditability.
                </p>
              </div>
              <div className="order-1 lg:order-2 rounded-2xl border border-gray-200 bg-gray-50 overflow-hidden shadow-lg">
                <img
                  src="/screenshots/plausibility-mint.png"
                  alt="Mint step preview"
                  className="w-full h-72 object-cover"
                />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="rounded-2xl border border-gray-200 bg-gray-50 overflow-hidden shadow-lg">
                <img
                  src="/screenshots/plausibility-result.png"
                  alt="Plausibility result preview"
                  className="w-full h-72 object-cover"
                />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">Step 3 — Plausibility Review</p>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  Validate Consistency Across the Set
                </h3>
                <p className="text-gray-600 mb-4">
                  Compare extracted fields for alignment and flag inconsistencies early.
                </p>
                <p className="text-gray-600">
                  This step surfaces mismatches in dates, quantities, parties, and commitments so issues are
                  resolved before external engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">How It Fits into GreenEarthX</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            The Plausibility Check acts as a trust-building layer between project definition and compliance
            evaluation. It supports confidence and transparency without asserting regulatory outcomes.
          </p>
        </div>
      </section>

      <CTASection
        title="Verify Consistency Early"
        description="Reduce risk by validating project coherence before external review."
        buttonText="Request a Demo"
      />
    </>
  );
}
