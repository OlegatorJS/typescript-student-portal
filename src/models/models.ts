export interface ICourse {
  id: number
  name: string
  description: string
}

export interface ICourseDetail<T> {
  id: number
  name: string
  description: string
  course_topics: T[]
}

export interface ITopic {
  id: number
  name: string
  date: string
  type: string
  status: string
  description: string
  comment: string
}

export interface ServerResponse<T> {
  count: number
  next: number | null
  previous: number | null
  results: T[]
}

export interface IComment {
  id: number
  comment: string
}

export interface IAuth {
  password: string
  username: string
}

export interface IAuthResponse {
  access: string
  refresh: string
}

export interface IFilter {
  name: ICourseType
  date: ICourseCountry
  region: ICourseRegion
}

export interface ICourseRequest {
  count: number
  page: number
}

export type ICourseType = string
export type ICourseCountry = string
export type ICourseRegion = string