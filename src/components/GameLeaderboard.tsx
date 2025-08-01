"use client"
import { shortAddr } from "@/utils/shortAddr"
import { Table } from "./shared/Table"

interface GameLeaderboardProps {
  gameId?: string
}

export const GameLeaderboard = ({ }: GameLeaderboardProps) => {

  const fields = [
    {
      key: 'rank',
      label: '#',
      headerStyle: 'p-3 pl-6',
      contentStyle: 'p-3 pl-6',
      render: (row: any) => <div className={`font-bold ${row?.rank == 1 ? `text-pink-primary` : ``}`}>{row?.rank}</div>
    },
    {
      key: 'user',
      label: 'USER',
      render: (row: any) => shortAddr(row?.user)
    },
    {
      key: 'prize',
      label: 'PRIZE',
      render: (row: any) => `${row?.prize} USDT`
    },
    {
      key: 'roi',
      label: 'ROI',
      render: (row: any) => `${row?.roi}%`
      // render: (row: any) => shortAddr(row?.user)
    }    
  ]

  const rows = [
    {
      rank: 1,
      user: '0x7F812BBfA623c9478840433395cb8cB43F8dfB0C',
      prize: 2500,
      roi: 250
    },
    {
      rank: 2,
      user: '0x7F812BBfA623c9478840433395cb8cB43F8dfB0C',
      prize: 1500,
      roi: 25
    }    
  ]


  return (
    <div className="border border-blue-primary rounded-md mb-[100px]">
      <div className="flex justify-between mb-4 p-4"> 
        <div className="text-pink-primary font-bold">LEADERBOARD</div>
        <div></div>
      </div>
      <Table 
        fields={fields} 
        rows={rows}
        className="font-bold"
        />
    </div>
  )
}