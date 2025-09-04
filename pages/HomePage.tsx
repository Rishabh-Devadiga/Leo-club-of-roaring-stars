import React from 'react';
import { Link } from 'react-router-dom';

const FocusCard: React.FC<{ title: string; description: string; icon: JSX.Element }> = ({ title, description, icon }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-leo-maroon text-leo-gold mx-auto mb-6">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-leo-maroon mb-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);


const HomePage: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative bg-leo-maroon text-white h-[60vh] md:h-[80vh] flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{backgroundImage: "url('https://picsum.photos/seed/helping-elders/1920/1080')"}}
        ></div>
        <div className="relative z-10 p-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-shadow-lg">
            Leo Club of <span className="text-leo-gold">Roaring Stars</span>
          </h1>
          <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto">
            A New Generation of Leaders Serving the Community.
          </p>
          <Link
            to="/contact"
            className="bg-leo-gold text-leo-maroon font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-300 transition-colors duration-300 transform hover:scale-105"
          >
            Get Involved
          </Link>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-leo-maroon mb-6">A New Beginning for Service</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
            The Leo Club Program provides young people with an opportunity to serve their communities and make a positive impact. The Leo Club of Roaring Stars was founded by a passionate group of individuals dedicated to bringing this spirit of service to our local area. We are excited to build our legacy from the ground up and invite you to be a part of our story.
          </p>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-leo-maroon">Our Focus Areas</h2>
                <p className="mt-4 text-lg text-gray-600">We are committed to making a difference in three key areas.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
                <FocusCard 
                    title="Community Service" 
                    description="Engaging in hands-on projects that address the needs of our community, from environmental clean-ups to supporting local shelters."
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2c-4.418 0-8 3.582-8 8 0 5.25 8 12 8 12s8-6.75 8-12c0-4.418-3.582-8-8-8z" /></svg>}
                />
                <FocusCard 
                    title="Leadership Development" 
                    description="Providing opportunities for members to develop valuable skills in project management, public speaking, and teamwork."
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>}
                />
                <FocusCard 
                    title="Youth Empowerment" 
                    description="Creating a positive and supportive environment where young people can connect, grow, and become confident future leaders."
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                />
            </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;