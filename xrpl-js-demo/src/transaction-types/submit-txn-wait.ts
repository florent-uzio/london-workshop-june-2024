import { SubmittableTransaction } from "xrpl"
import { multiSignAndSubmit } from "../helpers"
import { TransactionPropsForMultiSign, TransactionPropsForSingleSign } from "../models"

type SubmitTxnAndWaitProps<T extends SubmittableTransaction> =
  | TransactionPropsForMultiSign
  | TransactionPropsForSingleSign<T>

export const submitTxnAndWait = async <T extends SubmittableTransaction>(
  props: SubmitTxnAndWaitProps<T>,
) => {
  if (props.isMultisign) {
    await multiSignAndSubmit(props.signatures, props.client)
  } else {
    // write code
  }
}
