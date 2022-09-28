import { MyNextPage } from "types"

const IndexPage: MyNextPage = () => {
  return (
    <div className="px-5 py-6 sm:px-6">

    <div className="mx-auto max-w-2xl py-1 px-4 sm:py-2 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 items-center gap-y-16 gap-x-8 lg:grid-cols-2">
        <div>
          <div className="border-b border-gray-200 pb-10">
            <h2 className="font-medium text-gray-500">
              Your heating solutions
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              A home of crypto-boilers
            </p>
          </div>
          <dl className="mt-10 space-y-10">
            <div>
              <dt className="text-sm font-medium text-gray-900">
                Sleek design
              </dt>
              <dd className="mt-3 text-sm text-gray-500">
                Not only our product make your house look futuristic but it also
                creates a comfortable feel of warm and dry home.
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-900">Efficient</dt>
              <dd className="mt-3 text-sm text-gray-500">
                Heats both your home and your wallet.
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-900">
                One-button control
              </dt>
              <dd className="mt-3 text-sm text-gray-500">
                Set it up and you are good to go. Switch profiles with a click
                of single button.
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-900">All-in-one</dt>
              <dd className="mt-3 text-sm text-gray-500">
                Seamless integration with blockchains and our app, you are in
                control of eveything right from your home.
              </dd>
            </div>
          </dl>
        </div>
        <div>
          <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100">
            <img
              src="/assets/images/miner.jpg"
              alt="Black kettle with long pour spot and angled body on marble counter next to coffee mug and pour-over system."
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:mt-6 sm:gap-6 lg:mt-8 lg:gap-8">
            <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100">
              <img
                src="/assets/images/helium.jpg"
                alt="Detail of temperature setting button on kettle bass with digital degree readout."
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100">
              <img
                src="/assets/images/solar.jpg"
                alt="Kettle spout pouring boiling water into coffee grounds in pour-over mug."
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default IndexPage
