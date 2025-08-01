import { useNextBetAt } from "@/hooks/useNextBetAt"
import { Countdown } from "./Countdown"

interface TimeRemainingProps {
  label?: string,
  gameAddr?: string
}

export const Timer = ({ label, gameAddr }: TimeRemainingProps) => {
  const { data = "0" } = useNextBetAt(gameAddr)
  const nextBetAt = parseInt(data)

  console.log("NEXT BET AT", nextBetAt)

  return (
    <div className="flex gap-2">
      <div>{label}</div>
      { nextBetAt > 0 && <Countdown timestamp={nextBetAt} /> }
    </div>
  )
}