import { NFTokenCreateOffer, NFTokenCreateOfferFlags, SubmittableTransaction, Wallet } from "xrpl"
import { TxnOptions } from "./txn-options"

export type TransactionPropsForMultiSign = TxnOptions & {
  isMultisign: true
  wallet?: never
}

export type TransactionPropsForSingleSign<T extends SubmittableTransaction> = TxnOptions & {
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
