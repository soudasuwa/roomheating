import { hiveapi } from "config/hiveapi"
import Cookies from "cookies"
import type { NextApiRequest, NextApiResponse } from "next"
import { getSession } from "src/lib"
import { BoilerDocument } from "types"
import { WorkerListItem } from "types/hiveapi"

const farm = 1294136

const test = async (req: NextApiRequest, res: NextApiResponse) => {
  const cookies = new Cookies(req, res)
  const session = await getSession(cookies.get("session"))

  if (session === undefined)
    return res.status(200).json({
      message: "Unauthorized",
      code: 401,
    })

  const workers: WorkerListItem[] = await hiveapi
    .get<{ data: WorkerListItem[] }>(`/farms/${farm}/workers`)
    .then((response) =>
      response.data.data.filter((worker) => worker.description === session.user)
    )
    .catch(({ response }) => response.data)

  // console.log(JSON.stringify(workers))

  // const boilers: BoilerDocument[] = workers.map((worker) => {
  //   const tags = []

  //   if (worker.stats !== undefined)
  //     tags.push((worker.stats.power_draw || 0) + " W")

  //   const status =
  //     worker.stats === undefined
  //       ? "gray"
  //       : worker.stats.online
  //       ? "green"
  //       : "red"

  //   return {
  //     id: String(worker.id),
  //     data: {
  //       name: worker.name || "No Name",
  //       status,
  //       model: "string",
  //       comment: "string",
  //       favourite: true,
  //       created: "asd",
  //       tags,
  //       owner: "string",
  //     },
  //   }
  // })

  res.status(200).json([])
}

export default test
