// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../config/firebase"

const login = (req: NextApiRequest, res: NextApiResponse) => {
  const email = "test@mail.com"
  const password = "somepassword"

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user

      res.status(200).json({ data: userCredential })
    })
    .catch((error) => {
      res.status(200).json({ error: error || null })
    })
}

export default login
