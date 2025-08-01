import { useNextBetAt } from "@/hooks/useNextBetAt"
import { Countdown } from "./Countdown"

interface TimeRemainingProps {
  label?: string,
  gameAddr?: string
}

export const Timer = ({ label, gameAddr }: TimeRemainingProps) => {
  const { data: nextBetAt } = useNextBetAt(gameAddr)

  console.log("NEXT BET AT", parseInt(nextBetAt))

  return (
    <div className="flex gap-2">
      <div>{label}</div>
      <Countdown unixTimestamp={parseInt(nextBetAt)} />
    </div>
  )
}