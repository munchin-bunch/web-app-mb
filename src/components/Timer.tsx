import { useNextBetAt } from "@/hooks/useNextBetAt";
import { Countdown } from "./Countdown";

interface TimeRemainingProps {
  label?: string;
  gameAddr?: string;
}

export const Timer = ({ label, gameAddr }: TimeRemainingProps) => {
  const { data = "0" } = useNextBetAt(gameAddr);
  const nextBetAt = parseInt(data);

  console.log("NEXT BET AT", nextBetAt);

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
