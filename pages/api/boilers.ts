import type { NextApiRequest, NextApiResponse } from "next"

type Type = BoilerDocument[]

const boilersAPI = (req: NextApiRequest, res: NextApiResponse<Type>) => {
  const location = {
    name: "My living room",
  }

  const power = {
    watts: 2000
  }

  const boiler = {
    model: "X17R3",
    name: "My boiler",
    location,
    power
  }

  const data = [
    { id: "1", data: boiler },
    { id: "2", data: boiler },
    { id: "3", data: boiler },
  ]

  res.status(200).json(data)
}

export default boilersAPI
