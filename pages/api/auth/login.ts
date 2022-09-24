// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "config/firebase"

const AuthLogin = async (req: NextApiRequest, res: NextApiResponse) => {
  const email = "test2@mail.com"
  const password = "somepassword"

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
