import clsx from "clsx";
import { useEffect, useState } from "react";

interface CountdownProps {
  timestamp?: number;
  className?: string;
}

const timeEnd = (timeRemaining: string) => {
  return timeRemaining === "00:00:00";
};

const FINISHED = "Finished";

export const Countdown = ({
  timestamp = 0,
  className = "",
}: CountdownProps) => {
  const [timeRemaining, setTimeRemaining] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Math.floor(Date.now() / 1000); // Get current time in seconds
      const difference = timestamp - now;

      if (difference <= 0) {
        setTimeRemaining("00:00:00");
        clearInterval(interval);
        return;
      }

      const hours = Math.floor(difference / 3600);
      const minutes = Math.floor((difference % 3600) / 60);
      const seconds = difference % 60;

      const formattedTime = [
        hours.toString().padStart(2, "0"),
        minutes.toString().padStart(2, "0"),
        seconds.toString().padStart(2, "0"),
      ].join(":");

      setTimeRemaining(formattedTime);
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [timestamp]);

  return (
    <div className={clsx(className, "uppercase")}>
      {timeEnd(timeRemaining) ? FINISHED : timeRemaining}
    </div>
  );
};
