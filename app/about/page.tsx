import Link from 'next/link';
import CTASection from '../components/CTASection';

export default function AboutPage() {
  return (
    <>
      {/* Who We Are Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50 py-20">
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-emerald-200/50 blur-3xl" />
        <div className="absolute -bottom-32 left-8 h-80 w-80 rounded-full bg-blue-100/70 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div className="max-w-3xl">
              <span className="text-blue-600 font-medium text-sm uppercase tracking-wider mb-4 block">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Who We Are
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Green Earth X is a technology company dedicated to enabling sustainable industrial transformation.
                We build tools that bridge the gap between complex sustainability requirements and practical
                implementation.
              </p>
              <div className="mt-10 grid sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/60 bg-white/80 p-5 shadow-sm backdrop-blur">
                  <p className="text-sm font-semibold text-gray-900 mb-2">Built for Credibility</p>
                  <p className="text-sm text-gray-600">
                    We focus on transparency, structured workflows, and reliable data to support confident decisions.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/60 bg-white/80 p-5 shadow-sm backdrop-blur">
                  <p className="text-sm font-semibold text-gray-900 mb-2">Designed for Adoption</p>
                  <p className="text-sm text-gray-600">
                    Our approach makes complex sustainability requirements practical for real-world teams.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white/90 p-3 shadow-lg backdrop-blur">
              <img
                src="/earth/green.png"
                alt="Green landscape"
                className="w-full h-full max-h-[420px] object-cover rounded-2xl"
              />
            </div>
          </div>

          <div className="mt-12 rounded-3xl border border-gray-200 bg-white/90 p-8 shadow-lg backdrop-blur">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-11 w-11 rounded-2xl bg-blue-100 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500">Our Approach</p>
                <h2 className="text-lg font-semibold text-gray-900">Domain expertise meets modern software</h2>
              </div>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our team combines deep domain expertise in sustainability standards with modern software
              engineering to create solutions that are both rigorous and accessible. We believe that
              credible sustainability reporting should be achievable for every organization committed
              to positive environmental impact.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-blue-50 p-8 shadow-sm">
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To provide industries with intelligent, structured tools that simplify the path to
                sustainability certification and transparent environmental reporting.
              </p>
            </div>

            {/* Vision */}
            <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-emerald-50 p-8 shadow-sm">
              <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                A world where every industrial operation can demonstrate its environmental impact
                with clarity and credibility, accelerating the global transition to sustainable practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Focus On */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How We Build Trust
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We translate complex sustainability requirements into structured workflows that produce auditable,
                reliable outputs. The result is practical adoption today and credible reporting tomorrow.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <p className="text-sm font-semibold text-gray-900 mb-2">Structured by Design</p>
                <p className="text-sm text-gray-600">
                  We build frameworks that guide teams step by step while preserving flexibility for real-world cases.
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <p className="text-sm font-semibold text-gray-900 mb-2">Verified Outputs</p>
                <p className="text-sm text-gray-600">
                  Every workflow is designed to produce data that can be validated and trusted across stakeholders.
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <p className="text-sm font-semibold text-gray-900 mb-2">Transparent Reporting</p>
                <p className="text-sm text-gray-600">
                  Reporting is clear, accessible, and grounded in methodologies that stand up to scrutiny.
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <p className="text-sm font-semibold text-gray-900 mb-2">Built for Scale</p>
                <p className="text-sm text-gray-600">
                  We design solutions that can grow with your organization and evolving sustainability standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Guides Us
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that shape how we build our products and work with partners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Clarity */}
            <div className="text-center bg-gray-50 rounded-2xl border border-gray-100 p-6">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-100 flex items-center justify-center mb-5">
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Clarity</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We make complex requirements understandable and actionable.
              </p>
            </div>

            {/* Trust */}
            <div className="text-center bg-gray-50 rounded-2xl border border-gray-100 p-6">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-green-100 flex items-center justify-center mb-5">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Trust</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our methodologies are validated and our processes are transparent.
              </p>
            </div>

            {/* Structure */}
            <div className="text-center bg-gray-50 rounded-2xl border border-gray-100 p-6">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-100 flex items-center justify-center mb-5">
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Structure</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We provide frameworks that organize complexity into manageable workflows.
              </p>
            </div>

            {/* Impact */}
            <div className="text-center bg-gray-50 rounded-2xl border border-gray-100 p-6">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-green-100 flex items-center justify-center mb-5">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Impact</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every feature we build is designed to drive real environmental progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Link Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="rounded-3xl border border-gray-100 bg-white p-8 md:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-gray-600 text-lg mb-2">
                Want to learn more about the people behind Green Earth X?
              </p>
              <p className="text-sm text-gray-500">
                Meet the team bringing sustainability expertise and engineering rigor together.
              </p>
            </div>
            <Link
              href="/team"
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
            >
              Meet our team
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Let's Build a Sustainable Future Together"
        description="Connect with us to explore how Green Earth X can support your sustainability goals."
      />
    </>
  );
}
