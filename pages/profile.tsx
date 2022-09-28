import type { MyNextPage } from "types"

import { PaperClipIcon } from "@heroicons/react/20/solid"

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

const ProfilePage: MyNextPage = () => {
  const attachments = [
    {
      name: <>resume_back_end_developer.pdf</>,
    },
    {
      name: <>coverletter_back_end_developer.pdf</>,
    },
  ]

  const enteries = [
    {
      label: <>Full name</>,
      data: <>Margot Foster</>,
    },
    {
      label: <>Application for</>,
      data: <>Backend Developer</>,
    },
    {
      label: <>Email address</>,
      data: <>margotfoster@example.com</>,
    },
    {
      label: <>Salary expectation</>,
      data: <>$120,000</>,
    },
    {
      label: <>About</>,
      data: (
        <>
          Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt
          cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint.
          Sit id mollit nulla mollit nostrud in ea officia proident. Irure
          nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
        </>
      ),
    },
    {
      label: <>Attachments</>,
      data: (
        <ul
          role="list"
          className="divide-y divide-gray-200 rounded-md border border-gray-200"
        >
          {attachments.map(({ name }, index) => (
            <li
              key={index}
              className="flex items-center justify-between py-3 pl-3 pr-4 text-sm"
            >
              <div className="flex w-0 flex-1 items-center">
                <PaperClipIcon
                  className="h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                <span className="ml-2 w-0 flex-1 truncate">{name}</span>
              </div>
              <div className="ml-4 flex-shrink-0">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Download
                </a>
              </div>
            </li>
          ))}
        </ul>
      ),
    },
  ]

  return (
    <div className="overflow-hidden">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Applicant Information
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Personal details and application.
        </p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          {enteries.map(({ label, data }, index) => (
            <div
              key={index}
              className={classNames(
                index % 2 === 0 ? "bg-gray-50" : "bg-white",
                "px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              )}
            >
              <dt className="text-sm font-medium text-gray-500">{label}</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {data}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

ProfilePage.title = "Your Profile"

export default ProfilePage
