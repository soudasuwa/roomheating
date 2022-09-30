import * as icons from "@heroicons/react/24/outline"
import React, { useContext } from "react"
import Skeleton from "../Skeleton"
import { NotificationContext } from "./contexts"

type Props = {}

const Notification = ({}: Props) => {
  const context = useContext(NotificationContext)

  const Icon =
    (context?.data?.icon && icons[context.data.icon]) || icons.BellIcon

  return (
    <li className="py-4">
      <Skeleton require={context}>
        <div className="flex space-x-3">
          <Icon className="h-6 w-6" />
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium">
                <Skeleton line require={context} className="w-32">
                  {context?.data.boiler.name}
                </Skeleton>
              </h3>
              <div className="text-sm text-gray-500">
                <Skeleton line require={context} className="w-10">
                  {context?.data.old}
                </Skeleton>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              <Skeleton line require={context}>
                {context?.data.message}
              </Skeleton>
            </div>
          </div>
        </div>
      </Skeleton>
    </li>
  )
}

const defaultProps: Props = {}

Notification.defaultProps = defaultProps

export default Notification
