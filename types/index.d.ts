import type { NextPage } from "next"
import { AppProps } from "next/app"

type MyNextPageProps = { title?: string }
type MyNextPage = NextPage & MyNextPageProps

type MyAppProps = AppProps & { Component: MyNextPage }

type NavigationType = {
  name: string
  href: string
}[]

type BoilerData = {
  name: string
  status: string
  model: string
  comment: string
  favourite: boolean
  created: TimestampISO
  tags: string[]
  owner: string
  hive: { farm: number; worker: number }
}

interface BoilerDocument {
  id: UUID
  data: BoilerData
}

type Notification = {
  id: string
  boiler: {
    name: string
  }
  old: string
  message: string
  icon: keyof typeof import("/home/alessandro/Projects/Cryptotech/roomheating/node_modules/@heroicons/react/24/outline/index")
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
