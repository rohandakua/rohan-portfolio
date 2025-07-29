import React from 'react';
import { Github, Linkedin, Instagram, Code, Trophy, Zap, Award } from 'lucide-react';

interface Platform {
  name: string;
  url: string;
  icon: React.ReactNode;
}

const platforms: Platform[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/rohandakua',
    icon: <Github className="w-6 h-6" />
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/rohandakua/',
    icon: <Zap className="w-6 h-6" />
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/rohandakua/',
    icon: <Linkedin className="w-6 h-6" />
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/abc_def_why',
    icon: <Instagram className="w-6 h-6" />
  },
  {
    name: 'CodeChef',
    url: '#codechef-placeholder',
    icon: <Code className="w-6 h-6" />
  },
  {
    name: 'Codeforces',
    url: 'https://codeforces.com/profile/rohandakua',
    icon: <Trophy className="w-6 h-6" />
  },
  
  {
    name: 'HackerRank',
    url: 'https://www.hackerrank.com/profile/rohandakuareal',
    icon: <Award className="w-6 h-6" />
  }
];

const PlatformLinks: React.FC = () => {
  return (
    <section id="platforms" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12">Find Me On</h2>
      
      <div className="flex flex-wrap justify-center gap-6">
        {platforms.map((platform, index) => (
          <a
            key={index}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center p-6 bg-gray-900 rounded-lg border border-gray-800 hover:border-white hover:bg-gray-800 transition-all duration-300 min-w-[120px]"
          >
            <div className="mb-3 group-hover:scale-110 transition-transform duration-300">
              {platform.icon}
            </div>
            <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
              {platform.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default PlatformLinks;