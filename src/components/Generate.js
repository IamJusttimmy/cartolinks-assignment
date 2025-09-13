import Image from "next/image";

const features = [
  {
    id: 1,
    title: "Image",
    description: "Generate images with custom styles in Flux and Ideogram.",
    icon: <Image src="/icons/image.png" alt="image" width={70} height={70} />,
    label: "New",
  },
  {
    id: 2,
    title: "Video",
    description: "Generate videos with Halfus, Pika, Runway Lumis, and more.",
    icon: <Image src="/icons/video.png" alt="image" width={70} height={70} />,
    label: "",
  },
  {
    id: 3,
    title: "Raeltime",
    description: "Realtime Ai rendering on a Camera. Instant Feedback loop",
    icon: <Image src="/icons/torch.png" alt="image" width={70} height={70} />,
    label: "",
  },
  {
    id: 4,
    title: "Enhancer",
    description: "Upscale and enhance images and videos up to 22k.",
    icon: (
      <Image src="/icons/magician.png" alt="image" width={70} height={70} />
    ),
    label: "New",
  },
  {
    id: 5,
    title: "edit",
    description: "Add object, change style, or expand photos and generations.",
    icon: (
      <Image
        src="/icons/video-editing.png"
        alt="image"
        width={70}
        height={70}
      />
    ),
    label: "New",
  },
  {
    id: 6,
    title: "Video Lipsync",
    description: "Lip sync any video to any audio.",
    icon: (
      <Image src="/icons/microphone.png" alt="image" width={70} height={70} />
    ),
    label: "",
  },
  {
    id: 7,
    title: "Motion Transfer",
    description: "Transfer motion to images and animate characters.",
    icon: <Image src="/icons/man.png" alt="image" width={70} height={70} />,
    label: "New",
  },
  {
    id: 8,
    title: "Train",
    description: "Train Kera to replicate your style, products, or characters.",
    icon: (
      <Image
        src="/icons/deep-learning.png"
        alt="image"
        width={70}
        height={70}
      />
    ),
    label: "",
  },
];

const GenerateSection = () => {
  return (
    <section className="mt-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Generate</h2>
        <a href="#" className="text-blue-400 hover:underline">
          Show all
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feature) => (
          <div key={feature.id} className=" p-2">
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="p-2">{feature.icon}</div>
              <div className="text-sm">
                <div className="flex items-center gap-2">
                  <h3 className="text-m font-bold">{feature.title}</h3>
                  {feature.label === "New" && (
                    <span className="text-xs px-2 py-1 rounded-xl bg-blue-500 text-white">
                      New
                    </span>
                  )}
                </div>
                <p className="text-gray-500">{feature.description}</p>
              </div>
              <div className="flex items-center">
                <button className="bg-gray-200 px-4 py-1 rounded-2xl text-gray-800 font-semibold hover:bg-gray-300 transition-colors">
                  Open
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GenerateSection;
