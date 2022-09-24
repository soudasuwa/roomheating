// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "config/firebase"

type RegisterBody = {
  email?: string
  password?: string
}

const AuthRegister = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST")
    return res.status(200).json({ error: "Only post method is allowed" })

  const { email, password }: RegisterBody = req.body

  if (email === undefined || email.length === 0)
    return res.status(200).json("email is required")

  if (password === undefined || password.length === 0)
    return res.status(200).json("password is required")

  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user

      res.status(200).json({ data: userCredential })
    })
    .catch((error) => {
      res.status(200).json({ error: error || null })
    })
}

export default AuthRegister
