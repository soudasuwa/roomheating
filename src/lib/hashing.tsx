import salts from "config/salts"
import crypto from "crypto"

const password = (input: string) =>
  crypto.createHash("sha256").update(salts.authentication).update(input).digest("base64")

export default { password }
