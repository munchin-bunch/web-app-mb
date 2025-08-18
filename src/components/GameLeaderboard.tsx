"use client"
import { shortAddr } from "@/utils/shortAddr"
import { Table } from "./shared/Table"
import { useGamePositions } from "@/hooks/useGamePositions"
import { useGameEarners } from "@/hooks/useGameEarners"

interface GameLeaderboardProps {
  address: string,
  gameId?: string
}

export const GameLeaderboard = ({ address, gameId }: GameLeaderboardProps) => {
  // const query = useGamePositions(address)
  const query = useGameEarners(address)

  // console.log("QUERY", query.data, address)

  const fields = [
    {
      key: 'rank',
      label: '#',
      header: 'p-3 pl-6',
      content: 'p-3 pl-6',
      render: (row: any, rowIndex: number) => <div className={`font-bold ${row?.rank == 1 ? `text-pink-primary` : ``}`}>{rowIndex + 1}</div>
    },
    {
      key: 'user',
      label: 'USER',
      render: (row: any) => shortAddr(row?.address)
    },
    {
      key: 'prize',
      label: 'PRIZE',
      render: (row: any) => `${row?.prize} USDT`
    },
    {
      key: 'roi',
      label: 'ROI',
      column: 'text-right pr-6' ,
      render: (row: any) => `${row?.roi}x`
      // render: (row: any) => shortAddr(row?.user)
    }    
  ]

  // const rows = []

  return (
    <div className="border border-blue-primary rounded-md mb-[100px]">
      <div className="flex justify-between mb-4 p-4"> 
        <div className="text-pink-primary font-bold">LEADERBOARD</div>
        <div></div>
      </div>
      <Table
        fields={fields} 
        rows={query.data || []}
        className="font-bold"
        />
    </div>
  )
}

// {
//   rank: 1,
//   user: '0x7F812BBfA623c9478840433395cb8cB43F8dfB0C',
//   prize: 2500,
//   roi: 250
// },
// {
//   rank: 2,
//   user: '0x7F812BBfA623c9478840433395cb8cB43F8dfB0C',
//   prize: 1500,
//   roi: 25
// }    
