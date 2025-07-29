import React from 'react';
import { Download, Github, Play } from 'lucide-react';

interface App {
  name: string;
  description: string;
  apkLink: string;
  githubLink: string;
  youtubeLink?: string;
  features: string[];
}

const apps: App[] = [
  {
    name: 'Clockxy',
    description: 'Feature-rich clock application with customizable themes and productivity tools',
    apkLink: 'https://github.com/rohandakua/Clockxy/releases/download/v1.0/clockxy-v1.0.apk', // Replace with your actual link
    githubLink: 'https://github.com/rohandakua/Clockxy', // Replace with your actual repo
    youtubeLink: 'https://youtube.com/watch?v=YOUR_VIDEO_ID', // Replace with your actual video
    features: ['Custom Themes', 'Alarms', 'Timer', 'Stopwatch']
  },
  {
    name: 'Poll Creator',
    description: 'Create and manage polls with real-time voting and results visualization',
    apkLink: 'https://github.com/rohandakua/PollCreator/releases/download/v1.0/poll-creator-v1.0.apk', // Replace with your actual link
    githubLink: 'https://github.com/rohandakua/PollCreator', // Replace with your actual repo
    youtubeLink: 'https://youtube.com/watch?v=YOUR_VIDEO_ID', // Replace with your actual video
    features: ['Real-time Voting', 'Results Analytics', 'Share Polls', 'Custom Options']
  },
  {
    name: 'MBTI Personality Checker',
    description: 'Comprehensive MBTI personality assessment with detailed analysis and insights',
    apkLink: 'https://github.com/rohandakua/MBTI-Checker/releases/download/v1.0/mbti-checker-v1.0.apk', // Replace with your actual link
    githubLink: 'https://github.com/rohandakua/MBTI-Checker', // Replace with your actual repo
    features: ['16 Personality Types', 'Detailed Analysis', 'Career Suggestions', 'Compatibility']
  },
  {
    name: 'Gymxy',
    description: 'Complete fitness tracking app with workout plans and progress monitoring',
    apkLink: 'https://github.com/rohandakua/Gymxy/releases/download/v1.0/gymxy-v1.0.apk', // Replace with your actual link
    githubLink: 'https://github.com/rohandakua/Gymxy', // Replace with your actual repo
    youtubeLink: 'https://youtube.com/watch?v=YOUR_VIDEO_ID', // Replace with your actual video
    features: ['Workout Plans', 'Progress Tracking', 'Exercise Library', 'Statistics']
  }
];

const ApkDownloads: React.FC = () => {
  return (
    <section id="apps" className="py-20">
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-2 bg-gray-800 rounded-full text-sm text-gray-300 mb-6">
          Mobile Applications
        </div>
        <h2 className="text-4xl font-bold mb-6">Download My Apps</h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Explore my Android applications built with modern technologies and user-centric design.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {apps.map((app, index) => (
          <div key={index} className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-4 text-white">{app.name}</h3>
            
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              {app.description}
            </p>
            
            {/* Features */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {app.features.map((feature, featureIndex) => (
                  <span
                    key={featureIndex}
                    className="px-2 py-1 bg-gray-800 text-gray-300 rounded-md text-xs"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <a
                href={app.apkLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-lg transition-all duration-300 transform hover:scale-105 text-sm font-medium shadow-lg hover:shadow-green-500/25"
              >
                <Download className="w-4 h-4" />
                Download APK
              </a>
              
              <a
                href={app.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105 text-sm font-medium"
              >
                <Github className="w-4 h-4" />
                Source Code
              </a>
              
              {app.youtubeLink && (
                <a
                  href={app.youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-lg transition-all duration-300 transform hover:scale-105 text-sm font-medium shadow-lg hover:shadow-red-500/25"
                >
                  <Play className="w-4 h-4" />
                  Demo Video
                </a>
              )}
            </div>
            
            {/* Download Stats or Additional Info */}
            <div className="mt-4 pt-4 border-t border-gray-800">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>Latest Version</span>
                <span>Android 5.0+</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ApkDownloads;