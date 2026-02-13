import BenefitsList from '../components/BenefitsList';
import BackToParticipants from '../components/BackToParticipants';
import ParticipantsHero from '../components/ParticipantsHero';

const benefits = [
  {
    title: 'Access a large market for secondary services',
    description:
      'Gain visibility into a large number buyers, sellers, and traders needing secondary services such as insurance, banking, shipping, and legal support.'
  },
  {
    title: 'Enhance ecosystem effectiveness',
    description:
      'Leverage your expertise and resources to facilitate contracts and strengthen project viability across the ecosystem.'
  },
  {
    title: 'Effortlessly manage leads and active engagements',
    description:
      'Track business activities with intuitive dashboards, optimizing value through actionable market insights.'
  }
];

export default function PartnersPage() {
  return (
    <>
      <ParticipantsHero
        title="Service Providers"
        subtitle="Connect with transactions that need your expertise within a transparent, verifiable market."
        ctaText="Get in Touch"
        ctaHref="/contact"
        ctaTextColor="#015352"
        backgroundColor="#015352"
        imageSrc="/participants/port.jpg"
        imageAlt="port"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <BenefitsList heading="GEX can help service providers:" benefits={benefits} />
        <BackToParticipants className="mt-20 w-1/6" />
      </div>
    </>
  );
}
