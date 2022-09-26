import { NextApiRequest, NextApiResponse } from "next"

import { doc, getDoc } from "firebase/firestore"
import { db } from "config/firebase"

const room = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query

  if (id === undefined) {
    res.status(200).json({ error: "Room id must be specified" })

    return
  }

  if (Array.isArray(id)) {
    res.status(200).json({ error: "Room id must be a single string" })

    return
  }

  switch (req.method) {
    case "GET":
      const snapshot = await getDoc(doc(db, "rooms", id))

      if (snapshot.exists() !== true) {
        res.status(200).json({
          error: "Room id does not exist",
        })
      } else {
        res.status(200).json(snapshot.data())
      }

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

export default room
