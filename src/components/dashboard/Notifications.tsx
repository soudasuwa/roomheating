import * as icons from "@heroicons/react/24/outline"
import { useContext } from "react"

import { NotificationsContext } from "./contexts"

const Notifications = () => {
  const context = useContext(NotificationsContext)

  return (
    <>
      <div className="bg-gray-50 pr-6 lg:flex-shrink-0 lg:border-l lg:border-gray-200 lg:pr-8">
        <div className="pl-6 lg:w-80">
          <div className="pt-6 pb-2">
            <h2 className="text-sm font-semibold">Notifications</h2>
          </div>
          <div>
            <ul role="list" className="divide-y divide-gray-200">
              {context &&
                context.notifications &&
                context.notifications.map(
                  ({ id, data: { boiler, old, message, icon } }) => {
                    const Icon = icons[icon]

                    return (
                      <li key={id} className="py-4">
                        <div className="flex space-x-3">
                          <Icon className="h-6 w-6" />
                          <div className="flex-1 space-y-1">
                            <div className="flex items-center justify-between">
                              <h3 className="text-sm font-medium">
                                {boiler.name}
                              </h3>
                              <p className="text-sm text-gray-500">{old}</p>
                            </div>
                            <p className="text-sm text-gray-500">{message}</p>
                          </div>
                        </div>
                      </li>
                    )
                  }
                )}
            </ul>
            <div className="border-t border-gray-200 py-4 text-sm">
              <a
                href="#"
                className="font-semibold text-indigo-600 hover:text-indigo-900"
              >
                View all notifications <span aria-hidden="true"> →</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Notifications
