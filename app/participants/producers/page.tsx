import BenefitsList from '../components/BenefitsList';
import BackToParticipants from '../components/BackToParticipants';
import ParticipantsHero from '../components/ParticipantsHero';
import StepsRow from '../components/StepsRow';

const steps = [
  {
    icon: '/participants/producer/registry.svg',
    alt: 'register',
    title: 'Register and Add Inventory',
    description: 'Pass KYC checks and add self-certified inventory.'
  },
  {
    icon: '/participants/producer/certify.svg',
    alt: 'certify',
    title: 'Certify',
    description: 'Get third-party green certification from trusted partners.'
  },
  {
    icon: '/participants/producer/transact.svg',
    alt: 'trade',
    title: 'Find Trade and Execute',
    description:
      'Discover buyer intent, bid against requests and manage the transaction for its lifecycle.'
  },
  {
    icon: '/participants/producer/partner.svg',
    alt: 'partner',
    title: 'Partner with Service Providers',
    description: 'Find certified shippers, insurers and bankers to enable the deal.'
  },
  {
    icon: '/participants/producer/fund.svg',
    alt: 'fund',
    title: 'Fund Projects and Ship Inventory',
    description: 'Leverage future-dated contracts to access funds now.',
    accentColor: '#28A040'
  }
];

const benefits = [
  {
    title: 'Access offtake financing',
    description:
      'Secure funds for pre-FID projects by pre-selling inventory through future-dated contracts.'
  },
  {
    title: 'Sell green premiums independently from fuels',
    description:
      'Leverage our unique technology to separate green premiums from physical fuels, allowing producers to sell products to local consumers while monetizing green attributes.'
  },
  {
    title: 'Reach reliable buyers worldwide',
    description:
      'Expand reach and discoverability across global markets with our advanced supply and demand matching algorithms.'
  },
  {
    title: 'Enhance feasibility and credibility through transparent certification',
    description:
      'Showcase product quality and carbon intensity with certifications from our trusted partners.'
  },
  {
    title: 'Streamline contract creation',
    description:
      'Simplify the contracting process with a guided contract generator that ensures compliance and offers ready-to-use contract terms.'
  },
  {
    title: 'Effortlessly manage inventory and commitments',
    description:
      'Track product inflows and outflows with intuitive dashboards, and optimize value with actionable market insights.'
  }
];

export default function ProducersPage() {
  return (
    <>
      <ParticipantsHero
        title="Producers"
        subtitle="List supply, reach verified offtakers, and negotiate contracts backed by transparent, auditable data."
        ctaText="Get in Touch"
        ctaHref="/contact"
        ctaTextColor="#456861"
        backgroundColor="#456861"
        imageSrc="/participants/producer.jpg"
        imageAlt="field"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="mt-10 mb-10">How it works:</div>
        <StepsRow steps={steps} />

        <BenefitsList heading="GEX can help producers:" benefits={benefits} />

        <BackToParticipants className="mt-16 w-1/6" />
      </div>
    </>
  );
}
