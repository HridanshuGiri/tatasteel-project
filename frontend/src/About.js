import React from 'react';
import './About.css';

const About = () => (
  <div className="about-page">
    <h1>About Tata Steel – Jamshedpur</h1>

    <section className="overview">
      <p>
        Tata Steel began operations in Jamshedpur, originally known as Sakchi in 1907 under Jamsetji Tata, and rolled India’s first steel ingot in 1912. Today, this historic integrated plant remains one of the country’s largest, boasting a capacity of around 10 million tonnes of crude steel annually.
      </p>
      <img src="/images/jamshedpur-plant.jpg" alt="Tata Steel Jamshedpur Plant" />
    </section>

    <section className="sustainability">
      <h2>Sustainability & Innovation</h2>
      <p>
        The Jamshedpur site is a pioneer in sustainability efforts, hosting India’s first carbon-capture plant at a blast furnace, which captures approximately 5 tonnes of CO₂ daily.
      </p>
      <p>
        Recent modernization initiatives, including upgrades to the bar mill and blast furnace, focus on boosting productivity, efficiency, and reducing downtime.
      </p>
    </section>

    <section className="community">
      <h2>Community & Surroundings</h2>
      <p>
        Tata Steel has shaped the social infrastructure of Jamshedpur. The plant built Dimna Lake in 1944, which still serves as a primary drinking water source. The city also hosts Jubilee Park, a 200‑acre public park with a zoo, amusement zone, and lake developed by Tata Steel in 1958.
      </p>
      <div className="scenic">
        <img src="/images/dimna-lake.jpg" alt="Dimna Lake" />
        <img src="/images/jubilee-park.jpg" alt="Jubilee Park, Jamshedpur" />
      </div>
    </section>
  </div>
);

export default About;
