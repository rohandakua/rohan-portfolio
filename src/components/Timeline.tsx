import React, { useEffect, useRef, useState } from 'react';
import {
  Circle,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Code,
  Award,
  Smartphone,
  Coffee,
  Layers,
  Database,
  Server,
  Flame,
  Package,
  Wifi,
  Coins,
  Hammer,
  Zap,
  GitBranch,
  Github,
  Gitlab,
} from 'lucide-react';

interface TimelineItem {
  year: string;
  title: string;
  company?: string;
  companyUrl?: string;
  description: string;
  type: 'education' | 'work' | 'project' | 'achievement' | 'skill';
  skills?: string[];
}

const timelineData: TimelineItem[] = [
  {
    year: '2025',
    title: 'Android Intern at AiVirex Innovations',
    company: 'Attendify',
    companyUrl: 'https://play.google.com/store/apps/details?id=com.aivirex.attendify&hl=en_IN',
    description: 'Developing innovative attendance management solutions using modern Android technologies',
    type: 'work',
    skills: ['Jetpack Compose', 'Hilt', 'Room', 'Data Store']
  },
  {
    year: '2025',
    title: 'Android Intern at ConfirmTalk App',
    company: 'ConfirmTalk',
    companyUrl: 'https://play.google.com/store/apps/datasafety?id=com.starter.chat&hl=en_IN',
    description: 'Building secure communication features with real-time messaging capabilities',
    type: 'work',
    skills: ['Agoda SDK', 'Firebase', 'Multi-Module app', 'Notification', 'FCM', 'GitLab']
  },
  {
    year: '2025 (Ongoing)',
    title: 'Gymxy App',
    company: 'Personal Project',
    description: 'Gym performance recoder with advance architecture principles',
    type: 'project',
    skills: ['MVI', 'Data Store', 'Jetpack Compose']
  },
  {
    year: '2024',
    title: 'Clockxy App',
    company: 'Personal Project',
    description: 'Feature-rich clock application with customizable themes and productivity tools with clean architecture and MVVM',
    type: 'project',
    skills: ['Alarm Scheduler', 'Hilt', 'Room', 'Shared Preference', 'Jetpack Compose']
  },
  {
    year: '2024',
    title: 'Blockchain Voting App',
    company: 'College Minor Project',
    description: 'Decentralized voting system ensuring transparency and security using Solidity smart contracts',
    type: 'project',
    skills: ['Jetpack Compose', 'Web3j','Solidity', 'Hardhat', 'Alchemy']
  },
  {
    year: '2023',
    title: 'Advanced Android Development',
    description: 'Expanded Android development expertise with modern frameworks and libraries',
    type: 'skill',
    skills: ['Kotlin', 'Firebase', 'XML', 'Room', 'MVVM', 'Clean Architecture']
  },  
  {
    year: '2022',
    title: 'Programming Fundamentals',
    description: 'Started programming journey with core languages and version control',
    type: 'skill',
    skills: ['Java', 'Android Fundamentals']
  },
  {
    year: '2022-2026',
    title: 'B.Tech in Computer Science',
    company: 'Jaypee University of Engineering and Technology Guna',
    companyUrl: 'www.juet.ac.in',
    description: 'Pursuing Bachelor of Technology with focus on software development and emerging technologies',
    type: 'education'
  },
  {
    year: '2019-2021',
    title: 'Higher Secondary Education',
    company: 'Army Public School Jodhpur',
    description: 'Completed 12th grade with Science stream, laying foundation for engineering studies',
    type: 'education'
  }
];


const iconMap: { [key: string]: React.ReactNode } = {
  Kotlin: <Smartphone className="w-4 h-4" />,
  Java: <Coffee className="w-4 h-4" />,
  'Jetpack Compose': <Layers className="w-4 h-4" />,
  XML: <Code className="w-4 h-4" />,
  Room: <Database className="w-4 h-4" />,
  Firebase: <Flame className="w-4 h-4" />,
  'Firebase Realtime DB': <Server className="w-4 h-4" />,
  Hilt: <Package className="w-4 h-4" />,
  Retrofit: <Wifi className="w-4 h-4" />,
  Solidity: <Coins className="w-4 h-4" />,
  Hardhat: <Hammer className="w-4 h-4" />,
  Alchemy: <Zap className="w-4 h-4" />,
  Git: <GitBranch className="w-4 h-4" />,
  GitHub: <Github className="w-4 h-4" />,
  GitLab: <Gitlab className="w-4 h-4" />,
};

const colorMap: { [key: string]: string } = {
  Kotlin: 'border-green-500 text-green-400 bg-green-500/10',
  Java: 'border-green-500 text-green-400 bg-green-500/10',
  'Jetpack Compose': 'border-green-500 text-green-400 bg-green-500/10',
  XML: 'border-green-500 text-green-400 bg-green-500/10',
  Room: 'border-green-500 text-green-400 bg-green-500/10',
  Hilt: 'border-green-500 text-green-400 bg-green-500/10',
  Retrofit: 'border-green-500 text-green-400 bg-green-500/10',
  Firebase: 'border-blue-500 text-blue-400 bg-blue-500/10',
  'Firebase Realtime DB': 'border-blue-500 text-blue-400 bg-blue-500/10',
  Solidity: 'border-purple-500 text-purple-400 bg-purple-500/10',
  Hardhat: 'border-purple-500 text-purple-400 bg-purple-500/10',
  Alchemy: 'border-purple-500 text-purple-400 bg-purple-500/10',
  Git: 'border-orange-500 text-orange-400 bg-orange-500/10',
  GitHub: 'border-orange-500 text-orange-400 bg-orange-500/10',
  GitLab: 'border-orange-500 text-orange-400 bg-orange-500/10',
};

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'education':
      return <GraduationCap className="w-4 h-4" />;
    case 'work':
      return <Briefcase className="w-4 h-4" />;
    case 'project':
      return <Code className="w-4 h-4" />;
    case 'achievement':
      return <Award className="w-4 h-4" />;
    case 'skill':
      return <Zap className="w-4 h-4" />;
    default:
      return <Circle className="w-4 h-4" />;
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case 'education':
      return 'border-blue-500 bg-blue-500/10';
    case 'work':
      return 'border-green-500 bg-green-500/10';
    case 'project':
      return 'border-purple-500 bg-purple-500/10';
    case 'achievement':
      return 'border-yellow-500 bg-yellow-500/10';
    case 'skill':
      return 'border-orange-500 bg-orange-500/10';
    default:
      return 'border-gray-500 bg-gray-500/10';
  }
};

const Timeline: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const [lineProgress, setLineProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timelineTop = timelineRef.current.offsetTop;
      const timelineHeight = timelineRef.current.offsetHeight;
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;

      const timelineStart = timelineTop - windowHeight * 0.5;
      const timelineEnd = timelineTop + timelineHeight - windowHeight * 0.5;
      const progress = Math.max(0, Math.min(1, (scrollTop - timelineStart) / (timelineEnd - timelineStart)));
      setLineProgress(progress);

      const newVisibleItems = new Set<number>();
      const timelineItems = timelineRef.current.querySelectorAll('[data-timeline-item]');
      timelineItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const isVisible = rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.2;
        if (isVisible) newVisibleItems.add(index);
      });

      setVisibleItems(newVisibleItems);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="timeline" className="py-20">
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-2 bg-gray-800 rounded-full text-sm text-gray-300 mb-6">
          My Journey
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Crafting Digital Experiences
        </h2>
        <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
          Passionate Android developer specializing in Kotlin, Jetpack Compose, and Firebase with hands-on experience in blockchain development and competitive programming excellence.
        </p>
      </div>

      <div className="flex justify-center">
        <div ref={timelineRef} className="relative max-w-6xl w-full">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-gray-700 via-gray-600 to-gray-700" />
          <div
            className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 transition-all duration-300 ease-out"
            style={{ height: `${lineProgress * 100}%`, boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)' }}
          />

          <div className="space-y-16">
            {timelineData.map((item, index) => {
              const isLeft = index % 2 === 0;
              const isVisible = visibleItems.has(index);
              const skillsWithIcons = (item.skills || []).filter(skill => iconMap[skill]);
              const skillsWithoutIcons = (item.skills || []).filter(skill => !iconMap[skill]);

              return (
                <div key={index} className="relative flex items-center" data-timeline-item>
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 md:-translate-x-1/2 z-10">
                    <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center ${getTypeColor(item.type)} backdrop-blur-sm transition-all duration-500 ${
                      isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-30'
                    }`}>
                      {getTypeIcon(item.type)}
                    </div>
                  </div>

                  <div className={`w-full md:w-5/12 pl-20 md:pl-0 ${isLeft ? 'md:pr-8' : 'md:pl-8 md:ml-auto'} text-left md:${isLeft ? 'text-right' : 'text-left'}`}>
                    <div className={`bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-500 hover:transform hover:scale-105 ${isLeft ? 'text-right' : 'text-left'} ${
                      isVisible ? 'opacity-100 transform translate-y-0' : `opacity-0 transform translate-y-4`
                    }`}>
                      <div className="flex items-center gap-2 mb-3">
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)} ${isLeft ? 'md:ml-auto' : ''} text-left md:${isLeft ? 'text-right' : 'text-left'}`}>
                          {item.year}
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>

                      {item.company && (
                        <div className={`flex items-center gap-2 mb-3 justify-start md:${isLeft ? 'justify-end' : 'justify-start'}`}>
                          {item.companyUrl ? (
                            <a
                              href={item.companyUrl}
                            
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                            >
                              {item.company}
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          ) : (
                            <span className="text-sm text-gray-400">{item.company}</span>
                          )}
                        </div>
                      )}

                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {(skillsWithIcons.length > 0 || skillsWithoutIcons.length > 0) && (
                        <div className={`flex flex-wrap gap-2 justify-start md:${isLeft ? 'justify-end' : 'justify-start'}`}>
                          {[...skillsWithIcons, ...skillsWithoutIcons].map((skill, skillIndex) => (
                            <div
                              key={skillIndex}
                              className={`px-3 py-1 rounded-full text-xs font-medium border flex items-center gap-1 ${colorMap[skill] || 'border-gray-500 text-gray-400 bg-gray-500/10'}`}
                            >
                              {iconMap[skill] || <Code className="w-4 h-4" />}
                              {skill}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
