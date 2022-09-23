import type { NextApiRequest, NextApiResponse } from "next"
import { auth } from "../../../config/firebase"
import { AUTH_STATUS } from "../../../src/enum"

const { AUTH, NOAUTH } = AUTH_STATUS

const AuthStatus = async (req: NextApiRequest, res: NextApiResponse<AUTH_STATUS>) =>
  auth.currentUser === null
    ? res.status(200).json(NOAUTH)
    : res.status(200).json(AUTH)

export default AuthStatus
