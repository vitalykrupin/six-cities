export type OfferType = {
  id: number,
  description: string,
  title: string,
  rating: number,
  price: number,
  isPremium: boolean,
  isFavorite: boolean,
  previewImage: string,
  type: string,
  bedrooms: number,
  maxAdults: number,
  images: string[],
  goods: string[],
  host: HostType,
  location: LocationType,
  city: CityType
}

export type LocationType = {
  latitude: number,
  longitude: number,
  zoom: number
}

export type HostType = {
  name: string,
  avatarUrl: string,
  isPro: boolean,
  description: string
}

export type CityType = {
  name: string,
  location: LocationType
}

export type CommentType = {
  id: number,
  rating: number,
  comment: string,
  date: any,
  user: {
    name: string,
    avatarUrl: string
  }
}
