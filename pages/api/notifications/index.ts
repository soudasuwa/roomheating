import type { NextApiRequest, NextApiResponse } from "next"

const NotificationsApi = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json([
    {
      id: "1",
      boiler: { name: "Mastber bedroom boiler" },
      old: "15m",
      message: "Overheating detected",
      icon: "ExclamationTriangleIcon",
    },
    {
      id: "2",
      boiler: { name: "Another room boiler" },
      old: "1h",
      message: "Setting changed to: high",
      icon: "Cog6ToothIcon",
    },
    {
      id: "3",
      boiler: { name: "Child's room boiler" },
      old: "4h",
      message: "Notification received or something",
      icon: "BellAlertIcon",
    },
  ])
}

export default NotificationsApi
