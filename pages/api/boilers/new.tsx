import { db } from "config/firebase"
import Cookies from "cookies"
import { doc, setDoc } from "firebase/firestore"
import { NextApiRequest, NextApiResponse } from "next"
import { getSession } from "src/lib"
import crypto from "crypto"
import { BoilerData } from "types"

const dataDefaults: BoilerData = {
  favourite: false,
  model: "unkown",
  name: "Noname",
  comment: "",
  owner: "0000",
  created: "never",
  status: "gray",
  power_plan: "d3cc1d47-14ce-4f0b-b470-098d60c64f91",
  tags: ["Initializing", "1m"],
  hive: { farm: 1294136, worker: 6057629 },
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
