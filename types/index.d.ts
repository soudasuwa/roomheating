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
