import BenefitsList from '../components/BenefitsList';
import BackToParticipants from '../components/BackToParticipants';
import ParticipantsHero from '../components/ParticipantsHero';
import StepsRow from '../components/StepsRow';

const steps = [
  {
    icon: '/participants/producer/registry.svg',
    alt: 'register',
    title: 'Register',
    description: 'Pass KYC checks and gain access to a trade limit.'
  },
  {
    icon: '/participants/trader/plan.svg',
    alt: 'plan',
    title: 'Plan Trades',
    description: 'Anticipate future demand using our data-driven insights.'
  },
  {
    icon: '/participants/trader/discover.svg',
    alt: 'discover',
    title: 'Discover Potential',
    description: 'Explore the marketplace to identify promising bids or offers.'
  },
  {
    icon: '/participants/trader/trade.svg',
    alt: 'trade',
    title: 'Execute Trades',
    description:
      "Leverage GEX's tokenized contracts to unbundle or bundle supply with ease to make deals happen."
  }
];

const benefits = [
  {
    title: 'Simplify transactions with tokenized smart contracts',
    description:
      'Seamlessly bundle and unbundle supply through our innovative, digital-first securitized contracts.'
  },
  {
    title: 'Access a deep and liquid global market',
    description:
      'Leverage a vast network of suppliers and buyers, taking advantage of market information asymmetry for optimized trading in both the spot and long-term market.'
  },
  {
    title: 'Gain unique and actionable market insights',
    description:
      'Anticipate market trends with comprehensive demand, supply, and market insights to build an optimal position for returns.'
  },
  {
    title: 'Effortlessly manage commitments',
    description:
      'Track product inflows and outflows using intuitive dashboards.'
  }
];

export default function TradersPage() {
  return (
    <>
      <ParticipantsHero
        title="Traders"
        subtitle="Read the market and execute trades with transparent, verifiable data and trusted counterparties."
        ctaText="Get in Touch"
        ctaHref="/contact"
        ctaTextColor="#1A303F"
        backgroundColor="#1A303F"
        imageSrc="/participants/shanghai.jpg"
        imageAlt="shanghai"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="mt-10 mb-10">How it works:</div>
        <StepsRow steps={steps} arrowVariants={['single', 'double', 'double']} />
      </div>

      <div className="bg-cover bg-center" style={{ backgroundImage: "url('/participants/banner_5.png')" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div className="pt-10">
            Contact tokenization allows for flexible demand and supply matching:
          </div>
          <div className="flex flex-col justify-center items-center pb-10">
            <img
              src="/participants/contractTokenization.svg"
              alt="bundle"
              className="hidden md:block w-full lg:w-9/12 mx-auto px-10 py-4"
              loading="eager"
            />
            <div className="flex flex-col md:flex-row w-full lg:w-9/12 items-center justify-between space-y-4">
              <div className="flex flex-row md:hidden">
                <img
                  src="/participants/trader/tokenization1.svg"
                  alt="token1"
                  className="mx-auto p-2"
                  loading="eager"
                />
                <img
                  src="/participants/trader/tokenization1.svg"
                  alt="token1"
                  className="mx-auto p-2"
                  loading="eager"
                />
              </div>
              <div className="text-center text-[#17598d] w-7/12">
                Digital contract with rich trail of provenance
              </div>
              <div className="flex flex-row md:hidden">
                <img
                  src="/participants/trader/tokenization2.svg"
                  alt="token2"
                  className="mx-auto p-2"
                  loading="eager"
                />
                <img
                  src="/participants/trader/tokenization2.svg"
                  alt="token2"
                  className="mx-auto p-2"
                  loading="eager"
                />
              </div>
              <div className="text-center text-[#17598d] w-7/12">
                Securitized via blockchain
              </div>
              <div className="flex flex-row md:hidden">
                <img
                  src="/participants/trader/tokenization3.svg"
                  alt="token3"
                  className="mx-auto p-2"
                  loading="eager"
                />
                <img
                  src="/participants/trader/tokenization3.svg"
                  alt="token3"
                  className="mx-auto p-2"
                  loading="eager"
                />
                <img
                  src="/participants/trader/tokenization3.svg"
                  alt="token3"
                  className="mx-auto p-2"
                  loading="eager"
                />
              </div>
              <div className="text-center text-[#17598d] w-7/12">
                Unbundled and bundled as required for trades
              </div>
              <div className="flex flex-row md:hidden">
                <img
                  src="/participants/trader/tokenization4.svg"
                  alt="token4"
                  className="mx-auto p-2"
                  loading="eager"
                />
                <img
                  src="/participants/trader/tokenization4.svg"
                  alt="token4"
                  className="mx-auto p-2"
                  loading="eager"
                />
                <img
                  src="/participants/trader/tokenization4.svg"
                  alt="token4"
                  className="mx-auto p-2"
                  loading="eager"
                />
              </div>
              <div className="text-center text-[#17598d] w-7/12">
                New bundle is resold as required
              </div>
              <div className="flex flex-row md:hidden">
                <img
                  src="/participants/trader/tokenization5.svg"
                  alt="token5"
                  className="mx-auto p-2"
                  loading="eager"
                />
                <img
                  src="/participants/trader/tokenization5.svg"
                  alt="token5"
                  className="mx-auto p-2"
                  loading="eager"
                />
              </div>
              <div className="text-center text-[#17598d] w-7/12">
                Trail of provenance is maintained post-bundling
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <BenefitsList
          heading="GEX can help traders & market makers:"
          benefits={benefits}
        />
        <BackToParticipants className="mt-20 w-1/6" />
      </div>
    </>
  );
}
