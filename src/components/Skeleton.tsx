import { classNames } from "src/lib"

type Props = {
  require?: any
  children?: React.ReactNode
  className?: string | boolean
  line?: boolean
  as?:
    | React.ExoticComponent<{
        className: string
        children?: React.ReactNode
      }>
    | string
}

const Skeleton = ({
  require,
  children,
  className,
  line,
  as: Component,
}: Props) => {
  Component = Component || "div"

  return (
    <Component
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
    </Component>
  )
}

const defaultProps: Props = {
  require: null,
  children: undefined,
  className: false,
  line: false,
  as: "div",
}

Skeleton.defaltProps = defaultProps

export default Skeleton
