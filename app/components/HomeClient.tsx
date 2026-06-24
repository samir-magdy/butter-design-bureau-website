"use client";

import { useState } from "react";
import HeroSection from "./HeroSection";
import LoadingScreen from "./LoadingScreen";

export default function HomeClient() {
  const [ready, setReady] = useState(false);
  return (
    <>
      <LoadingScreen visible={!ready} />
      <HeroSection onReady={() => setReady(true)} />
    </>
  );
}
