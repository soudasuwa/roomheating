import type { NextPage } from "next"
import { AppProps } from "next/app"

type MyNextPageProps = { title?: string }
type MyNextPage = NextPage & MyNextPageProps

type MyAppProps = AppProps & { Component: MyNextPage }

type NavigationType = {
  name: string
  href: string
}[]

type Boiler = {
  name: string
  status: string
  model: string
  comment: string
  favourite: boolean
  created: TimestampISO
  tags: string[]
  owner: string
}

interface BoilerDocument {
  id: UUID
  data: Boiler
}

type Notification = {
  id: string
  boiler: {
    name: string
  }
  old: string
  message: string
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
}

type FirestoreID = string
type UUID = string
type Hash = string
type Timestamp = number
type TimestampISO = string

interface RoomData {
  name: string
  comment: string
  owner: FirestoreID
}

interface Room {
  data: RoomData
  id: FirestoreID
}

interface AccountData {
  email: string
  password: Hash
  created: TimestampISO
}

interface AccountDocument {
  id: UUID
  data: AccountData
}

interface SessionData {
  user: UUID
  created: TimestampISO
  used: TimestampISO
}

interface SessionDocument {
  id: UUID
  data: SessionData
}

interface BoilerLocation {
  name: string
}

interface BoilerPower {
  watts: number
}
