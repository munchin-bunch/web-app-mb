export interface GameSetting {
  token: string;
  patron: string;
  nft: string;
  nftId: 0;
  prizeNft: string;
  prizeNftId: number;
  minAmount: number;
  initPrize: number;
  startTime: number;
  endTime: number;
  interval: number;
  betPerc: number;
  refPerc: number;
  winnerPerc: number;
  nextsPerc: number;
  patronPerc: number;
  holdersPerc: number;
  teamPerc: number;
  foundationPerc: number;
  maxNexts: number;
  maxHolders: number;
  autoFinalize: boolean;
  poolBalReq: boolean;
  isFixedPrize: boolean;
  uri: string;
}

export interface GameConfig {
  factory: string;
  team: string;
  foundation: string;
  nextVault: string;
  holdersVault: string;
  nftWinner: string;
  lastBettor: string;
  totalBets: number;
  nextBetAt: number;
  isFinalized: boolean;
}

export interface GamePrize {
  prizePool: number;
  holder: number;
  holders: number;
  next: number;
  nexts: number;
  patron: number;
  foundation: number;
  team: number;
  winner: number;
}

export interface GameApi {
  id: string;
  address: string;
  name: unknown;
  desc: unknown;
  factory: string;
  token: string;
  winner: unknown;
  patron: string;
  prize_pool: number;
  raw_metadata: unknown;
  image: string | null;
  created_at: string;
  current_prize_pool: unknown;
  deployer: string;
  game_id: unknown;
  implementation: unknown;
  deployed_at: number;
  block_number: number;
  setting: GameSetting;
  config: GameConfig;
  prize: GamePrize;
  last_sync_at: number;
  tx_hash: string;
  balance_usdt: unknown;
  start_time: number;
  end_time: number;
  total_bets: number;
  last_bettor: string;
}
