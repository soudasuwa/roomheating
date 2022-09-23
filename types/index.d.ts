type FirestoreID = string

interface RoomData {
  name: string
  comment: string
  owner: FirestoreID
}

interface Room {
  data: RoomData
  id: FirestoreID
}
