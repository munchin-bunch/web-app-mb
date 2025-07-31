export type GameSetting = {
  token: string,
  patrong: string,
  nft: string,
  autoFinalize: boolean,
  betPerc: number,
}

export type GameBet = {
  betAmount: string | number,
  prizePool: string | number,
  nextBetAt: string | number
}