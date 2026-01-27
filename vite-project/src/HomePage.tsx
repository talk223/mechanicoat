import React, { useEffect, useState } from "react";
import Header from "./Header.tsx";

function HomePage() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeStart = 0;
      const fadeEnd = 500; // how far you scroll before fully faded

      const newOpacity = 1 - scrollY / fadeEnd;
      setOpacity(newOpacity < 0 ? 0 : newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>

      <div className="bg-image" style={{ opacity }}/>

      <Header />

      <h1 className="title">Mobile Mechanic Service</h1>
      <h2 className="subtitle">
        Go to <a href="/book">Book</a> Page
      </h2>

      <div className="card-container">
        <div className="card">
          <h3>Convenient Service</h3>
          <img src="src\poat.jpg" alt="Convenient Service" className="card-image1"/>
          <p>
            We come directly to you. No waiting at shops, no towing, no hassle.
          </p>
        </div>

        <div className="card">
          <h3>Affordable Pricing</h3>
          <img src="src\Acoat.jpg" alt="Convenient Service" className="card-image1"/>
          <p>
            Honest pricing and transparent quotes before any work begins.
          </p>
        </div>

        <div className="card">
          <h3>Professional Mechanic</h3>
          <p>
            Experienced and professional with 6 years of experience.
          </p>
        </div>
      </div>
      <div className="ContactMe">
        <h2>Contact Me</h2>
        <h3 style={{ color: "white", textAlign: "center" }}>Email: <a href="mailto: t.alkattan04@gmail.com">t.alkattan04@gmail.com</a></h3>
        <h3 style={{ color: "white", textAlign: "center" }}>Phone: <a href="tel:407-919-9111">407-919-9111</a></h3>
      </div>
    </div>
  );
}

export default HomePage;
