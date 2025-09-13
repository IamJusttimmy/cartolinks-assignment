import { useState, useEffect } from "react";
import Image from "next/image";

const imageCardItems = [
  {
    id: 1,
    title: "WAN 2.2",
    description:
      "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
    buttonText: "Try WAN 2.2",
    image: "/images/wan2.2.jpeg",
    label: "NEW IMAGE MODEL",
  },
  {
    id: 2,
    title: "FLUX 1 Krea",
    description:
      "We're making the weights to our FLUX 1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea Image.",
    buttonText: "Open Source",
    image: "/images/flux.jpeg",
    label: "OPEN SOURCE MODEL",
  },
  {
    id: 3,
    title: "IDEOGRAM Beta",
    description:
      "Create stunning images with Ideogram, the new text-to-image model focused on design, typography and layout.",
    buttonText: "Try Ideogram",
    image: "/images/images.jpeg",
    label: "NEW IMAGE MODEL",
  },
  {
    id: 4,
    title: "Pika Video",
    description:
      "Generate high-quality video from text prompts with Pika, the new text-to-video model from Google.",
    buttonText: "Try Pika",
    image: "/images/ai-video.png",
    label: "NEW VIDEO MODEL",
  },
];

const ImageCard = ({ isFakeDark }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const numVisibleCards = 1.25;

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((currentActiveIndex) => {
        const nextIndex = (currentActiveIndex + 1) % imageCardItems.length;
        return nextIndex;
      });
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full">
      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${activeIndex * (100 / numVisibleCards)}%)`,
          }}
        >
          {imageCardItems.map((item) => (
            <div
              key={item.id}
              className="relative flex-shrink-0"
              style={{ width: `${100 / numVisibleCards}%` }}
            >
              <div className="relative w-[85%] h-[400px]">
                <Image
                  src={item.image}
                  fill
                  sizes="(max-width: 768px) 100vw, 700px"
                  alt={item.title}
                  className={`rounded-2xl object-cover ${
                    isFakeDark ? "invert-back" : ""
                  }`}
                  priority={item.id === 1}
                />

                <div className="absolute inset-0 flex flex-col justify-between p-8 rounded-xl text-white">
                  <span className="text-sm uppercase self-start">
                    {item.label}
                  </span>

                  <div className="flex-grow flex items-center justify-center">
                    <h2 className="text-6xl font-extrabold text-center ">
                      {item.title}
                    </h2>
                  </div>

                  <div className="flex justify-between">
                    <div className="flex flex-col ">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="mt-2 text-sm max-w-lg">
                        {item.description}
                      </p>
                    </div>
                    <button className="mt-4 px-6 py-2 bg-white text-black font-semibold rounded-lg self-start transition-colors hover:bg-gray-200">
                      {item.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-[-2.5rem] left-1/2 -translate-x-1/2 flex space-x-2">
        {imageCardItems.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              activeIndex === index ? "bg-black" : "bg-zinc-500"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;

//
