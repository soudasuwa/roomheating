import type { SessionData } from "types"

import { db } from "config/firebase"
import { doc, getDoc } from "firebase/firestore"

const getSession = async (session?: string): Promise<SessionData | undefined> => {
  if (session === undefined || session.length === 0) return undefined

  const result = await getDoc(doc(db, "sessions", session))

  return result.data() as any
}

export default getSession
