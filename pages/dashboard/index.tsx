import {
  createRef,
  Fragment,
  SVGProps,
  useContext,
  useEffect,
  useState,
} from "react"
import { UserContext } from "src/contexts"

import {
  ExclamationTriangleIcon,
  BellAlertIcon,
  Cog6ToothIcon,
  Bars3BottomRightIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  CalendarDaysIcon,
  MapPinIcon,
  ChartBarSquareIcon,
  Bars3BottomLeftIcon,
  RectangleStackIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline"

import { StarIcon } from "@heroicons/react/24/solid"
import { Disclosure } from "@headlessui/react"
import useSWR, { mutate } from "swr"
import axios from "axios"
import { Boiler, BoilerDocument, Notification } from "types"
import { Modal } from "src/components"

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(" ")
}

const Notifications = () => {
  const notifications: Notification[] = [
    {
      id: "1",
      boiler: { name: "Mastber bedroom boiler" },
      old: "15m",
      message: "Overheating detected",
      Icon: ExclamationTriangleIcon,
    },
    {
      id: "2",
      boiler: { name: "Another room boiler" },
      old: "1h",
      message: "Setting changed to: high",
      Icon: Cog6ToothIcon,
    },
    {
      id: "3",
      boiler: { name: "Child&apos;s room boiler" },
      old: "4h",
      message: "Notification received or something",
      Icon: BellAlertIcon,
    },
  ]

  return (
    <>
      <div className="bg-gray-50 pr-6 lg:flex-shrink-0 lg:border-l lg:border-gray-200 lg:pr-8">
        <div className="pl-6 lg:w-80">
          <div className="pt-6 pb-2">
            <h2 className="text-sm font-semibold">Notifications</h2>
          </div>
          <div>
            <ul role="list" className="divide-y divide-gray-200">
              {notifications.map(({ id, boiler, old, message, Icon }) => (
                <li key={id} className="py-4">
                  <div className="flex space-x-3">
                    <Icon className="h-6 w-6" />
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium">{boiler.name}</h3>
                        <p className="text-sm text-gray-500">{old}</p>
                      </div>
                      <p className="text-sm text-gray-500">{message}</p>
                    </div>
                  </div>
                </li>
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

const SortingOptions = () => {
  const options = [
    {
      id: "1",
      name: "Date created",
      Icon: CalendarDaysIcon,
    },
    {
      id: "2",
      name: "Location",
      Icon: MapPinIcon,
    },
    {
      id: "3",
      name: "Model",
      Icon: Bars3BottomLeftIcon,
    },
    {
      id: "4",
      name: "Name",
      Icon: Bars3BottomLeftIcon,
    },
    {
      id: "5",
      name: "Consumption",
      Icon: ChartBarSquareIcon,
    },
  ]

  return (
    <Disclosure>
      <div className="relative">
        <Disclosure.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          <Bars3BottomRightIcon className="mr-3 h-5 w-5 text-gray-400" />
          Sort
          <ChevronDownIcon className="ml-2.5 -mr-1.5 h-5 w-5 text-gray-400" />
        </Disclosure.Button>
        <Disclosure.Panel className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {options.map(({ id, name, Icon }) => (
            <div
              key={id}
              className="py-1 border-b-2 hover:bg-gray-100"
              role="none"
            >
              <a
                href="#"
                className="text-gray-700 px-4 py-2 text-sm flex items-center"
              >
                <Icon className="h-6 w-6 inline mr-2 text-gray-500" />
                {name}
              </a>
            </div>
          ))}
        </Disclosure.Panel>
      </div>
    </Disclosure>
  )
}

const BoilerSkeleton = () => {
  return (
    <li className="relative py-5 pl-4 pr-6 hover:bg-gray-50 sm:py-6 sm:pl-6 lg:pl-8 xl:pl-6 animate-pulse">
      <div className="flex items-center justify-between space-x-4">
        {/* Repo name and link */}
        <div className="min-w-0 space-y-3">
          <div className="flex items-center space-x-3">
            <span
              className="h-4 w-4 rounded-full flex items-center justify-center bg-gray-100"
              aria-hidden="true"
            >
              <span className="h-2 w-2 rounded-full bg-gray-400"></span>
            </span>
            <h2 className="text-sm font-medium">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48"></div>
            </h2>
          </div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-20"></div>
        </div>
        <div className="sm:hidden">
          <svg
            className="h-5 w-5 text-gray-400"
            x-description="Heroicon name: mini/chevron-right"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        {/* Repo meta info */}
        <div className="hidden flex-shrink-0 flex-col items-end space-y-3 sm:flex">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-20"></div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-56"></div>
        </div>
      </div>
    </li>
  )
}

const BoilersSkeleton = () => (
  <>
    {Array(3)
      .fill(null)
      .map((_, index) => (
        <BoilerSkeleton key={index} />
      ))}
  </>
)

const Boilers = () => {
  const fetcher = (url: string) =>
    axios.get(url).then((response) => response.data)
  const { data: boilers, error } = useSWR<BoilerDocument[]>(
    "/api/boilers",
    fetcher
  )

  return (
    <>
      <div className="bg-white lg:min-w-0 lg:flex-1">
        <div className="border-b border-t border-gray-200 pl-4 pr-6 pt-4 pb-4 sm:pl-6 lg:pl-8 xl:border-t-0 xl:pl-6 xl:pt-6">
          <div className="flex items-center">
            <h1 className="flex-1 text-lg font-medium">Boilers</h1>
            <SortingOptions />
          </div>
        </div>
        <ul
          role="list"
          className="divide-y divide-gray-200 border-b border-gray-200"
        >
          {boilers === undefined ? (
            <BoilersSkeleton />
          ) : boilers.length === 0 ? (
            <div className="mx-5 my-10">
              <p className="text-xl text-gray-700">
                You&apos;ve got no boilers yet.
              </p>
              <p className="text-gray-500">
                Press &apos;New Boiler&apos; button to add your first boiler now!
              </p>
            </div>
          ) : (
            boilers
              .sort(
                (a, b) =>
                  Date.parse(a.data.created) - Date.parse(b.data.created)
              )
              .sort((a, b) =>
                a.data.favourite === b.data.favourite
                  ? 0
                  : a.data.favourite
                  ? -1
                  : 1
              )
              .map(({ id, data: { name, status, model, favourite, tags } }) => (
                <li
                  key={id}
                  className="relative py-5 pl-4 pr-6 hover:bg-gray-50 sm:py-6 sm:pl-6 lg:pl-8 xl:pl-6"
                >
                  <div className="flex items-center justify-between space-x-4">
                    {/* Repo name and link */}
                    <div className="min-w-0 space-y-3">
                      <div className="flex items-center space-x-3">
                        <span
                          className={classNames(
                            "h-4 w-4 rounded-full flex items-center justify-center",
                            status === "gray" && "bg-gray-100",
                            status === "red" && "bg-red-100",
                            status === "green" && "bg-green-100"
                          )}
                          aria-hidden="true"
                        >
                          <span
                            className={classNames(
                              "h-2 w-2 rounded-full",
                              status === "gray" && "bg-gray-400",
                              status === "red" && "bg-red-400",
                              status === "green" && "bg-green-400"
                            )}
                          ></span>
                        </span>
                        <h2 className="text-sm font-medium">
                          <a href="#">
                            <span
                              className="absolute inset-0"
                              aria-hidden="true"
                            ></span>
                            {name} <span className="sr-only">Running</span>
                          </a>
                        </h2>
                      </div>
                      <a
                        href="#"
                        className="group relative flex items-center space-x-2.5"
                      >
                        <svg
                          className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.99917 0C4.02996 0 0 4.02545 0 8.99143C0 12.9639 2.57853 16.3336 6.15489 17.5225C6.60518 17.6053 6.76927 17.3277 6.76927 17.0892C6.76927 16.8762 6.76153 16.3104 6.75711 15.5603C4.25372 16.1034 3.72553 14.3548 3.72553 14.3548C3.31612 13.316 2.72605 13.0395 2.72605 13.0395C1.9089 12.482 2.78793 12.4931 2.78793 12.4931C3.69127 12.5565 4.16643 13.4198 4.16643 13.4198C4.96921 14.7936 6.27312 14.3968 6.78584 14.1666C6.86761 13.5859 7.10022 13.1896 7.35713 12.965C5.35873 12.7381 3.25756 11.9665 3.25756 8.52116C3.25756 7.53978 3.6084 6.73667 4.18411 6.10854C4.09129 5.88114 3.78244 4.96654 4.27251 3.72904C4.27251 3.72904 5.02778 3.48728 6.74717 4.65082C7.46487 4.45101 8.23506 4.35165 9.00028 4.34779C9.76494 4.35165 10.5346 4.45101 11.2534 4.65082C12.9717 3.48728 13.7258 3.72904 13.7258 3.72904C14.217 4.96654 13.9082 5.88114 13.8159 6.10854C14.3927 6.73667 14.7408 7.53978 14.7408 8.52116C14.7408 11.9753 12.6363 12.7354 10.6318 12.9578C10.9545 13.2355 11.2423 13.7841 11.2423 14.6231C11.2423 15.8247 11.2313 16.7945 11.2313 17.0892C11.2313 17.3299 11.3937 17.6097 11.8501 17.522C15.4237 16.3303 18 12.9628 18 8.99143C18 4.02545 13.97 0 8.99917 0Z"
                            fill="currentcolor"
                          ></path>
                        </svg>
                        <span className="truncate text-sm font-medium text-gray-500 group-hover:text-gray-900">
                          {model}
                        </span>
                      </a>
                    </div>
                    <div className="sm:hidden">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        x-description="Heroicon name: mini/chevron-right"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div className="hidden flex-shrink-0 flex-col items-end space-y-3 sm:flex">
                      <p className="flex items-center space-x-4">
                        <a
                          href="#"
                          className="relative text-sm font-medium text-gray-500 hover:text-gray-900"
                        >
                          Show statistics
                        </a>
                        <button
                          type="button"
                          className="relative rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          <span className="sr-only">Add to favorites</span>
                          <StarIcon
                            className={classNames(
                              "h-5 w-5",
                              favourite
                                ? "text-yellow-300 hover:text-yellow-400"
                                : "text-gray-300 hover:text-gray-400"
                            )}
                          />
                        </button>
                      </p>
                      <p className="flex space-x-2 text-sm text-gray-500">
                        &nbsp;
                        {tags.map((tag, index) => (
                          <Fragment key={index}>
                            <span>{tag}</span>
                            {index !== tags.length - 1 && (
                              <span aria-hidden="true">·</span>
                            )}
                          </Fragment>
                        ))}
                      </p>
                    </div>
                  </div>
                </li>
              ))
          )}
        </ul>
      </div>
    </>
  )
}

const Actions = () => {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const name = createRef<HTMLInputElement>()
  const comment = createRef<HTMLTextAreaElement>()
  const favourite = createRef<HTMLInputElement>()
  const model = createRef<HTMLSelectElement>()

  const cancel = () => {
    setOpen(false)

    name.current && (name.current.value = "")
    comment.current && (comment.current.value = "")
    favourite.current && (favourite.current.value = "")
    model.current && (model.current.value = "")
  }

  const add = () => {
    if (loading === true) return

    setLoading(true)

    const data = {
      name: name.current?.value || undefined,
      comment: comment.current?.value || undefined,
      favourite: favourite.current?.checked || false,
      model: model.current?.value || undefined,
    }

    axios
      .post("/api/boilers/new", data)
      .then((response) => {
        if (response.data === "success") {
          mutate("/api/boilers")
          cancel()
        } else {
          alert("Error adding boiler: check console for more info")
          console.error("Error adding new boiler")
          console.error("Data:", data)
          console.error("Response", response)
          console.error("Response data", response.data)
        }
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <>
      <Modal open={open} setOpen={setOpen}>
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              New boiler
            </h3>
          </div>

          <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5">
              <div className="border-t border-gray-200" />
            </div>
          </div>

          <div className="mt-5 md:col-span-2 md:mt-0">
            <form action="#" method="POST">
              <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    ref={name}
                    autoComplete="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  <p className="mt-2 text-sm text-gray-500">Boiler name</p>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="model"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Model
                  </label>
                  <select
                    ref={model}
                    name="model"
                    autoComplete="model"
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  >
                    <option>X17R3</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="comment"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Comment
                  </label>
                  <div className="mt-1">
                    <textarea
                      ref={comment}
                      name="comment"
                      rows={3}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Whatever your want."
                      defaultValue={""}
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Brief description for this boiler.
                  </p>
                </div>
              </div>
            </form>
          </div>

          <div className="px-4 sm:px-0 mt-5">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Settings
            </h3>
          </div>

          <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5">
              <div className="border-t border-gray-200" />
            </div>
          </div>

          <div className="flex items-start px-4 py-5 sm:p-6">
            <div className="flex h-5 items-center">
              <input
                ref={favourite}
                name="favourite"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="favourite" className="font-medium text-gray-700">
                Favourite
              </label>
              <p className="text-gray-500">
                Favourite boilers receive higher priority.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 mt-10">
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
            onClick={add}
          >
            Add
          </button>
          <button
            type="button"
            className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            onClick={cancel}
          >
            Cancel
          </button>
        </div>
      </Modal>

      <div className="flex flex-col sm:flex-row xl:flex-col">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 xl:w-full"
        >
          New Boiler
        </button>
        {/* <button
          type="button"
          className="mt-3 inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 xl:ml-0 xl:mt-3 xl:w-full"
        >
          Add other
        </button> */}
      </div>
    </>
  )
}

const Profile = () => {
  const user = useContext(UserContext)

  return (
    <>
      <div className="bg-white xl:w-64 xl:flex-shrink-0 xl:border-r xl:border-gray-200">
        <div className="py-6 pl-6 pr-6 sm:pl-6 lg:pl-8">
          <div className="flex items-center justify-between">
            <div className="flex-1 space-y-8">
              <div className="space-y-8 sm:flex sm:items-center sm:justify-between sm:space-y-0 xl:block xl:space-y-8">
                {/* Profile */}
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 flex-shrink-0">
                    <img
                      className="h-12 w-12 rounded-full"
                      src={user.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-medium text-gray-900">
                      {user.name}
                    </div>
                    <a href="#" className="group flex items-center space-x-2.5">
                      <svg
                        className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-sm font-medium text-gray-500 group-hover:text-gray-900">
                        {user.name.toLocaleLowerCase().replaceAll(" ", "")}
                      </span>
                    </a>
                  </div>
                </div>
                <Actions />
              </div>
              {/* Meta info */}
              <div className="flex flex-col space-y-6 sm:flex-row sm:space-y-0 sm:space-x-8 xl:flex-col xl:space-x-0 xl:space-y-6">
                <div className="flex items-center space-x-2">
                  <CheckBadgeIcon className="h-5 w-5 text-gray-400" />
                  <span className="text-sm font-medium text-gray-500">
                    Pro Customer
                  </span>
                </div>
                {/* <div className="flex items-center space-x-2">
                  <RectangleStackIcon className="h-5 w-5 text-gray-400" />
                  <span className="text-sm font-medium text-gray-500">
                    3 Boilers
                  </span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const DashboardPage = () => {
  return (
    <>
      <div className="mx-auto w-full max-w-7xl flex-grow lg:flex">
        {/* Left sidebar & main wrapper */}
        <div className="min-w-0 flex-1 bg-white xl:flex">
          <Profile />
          <Boilers />
        </div>
        <Notifications />
      </div>
    </>
  )
}

export default DashboardPage
