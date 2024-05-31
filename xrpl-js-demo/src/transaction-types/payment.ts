import { Payment, xrpToDrops } from "xrpl"
import { convertCurrencyCodeToHex, isString } from "../helpers"
import { TransactionPropsForMultiSign, TransactionPropsForSingleSign } from "../models"

type SendPaymentProps = TransactionPropsForMultiSign | TransactionPropsForSingleSign<Payment>

export const sendPayment = async (props: SendPaymentProps) => {
  console.log("LET'S SEND A PAYMENT")

  if (props.isMultisign) {
    // handle multi sign
  } else {
    const { wallet, client, txn } = props
    let { Amount, ...rest } = txn

    if (isString(Amount)) {
      Amount = xrpToDrops(Amount)
    } else {
      Amount.currency = convertCurrencyCodeToHex(Amount.currency)
    }

    // build payment object
    const transaction: Payment = {
      Account: wallet.address,
      TransactionType: "Payment",
      Amount,
      ...rest,
    }

    const result = await client.submitAndWait(transaction, { autofill: true, wallet })

    if (props.showLogs) {
      console.log(JSON.stringify(result, null, 2))
    }

    return result
  }
}
