import React from "react";
type Plan = {
  name: string;
  price: string;
  features: string[];
};

const plans: Plan[] = [
  {
    name: "Essential",
    price: "$39",
    features: [
      "Up to 10,000 records",
      "Unlimited Storage",
      "Plan starts with 3 seats",
      "Includes Core Features",
      "Training & Onboarding services",
      "Service & Support",
    ],
  },
  {
    name: "Professional",
    price: "$49",
    features: [
      "Up to 50,000 records",
      "Unlimited Storage",
      "Plan starts with 3 seats",
      "Includes Core Features",
      "Includes Smart Replies",
      "Includes Standard Email Campaigns",
      "Training & Onboarding services",
      "Service & Support",
    ],
  },
  {
    name: "Premium",
    price: "$74",
    features: [
      "Up to 120,000 records",
      "Unlimited Storage",
      "Plan starts with 3 seats",
      "Includes All Features",
      "Includes Smart Replies",
      "Includes Unlimited Email Campaigns",
      "Personal Training & Onboarding services",
      "Dedicated Service & Support",
    ],
  },
];

const Pricing: React.FC = () => {
  return (

      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`p-8 rounded-2xl shadow-md text-center w-80 transition hover:scale-105
                ${
                  plan.name === "Professional"
                    ? "bg-white border-2 border-blue-500 scale-105"
                    : "bg-gray-200"
                }`}
            >
              <h2 className="text-2xl font-semibold mb-4">
                {plan.name}
              </h2>

              <p className="text-xl font-bold mb-6">
                {plan.price}{" "}
                <span className="text-sm font-normal">
                  per user/month
                </span>
              </p>

              <ul className="text-left mb-6 space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span>✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="border border-gray-500 px-6 py-2 rounded-full hover:bg-gray-800 hover:text-white transition">
                Contact Sales
              </button>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Pricing;