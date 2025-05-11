import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../FeatureCard/FeatureCard.css";

export const FeatureCard = ({ cardData }) => {
  return (
    <div className="featureCard" id="features">
      <span className="icon">
        <FontAwesomeIcon icon={cardData.icon} size="x" color="#ffff" />
      </span>

      <span className="title">{cardData.title}</span>
      <p className="description">{cardData.description}</p>
    </div>
  );
};
