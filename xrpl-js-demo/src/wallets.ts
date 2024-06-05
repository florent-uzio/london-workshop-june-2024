import * as dotenv from "dotenv"
import { Wallet } from "xrpl"

dotenv.config()

// https://xrpl.org/xrp-testnet-faucet.html
const { WALLET_1_SEED = "", WALLET_2_SEED = "", WALLET_3_SEED = "" } = process.env

export const WALLET_1 = Wallet.fromSeed(WALLET_1_SEED)
export const WALLET_2 = Wallet.fromSeed(WALLET_2_SEED)
export const WALLET_3 = Wallet.fromSeed(WALLET_3_SEED)
