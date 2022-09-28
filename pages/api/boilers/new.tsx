import { db } from "config/firebase"
import Cookies from "cookies"
import { doc, setDoc } from "firebase/firestore"
import { NextApiRequest, NextApiResponse } from "next"
import { getSession } from "src/lib"
import crypto from "crypto"
import { Boiler } from "types"

const dataDefaults: Boiler = {
  favourite: false,
  model: "unkown",
  name: "Noname",
  comment: "",
  owner: "0000",
  created: "never",
  status: "gray",
  tags: ["Initializing", "1m"],
}

const NewBoilerApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const cookies = new Cookies(req, res)
  const session = await getSession(cookies.get("session"))

  if (session === undefined) throw new Error("noauth")

  const extra = {
    owner: session.user,
    created: new Date().toISOString(),
  }

  const data = Object.assign({}, dataDefaults, req.body, extra)

  await setDoc(doc(db, "boilers", crypto.randomUUID()), data)

  res.status(200).send("success")
}

export default NewBoilerApi
