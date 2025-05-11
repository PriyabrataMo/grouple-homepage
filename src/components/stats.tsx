const stats = [
  { id: 1, name: "Total Transactions", value: "1,000+" },
  { id: 2, name: "Revenue Generated", value: "$2m+" },
  { id: 3, name: "Average Group Size", value: "36pax" },
];

export default function Stats() {
  return (
    <div className="bg-black py-16">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-y-12 text-center lg:grid-cols-3 lg:gap-x-0">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className={`flex flex-col items-center justify-center ${
                index < stats.length - 1 ? "lg:border-r lg:border-white/30" : ""
              } px-4 lg:px-12`}
            >
              <dd className="text-white text-4xl sm:text-5xl font-semibold mb-2">
                {stat.value}
              </dd>
              <dt className="text-gray-400 text-lg sm:text-xl font-normal">
                {stat.name}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
