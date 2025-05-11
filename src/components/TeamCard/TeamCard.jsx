import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import "../TeamCard/TeamCard.css";

export const TeamCard = ({member}) => {
  return (
    <div className="team-card">
      <div
        className="avatar-wrapper"
        style={{ backgroundColor: member.bgColor }}>
        <img src={member.image} alt={member.name} />
      </div>
      <h4 className="member-name">{member.name}</h4>
      <p className="member-role">{member.role}</p>
      <div className="socials">
         <a href={member.twitter}><FontAwesomeIcon  icon={faTwitter}/></a>
         <a href={member.github}><FontAwesomeIcon icon={faGithub}/></a>
      </div>
    </div>
  );
}
