import {ICourse} from "../../models/models";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CourseState {
  courses: ICourse[]
  coursesContainer: ICourse[]
  count: number
  loading: boolean
  error: string
}

const initialState: CourseState = {
  courses: [],
  coursesContainer: [],
  count: 0,
  loading: false,
  error: ""
}

interface CoursePayload {
  courses: ICourse[]
  count: number
}

export const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    courseFetching(state) {
      state.loading = true
    },
    courseFetchingSuccess(state, action: PayloadAction<CoursePayload>) {
      state.error = ""
      state.courses = action.payload.courses
      state.coursesContainer = action.payload.courses
      state.count = action.payload.count
      state.loading = false
    },
    courseFetchingError(state, action: PayloadAction<Error>) {
      state.loading = false
      state.error = action.payload.message
    },
  }
})

export default courseSlice.reducer