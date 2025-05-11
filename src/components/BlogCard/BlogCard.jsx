import React from "react";
import "../BlogCard/BlogCard.css";

export const BlogCard = ({ card }) => {
  return (
    <div className={`blog-card ${card.className}`}>
      <div className="blog-card-header">
        <img src={card.imageUrl} alt={card.title} className="blogCard-img" />

        <span
          className="blogCard-label"
          style={{
            color: card.className === "bigone" ? card.color : "#fff",
            backgroundColor: card.className === "bigone" ? "#fff" : card.color,
          }}>
          {card.label}
        </span>
      </div>

      <div
        className={`blogCard-content ${card.className}`}
        style={{
          backgroundColor: card.className === "bigone" ? card.color : "#fff",
        }}>
        <h2>{card.title}</h2>
        <span>{card.paragraph}</span>
      </div>
    </div>
  );
};
