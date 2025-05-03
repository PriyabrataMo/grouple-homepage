import React from "react";
import Image from "next/image";

const Awards = () => {
  const awards = [
    {
      id: 1,
      image: "/awards/1.png",
    },
    {
      id: 2,
      image: "/awards/2.png",
    },
    {
      id: 3,
      image: "/awards/3.png",
    },
    {
      id: 4,
      image: "/awards/4.png",
    },
  ];

  return (
    <section className="py-16 md:py-24 w-full overflow-hidden">
      <div className="container mx-auto px-4 content-center">
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-[#111116] to-[#07070d] p-6 md:p-10 content-center">
          <div className="flex justify-center items-center">
            <h2 className="heading-gradient font-medium text-center mb-4 bg-clip-text">
              Awards and recognition
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {awards.map((award) => (
              <div key={award.id} className="flex items-center justify-center">
                <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 relative">
                  <Image
                    src={award.image}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
