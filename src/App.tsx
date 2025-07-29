import React from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import SkillsShowcase from './components/SkillsShowcase';
import Resume from './components/Resume';
import Timeline from './components/Timeline';
import ApkDownloads from './components/ApkDownloads';
import PlatformLinks from './components/PlatformLinks';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter relative overflow-hidden">
      {/* Background Texture */}
     <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 1920 1080"
    className="absolute inset-0"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <pattern
        id="curved-lines"
        x="0"
        y="0"
        width="200"
        height="200"
        patternUnits="userSpaceOnUse"
        opacity="0.8"
      >
        <path
          d="M20,50 Q60,20 100,50 T180,50"
          stroke="#666"
          strokeWidth="8"
          opacity="0.3"
          fill="none"
          className="line-anim-left snake-line"
        />
        <path
          d="M10,100 Q50,130 90,100 T170,100"
          stroke="#666"
          strokeWidth="20"
          opacity=".5"
          fill="none"
          className="line-anim-right"
        />
        <path
          d="M30,150 Q70,120 110,150 T190,150"
          stroke="#666"
          strokeWidth="20"
          opacity=".7"
          fill="none"
          className="line-anim-float"
        />
        <path
          d="M0,75 Q40,105 80,75 T160,75"
          stroke="#777"
          strokeWidth="40"
          opacity="0.3"
          fill="none"
          className="line-anim-dir3 line-anim-rotate "
        />
        <path
          d="M50,25 Q90,55 130,25 T200,25"
          stroke="#777"
          strokeWidth="25"
          opacity=".2"
          fill="none"
          className="line-anim-wobble"
        />
        <path
          d="M50,25 Q90,55 130,25 T200,25"
          stroke="#777"
          strokeWidth="5"
          opacity=".4"
          fill="none"
          className="line-anim-5 snake-line"
        />
        <path
          d="M15,175 Q55,145 95,175 T175,175"
          stroke="#444"
          strokeWidth="7"
          opacity=".3"
          fill="none"
          className="line-anim-left line-anim-dir1"
        />
        <path
          d="M40,0 Q80,30 120,0 T200,0"
          stroke="#666"
          strokeWidth="14"
          opacity="0.9"
          fill="none"
          className="line-anim-right line-anim-dir4"
        />
        <path
          d="M5,125 Q45,95 85,125 T165,125"
          stroke="#555"
          strokeWidth="10"
          opacity=".78"
          fill="none"
          className="line-anim-float"
        />        
        <g transform="rotate(-45, 100, 250)"> 
        <path
        d="M100,0 Q110,20 100,40 Q90,60 100,80 Q110,100 100,120 Q90,140 100,160 Q110,180 100,200"
        stroke="#888"
        strokeWidth="30"
        opacity="0.4"
        fill="none"
        className="snake-vertical"
        />
        </g>
      </pattern>
    </defs>
    <g>
      <rect width="100%" height="100%" fill="url(#curved-lines)" />
    </g>
  </svg>
</div>

      
      {/* Main Content */}
      <div className="relative z-10">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <SkillsShowcase />
        <Resume />
        <Timeline />
        <ApkDownloads />
        <PlatformLinks />
        <Contact />
      </div>
    </div>
    </div>
  );
}

export default App;