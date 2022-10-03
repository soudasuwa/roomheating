import { db } from "config/firebase"
import { hiveapi } from "config/hiveapi"
import { getDocs, collection, DocumentData } from "firebase/firestore"
import type { NextApiRequest, NextApiResponse } from "next"

const PowerPlansApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const documents = await getDocs(collection(db, "power_plans"))
  const result: {
    id: string
    data: DocumentData
  }[] = []

  documents.forEach((document) =>
    result.push({
      id: document.id,
      data: document.data(),
    })
  )

  res.status(200).json(result)
}

export default PowerPlansApi
