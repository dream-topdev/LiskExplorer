export interface LiskBlock {
  id: string;
  version: number;
  height: number;
  timestamp: number;
  previousBlockId: string;
  generator: {
    address: string;
    name: string;
    publicKey: string;
  };
  transactionRoot: string;
  assetsRoot: string;
  stateRoot: string;
  maxHeightGenerated: number;
  maxHeightPrevoted: number;
  validatorsHash: string;
  aggregateCommit: {
    height: number;
    aggregationBits: string;
    certificateSignature: string;
  };
  numberOfTransactions: number;
  numberOfAssets: number;
  numberOfEvents: number;
  totalBurnt: string;
  networkFee: string;
  totalForged: string;
  reward: string;
  signature: string;
  isFinal: boolean;
}
