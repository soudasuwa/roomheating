import { Disclosure } from "@headlessui/react"
import {
  CalendarDaysIcon,
  MapPinIcon,
  Bars3BottomLeftIcon,
  ChartBarSquareIcon,
  Bars3BottomRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline"

type Props = {}

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

const SortingOptions = ({}: Props) => {
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

const defaultProps: Props = {}

SortingOptions.defaultProps = defaultProps

export default SortingOptions
