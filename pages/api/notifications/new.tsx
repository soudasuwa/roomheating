import { db } from "config/firebase"
import Cookies from "cookies"
import { doc, setDoc } from "firebase/firestore"
import { NextApiRequest, NextApiResponse } from "next"
import { getSession } from "src/lib"
import crypto from "crypto"

const dataDefaults = {
  favourite: false,
  model: "unkown",
  name: "Noname",
  owner: "0000",
  status: "gray",
  tags: ["Initializing", "1m"],
}

const NewBoilerApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const cookies = new Cookies(req, res)
  const session = await getSession(cookies.get("session"))

  if (session === undefined) throw new Error("noauth")

  const data = Object.assign({}, req.body, dataDefaults)

  await setDoc(doc(db, "boilers", crypto.randomUUID()), data)

  res.status(200).json({ status: "success" })
}

export default NewBoilerApi
