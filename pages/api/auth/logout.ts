// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { db } from "config/firebase"
import { deleteDoc, doc, setDoc } from "firebase/firestore"
import type { NextApiRequest, NextApiResponse } from "next"

const AuthLogout = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST")
    return res
      .status(200)
      .json({ error: "Server: only post method is allowed" })

  const session = req.body.session

  // Basic data validation
  if (session === undefined || session.length === 0)
    return res.status(200).json({ error: "Logout: session is required" })

  await deleteDoc(doc(db, "/sessions/", session))

  res.status(200).json({ data: "success" })
}

export default AuthLogout
