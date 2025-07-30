import React from 'react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  category: 'mobile' | 'backend' | 'blockchain' | 'tools';
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  color: string;
}

const skills: Skill[] = [
  // Mobile Development
  { 
    name: 'Kotlin', 
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <defs>
          <linearGradient id="kotlin-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e44857"/>
            <stop offset="25%" stopColor="#c711e1"/>
            <stop offset="50%" stopColor="#7f52ff"/>
            <stop offset="75%" stopColor="#0b7eff"/>
            <stop offset="100%" stopColor="#009dff"/>
          </linearGradient>
        </defs>
        <path fill="url(#kotlin-gradient)" d="M24 24H0V0h24L12 12 24 24z"/>
      </svg>
    ), 
    category: 'mobile', 
    proficiency: 'advanced',
    color: 'from-purple-500 to-blue-500'
  },
  { 
    name: 'Java', 
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="#f89820" d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218"/>
        <path fill="#5382a1" d="M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118"/>
        <path fill="#f89820" d="M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627"/>
        <path fill="#5382a1" d="M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639"/>
      </svg>
    ), 
    category: 'mobile', 
    proficiency: 'advanced',
    color: 'from-orange-500 to-red-500'
  },
  { 
    name: 'Jetpack Compose', 
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="#4285f4" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    ), 
    category: 'mobile', 
    proficiency: 'advanced',
    color: 'from-blue-500 to-green-500'
  },
  { 
    name: 'Android', 
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="#3ddc84" d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.61 10.2718.8995 12.8447.8995 15.7995c0 .1873.0532.3445.1589.4503.1057.1057.2630.1588.4503.1588h19.0826c.1873 0 .3446-.0531.4503-.1588.1057-.1058.1589-.263.1589-.4503 0-2.9548-1.7105-5.5277-5.2211-6.4581"/>
      </svg>
    ), 
    category: 'mobile', 
    proficiency: 'advanced',
    color: 'from-green-400 to-green-600'
  },
  { 
    name: 'Room', 
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="#4285f4" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ), 
    category: 'mobile', 
    proficiency: 'advanced',
    color: 'from-blue-500 to-indigo-500'
  },
  { 
    name: 'Retrofit', 
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="#48b983" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ), 
    category: 'mobile', 
    proficiency: 'advanced',
    color: 'from-green-500 to-teal-500'
  },
  
  // Backend & Firebase
  { 
    name: 'Firebase', 
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="#ffc107" d="M5.016 20.016l.963-18.297 3.505 6.637z"/>
        <path fill="#ff9800" d="M19.016 20.016l-6.505-4.032 2.48-14.493z"/>
        <path fill="#ff5722" d="M12.011 14.984L5.016 20.016l6.995-17.297z"/>
      </svg>
    ), 
    category: 'backend', 
    proficiency: 'advanced',
    color: 'from-yellow-500 to-orange-500'
  },
  
  // Blockchain
  { 
    name: 'Solidity', 
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="#363636" d="M4.409 6.608L7.981.255l3.572 6.353H4.409zM8.411 0l3.569 6.348L8.411 12.696 4.842 6.348 8.411 0zm7.13 6.608L11.968.255 8.396 6.608h7.145zM15.589 24l-3.569-6.348L15.589 11.304l3.569 6.348L15.589 24zm0-12.696l-3.572 6.353 3.572 6.353 3.572-6.353-3.572-6.353zm-7.178 0L4.839 17.657l3.572 6.353 3.572-6.353-3.572-6.353z"/>
      </svg>
    ), 
    category: 'blockchain', 
    proficiency: 'intermediate',
    color: 'from-gray-600 to-gray-800'
  },
  { 
    name: 'Hardhat', 
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="#fff100" d="M12 0L2.5 7.5v9L12 24l9.5-7.5v-9L12 0zm0 2.5L19.5 8.5v7L12 21.5 4.5 15.5v-7L12 2.5z"/>
        <path fill="#fff100" d="M12 6l-4 3v6l4 3 4-3V9l-4-3z"/>
      </svg>
    ), 
    category: 'blockchain', 
    proficiency: 'beginner',
    color: 'from-yellow-400 to-yellow-600'
  },
  
  // Development Tools
  { 
    name: 'Git', 
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="#f05032" d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
      </svg>
    ), 
    category: 'tools', 
    proficiency: 'advanced',
    color: 'from-red-500 to-orange-500'
  },
  { 
    name: 'GitHub', 
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="#181717" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ), 
    category: 'tools', 
    proficiency: 'advanced',
    color: 'from-gray-700 to-gray-900'
  },
  { 
    name: 'GitLab', 
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="#FC6D26" d="M21.9 13.2l-2.1-6.5c-.2-.6-1-.6-1.2 0l-1.5 4.5H6.9l-1.5-4.5c-.2-.6-1-.6-1.2 0l-2.1 6.5c-.1.3 0 .7.3.9l9 6.6c.3.2.7.2 1 0l9-6.6c.3-.2.4-.6.3-.9z"/>
      </svg>
    ), 
    category: 'tools', 
    proficiency: 'advanced',
    color: 'from-gray-700 to-gray-900'
  }
];

const getCategoryInfo = (category: string) => {
  switch (category) {
    case 'mobile':
      return { 
        name: 'Mobile Development', 
        color: 'text-green-400',
        bgColor: 'bg-green-500/10',
        borderColor: 'border-green-500/30'
      };
    case 'backend':
      return { 
        name: 'Backend & Cloud', 
        color: 'text-blue-400',
        bgColor: 'bg-blue-500/10',
        borderColor: 'border-blue-500/30'
      };
    case 'blockchain':
      return { 
        name: 'Blockchain', 
        color: 'text-purple-400',
        bgColor: 'bg-purple-500/10',
        borderColor: 'border-purple-500/30'
      };
    case 'tools':
      return { 
        name: 'Development Tools', 
        color: 'text-orange-400',
        bgColor: 'bg-orange-500/10',
        borderColor: 'border-orange-500/30'
      };
    default:
      return { 
        name: 'Other', 
        color: 'text-gray-400',
        bgColor: 'bg-gray-500/10',
        borderColor: 'border-gray-500/30'
      };
  }
};

const getProficiencyInfo = (proficiency: string) => {
  const levels = { 
    beginner: { level: 1, color: 'text-red-400', label: 'Beginner' },
    intermediate: { level: 2, color: 'text-yellow-400', label: 'Intermediate' },
    advanced: { level: 3, color: 'text-blue-400', label: 'Advanced' },
    expert: { level: 4, color: 'text-green-400', label: 'Expert' }
  };
  return levels[proficiency as keyof typeof levels] || levels.beginner;
};

const SkillsShowcase: React.FC = () => {
  const categories = [
    { name: 'Mobile Development', key: 'mobile' },
    { name: 'Backend & Cloud', key: 'backend' },
    { name: 'Blockchain', key: 'blockchain' },
    { name: 'Development Tools', key: 'tools' }
  ];

  return (
    <section id="skills" className="py-12">
      <div className="text-center mb-16">
        <div className="inline-block px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full text-sm text-gray-300 mb-8 border border-gray-600">
          <span className="font-medium">Technical Arsenal</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold mb-6 pb-2 leading-normal bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
  Skills & Technologies
</h2>

        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          A comprehensive showcase of the technologies and tools I've mastered throughout my development journey.
        </p>
      </div>

      {/* Featured Skills Grid */}
      <div className="mb-20">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-4 max-w-7xl mx-auto">
          {skills.map((skill, index) => {
            const proficiencyInfo = getProficiencyInfo(skill.proficiency);
            const categoryInfo = getCategoryInfo(skill.category);
            
            return (
              <div
                key={index}
                className="group relative"
              >
                {/* Main Card */}
                <div className={`relative p-2 sm:p-4 rounded-xl border-2 transition-all duration-500 hover:scale-110 hover:rotate-2 hover:shadow-2xl hover:shadow-white/10 ${categoryInfo.bgColor} ${categoryInfo.borderColor} backdrop-blur-sm overflow-hidden aspect-square`}>
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    {/* Icon */}
                    <div className="mb-1 sm:mb-2 group-hover:scale-125 transition-transform duration-500 filter group-hover:drop-shadow-lg">
                      {React.cloneElement(skill.icon as React.ReactElement, { className: 'w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10' })}
                    </div>
                    
                    {/* Skill Name */}
                    <h4 className="text-xs sm:text-sm font-bold text-white mb-1 sm:mb-2 group-hover:text-white transition-colors duration-300 leading-tight">
                      {skill.name}
                    </h4>
                    
                    {/* Proficiency Indicator */}
                    <div className="flex flex-col items-center gap-1">
                      <div className="flex gap-1">
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full transition-all duration-300 ${
                              i < proficiencyInfo.level 
                                ? 'bg-white shadow-lg shadow-white/50' 
                                : 'bg-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                      <span className={`text-xs font-medium ${proficiencyInfo.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center hidden sm:block`}>
                        {proficiencyInfo.label}
                      </span>
                    </div>
                  </div>
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Skills by Category */}
      <div className="space-y-16">
        {categories.map((category) => {
          const categorySkills = skills.filter(skill => skill.category === category.key);
          const categoryInfo = getCategoryInfo(category.key);
          
          return (
            <div key={category.key} className="relative">
              {/* Category Header */}
              <div className="text-center mb-10">
                <div className={`inline-block px-6 py-2 rounded-full border ${categoryInfo.borderColor} ${categoryInfo.bgColor} mb-4`}>
                  <h3 className={`text-lg font-bold ${categoryInfo.color}`}>
                    {category.name}
                  </h3>
                </div>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent mx-auto"></div>
              </div>
              
              {/* Category Skills */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4">
                {categorySkills.map((skill, index) => {
                  const proficiencyInfo = getProficiencyInfo(skill.proficiency);
                  
                  return (
                    <div
                      key={index}
                      className="group relative"
                    >
                      <div className={`p-2 sm:p-4 rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-lg ${categoryInfo.bgColor} ${categoryInfo.borderColor} backdrop-blur-sm`}>
                        <div className="flex flex-col items-center text-center">
                          {/* Icon */}
                          <div className="mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                            {React.cloneElement(skill.icon as React.ReactElement, { className: 'w-5 h-5 sm:w-6 sm:h-6' })}
                          </div>
                          
                          {/* Name */}
                          <h4 className="text-xs font-semibold text-white mb-1 sm:mb-2 leading-tight">
                            {skill.name}
                          </h4>
                          
                          {/* Proficiency */}
                          <div className="flex gap-0.5">
                            {[...Array(4)].map((_, i) => (
                              <div
                                key={i}
                                className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full transition-all duration-200 ${
                                  i < proficiencyInfo.level 
                                    ? 'bg-white' 
                                    : 'bg-gray-600'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Enhanced Legend */}
      <div className="mt-20 text-center">
        <div className="inline-block bg-gradient-to-r from-gray-900/80 to-gray-800/80 rounded-2xl p-8 border border-gray-700 backdrop-blur-sm">
          <h4 className="text-lg font-bold text-white mb-6">Proficiency Levels</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { level: 'Beginner', dots: 1, color: 'text-red-400', desc: 'Learning fundamentals' },
              { level: 'Intermediate', dots: 2, color: 'text-yellow-400', desc: 'Building projects' },
              { level: 'Advanced', dots: 3, color: 'text-blue-400', desc: 'Production ready' },
              { level: 'Expert', dots: 4, color: 'text-green-400', desc: 'Teaching others' }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <div className="flex gap-1 mb-1">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full ${
                        i < item.dots ? 'bg-white shadow-sm' : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <span className={`text-sm font-semibold ${item.color}`}>
                  {item.level}
                </span>
                <span className="text-xs text-gray-400">
                  {item.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsShowcase;
