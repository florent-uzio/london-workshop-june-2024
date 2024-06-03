import { Client } from "xrpl"
import { networks } from "./networks"
import { submitTxnAndWait } from "./transaction-types"

const main = async () => {
  const client = new Client(networks.RIPPLE_TESTNET)

  await client.connect()

  await submitTxnAndWait({
    // txn: {
    //   Account: WALLET_2.address,
    //   TransactionType: "NFTokenMint",
    //   URI: stringToHex(""),
    //   NFTokenTaxon: 0,
    // },
    // wallet: WALLET_2,
    client,
    signatures: [],
    isMultisign: true,
  })

  await client.disconnect()
}

main()
