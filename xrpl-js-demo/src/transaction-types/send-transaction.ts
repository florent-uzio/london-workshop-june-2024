import { SubmittableTransaction } from "xrpl"
import { convertCurrencyCodeToHex, deepReplace, multiSignAndSubmit } from "../helpers"
import { TransactionPropsForMultiSign, TransactionPropsForSingleSign } from "../models"

type SendTransactionProps<T extends SubmittableTransaction> =
  | TransactionPropsForMultiSign
  | TransactionPropsForSingleSign<T>

export const sendTransaction = async <T extends SubmittableTransaction>(
  props: SendTransactionProps<T>,
) => {
  console.log("LET'S SEND A TXN")

  if (props.isMultisign) {
    multiSignAndSubmit(props.signatures, props.client)
  } else {
    const { wallet, client, txn } = props

    if (props.txn.Account !== wallet.address) {
      throw new Error("Field 'Account' must have the same address as the Wallet")
    }

    const updatedTxn = deepReplace(txn, "currency", (_, value) => {
      return convertCurrencyCodeToHex(value)
    })

    console.log(JSON.stringify(updatedTxn, null, 2))

    const response = await client.submitAndWait(updatedTxn, { autofill: true, wallet })

    console.log(JSON.stringify(response, null, 2))

    return response
  }
}
