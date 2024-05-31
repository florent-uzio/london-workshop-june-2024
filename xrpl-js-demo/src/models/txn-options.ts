import { Client } from "xrpl"

export type TxnOptions = { client: Client; showLogs?: boolean } & (
  | { isMultisign?: true; signatures: string[] }
  | { isMultisign?: false; signatures?: never }
)
