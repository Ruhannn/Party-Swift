import { useEffect, useState } from 'react';

const CountdownTimer = () => {

  const eventDate = new Date('November 30, 2023 00:00:00 GMT+0000').getTime();


  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const timeDifference = eventDate - now;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdown-container bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-lg shadow-md mx-12 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-white mb-4">Next Event Countdown</h2>
      <div className="countdown-timer grid grid-cols-4 gap-4">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="countdown-item text-center">
            <p className="text-4xl font-bold text-white">{value}</p>
            <p className="text-sm text-gray-200 capitalize">{unit}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <p className="text-lg text-gray-300">
          Don't miss the excitement! Join us for an amazing event.
        </p>
        
      </div>
    </section>
  );
};

export default CountdownTimer;
