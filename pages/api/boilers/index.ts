import Cookies from "cookies"
import { collection, getDocs, query, where } from "firebase/firestore"
import type { NextApiRequest, NextApiResponse } from "next"
import { BoilerData, BoilerDocument } from "types"
import { db } from "config/firebase"
import { getSession } from "src/lib"
import { hiveapi } from "config/hiveapi"
import { Worker } from "types/hiveapi"

const boilersAPI = async (
  req: NextApiRequest,
  res: NextApiResponse<BoilerDocument[]>
) => {
  const cookies = new Cookies(req, res)
  const session = await getSession(cookies.get("session"))

  if (session === undefined) return res.status(200).json([])

  let boilers: BoilerDocument[] = []

  const q = query(collection(db, "boilers"), where("owner", "==", session.user))
  const querySnapshot = await getDocs(q)

  querySnapshot.forEach((doc) =>
    boilers.push({ id: doc.id, data: doc.data() as BoilerData })
  )

  boilers = await Promise.all(
    boilers.map(async (boiler) => {
      const { farm, worker } = boiler.data.hive
      const data = await hiveapi
        .get<Worker>(`/farms/${farm}/workers/${worker}`)
        .then((response) => response.data)

      const tags = []

      if (data.stats !== undefined)
        tags.push((data.stats.power_draw || 0) + " W")

      const status =
        data.stats === undefined ? "gray" : data.stats.online ? "green" : "red"

      return Object.assign(boiler, {
        data: Object.assign(boiler.data, { status, tags }),
      })
    })
  )

  res.status(200).json(boilers)
}

export default boilersAPI
