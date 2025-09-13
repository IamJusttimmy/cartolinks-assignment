import React from "react";
import Image from "next/image";
import {
  FaHome,
  FaImage,
  FaVideo,
  FaMagic,
  FaPen,
  FaFont,
  FaFolder,
  FaRegBell,
  FaRegMoon,
  FaGlobe,
  FaImages,
  FaHeadphones,
  FaRegSun,
  FaSun,
} from "react-icons/fa";

export default function Header({ isFakeDark, setIsFakeDark }) {
  const navItems = [
    { icon: <FaHome />, label: "Home", active: true },
    { icon: <FaImage />, label: "Gallery" },
    { icon: <FaVideo />, label: "Video" },
    { icon: <FaMagic />, label: "Magic" },
    { icon: <FaPen />, label: "Edit" },
    { icon: <FaFont />, label: "Text" },
    { icon: <FaFolder />, label: "Files" },
  ];

  return (
    <div className="w-full px-2 pt-2 ">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
            <Image
              src="/images/Krea-logo.png"
              alt="Krea Logo"
              width={32}
              height={32}
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="flex items-center bg-gray-200 rounded-2xl p-2 space-x-2">
          {navItems.map((item, index) => (
            <button
              key={index}
              className={`
                flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-200
                ${
                  item.active
                    ? "bg-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }
              `}
            >
              {item.icon}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-4 text-black">
          <a
            href="#"
            className="flex items-center space-x-2 font-semibold text-black hover:text-gray-600 transition-colors"
          >
            <FaImages />
            <span>Gallery</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 font-semibold text-black hover:text-gray-600 transition-colors"
          >
            <FaHeadphones />
            <span>Support</span>
          </a>
          <button className="text-black hover:text-gray-600 transition-colors">
            <FaRegBell size={20} />
          </button>
          <button
            onClick={() => setIsFakeDark((prev) => !prev)}
            className="w-10 h-10 flex items-center justify-center text-black hover:text-gray-600 transition-colors"
          >
            {isFakeDark ? <FaSun size={20} /> : <FaRegMoon size={20} />}
          </button>

          <button className="text-black hover:text-gray-600 transition-colors">
            <FaGlobe size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
