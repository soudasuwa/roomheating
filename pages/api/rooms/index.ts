import { NextApiRequest, NextApiResponse } from "next"

import { collection, getDocs, query, where } from "firebase/firestore"
import { auth, db } from "config/firebase"

const rooms = async (req: NextApiRequest, res: NextApiResponse) => {
  const user = auth.currentUser

  if (user === null) {
    res.status(200).json({ error: "User not logged in" })

    return
  }

  switch (req.method) {
    case "GET":
      const q = query(collection(db, "rooms"), where("owner", "==", user.uid))
      const querySnapshot = await getDocs(q)
      const data = <Room[]>[]

      querySnapshot.forEach((doc) =>
        data.push({ id: doc.id, data: doc.data() as any })
      )

      res.status(200).json(data)
      break
    case "POST":
      res.status(200).json({ data: "thank you come again" })
      break
    default:
      res
        .status(200)
        .send(
          `Illegal request, responding with status '501 Not Implemented': Unsupported HTTP method: ${req.method}, suppoerted methods: [POST, GET]`
        )
      break
  }
}

export default rooms
