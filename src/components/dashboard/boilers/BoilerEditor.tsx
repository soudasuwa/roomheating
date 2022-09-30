import { Disclosure } from "@headlessui/react"
import {
  Battery0Icon,
  Battery100Icon,
  Battery50Icon,
  BoltIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline"
import { useContext, useState } from "react"
import { classNames } from "src/lib"
import { BoilersContext } from "."

type Props = {}

const BoilerEditor = ({}: Props) => {
  const context = useContext(BoilersContext)
  const [powerPlan, setPowerPlan] = useState("2")

  const boiler =
    (context &&
      context.selected &&
      context.boilers &&
      context.boilers.find(({ id }) => id === context.selected)) ||
    undefined

  const power_settings = [
    {
      id: "0",
      name: "High power",
      Icon: Battery100Icon,
    },
    {
      id: "1",
      name: "Medium power",
      Icon: Battery50Icon,
    },
    {
      id: "2",
      name: "Low power",
      Icon: Battery0Icon,
    },
  ]

  const current_power = power_settings.find(({ id }) => id === powerPlan)

  return (
    <>
      <div className="bg-white lg:min-w-0 lg:flex-1">
        <div
          className="border-b border-t border-gray-200 pl-4 pr-6 pt-4 pb-4 sm:pl-6 lg:pl-8 xl:border-t-0 xl:pl-6 xl:pt-6 hover:bg-gray-100 cursor-pointer"
          onClick={() =>
            context && context.setSelected && context.setSelected(undefined)
          }
        >
          <h1 className="text-lg font-medium">
            &larr; {boiler && boiler.data.name}
          </h1>
        </div>
        <div className="py-2 px-4">
          <div className="flex">
            <div className="flex-1 space-y-1">
              <div className="text-x font-medium">Current power settings</div>
              <div className="text-sm text-gray-500">
                {current_power && (
                  <>
                    {current_power.name}:&nbsp;
                    <current_power.Icon className="h-6 w-6 inline mr-2 mb-1 text-gray-500" />
                    {boiler && boiler.data.tags}
                  </>
                )}
              </div>
            </div>

            <div className="w-60">
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
                    {power_settings.map(({ id, name, Icon }) => (
                      <Disclosure.Button
                        key={id}
                        className="w-full"
                        disabled={current_power?.id === id}
                        onClick={() => setPowerPlan(id)}
                      >
                        <div
                          className={classNames(
                            "py-1 border-b-2",
                            current_power?.id !== id
                              ? "hover:bg-gray-100"
                              : "opacity-50"
                          )}
                        >
                          <a
                            href="#"
                            className={classNames(
                              "text-gray-700 px-4 py-2 text-sm flex items-center",
                              current_power?.id === id && "cursor-default"
                            )}
                          >
                            <Icon className="h-6 w-6 inline mr-2 text-gray-500" />
                            {name}
                          </a>
                        </div>
                      </Disclosure.Button>
                    ))}
                  </Disclosure.Panel>
                </div>
              </Disclosure>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const defaultProps: Props = {}

BoilerEditor.defaultProps = defaultProps

export default BoilerEditor
