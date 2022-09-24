// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { auth } from "config/firebase"
import { AUTH_LOGOUT } from "src/enum"

const { SUCCESS, NOAUTH, ERROR } = AUTH_LOGOUT

const AuthLogout = async (
  req: NextApiRequest,
  res: NextApiResponse<AUTH_LOGOUT>
) =>
  auth.currentUser === null
    ? res.status(200).json(NOAUTH)
    : auth
        .signOut()
        .then(() => res.status(200).json(SUCCESS))
        .catch((e) => res.status(200).json(ERROR))

export default AuthLogout
