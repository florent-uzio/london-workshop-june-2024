import * as dotenv from "dotenv"

dotenv.config()

// Issued Currency that you want to use in your TrustSet or Payment transactions for example.
// Create a TOKEN field in your .env file. If TOKEN is not present, it will default to "TEST_TOKEN".
const { TOKEN = "TEST_TOKEN" } = process.env

const main = async () => {
  console.log("It works!")
}

main()
