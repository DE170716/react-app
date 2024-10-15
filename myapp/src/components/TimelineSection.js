import React from 'react';
import TimelineCard from './TimelineCard';
import './TimelineSection.css';

const TimelineSection = ({ events }) => {
  return (
    <section className="timeline-section">
      <h2>Hành Trình Của<br/> Hiền Và Cường</h2>
      {events.map((event, index) => (
        <TimelineCard
          key={index}
          date={event.date}
          event={event.event}
          image={event.image}
          isLeft={index % 2 === 0}
        />
      ))}
    </section>
  );
};

export default TimelineSection;
