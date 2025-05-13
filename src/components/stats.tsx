import React from "react";

const stats = [
  { id: 1, name: "Total Transactions", value: "1,000+" },
  { id: 2, name: "Revenue Generated", value: "$2m+" },
  { id: 3, name: "Average Group Size", value: "36pax" },
];

export default function Stats() {
  return (
    <div className="bg-black pb-20 md:pb-18 pt-0 md:pt-28">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        {/* Mobile vertical layout */}
        <div className="md:hidden flex flex-col items-center">
          {stats.map((stat, index) => (
            <React.Fragment key={stat.id}>
              <div className="flex flex-col items-center text-center py-12">
                <dd className="heading-gradient text-4xl font-semibold mb-2">
                  {stat.value}
                </dd>
                <dt className="heading-gradient text-gray-400 text-lg font-normal">
                  {stat.name}
                </dt>
              </div>

              {index < stats.length - 1 && (
                <div className="h-24 w-px bg-white/30"></div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Desktop grid version */}
        <dl className="hidden md:grid grid-cols-3 gap-x-0">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className={`flex flex-col items-center justify-center ${
                index < stats.length - 1 ? "border-r border-white/30" : ""
              } px-4 lg:px-12`}
            >
              <dd className=" heading-gradient text-4xl sm:text-5xl font-semibold mb-2">
                {stat.value}
              </dd>
              <dt className="heading-gradient text-gray-400 text-lg sm:text-xl font-normal">
                {stat.name}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
