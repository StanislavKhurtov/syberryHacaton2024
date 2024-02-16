import {
  ApiKeyType,
  DistributionsType,
  FactsType,
  FilterType,
  FullFilterType,
  FullFiltersArgs,
  GetAwardsType,
  GetBoxOfficeType,
  GetCollectionType,
  GetCollectionsArg,
  GetFilmsType,
  GetSearchArgs,
  ImageType,
  ImagesArgs,
  KpUsersArgs,
  MediapostType,
  PersonArgs,
  PersonType,
  PremierArgs,
  PremiersType,
  ReleaseArgs,
  ReleaseType,
  ReviewsArgs,
  ReviewsType,
  SearchByKeyboardsType,
  SeassonsType,
  SequelsPrequelsType,
  SimilarsType,
  SourcesArg,
  SourcesType,
  StaffByIdType,
  StaffType,
  VideoType,
  VotesType,
} from '@/app/services/baseApi/baseApi.types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://kinopoiskapiunofficial.tech',
    prepareHeaders: headers => {
      headers.append('X-API-KEY', '311f6ed2-2da0-4a4e-bda9-3c31df66674a')
    },
  }),
  endpoints: builder => {
    return {
      getApiKeys: builder.query<ApiKeyType, { apiKey: string }>({
        query: ({ apiKey }) => `/api/v1/api_keys/${apiKey}`,
      }),
      getAwards: builder.query<GetAwardsType, { id: string }>({
        query: ({ id }) => `/api/v2.2/films/${id}/awards`,
      }),
      getBoxOffice: builder.query<GetBoxOfficeType, { id: string }>({
        query: ({ id }) => `/api/v2.2/films/${id}/box_office`,
      }),
      getCollections: builder.query<GetCollectionType, GetCollectionsArg>({
        query: params => {
          return {
            params: params ?? {},
            url: `/api/v2.2/films/collections`,
          }
        },
      }),
      getDistributions: builder.query<DistributionsType, { id: string }>({
        query: ({ id }) => `/api/v2.2/films/${id}/distributions`,
      }),
      getExternalSources: builder.query<SourcesType, SourcesArg>({
        query: params => {
          return {
            params: params ?? {},
            url: `/api/v2.2/films/${params.id}/external_sources`,
          }
        },
      }),
      getFacts: builder.query<FactsType, { id: string }>({
        query: ({ id }) => `/api/v2.2/films/${id}/facts`,
      }),
      getFilms: builder.query<GetFilmsType, { id: string }>({
        query: ({ id }) => `/api/v2.2/films/${id}`,
      }),
      getFilters: builder.query<FilterType, void>({
        query: () => `/api/v2.2/films/filters`,
      }),
      getFullFilters: builder.query<FullFilterType, FullFiltersArgs>({
        query: params => {
          return {
            params: params ?? {},
            url: `/api/v2.2/films`,
          }
        },
      }),
      getImages: builder.query<ImageType, ImagesArgs>({
        query: params => {
          return {
            params: params ?? {},
            url: `/api/v2.2/films/${params.id}/images`,
          }
        },
      }),
      getKpUsers: builder.query<VotesType, KpUsersArgs>({
        query: params => {
          return {
            params: params ?? {},
            url: `/api/v1/kp_users/${params.id}/votes`,
          }
        },
      }),
      getMediaPosts: builder.query<MediapostType, { page: number }>({
        query: params => {
          return {
            params: params ?? {},
            url: `/api/v1/media_posts`,
          }
        },
      }),
      getPersons: builder.query<PersonType, PersonArgs>({
        query: params => {
          return {
            params: params ?? {},
            url: `/api/v1/persons`,
          }
        },
      }),
      getPremieres: builder.query<PremiersType, PremierArgs>({
        query: params => {
          return {
            params: params ?? {},
            url: `/api/v2.2/films/premieres?year=2024&month=JANUARY`,
          }
        },
      }),
      getReleases: builder.query<ReleaseType, ReleaseArgs>({
        query: params => {
          return {
            params: params ?? {},
            url: `/api/v2.1/films/releases`,
          }
        },
      }),
      getReviews: builder.query<ReviewsType, ReviewsArgs>({
        query: params => {
          return {
            params: params ?? {},
            url: `/api/v2.2/films/${params.id}/reviews`,
          }
        },
      }),
      getSearchByKeyword: builder.query<SearchByKeyboardsType, GetSearchArgs>({
        query: params => {
          return {
            params: params ?? {},
            url: `/api/v2.1/films/search-by-keyword`,
          }
        },
      }),
      getSeasons: builder.query<SeassonsType, { id: string }>({
        query: ({ id }) => `/api/v2.2/films/${id}/seasons`,
      }),
      getSequels: builder.query<SequelsPrequelsType[], { id: string }>({
        query: ({ id }) => `/api/v2.1/films/${id}/sequels_and_prequels`,
      }),
      getSimilars: builder.query<SimilarsType, { id: string }>({
        query: ({ id }) => `/api/v2.2/films/${id}/similars`,
      }),
      getStaff: builder.query<StaffType[], { filmId: number }>({
        query: params => {
          return {
            params: params ?? {},
            url: `/api/v1/staff`,
          }
        },
      }),
      getStaffById: builder.query<StaffByIdType, { id: string }>({
        query: ({ id }) => {
          return {
            url: `/api/v1/staff/${id}`,
          }
        },
      }),
      getVideos: builder.query<VideoType, { id: string }>({
        query: ({ id }) => `/api/v2.2/films/${id}/videos`,
      }),
    }
  },
  reducerPath: 'baseApi',
})

export const {
  //useDistributionsQuery,
  //useGetApiKeysQuery,
  //useGetAwardsQuery,
  //useGetBoxOfficeQuery,
  useGetCollectionsQuery,
  //useGetExternalSourcesQuery,
  //useGetFactsQuery,
  useGetFilmsQuery,
  //useGetFiltersQuery,
  //useGetImagesQuery,
  //useGetKpUsersQuery,
  //useGetMediaPostsQuery,
  //useGetFullFiltersQuery,
  //useGetPersonQuery,
  //useGetPremieresQuery,
  //useGetReleasesQuery,
  //useGetReviewsQuery,
  useGetSearchByKeywordQuery,
  //useGetSeasonsQuery,
  //useGetSimilarsQuery,
  //useGetStaffByIdQuery,
  //useGetStaffQuery,
  //useGetVideosQuery,
} = baseApi
