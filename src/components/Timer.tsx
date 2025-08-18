import { Countdown } from "./Countdown";

interface TimeRemainingProps {
  label?: string,
  gameAddr?: string,
  nextBetAt: number,
}

export const Timer = ({ label, nextBetAt = 0 }: TimeRemainingProps) => {
  return (
    <div className="flex items-center gap-2">
      <div className="text-sm lg:text-base">{label}</div>
      <Countdown
        className=" font-extrabold text-pink-primary"
        timestamp={nextBetAt}
      />
    </div>
  );
};
