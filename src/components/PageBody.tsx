type Props = {
  children: React.ReactNode
}

const PageBody = ({ children }: Props) => {
  return (
    <main className="-mt-32">
      <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-white shadow overflow-hidden">
          {children}
        </div>
      </div>
    </main>
  )
}

const defaultProps: Props = {
  children: undefined,
}

PageBody.defaultProps = defaultProps

export default PageBody
