import { classNames } from "src/lib"

type Props = {
  require?: any
  children?: React.ReactNode
  className?: string | boolean
  line?: boolean
}

const Skeleton = ({ require, children, className, line }: Props) => {
  return (
    <div
      className={classNames(
        require === undefined &&
          classNames(
            "animate-pulse opacity-50",
            line && "bg-gray-300 w-full rounded"
          ),
        require === undefined && className
      )}
    >
      {line && require === undefined ? <>&nbsp;</> : children}
    </div>
  )
}

const defaultProps: Props = {
  require: null,
  children: undefined,
  className: false,
  line: false,
}

Skeleton.defaltProps = defaultProps

export default Skeleton
