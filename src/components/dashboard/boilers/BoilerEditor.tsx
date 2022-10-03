import * as icons from "@heroicons/react/24/outline"
import axios from "axios"
import { useContext } from "react"
import Skeleton from "src/components/Skeleton"
import useSWR from "swr"
import { PowerPlanDocument } from "types"
import { BoilerContext, BoilersContext, PowerEditor } from "."

type Props = {}

const BoilerEditor = ({}: Props) => {
  const boilersContext = useContext(BoilersContext)
  const context = useContext(BoilerContext)

  const fetcher = (url: string) =>
    axios.get(url).then((response) => response.data)
  const { data: p, error: errorP } = useSWR<PowerPlanDocument[]>(
    "/api/power_plans",
    fetcher
  )
  const current_power_plan =
    p && context && p.find((plan) => plan.id === context.data.power_plan)

  const Icon = current_power_plan && icons[current_power_plan.data.icon]

  return (
    <div className="bg-white lg:min-w-0 lg:flex-1 border-b border-gray-200 lg:border-0">
      <div
        className="border-b border-t border-gray-200 pl-4 pr-6 pt-4 pb-4 sm:pl-6 lg:pl-8 xl:border-t-0 xl:pl-6 xl:pt-6 hover:bg-gray-100 cursor-pointer"
        onClick={() =>
          boilersContext && boilersContext.setSelected && boilersContext.setSelected(undefined)
        }
      >
        <h1 className="text-lg font-medium">
          &larr;{" "}
          <Skeleton line as="span" require={context}>
            {context?.data.name}
          </Skeleton>
        </h1>
      </div>
      <div className="py-4 px-6">
        <div className="sm:flex">
          <div className="flex-1 space-y-1">
            <div className="text-x font-medium">Current power settings</div>
            <div className="text-sm text-gray-500">
              {current_power_plan && (
                <>
                  {current_power_plan?.data.name}:&nbsp;
                  {Icon && (
                    <Icon className="h-6 w-6 inline mr-2 mb-1 text-gray-500" />
                  )}
                  {context?.data.tags}
                </>
              )}
            </div>
          </div>

          <div className="mt-5 sm:mt-0 sm:w-60">
            <PowerEditor />
          </div>
        </div>
      </div>
    </div>
  )
}

const defaultProps: Props = {}

BoilerEditor.defaultProps = defaultProps

export default BoilerEditor
