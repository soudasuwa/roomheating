import Cookies from "cookies"
import { collection, getDocs, query, where } from "firebase/firestore"
import type { NextApiRequest, NextApiResponse } from "next"
import { BoilerData, BoilerDocument } from "types"
import { db } from "config/firebase"
import { getSession } from "src/lib"

const boilersAPI = async (
  req: NextApiRequest,
  res: NextApiResponse<BoilerDocument[]>
) => {
  const cookies = new Cookies(req, res)
  const session = await getSession(cookies.get("session"))

  let data: BoilerDocument[] = []

  if (session !== undefined) {
    const q = query(
      collection(db, "boilers"),
      where("owner", "==", session.user)
    )
    const querySnapshot = await getDocs(q)

    querySnapshot.forEach((doc) =>
      data.push({ id: doc.id, data: doc.data() as BoilerData })
    )
  }

  res.status(200).json(data)
}

export default boilersAPI
