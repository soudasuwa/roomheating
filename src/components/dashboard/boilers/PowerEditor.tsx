import { Disclosure } from "@headlessui/react"
import * as icons from "@heroicons/react/24/outline"
import { BoltIcon, ChevronDownIcon } from "@heroicons/react/24/outline"
import axios from "axios"
import { DocumentData } from "firebase/firestore"
import { useContext, useEffect, useState } from "react"
import { classNames } from "src/lib"
import useSWR, { mutate } from "swr"
import { PowerPlanDocument } from "types"
import BoilerContext from "./BoilerContext"

type Props = {}

const PowerEditor = ({}: Props) => {
  const context = useContext(BoilerContext)
  const fetcher = (url: string) =>
    axios.get(url).then((response) => response.data)
  const { data: p, error: errorP } = useSWR<PowerPlanDocument[]>(
    "/api/power_plans",
    fetcher
  )

  const setPowerPlan = async (plan: string) => {
    if (context === undefined || context.id === undefined) return

    const data = await axios
      .post(`/api/boilers/${context.id}/power_plan`, { plan })
      .then((response) => response.data)

    mutate("/api/boilers")
  }

  return (
    <Disclosure>
      <div className="relative">
        <Disclosure.Button className="flex justify-between w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          <div className="flex">
            <BoltIcon className="mr-3 h-5 w-5 text-gray-400" />
            Change power
          </div>
          <ChevronDownIcon className="ml-2.5 -mr-1.5 h-5 w-5 text-gray-400" />
        </Disclosure.Button>
        <Disclosure.Panel className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {p &&
            p.map(({ id, data: { name, icon } }) => {
              const Icon = icons[icon]

              return (
                <Disclosure.Button
                  key={id}
                  className="w-full"
                  disabled={context?.data.power_plan === id}
                  onClick={() => setPowerPlan(id)}
                >
                  <div
                    className={classNames(
                      "py-1 border-b-2",
                      context?.data.power_plan !== id
                        ? "hover:bg-gray-100"
                        : "opacity-50"
                    )}
                  >
                    <a
                      href="#"
                      className={classNames(
                        "text-gray-700 px-4 py-2 text-sm flex items-center",
                        context?.data.power_plan === id && "cursor-default"
                      )}
                    >
                      <Icon className="h-6 w-6 inline mr-2 text-gray-500" />
                      {name}
                    </a>
                  </div>
                </Disclosure.Button>
              )
            })}
        </Disclosure.Panel>
      </div>
    </Disclosure>
  )
}

const defaultProps: Props = {}

PowerEditor.defaultProps = defaultProps

export default PowerEditor
