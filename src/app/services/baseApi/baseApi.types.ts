export type ApiKeyType = {
  accountType: 'EXTENDED' | 'FREE' | 'UNLIMITED'
  dailyQuota: ApiKeyDailyQuota
  totalQuota: ApiKeyTotalQuota
}
export type ApiKeyTotalQuota = {
  used: number
  value: number
}
export type ApiKeyDailyQuota = {
  used: number
  value: number
}
export type GetSearchArgs = {
  keyword: string
  page?: number
}
export type SearchByKeyboardsType = {
  films: SearchByKeyboardsTypeFilms[]
  keyword: string
  pagesCount: number
  searchFilmsCountResult: number
}
export type SearchByKeyboardsTypeFilmsCountries = {
  country: string
}
export type SearchByKeyboardsTypeFilmsGenres = {
  genre: string
}
export type SearchByKeyboardsTypeFilms = {
  countries: SearchByKeyboardsTypeFilmsCountries[]
  description: string
  filmId: number
  filmLength: string
  genres: SearchByKeyboardsTypeFilmsGenres[]
  nameEn: string
  nameRu: string
  posterUrl: string
  posterUrlPreview: string
  rating: string
  ratingVoteCount: number
  type: string
  year: string
}

export type GetAwardsType = {
  items: GetAwardsTypeItems[]
  total: number
}
export type GetAwardsTypeItemsPersons = {
  age: number
  birthday: string
  birthplace: string
  death: string
  deathplace: string
  growth: number
  kinopoiskId: number
  nameEn: string
  nameRu: string
  posterUrl: string
  profession: string
  sex: string
  webUrl: string
}
export type GetAwardsTypeItems = {
  imageUrl: string
  name: string
  nominationName: string
  persons: GetAwardsTypeItemsPersons[]
  win: boolean
  year: number
}

export type GetBoxOfficeType = {
  items: GetBoxOfficeTypeItems[]
  total: number
}
export type GetBoxOfficeTypeItems = {
  amount: number
  currencyCode: string
  name: string
  symbol: string
  type: string
}

export type GetCollectionsArg = {
  page: number
  type: CollectionsType
}
export type CollectionsType =
  | 'CATASTROPHE_THEME'
  | 'CLOSES_RELEASES'
  | 'COMICS_THEME'
  | 'FAMILY'
  | 'KIDS_ANIMATION_THEME'
  | 'LOVE_THEME'
  | 'OSKAR_WINNERS_2021'
  | 'TOP_250_MOVIES'
  | 'TOP_250_TV_SHOWS'
  | 'TOP_POPULAR_ALL'
  | 'TOP_POPULAR_MOVIES'
  | 'VAMPIRE_THEME'
  | 'ZOMBIE_THEME'

export type GetCollectionType = {
  items: GetCollectionTypeItems[]
  total: number
  totalPages: number
}
export type GetCollectionTypeItemsCountries = {
  country: string
}
export type GetCollectionTypeItemsGenres = {
  genre: string
}
export type GetCollectionTypeItems = {
  countries: GetCollectionTypeItemsCountries[]
  genres: GetCollectionTypeItemsGenres[]
  kinopoiskId: number
  nameEn: string
  nameOriginal: string
  nameRu: string
  posterUrl: string
  posterUrlPreview: string
  ratingImbd: number
  ratingKinopoisk: number
  type: string
  year: string
}

export type GetFilmsType = {
  completed: boolean
  countries: GetFilmsTypeCountries[]
  coverUrl: string
  description: string
  editorAnnotation: string
  endYear: number
  filmLength: number
  genres: GetFilmsTypeGenres[]
  has3D: boolean
  hasImax: boolean
  imdbId: string
  isTicketsAvailable: boolean
  kinopoiskHDId: string
  kinopoiskId: number
  lastSync: string
  logoUrl: string
  nameEn: string
  nameOriginal: string
  nameRu: string
  posterUrl: string
  posterUrlPreview: string
  productionStatus: string
  ratingAgeLimits: string
  ratingAwait: number
  ratingAwaitCount: number
  ratingFilmCritics: number
  ratingFilmCriticsVoteCount: number
  ratingGoodReview: number
  ratingGoodReviewVoteCount: number
  ratingImdb: number
  ratingImdbVoteCount: number
  ratingKinopoisk: number
  ratingKinopoiskVoteCount: number
  ratingMpaa: string
  ratingRfCritics: number
  ratingRfCriticsVoteCount: number
  reviewsCount: number
  serial: boolean
  shortDescription: string
  shortFilm: boolean
  slogan: string
  startYear: number
  type: string
  webUrl: string
  year: number
}
export type GetFilmsTypeCountries = {
  country: string
}
export type GetFilmsTypeGenres = {
  genre: string
}
export type VideoType = {
  items: VideoTypeItems[]
  total: number
}
export type VideoTypeItems = {
  name: string
  site: string
  url: string
}

export type StaffByIdType = {
  age: number
  birthday: string
  birthplace: string
  death: string
  deathplace: string
  facts: string[]
  films: StaffByIdTypeFilms[]
  growth: string
  hasAwards: number
  nameEn: string
  nameRu: string
  personId: number
  posterUrl: string
  profession: string
  sex: string
  spouses: StaffByIdTypeSpouses[]
  webUrl: string
}
export type StaffByIdTypeSpouses = {
  children: number
  divorced: boolean
  divorcedReason: string
  name: string
  personId: number
  relation: string
  sex: string
  webUrl: string
}
export type StaffByIdTypeFilms = {
  description: string
  filmId: number
  general: boolean
  nameEn: string
  nameRu: string
  professionKey: string
  rating: string
}

export type StaffType = {
  description: string
  nameEn: string
  nameRu: string
  posterUrl: string
  professionKey: string
  professionText: string
  staffId: number
}

export type SimilarsType = {
  items: SimilarsTypeItems[]
  total: number
}
export type SimilarsTypeItems = {
  filmId: number
  nameEn: string
  nameOriginal: string
  nameRu: string
  posterUrl: string
  posterUrlPreview: string
  relationType: string
}

export type SequelsPrequelsType = {
  filmId: number
  nameEn: string
  nameOriginal: string
  nameRu: string
  posterUrl: string
  posterUrlPreview: string
  relationType: string
}

export type SeassonsType = {
  items: SeassonsTypeItems[]
  total: number
}
export type SeassonsTypeItemsEpisodes = {
  episodeNumber: number
  nameEn: string
  nameRu: null | string
  releaseDate: string
  seasonNumber: number
  synopsis: string
}
export type SeassonsTypeItems = {
  episodes: SeassonsTypeItemsEpisodes[]
  number: number
}

export type ReviewsType = {
  items: ReviewsTypeItems[]
  total: number
  totalNegativeReviews: number
  totalNeutralReviews: number
  totalPages: number
  totalPositiveReviews: number
}
export type ReviewsTypeItems = {
  author: string
  date: string
  description: string
  kinopoiskId: number
  negativeRating: number
  positiveRating: number
  title: string
  type: string
}

export type ReleaseArgs = {
  month: number
  page?: number
  year: string
}

export type ReleaseType = {
  page: number
  releases: ReleaseTypeReleases[]
  total: number
}
export type ReleaseTypeReleasesCountries = {
  country: string
}
export type ReleaseTypeReleasesGenres = {
  genre: string
}
export type ReleaseTypeReleases = {
  countries: ReleaseTypeReleasesCountries[]
  duration: number
  expectationsRating: number
  expectationsRatingVoteCount: number
  filmId: number
  genres: ReleaseTypeReleasesGenres[]
  nameEn: string
  nameRu: string
  posterUrl: string
  posterUrlPreview: string
  rating: number
  ratingVoteCount: number
  releaseDate: string
  year: number
}

export type PremierArgs = {
  month: string
  year: number
}
export type PremiersType = {
  items: PremiersTypeItems[]
  total: number
}
export type PremiersTypeItemsCountries = {
  country: string
}
export type PremiersTypeItemsGenres = {
  genre: string
}
export type PremiersTypeItems = {
  countries: PremiersTypeItemsCountries[]
  duration: number
  genres: PremiersTypeItemsGenres[]
  kinopoiskId: number
  nameEn: string
  nameRu: string
  posterUrl: string
  posterUrlPreview: string
  premiereRu: string
  year: number
}

export type PersonArgs = {
  name: string
  page?: number
}
export type PersonType = {
  items: PersonTypeItems[]
  total: number
}
export type PersonTypeItems = {
  kinopoiskId: number
  nameEn: string
  nameRu: string
  posterUrl: string
  sex: string
  webUrl: string
}

export type FullFiltersArgs = {
  countries: number[]
  genres: number[]
  imdbId: string
  keyword: string
  order: string
  page: number
  ratingFrom: number
  ratingTo: number
  type: string
  yearFrom: number
  yearTo: number
}

export type FullFilterType = {
  items: FullFilterTypeItems[]
  total: number
  totalPages: number
}
export type FullFilterTypeItemsCountries = {
  country: string
}
export type FullFilterTypeItemsGenres = {
  genre: string
}
export type FullFilterTypeItems = {
  countries: FullFilterTypeItemsCountries[]
  genres: FullFilterTypeItemsGenres[]
  imdbId: string
  kinopoiskId: number
  nameEn: string
  nameOriginal: string
  nameRu: string
  posterUrl: string
  posterUrlPreview: string
  ratingImdb: number
  ratingKinopoisk: number
  type: string
  year: number
}
export type MediapostType = {
  items: MediapostTypeItems[]
  total: number
  totalPages: number
}
export type MediapostTypeItems = {
  description: string
  imageUrl: string
  kinopoiskId: number
  publishedAt: string
  title: string
  url: string
}
export type VotesType = {
  items: VotesTypeItems[]
  total: number
  totalPages: number
}
export type VotesTypeItemsCountries = {
  country: string
}
export type VotesTypeItemsGenres = {
  genre: string
}
export type VotesTypeItems = {
  countries: VotesTypeItemsCountries[]
  genres: VotesTypeItemsGenres[]
  kinopoiskId: number
  nameEn: string
  nameOriginal: string
  nameRu: string
  posterUrl: string
  posterUrlPreview: string
  ratingImbd: number
  ratingKinopoisk: number
  type: string
  userRating: number
  year: string
}

export type ReviewsArgs = {
  id: string
  order?: string
  page?: number
}
export type KpUsersArgs = {
  id: string
  page?: number
}
export type ImagesArgs = {
  id: string
  page?: number
  type?: string
}

export type ImageType = {
  items: ImageTypeItems[]
  total: number
  totalPages: number
}
export type ImageTypeItems = {
  imageUrl: string
  previewUrl: string
}

export type FilterType = {
  countries: FilterTypeCountries[]
  genres: FilterTypeGenres[]
}
export type FilterTypeGenres = {
  genre: string
  id: number
}
export type FilterTypeCountries = {
  country: string
  id: number
}

export type FactsType = {
  items: FactsTypeItems[]
  total: number
}
export type FactsTypeItems = {
  spoiler: boolean
  text: string
  type: string
}

export type SourcesArg = {
  id: number
  page?: number
}

export type SourcesType = {
  items: SourcesTypeItems[]
  total: number
}
export type SourcesTypeItems = {
  author: string
  description: string
  logoUrl: string
  negativeRating: number
  platform: string
  positiveRating: number
  title: string
  url: string
}
export type DistributionsType = {
  items: DistributionsTypeItems[]
  total: number
}
export type DistributionsTypeItemsCountry = {
  country: string
}
export type DistributionsTypeItemsCompanies = {
  name: string
}
export type DistributionsTypeItems = {
  companies: DistributionsTypeItemsCompanies[]
  country: DistributionsTypeItemsCountry
  date: string
  reRelease: boolean
  subType: string
  type: string
}
