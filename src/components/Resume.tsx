import React from 'react';
import { Download, FileText } from 'lucide-react';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-16">
      <div className="text-center">
        <div className="inline-block px-4 py-2 bg-gray-800 rounded-full text-sm text-gray-300 mb-6">
          Professional Documents
        </div>
        <h2 className="text-4xl font-bold mb-6">Download My Resume</h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Get a comprehensive overview of my experience, skills, and achievements in a professional format.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="https://drive.google.com/file/d/1MJD7Nk8rKViWQePsiqpVFMJuoWr4zUlx/view?usp=drive_link"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-medium text-lg"
          >
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            Download Resume (PDF)
          </a>
          {/* 
          <a
            href="#resume-doc-link"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105 font-medium text-lg"
          >
            <FileText className="w-5 h-5" />
            Download Resume (DOC)
          </a> */}
        </div>
        
        <div className="mt-8 text-sm text-gray-500">
          Last updated: July 2025
        </div>
      </div>
    </section>
  );
};

export default Resume;