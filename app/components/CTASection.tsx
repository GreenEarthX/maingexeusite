import Link from 'next/link';

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

export default function CTASection({
  title = "Ready to Transform Your Sustainability Journey?",
  description = "Connect with our team to discover how Green Earth X can support your certification and monitoring needs.",
  buttonText = "Contact Us"
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-br from-[#061f12] via-[#0B3D1F] to-[#0B5A2C]">
      <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-[#00A63E]/30 blur-3xl" />
      <div className="absolute -bottom-24 left-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {title}
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center px-8 py-4 bg-[#00A63E] text-white text-base font-semibold rounded-full hover:bg-[#009032] transition-colors"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
