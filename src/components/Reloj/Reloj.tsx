import React, { useState, useEffect } from 'react';
import './Reloj.css';

interface RelojProps {}

const Reloj: React.FC<RelojProps> = () => {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  const calculateTimeLeft = () => {
    const targetDate = new Date('2024-11-02T21:30:00').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      const daysLeft = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hoursLeft = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutesLeft = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const secondsLeft = Math.floor((difference % (1000 * 60)) / 1000);

      setDays(daysLeft);
      setHours(hoursLeft);
      setMinutes(minutesLeft);
      setSeconds(secondsLeft);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="clock clock-mobile">
      <div className="time">
        <div className="time-part-container">
          <div className="time-part">{days}</div>
          <div className="time-label">Días</div>
        </div>
        <div className="time-part-container">
          <div className="time-part">{hours < 10 ? `0${hours}` : hours}</div>
          <div className="time-label">Hs</div>
        </div>
        <div className="time-part-container">
          <div className="time-part">{minutes < 10 ? `0${minutes}` : minutes}</div>
          <div className="time-label">Min</div>
        </div>
        <div className="time-part-container">
          <div className="time-part">{seconds < 10 ? `0${seconds}` : seconds}</div>
          <div className="time-label">Seg</div>
        </div>
      </div>
    </div>
  );
};

export default Reloj;
