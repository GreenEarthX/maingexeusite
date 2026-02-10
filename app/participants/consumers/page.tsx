import BenefitsList from '../components/BenefitsList';
import BackToParticipants from '../components/BackToParticipants';
import ParticipantsHero from '../components/ParticipantsHero';
import StepsRow from '../components/StepsRow';

const steps = [
  {
    icon: '/participants/consumer/catalog.svg',
    alt: 'catalog',
    title: 'Register and Catalog Demand',
    description: 'Pass KYC checks and catalog demand quantity and terms.'
  },
  {
    icon: '/participants/consumer/discover.svg',
    alt: 'discover',
    title: 'Discover Potential Trades',
    description:
      'Match supply with catalogued demand through advanced matching algorithms.'
  },
  {
    icon: '/participants/consumer/confirmation.svg',
    alt: 'confirmation',
    title: 'Create Secure, Tokenized Contracts',
    description: 'Easy partial resales and management of contract terms.'
  },
  {
    icon: '/participants/consumer/accept.svg',
    alt: 'accept',
    title: 'Assure Reliable Supply',
    description:
      'Gain confidence through increased visibility into supplier progress and background.',
    accentColor: '#28A040'
  }
];

const benefits = [
  {
    title: 'Secure a reliable supply',
    description:
      'Reduce supply disruptions with access to verified, viable suppliers and certified low-carbon products, ensuring a stable and trustworthy fuel source. Access guarantees of origin to verify environmental credentials.'
  },
  {
    title: 'Optimize pricing through competitive offers',
    description:
      'Conduct open RFQs for both spot and long-term contracts to secure the best deals on low-carbon fuels. Gain added value with actionable market insights.'
  },
  {
    title: 'Expand reach to certified producers globally',
    description:
      'Discover certified fuel producers worldwide using advanced supply and demand matching algorithms, minimizing geopolitical and pricing risks.'
  },
  {
    title: 'Streamline contract creation',
    description:
      'Simplify the contracting process with a guided contract generator that ensures compliance and offers ready-to-use contract terms.'
  },
  {
    title: 'Effortlessly manage demand',
    description:
      'Track fuel inflows and usage with intuitive dashboards and advanced data analytics.'
  }
];

export default function ConsumersPage() {
  return (
    <>
      <ParticipantsHero
        title="Consumers"
        subtitle="Secure supply, optimize pricing, and negotiate contracts backed by transparent, auditable data."
        ctaText="Get in Touch"
        ctaHref="/contact"
        ctaTextColor="#023F41"
        backgroundColor="#023F41"
        imageSrc="/participants/ship.jpg"
        imageAlt="field"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="mt-10 mb-10">How it works:</div>
        <StepsRow steps={steps} />

        <BenefitsList heading="GEX can help consumers:" benefits={benefits} />

        <BackToParticipants className="mt-16 w-1/6" />
      </div>
    </>
  );
}
