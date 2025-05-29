import { Github, Linkedin, Mail } from 'lucide-react';

const ContactForm = ({ profile, references }) => (
  <div className="space-y-8">
    {/* Social Links */}
    <div>
      <h2 className="text-3xl font-bold text-indigo-700 dark:text-indigo-400 mb-4">Get in Touch</h2>
      <div className="space-y-4 mb-6">
        <p className="flex items-center text-gray-700 dark:text-gray-300">
          <Mail className="w-5 h-5 mr-3 text-indigo-600 dark:text-indigo-400" />
          <a href={`mailto:${profile.email}`} className="hover:underline">{profile.email}</a>
        </p>
        {/* WhatsApp Icon */}
        <p className="flex items-center text-gray-700 dark:text-gray-300">
          <svg className="w-5 h-5 mr-3 text-indigo-600 dark:text-indigo-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.04 2c-5.45 0-9.91 4.46-9.91 9.91 0 1.75.46 3.45 1.35 4.96l-1.4 5.16 5.29-1.38c1.45.79 3.08 1.21 4.67 1.21 5.46 0 9.92-4.46 9.92-9.91s-4.46-9.91-9.92-9.91zm.04 1.57c4.61 0 8.34 3.73 8.34 8.34 0 4.61-3.73 8.34-8.34 8.34-1.57 0-3.1-.44-4.43-1.25l-4.66 1.22 1.24-4.56c-.85-1.37-1.32-2.92-1.32-4.55 0-4.61 3.73-8.34 8.34-8.34z" />
          </svg>
          <a href={`https://wa.me/${profile.whatsapp.replace(/\s|\+/g, '')}`} target="_blank" rel="noopener noreferrer" className="hover:underline">{profile.whatsapp}</a>
        </p>
        <p className="flex items-center text-gray-700 dark:text-gray-300">
          <Linkedin className="w-5 h-5 mr-3 text-indigo-600 dark:text-indigo-400" />
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn Profile</a>
        </p>
        <p className="flex items-center text-gray-700 dark:text-gray-300">
          <Github className="w-5 h-5 mr-3 text-indigo-600 dark:text-indigo-400" />
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub Profile</a>
        </p>
      </div>
    </div>

    {/* References */}
    <div>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">References</h3>
      <div className="space-y-4">
        {references.map((ref, idx) => (
          <div 
            key={idx} 
            className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md shadow hover:shadow-md transition-all duration-300"
          >
            <div className="font-bold text-indigo-700 dark:text-indigo-400">{ref.name}</div>
            <div className="text-gray-700 dark:text-gray-300">{ref.title}</div>
            <div className="text-gray-500 dark:text-gray-400 text-sm">{ref.institution}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ContactForm;