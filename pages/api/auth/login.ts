// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "config/firebase"

type LoginBody = {
  email?: string
  password?: string
}

const AuthLogin = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST")
    return res.status(200).json({ error: "Only post method is allowed" })

  const { email, password }: LoginBody = req.body

  if (email === undefined || email.length === 0)
    return res.status(200).json("email is required")

  if (password === undefined || password.length === 0)
    return res.status(200).json("password is required")

  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user

      res.status(200).json({ data: userCredential })
    })
    .catch((error) => {
      res.status(200).json({ error: error || null })
    })
}

export default AuthLogin
