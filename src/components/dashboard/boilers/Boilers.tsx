import { useContext } from "react"
import { BoilerDocument } from "types"
import { Boiler, BoilerContext, BoilersContext } from "."
import SortingOptions from "src/components/dashboard/SortingOptions"

const SortBoilersByFavorite = (a: BoilerDocument, b: BoilerDocument) =>
  a.data.favourite === b.data.favourite ? 0 : a.data.favourite ? -1 : 1

const SortBoilersByDateCreated = (a: BoilerDocument, b: BoilerDocument) =>
  Date.parse(a.data.created) - Date.parse(b.data.created)

type Props = {}

const Boilers = ({}: Props) => {
  const context = useContext(BoilersContext)

  const boilers =
    (context &&
      context.boilers &&
      context.boilers
        .sort(SortBoilersByDateCreated)
        .sort(SortBoilersByFavorite)) ||
    Array(3).fill(undefined)

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
          {boilers.length === 0 ? (
            <div className="mx-5 my-10">
              <p className="text-xl text-gray-700">
                You&apos;ve got no boilers yet.
              </p>
              <p className="text-gray-500">
                Press &apos;New Boiler&apos; button to add your first boiler
                now!
              </p>
            </div>
          ) : (
            boilers.map((boiler, index) => (
              <BoilerContext.Provider key={index} value={boiler}>
                <Boiler />
              </BoilerContext.Provider>
            ))
          )}
        </ul>
      </div>
    </>
  )
}

const defaultProps: Props = {}

Boilers.defaultProps = defaultProps

export default Boilers
