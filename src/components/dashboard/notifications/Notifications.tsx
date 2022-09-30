import { useContext } from "react"

import { NotificationsContext, NotificationContext, Notification } from "."

type Props = {}

const Notifications = ({}: Props) => {
  const context = useContext(NotificationsContext)
  const notifications =
    (context && context.notifications) || Array(3).fill(undefined)

  return (
    <>
      <div className="bg-gray-50 pr-6 lg:flex-shrink-0 lg:border-l lg:border-gray-200 lg:pr-8">
        <div className="pl-6 lg:w-80">
          <div className="pt-6 pb-2">
            <h2 className="text-sm font-semibold">Notifications</h2>
          </div>
          <div>
            <ul role="list" className="divide-y divide-gray-200">
              {notifications.map((notification, index) => (
                <NotificationContext.Provider key={index} value={notification}>
                  <Notification />
                </NotificationContext.Provider>
              ))}
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

const defaultProps: Props = {}

Notifications.defaultProps = defaultProps

export default Notifications
