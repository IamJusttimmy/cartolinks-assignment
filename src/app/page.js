"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import ImageCard from "@/components/ImageCard";
import Generate from "@/components/Generate";
import Footer from "@/components/Footer";

export default function Home() {
  const [isFakeDark, setIsFakeDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("fake-dark-mode", isFakeDark);
  }, [isFakeDark]);

  return (
    <div className="bg-gray-100 min-h-screen text-gray-900">
      <Head>
        <title>Krea AI Clone</title>
      </Head>

      <Header isFakeDark={isFakeDark} setIsFakeDark={setIsFakeDark} />
      <div className="container mx-auto px-4 py-12">
        <ImageCard isFakeDark={isFakeDark} />
        <Generate />
      </div>
      <Footer isFakeDark={isFakeDark} />
    </div>
  );
}
