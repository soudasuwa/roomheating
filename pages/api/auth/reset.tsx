// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"

const login = (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({ error: 'Interface not implemented' })
}

export default login
