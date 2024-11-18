export interface MovieContent {
  id: number
  year: string
  title: string
  studios: string[]
  producers: string[]
  winner: boolean
}

export interface MovieList {
  content: MovieContent[]
  empty: boolean
  first: boolean
  last: boolean
  number: number
  numberOfElements: number
  pageable: {
    sort: {
      unsorted: boolean
      sorted: boolean
      empty: boolean
    }
    offset: number
    pageNumber: number
    pageSize: number
    paged: boolean
    unpaged: boolean
  }
  size: number
  sort: { unsorted: boolean; sorted: boolean; empty: boolean }
  totalElements: number
  totalPages: number
}
