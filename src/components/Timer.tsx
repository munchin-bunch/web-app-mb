import { Countdown } from "./Countdown";

interface TimeRemainingProps {
  label?: string,
  gameAddr?: string,
  timestamp: number,
}

export const Timer = ({ label, timestamp = 0 }: TimeRemainingProps) => {
  return (
    <div className="flex items-center gap-2">
      <div className="text-sm lg:text-base">{label}</div>
      <Countdown
        className=" font-extrabold text-pink-primary"
        timestamp={timestamp}
      />
    </div>
  );
};
