import React from "react";
type Plan =
{
     name:string;
     price:string;
     features:string[];
};
const  plans: Plan[] = [
    {
        name:"basic",
        price:"$10/moths",
        features:[ 
              "upto 10000 records",
              "unlimited storage",
              "plan starts with 3 users",
        ],
    },
    {
        name:"pro",
        price:"$20/months",
        features :[
            " upto 20,000 records",
            "unlimited storage",
            "plan starts with 10 users",
        ],
    },
    {
        name:"premium",
        price:"$1000/year",
        features:[
            "upto 100,000 records",
            "unlimited storage",
            "plan starts with 100 users",
        ],
    },
]; 
const pricing: React.FC=()=>
{
    return(
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10">
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-gray-200 p-8 rounded-2xl shadow-md text-center w-80 hover:scale-105 transition"
          >
            <h2 className="text-2xl font-semibold mb-4">{plan.name}</h2>

            <p className="text-xl font-bold mb-6">
              {plan.price}{" "}
              <span className="text-sm font-normal">per user/month</span>
            </p>

            <ul className="text-left mb-6 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex gap-2">
                  <span>✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button className="border border-gray-500 px-6 py-2 rounded-full hover:bg-gray-300">
              Contact Sales
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
    export default pricing;


