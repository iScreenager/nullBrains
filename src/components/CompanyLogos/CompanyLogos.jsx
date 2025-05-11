import React from "react";
import "../CompanyLogos/CompanyLogos.css";
import { logos } from "../../constants/logos";

export const CompanyLogos = () => {
  return (
    <section className="company-logos">
      <h5 className="company-logos-heading">
        TRUSTED BY TOP-LEADING COMPANIES.
      </h5>
      <div className="company-logos-grid">
        {logos.map((logo) => (
          <img
            key={logo.name}
            src={logo.imageUrl}
            alt={logo.name}
            className="company-logo"
          />
        ))}
      </div>
    </section>
  );
};
