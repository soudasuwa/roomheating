import { useContext } from "react"
import { PageContext } from "src/contexts"

type Props = {}

const PageHeader = ({}: Props) => {
  const pageContext = useContext(PageContext)

  return (
    <header className="pt-10">
      {pageContext.title && (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            {pageContext.title}
          </h1>
        </div>
      )}
    </header>
  )
}

const defaultProps: Props = {}

PageHeader.defaultProps = defaultProps

export default PageHeader
