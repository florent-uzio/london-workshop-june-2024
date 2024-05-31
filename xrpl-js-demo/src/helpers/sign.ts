import { SubmittableTransaction, Transaction, Wallet } from "xrpl"
import { TxnOptions } from "../models"

type SignProps = {
  params: Omit<TxnOptions, "signatures">
  signers: number
  txn: SubmittableTransaction
  wallet: Wallet
}

/**
 * Helper to sign a transaction
 *
 * @param {Transaction} transaction The xrpl transaction (Payment, TrustSet...)
 * @param {Object} opts Object containing different options
 * @param {number} signers Number of signers
 * @returns
 */
export const sign = async ({ txn, signers, params, wallet }: SignProps) => {
  const { client, isMultisign, showLogs } = params
  const prepared = await client.autofill(txn, signers)

  const signature = wallet.sign(prepared, isMultisign)

  if (showLogs) {
    console.log(signature)
  }

  return signature
}
