import React, { useState } from 'react';

function AboutSection() {
  const [activeTab, setActiveTab] = useState<string>('Experience');

  return (
    <section id="about" className="p-8 bg-white h-screen">
      <div className="tabs flex space-x-4">
        <button onClick={() => setActiveTab('Experience')} className={activeTab === 'Experience' ? 'font-bold' : ''}>Experience</button>
        <button onClick={() => setActiveTab('Contact')} className={activeTab === 'Contact' ? 'font-bold' : ''}>Contact</button>
      </div>
      <div className="content mt-4">
        {activeTab === 'Experience' && <p>Our chefs bring years of expertise...</p>}
        {activeTab === 'Contact' && <p>Contact us at +123 456 7890...</p>}
      </div>
    </section>
  );
}

export default AboutSection;