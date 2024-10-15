import React from 'react';
import './TimelineCard.css';

const TimelineCard = ({ date, event, image, isLast }) => {
  return (
    <div className={`timeline-card ${isLast ? 'last-card' : ''}`} data-aos="fade-up">
      <div className="timeline-content">
        <div className="timeline-image-container">
          <img src={image} alt={event} className="timeline-img" />
        </div>
        <div className="timeline-details">
          <h3 className="timeline-date">{date}</h3>
          <p className="timeline-event">{event}</p>
        </div>
      </div>
      {!isLast && <div className="timeline-line"></div>}
    </div>
  );
};

export default TimelineCard;
