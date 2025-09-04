import React from 'react';
import { Link } from 'react-router-dom';
import { TEAM_MEMBERS } from '../constants';
import type { TeamMember } from '../types';

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
    <div className="text-center">
        <img 
            src={member.imageUrl} 
            alt={member.name} 
            className="w-40 h-40 mx-auto rounded-full object-cover shadow-lg border-4 border-leo-gold"
        />
        <h3 className="mt-4 text-xl font-semibold text-leo-maroon">{member.name}</h3>
        <p className="text-gray-500">{member.role}</p>
    </div>
);

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      <header className="bg-leo-maroon text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">About the Roaring Stars</h1>
          <p className="mt-4 text-xl text-leo-gold">Our Story, Our Mission, Our Future</p>
        </div>
      </header>
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission & Vision Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 text-center">
            <div>
              <h2 className="text-2xl font-bold text-leo-maroon mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">To provide the youth of the world with an opportunity for development and contribution, individually and collectively, as responsible members of the local, national and international community.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-leo-maroon mb-4">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">To be the leading youth organization in our community for service and leadership development, fostering a compassionate world for all.</p>
            </div>
          </div>
        </section>

        {/* Club Story Section */}
        <section className="mb-16 bg-gray-50 p-12 rounded-lg">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-leo-maroon mb-4">Our Story</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    The Leo Club of Roaring Stars was born from a simple idea: that young people, when united, have the power to create meaningful change. We are a group of founding members who share a passion for service and a vision for a stronger, more connected community.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    Our journey is just beginning. We are building this club from the ground up, with a focus on creating a welcoming, inclusive, and impactful organization. Every new member has the unique opportunity to help shape our future and define our legacy.
                </p>
            </div>
            <div className="md:w-1/2">
                <img src="https://picsum.photos/seed/history/800/600" alt="A diverse group of young people planning" className="rounded-lg shadow-xl w-full h-auto" />
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-leo-maroon text-center mb-12">Meet Our Founding Leaders</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {TEAM_MEMBERS.map(member => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </section>
        
        {/* Join Us Section */}
        <section className="text-center bg-leo-maroon text-white py-16 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Be Part of Our Beginning</h2>
            <p className="max-w-2xl mx-auto text-lg text-leo-gold mb-8">
                This is a unique chance to grow with a new organization and make a direct impact from day one. We are looking for passionate individuals to join us as founding members.
            </p>
            <Link to="/contact" className="bg-leo-gold text-leo-maroon font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-300 transition-colors duration-300">
                Become a Founding Member
            </Link>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
