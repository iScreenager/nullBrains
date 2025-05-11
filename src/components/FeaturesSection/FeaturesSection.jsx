import React from 'react'
import "../FeaturesSection/FeaturesSection.css";
import { FeatureCard } from '../FeatureCard/FeatureCard';
import { FeatureCardData } from '../../constants/FeatureCardData';

export const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="features-header">
        <h5>Our Features</h5>
        <p>Check out our list of awesome features below.</p>
      </div>
      <div className="featurecard-grid">
        {FeatureCardData.map((cardData) => (
          <FeatureCard key={cardData.title} cardData={cardData} />
        ))}
      </div>
    </section>
  );
}
