// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { db } from "config/firebase"
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore"
import hashing from "src/lib/hashing"
import crypto from "crypto"

type LoginBody = {
  email?: string
  password?: string
}

const AuthLogin = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST")
    return res
      .status(200)
      .json({ error: "Server: only post method is allowed" })

  const { email, password }: LoginBody = req.body

  // Basic data validation
  if (email === undefined || email.length === 0)
    return res.status(200).json({ error: "Login: email is required" })

  if (password === undefined || password.length === 0)
    return res.status(200).json({ error: "Login: password is required" })

  const q = query(collection(db, "/accounts/"), where("email", "==", email))
  const querySnapshot = await getDocs(q)
  const results = <AccountDocument[]>[]
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    results.push({ id: doc.id, data: doc.data() as any })
  })

  if (results.length !== 1)
    return res
      .status(200)
      .json({ error: "Login: account credentials did not match" })

  const current = results[0]

  // Unlikely but just in case
  if (current.data === undefined)
    return res
      .status(200)
      .json({ error: "Login: account credentials did not match" })

  const hash = hashing.password(password)

  if (hash !== current.data.password)
    // Intentionally keep the error message the same to make brute-force harder
    return res.status(200).json({
      error: "Login: account credentials did not match",
      password,
      hash,
    })

  const ts = new Date().toISOString()
  const session: SessionDocument = {
    id: crypto.randomUUID(),
    data: { user: current.id, created: ts, used: ts },
  }

  await setDoc(doc(db, "/sessions/", session.id), session.data)

  res.status(200).json({ data: session.id })
}

export default AuthLogin
