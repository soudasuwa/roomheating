import type { NextApiRequest, NextApiResponse } from "next"
import type {
  FlightSheetF,
  MinerConfigExaple,
  MinerName,
  Worker,
} from "types/hiveapi"

import { hiveapi } from "config/hiveapi"
import { db } from "config/firebase"
import Cookies from "cookies"
import {
  getDoc,
  doc,
  collection,
  DocumentData,
  getDocs,
  updateDoc,
} from "firebase/firestore"
import { getSession } from "src/lib"
import {
  BoilerData,
  BoilerDocument,
  PowerPlanData,
  PowerPlanDocument,
} from "types"
import axios from "axios"

const BoilerPowerPlanApi = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Invalid request method" })

  if (req.body.plan === undefined)
    return res.status(405).json({ error: "Power plan is not set" })

  if (req.query.id === undefined)
    return res.status(405).json({ error: "Boiler id is required" })

  if (Array.isArray(req.query.id))
    return res.status(405).json({ error: "Invalid id" })

  const power_plan_documents = await getDocs(collection(db, "power_plans"))
  const power_plans: PowerPlanDocument[] = []

  power_plan_documents.forEach((document) =>
    power_plans.push({
      id: document.id,
      data: document.data() as PowerPlanData,
    })
  )

  const slected_power_plan = power_plans.find(
    (plan) => plan.id === req.body.plan
  )

  if (slected_power_plan === undefined)
    return res.status(405).json("Unkown power plan")

  const boiler_id = req.query.id

  const cookies = new Cookies(req, res)
  const session = await getSession(cookies.get("session"))

  if (session === undefined)
    return res.status(405).json({ error: "You are not authorized" })

  await updateDoc(doc(db, "boilers", boiler_id), {
    power_plan: req.body.plan,
  })

  const document = await getDoc(doc(db, "boilers", boiler_id))

  if (document.exists() !== true)
    return res.status(405).json({ error: "Boiler does not exist" })

  const boiler = document.data() as BoilerData

  if (boiler === undefined)
    return res.status(405).json({ error: "Boiler does not exist" })

  const intensity_arguments: {
    [key in MinerName | any]?: string
  } = {
    gminer: "--intensity",
  }

  const intensity = slected_power_plan.data.intensity

  const worker = await hiveapi
    .get<Worker>(`/farms/${boiler.hive.farm}/workers/${boiler.hive.worker}`)
    .then((response) => response.data)

  if (worker.flight_sheet === undefined)
    return res.status(200).json({ error: `Fight sheet is missing` })

  const flight_sheet_id = worker.flight_sheet.id
  const flight_sheet = await hiveapi
    .get<FlightSheetF>(`/farms/${boiler.hive.farm}/fs/${flight_sheet_id}`)
    .then((response) => response.data)

  if (flight_sheet.items === undefined)
    return res.status(200).json({ error: `Fight sheet items are missing` })

  flight_sheet.name = `Flight Sheet for Boiler: ${boiler_id}`

  for (const item of flight_sheet.items) {
    const argument = intensity_arguments[item.miner]

    if (argument === undefined)
      return res
        .status(200)
        .json({ error: `Flight sheet miner name is unkown: ${item.miner}` })

    const user_config = argument + " " + intensity
    const miner_config =
      item.miner_config as MinerConfigExaple[typeof item.miner]

    if (miner_config === undefined)
      return res.status(200).json({ error: `miner_config is missing` })

    if (!("user_config" in miner_config))
      return res.status(200).json({ error: `miner_config is missing` })

    miner_config.user_config = user_config
  }

  await hiveapi
    //@ts-ignore
    .patch(`/farms/${boiler.hive.farm}/fs/${flight_sheet_id}`, flight_sheet)
    .then((response) => response.data)

  res.status(200).json(flight_sheet)
}

export default BoilerPowerPlanApi
