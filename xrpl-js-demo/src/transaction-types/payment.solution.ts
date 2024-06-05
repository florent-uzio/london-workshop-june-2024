import { Payment, xrpToDrops } from "xrpl"
import { convertCurrencyCodeToHex, isString, multiSignAndSubmit } from "../helpers"
import { TransactionPropsForMultiSign, TransactionPropsForSingleSign } from "../models"

type SendPaymentProps = TransactionPropsForMultiSign | TransactionPropsForSingleSign<Payment>

export const sendPayment = async (props: SendPaymentProps) => {
  console.log("LET'S SEND A PAYMENT")

  if (props.isMultisign) {
    multiSignAndSubmit(props.signatures, props.client)
  } else {
    const { client, wallet, showLogs = true } = props
    let { Amount, ...rest } = props.txn

    // Convert the amount to drops (1 drop = .000001 XRP)
    if (isString(Amount)) {
      Amount = xrpToDrops(Amount)
    } else {
      Amount.currency = convertCurrencyCodeToHex(Amount.currency)
    }

    // Construct the base transaction
    const transaction: Payment = {
      Amount,
      ...rest,
    }

    // Sign and submit to the ledger
    const response = await client.submitAndWait(transaction, { autofill: true, wallet })

    if (showLogs) {
      console.log(JSON.stringify(response, null, 2))
    }

    return response
  }
}
