import type { NavigationType } from "types"

import React, {
  Children,
  forwardRef,
  Fragment,
  useContext,
  useEffect,
  useState,
} from "react"
import { Disclosure, Menu, Transition } from "@headlessui/react"
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

import { useRouter } from "next/router"
import LogoShort from "./LogoShort"
import PageHeader from "./PageHeader"
import { GlobalContext, UserContext } from "src/contexts"

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

const NotificationsBell = ({ className }: { className?: string }) => (
  <button type="button" className={className}>
    <span className="sr-only">View notifications</span>
    <BellIcon className="h-6 w-6" aria-hidden="true" />
  </button>
)

type MobileMenuProps = {
  navigation: NavigationType
  userNavigation: NavigationType
}

const MobileMenu = ({ navigation, userNavigation }: MobileMenuProps) => {
  const user = useContext(UserContext)
  const router = useRouter()
  const globalContext = useContext(GlobalContext)

  return (
    <Disclosure.Panel className="md:hidden">
      <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
        {navigation.map((item) => (
          <Disclosure.Button key={item.name}>
            <ForwardRefLink
              href={item.href}
              className={classNames(
                router.asPath === item.href
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block px-3 py-2 rounded-md text-base font-medium"
              )}
            >
              {item.name}
            </ForwardRefLink>
          </Disclosure.Button>
        ))}
      </div>
      {globalContext.session && (
        <div className="border-t border-gray-700 pt-4 pb-3">
          <div className="flex items-center px-5">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full"
                src={user.imageUrl}
                alt=""
              />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium leading-none text-white">
                {user.name}
              </div>
              <div className="text-sm font-medium leading-none text-gray-400">
                {user.email}
              </div>
            </div>
            <NotificationsBell className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" />
          </div>
          <div className="mt-3 space-y-1 px-2">
            {userNavigation.map((item) => (
              <Disclosure.Button key={item.name}>
                <ForwardRefLink
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                >
                  {item.name}
                </ForwardRefLink>
              </Disclosure.Button>
            ))}
          </div>
        </div>
      )}
    </Disclosure.Panel>
  )
}

const MobileMenuButton = ({ open }: { open?: boolean }) => (
  <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
    <span className="sr-only">Open main menu</span>
    {open ? (
      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
    ) : (
      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
    )}
  </Disclosure.Button>
)

type ForwardRefLinkProps = {
  href: string
  children: React.ReactNode
  className?: string
}

const ForwardRefLink = forwardRef<HTMLAnchorElement, ForwardRefLinkProps>(
  ({ href, children, className, ...rest }, ref) => (
    <Link href={href}>
      <a ref={ref} className={className} {...rest}>
        {children}
      </a>
    </Link>
  )
)

ForwardRefLink.displayName = 'ForwardRefLink'

ForwardRefLink.defaultProps = {
  href: "#",
  children: undefined,
  className: undefined,
}

type ProfileDropdownProps = {
  userNavigation: NavigationType
}

const ProfileDropdown = ({ userNavigation }: ProfileDropdownProps) => {
  const user = useContext(UserContext)

  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <span className="sr-only">Open user menu</span>
          <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {userNavigation.map((item) => (
            <Menu.Item key={item.name}>
              {({ active }) => (
                <ForwardRefLink
                  href={item.href}
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  {item.name}
                </ForwardRefLink>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

const UserOnly = ({ children }: { children: React.ReactNode }) => {
  const globalContext = useContext(GlobalContext)
  const [output, setOutput] = useState<React.ReactNode | undefined>(undefined)

  useEffect(() => {
    setOutput(globalContext.session === undefined ? undefined : children)
  }, [globalContext.session])

  return <>{output}</>
}

const Navigation = () => {
  const router = useRouter()
  const globalContext = useContext(GlobalContext)

  const defaultNavifation = [
    { name: "Login", href: "/login" },
    { name: "Register", href: "/register" },
  ]

  const [navigation, setNavigation] =
    useState<NavigationType>(defaultNavifation)

  useEffect(() => {
    setNavigation(
      globalContext.session !== undefined
        ? [{ name: "Dashboard", href: "/dashboard" }]
        : defaultNavifation
    )
  }, [globalContext.session])

  const userNavigation: NavigationType = [
    { name: "Your Profile", href: "/profile" },
    { name: "Settings", href: "/settings" },
    { name: "Sign out", href: "/signout" },
  ]

  return (
    <div className="bg-gray-800 pb-32">
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="border-b border-gray-700">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 pt-3">
                      <LogoShort />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-5 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <Link key={item.name} href={item.href}>
                            <a
                              className={classNames(
                                router.asPath === item.href
                                  ? "bg-gray-900 text-white"
                                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                "px-3 py-2 rounded-md text-sm font-medium"
                              )}
                              aria-current={
                                router.asPath === item.href ? "page" : undefined
                              }
                            >
                              {item.name}
                            </a>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <UserOnly>
                    <div className="hidden md:block">
                      <div className="ml-4 flex items-center md:ml-6">
                        <NotificationsBell className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" />
                        <ProfileDropdown userNavigation={userNavigation} />
                      </div>
                    </div>
                  </UserOnly>
                  <div className="-mr-2 flex md:hidden">
                    <MobileMenuButton open={open} />
                  </div>
                </div>
              </div>
            </div>

            <MobileMenu
              navigation={navigation}
              userNavigation={userNavigation}
            />
          </>
        )}
      </Disclosure>

      <PageHeader />
    </div>
  )
}

Navigation.defaultProps = {}

export default Navigation
