import Image from "next/image";

const features = [
  {
    icon: "/grid/1.svg",
    title: "Powerful Dashboard",
    description: "Take control with real-time insights and seamless management.",
  },
  {
    icon: "/grid/2.svg",
    title: "Reservation Tracking",
    description: "Monitor and manage all bookings effortlessly.",
  },
  {
    icon: "/grid/3.svg",
    title: "Customer & Invitee Data",
    description:
      "Capture and access key guest information with ease.",
  },
  {
    icon: "/grid/4.svg", // Assuming 4.svg is for Concierge Management based on the order
    title: "Concierge Management",
    description:
      "Assign and manage personalised guest services seamlessly.",
  },
  {
    icon: "/grid/5.svg", // Assuming 5.svg is for Resource Allocation
    title: "Resource Allocation",
    description:
      "Control team roles and permissions with ease.",
  },
  {
    icon: "/grid/6.svg", // Assuming 6.svg is for Reporting & Analytics
    title: "Reporting & Analytics",
    description:
      "Access valuable insights to drive informed decisions.",
  },
];

const GridFeature = () => {
  return (
    <section className="w-full bg-black text-white">
      <div className="max-w-7xl mx-auto pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div 
              key={feature.title} 
              className={`
                flex flex-col  items-center justify-center text-center p-8 py-16 relative
                ${index % 3 !== 2 ? 'md:border-r border-neutral-800' : ''}
                ${index < 3 ? 'border-b border-neutral-800' : ''}
              `}
            >
              <div className="relative ">
                <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full"></div>
                <div className="relative flex items-center justify-center w-15 h-15 bg-white rounded-full">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={40}
                    height={40}
                  />
                </div>
              </div>
              <h3 className="mt-6 font-['Manrope'] text-[24px] heading-gradient  tracking-tight">{feature.title}</h3>
              <p className="mt-4 text-base text-[18px] text-gray-400 max-w-[300px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GridFeature;
