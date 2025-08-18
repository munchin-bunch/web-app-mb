export type GameSetting = {
  token: string;
  patrong: string;
  nft: string;
  autoFinalize: boolean;
  betPerc: number;
};

export type GameBet = {
  nextBetAmount: string | number;
  prizePool: string | number;
  nextBetAt: string | number;
};
