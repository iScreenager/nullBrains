import React from "react";
import "../WhyChooseUs/WhyChooseUs.css";
import { whyChooseUsData } from "../../constants/WhyChooseUsData";

export const WhyChooseUs = () => {
  return (
    <section className="why-choose-us-section">
      {whyChooseUsData.map((item) => (
        <div
          key={item.id}
          className={`why-choose-us-item custom-class-${item.id}`}>
          <div className="item-image">
            <img src={item.imageUrl} alt={item.heading} />
          </div>
          <div className="item-content">
           
            <h5 className="item-heading">{item.heading}</h5>
            <p className="item-paragraph">{item.paragraph}</p>
            <ul className="item-points">
              {item.points.map((point, index) => (
                <li key={index} className="point-item">
                  <span className="circle"><p></p></span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};
