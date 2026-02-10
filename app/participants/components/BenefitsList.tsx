type Benefit = {
  title: string;
  description: string;
};

type BenefitsListProps = {
  heading: string;
  benefits: Benefit[];
};

export default function BenefitsList({ heading, benefits }: BenefitsListProps) {
  return (
    <div className="mt-8 divide-y space-y-4 divide-gray-100">
      <div>{heading}</div>
      {benefits.map((benefit, index) => (
        <div key={benefit.title} className="pt-4 flex gap-4 md:items-center">
          <div className="w-12 h-12 flex items-center justify-center rounded-full border border-2 border-[#17598d]">
            <h2 className="text-2xl text-[#17598d] md:text-3xl md:pt-1">
              {index + 1}
            </h2>
          </div>
          <div className="w-5/6">
            <h3 className="font-semibold text-lg text-gray-700">
              {benefit.title}
            </h3>
            <p className="text-gray-500">{benefit.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
