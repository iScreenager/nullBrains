import React from 'react'
import Button from '../Button/Button';
import "../Hero/Hero.css"



export const Hero = () => {
  return (
    <section className="hero-container" id="home">
      <header className="hero-header">
        <h1 className="hero-title">
          <span className="title-part part-black">Start Crafting Your</span>
          <br />
          <span className="title-part part-blue">Next Great Idea</span>
        </h1>
      </header>

      <div className="hero-description">
        <p>
          Simplifying the creation of landing pages, blog pages,
          <br />
          application pages, and so much more!
        </p>
      </div>

      <div className="hero-actions">
       <PurchaseButton/>
        <a href="#learn-more" className="learn-more-link">
          Learn More
        </a>
      </div>
    </section>
  );
}

const PurchaseButton = () => {
  return (
    <div className="purchase-button">
      <span className="price-label">Only $15/mo</span>
      <Button variant="purchaseNow">Purchase Now</Button>
    </div>
  );
};
