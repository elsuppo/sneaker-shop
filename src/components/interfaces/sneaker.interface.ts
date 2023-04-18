export interface ISneaker {
  id: number
  title: string
  image: string
  price: number
}

export interface ISneakerData {
  sneakers: ISneaker[]
}

export interface ISneakerDataSingle {
  sneaker: ISneaker
}