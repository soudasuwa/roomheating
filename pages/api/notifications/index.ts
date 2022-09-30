import type { NotificationData, NotificationDocument } from "types"
import type { NextApiRequest, NextApiResponse } from "next"

import Cookies from "cookies"

import { collection, getDocs, query, where } from "firebase/firestore"
import { getSession } from "src/lib"
import { db } from "config/firebase"

const NotificationsApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const cookies = new Cookies(req, res)
  const session = await getSession(cookies.get("session"))

  if (session === undefined) return res.status(401).send(undefined)

  const notifications: NotificationDocument[] = []

  const q = query(collection(db, "notifications"), where("user", "==", session.user))
  const querySnapshot = await getDocs(q)

  querySnapshot.forEach((doc) =>
    notifications.push({ id: doc.id, data: doc.data() as NotificationData })
  )

  res.status(200).json(notifications)
}

export default NotificationsApi
