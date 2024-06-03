import {
  Client,
  NFTokenCreateOffer,
  NFTokenCreateOfferFlags,
  SubmittableTransaction,
  Wallet,
} from "xrpl"

export type TxnCommons = { client: Client; showLogs?: boolean } & (
  | { isMultisign?: true; signatures: string[] }
  | { isMultisign?: false; signatures?: never }
)

export type TransactionPropsForMultiSign = TxnCommons & {
  isMultisign: true
}

export type TransactionPropsForSingleSign<T extends SubmittableTransaction> = TxnCommons & {
  isMultisign?: false
  txn: T extends NFTokenCreateOffer
    ? T &
        (
          | { Flags: NFTokenCreateOfferFlags.tfSellNFToken; Owner?: never }
          | { Flags?: undefined; Owner: string }
        )
    : T
  wallet: Wallet
}
