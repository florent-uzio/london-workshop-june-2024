import { Payment } from "xrpl"
import { multiSignAndSubmit } from "../helpers"
import { TransactionPropsForMultiSign, TransactionPropsForSingleSign } from "../models"

type SendPaymentProps = TransactionPropsForMultiSign | TransactionPropsForSingleSign<Payment>

export const sendPayment = async (props: SendPaymentProps) => {
  console.log("LET'S SEND A PAYMENT")

  if (props.isMultisign) {
    multiSignAndSubmit(props.signatures, props.client)
  } else {
    // code to implement
  }
}
