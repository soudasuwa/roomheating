import { createRef, useContext, useState } from "react"
import { UserContext } from "src/contexts"

import { CheckBadgeIcon } from "@heroicons/react/24/outline"

import useSWR, { mutate } from "swr"
import axios from "axios"
import { BoilerDocument } from "types"
import { Modal } from "src/components"
import { BoilerEditor, Boilers } from "src/components/dashboard/boilers"
import {
  BoilersContext,
  NotificationsContext,
} from "src/components/dashboard/contexts"
import { Notifications } from "src/components/dashboard"

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
  const fetcher = (url: string) =>
    axios.get(url).then((response) => response.data)
  const { data: boilers, error: boilersError } = useSWR<BoilerDocument[]>(
    "/api/boilers",
    fetcher
  )

  const [selected, setSelected] = useState<string | undefined>(undefined)

  const boilersContext = { boilers, selected, setSelected }

  const { data: notifications, error: notificationsError } = useSWR(
    "/api/notifications",
    fetcher
  )

  const notificationsContext = { notifications }

  return (
    <>
      <div className="mx-auto w-full max-w-7xl flex-grow lg:flex">
        <BoilersContext.Provider value={boilersContext}>
          <div className="min-w-0 flex-1 bg-white xl:flex">
            <Profile />

            {selected !== undefined ? <BoilerEditor /> : <Boilers />}
          </div>
        </BoilersContext.Provider>
        <NotificationsContext.Provider value={notificationsContext}>
          <Notifications />
        </NotificationsContext.Provider>
      </div>
    </>
  )
}

export default DashboardPage
