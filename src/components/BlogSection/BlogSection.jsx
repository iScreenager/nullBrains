import React from "react";
import { BlogCard } from "../BlogCard/BlogCard";
import { blogCardData } from "../../constants/BlogCardData";
import "../BlogSection/BlogSection.css";

export const BlogSection = () => {
  return (
    <section className="blog-section" id="blog">
      <div className="blog-section-body">
        <header className="blog-header">
          <h2 className="blog-label">The Project Blog</h2>
          <p>Designs and layouts to help you with your app.</p>
        </header>
        <div className="blogcard-flex">
          {blogCardData.map((blogCards, index) => (
            <div key={index} className="blog-cards-list">
              {blogCards.map((card) => (
                <BlogCard key={card.id} card={card} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
