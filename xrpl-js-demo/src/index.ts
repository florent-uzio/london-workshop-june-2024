import { Client } from "xrpl"
import { networks } from "./networks"

const main = async () => {
  const client = new Client(networks.RIPPLE_TESTNET)

  await client.connect()

  //   const memos: Memo = {
  //     Memo: {
  //       MemoType: stringToHex("String"),
  //       MemoData: stringToHex("This is a test"),
  //     },
  //   }

  //   await sendPayment({
  //     txn: {
  //       Destination: WALLET_2.address,
  //       Amount: "0.12",
  //       Memos: [memos],
  //     },
  //     wallet: WALLET_1,
  //     client,
  //     // showLogs: true,
  //   })

  await client.disconnect()
}

main()
