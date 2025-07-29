import React from 'react';
import { Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 border-t border-gray-800">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
        
        <a
          href="mailto:rohandakuareal@gmail.com"
          className="inline-flex items-center gap-3 px-6 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-gray-600 rounded-lg transition-all duration-300 text-lg"
        >
          <Mail className="w-5 h-5" />
          rohandakuareal@gmail.com
        </a>
        
        <div className="mt-12 text-gray-500 text-sm">
          © 2025 Rohan Dakua. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default Contact;