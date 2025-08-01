import { useEffect, useState } from "react";

export const Countdown = ({ unixTimestamp }: { unixTimestamp: number }) => {
  const [timeRemaining, setTimeRemaining] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Math.floor(Date.now() / 1000); // Get current time in seconds
      const difference = unixTimestamp - now;

      if (difference <= 0) {
        setTimeRemaining('00:00:00');
        clearInterval(interval);
        return;
      }

      const hours = Math.floor(difference / 3600);
      const minutes = Math.floor((difference % 3600) / 60);
      const seconds = difference % 60;

      const formattedTime = [
        hours.toString().padStart(2, '0'),
        minutes.toString().padStart(2, '0'),
        seconds.toString().padStart(2, '0'),
      ].join(':');

      setTimeRemaining(formattedTime);
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [unixTimestamp]);

  return (
    <div>
      {timeRemaining}
    </div>
  );
};