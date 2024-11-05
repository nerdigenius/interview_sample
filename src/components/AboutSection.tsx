import { useState } from 'react';
import topBowlImage from "../assets/top_bowl.svg"

function AboutSection() {
  const [activeTab, setActiveTab] = useState<string>('Experience');

  return (
    <section id="about" className="p-8 bg-white h-[864px] relative w-full">
      <img src={topBowlImage} alt="" className='absolute right-0 top-52 h-[255px]'/>
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