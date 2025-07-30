"use client"
import { useGlobalWalletSignerAccount } from "@abstract-foundation/agw-react"
import { shortAddr } from "@/utils/shortAddr"
import { ReactElement } from "react"

export const AbsAccount = ({ children }: { children: ReactElement }) => {
  const { address, status } = useGlobalWalletSignerAccount()

  if (status === 'disconnected') return children
  if (status === 'connecting' || status === 'reconnecting') {
    return <div>Connecting</div>
  }

  return (
    <div>
      {shortAddr(address)}
    </div>
  )

}