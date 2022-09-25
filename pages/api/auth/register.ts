// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { db } from "config/firebase"
import { doc, getDoc, setDoc } from "firebase/firestore"
import hashing from "src/lib/hashing"
import crypto from 'crypto'

type RegisterBody = {
  email?: string
  password?: string
}

const AuthRegister = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST")
    return res.status(200).json({ error: "Only post method is allowed" })

  const { email, password }: RegisterBody = req.body

  if (email === undefined || email.length === 0)
    return res.status(200).json({error: "email is required"})

  if (password === undefined || password.length === 0)
    return res.status(200).json({error: "password is required"})

  const current = await getDoc(doc(db, "/accounts/", email))

  if (current.exists() === true)
    return res
      .status(200)
      .json({ error: "Login: this email is already registered" })

  const account: AccountDocument = {
    id: crypto.randomUUID(),
    data: {
      email,
      password: hashing.password(password),
      created: new Date().toISOString(),
    },
  }

  await setDoc(doc(db, "/accounts/", account.id), account.data)

  return res.status(200).json({ data: "success" })
}

export default AuthRegister
