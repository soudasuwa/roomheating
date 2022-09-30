import { StarIcon } from "@heroicons/react/20/solid"
import { useContext, Fragment } from "react"
import { classNames } from "src/lib"
import { BoilerContext, BoilersContext } from "../contexts"

type Props = {}

const Boiler = ({}: Props) => {
  const boilersContext = useContext(BoilersContext)
  const context = useContext(BoilerContext)

  const onSelect = () =>
    context && boilersContext && boilersContext.setSelected && boilersContext.setSelected(context.id)

  return (
    <li
      className={classNames(
        "relative py-5 pl-4 pr-6 hover:bg-gray-50 sm:py-6 sm:pl-6 lg:pl-8 xl:pl-6",
        context === undefined && "animate-pulse"
      )}
      onClick={onSelect}
    >
      <div className="flex items-center justify-between space-x-4">
        {/* Repo name and link */}
        <div className="min-w-0 space-y-3">
          <div className="flex items-center space-x-3">
            <span
              className={classNames(
                "h-4 w-4 rounded-full flex items-center justify-center",
                (context === undefined || context.data.status) === "gray" &&
                  "bg-gray-100",
                context !== undefined &&
                  context.data.status === "red" &&
                  "bg-red-100",
                context !== undefined &&
                  context.data.status === "green" &&
                  "bg-green-100"
              )}
              aria-hidden="true"
            >
              <span
                className={classNames(
                  "h-2 w-2 rounded-full",
                  (context === undefined || context.data.status === "gray") &&
                    "bg-gray-400",
                  context !== undefined &&
                    context.data.status === "red" &&
                    "bg-red-400",
                  context !== undefined &&
                    context.data.status === "green" &&
                    "bg-green-400"
                )}
              ></span>
            </span>
            <h2 className="text-sm font-medium">
              <a href="#">
                <span className="absolute inset-0" aria-hidden="true"></span>
                {context?.data?.name || (
                  <div className="bg-gray-200 w-36 rounded h-4">&nbsp;</div>
                )}
                <span className="sr-only">Running</span>
              </a>
            </h2>
          </div>
          <a href="#" className="group relative flex items-center space-x-2.5">
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
              {context?.data?.model || (
                <div className="bg-gray-200 w-20 rounded h-3.5">&nbsp;</div>
              )}
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
              className={classNames(
                "relative text-sm font-medium text-gray-500 hover:text-gray-900",
                context === undefined && "bg-gray-200 w-28 rounded h-3"
              )}
            >
              {context !== undefined ? <>Show statistics</> : <>&nbsp;</>}
            </a>
            <button
              type="button"
              className="relative rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="sr-only">Add to favorites</span>
              <StarIcon
                className={classNames(
                  "h-5 w-5",
                  context?.data?.favourite
                    ? "text-yellow-300 hover:text-yellow-400"
                    : "text-gray-300 hover:text-gray-400"
                )}
              />
            </button>
          </p>
          <p
            className={classNames(
              "flex space-x-2 text-sm text-gray-500",
              context === undefined && "h-1.5 w-16 rounded-full bg-gray-300"
            )}
          >
            &nbsp;
            {(context === undefined ? [] : context.data.tags || []).map(
              (tag, index, tags) => (
                <Fragment key={index}>
                  <span>{tag}</span>
                  {index !== tags.length - 1 && (
                    <span aria-hidden="true">·</span>
                  )}
                </Fragment>
              )
            )}
          </p>
        </div>
      </div>
    </li>
  )
}

const defaultProps: Props = {}

Boiler.defaultProps = defaultProps

export default Boiler
