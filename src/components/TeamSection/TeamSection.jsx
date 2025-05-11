import React from 'react'
import "../TeamSection/TeamSection.css";
import { TeamCard } from '../TeamCard/TeamCard';
import { teamMembers } from '../../constants/TeamMembers';

export const TeamSection = () => {
  return (
    <section className="team-section">
      <span className="background-art"></span>
      <div className="team-body">
        <header className="team-header">
          <h2 className="section-label">OUR TEAM</h2>
          <p>
            An incredible team of <br /> amazing individuals
          </p>
        </header>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <TeamCard key={ member.name} member={ member} />
          ))}
        </div>
      </div>
    </section>
  );
}
