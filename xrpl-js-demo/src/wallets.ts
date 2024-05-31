import * as dotenv from "dotenv"
import { Wallet } from "xrpl"

dotenv.config()

// https://xrpl.org/xrp-testnet-faucet.html
const WALLET_1_SEED = process.env.WALLET_1_SEED ?? ""
// const WALLET_2_SEED = process.env.WALLET_2_SEED ?? ""
// const WALLET_3_SEED = process.env.WALLET_3_SEED ?? ""

export const WALLET_1 = Wallet.fromSeed(WALLET_1_SEED)
// export const WALLET_2 = Wallet.fromSeed(WALLET_2_SEED)
// export const WALLET_3 = Wallet.fromSeed(WALLET_3_SEED)
