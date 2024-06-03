import { Client } from "xrpl"
import { networks } from "./networks"
import { sendTransaction } from "./transaction-types"
import { WALLET_1, WALLET_2 } from "./wallets"

const main = async () => {
  const client = new Client(networks.RIPPLE_TESTNET)

  await client.connect()

  await sendTransaction({
    txn: {
      Account: WALLET_2.address,
      TransactionType: "TrustSet",
      LimitAmount: {
        currency: "ABCDE",
        value: "1000",
        issuer: WALLET_1.address,
      },
    },
    wallet: WALLET_2,
    client,
  })

  await client.disconnect()
}

main()
