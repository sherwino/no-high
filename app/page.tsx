import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="no-high-without-lettering.mp4"
        autoPlay
        playsInline
        loop
        muted
      />

      {/* Content Container - 16:9 Aspect Ratio */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="w-full max-w-[1920px] aspect-video relative px-4">
          <div className="absolute inset-0 flex flex-col justify-between items-center">
            {/* Top Logo */}
            <div className="w-full flex justify-center mt-[10%]">
              <div className="w-[50%] min-w-[300px]">
                <Image
                  src="/no-high-stacked.png"
                  alt="No High Logo"
                  width={800}
                  height={400}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>

            {/* Bottom Text Image */}
            <div className="w-full flex justify-center mb-[10%]">
              <div className="w-[70%] min-w-[400px]">
                <Image
                  src="/no-high-text-image.png"
                  alt="Imagination Takes Time"
                  width={1000}
                  height={200}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
