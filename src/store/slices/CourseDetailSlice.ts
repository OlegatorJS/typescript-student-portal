import {IComment, ICourseDetail, ITopic} from "../../models/models";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CourseDetailState {
  course: ICourseDetail<ITopic>
  loading: boolean
  error: string
}

const initialState: CourseDetailState = {
  course: {
    id: 0,
    name: "",
    description: "",
    course_topics: [],
  },
  loading: false,
  error: ""
}

export const courseDetailSlice = createSlice({
  name: "courseDetail",
  initialState,
  reducers: {
    courseFetching(state) {
      state.loading = true
    },
    courseFetchingSuccess(state, action: PayloadAction<ICourseDetail<ITopic>>) {
      state.loading = false
      state.error = ""
      state.course = action.payload
    },
    courseFetchingError(state, action: PayloadAction<Error>) {
      state.loading = false
      state.error = action.payload.message
    },
    addComment(state, action: PayloadAction<IComment>) {
      state.loading = false
      state.course.course_topics.map(({id, ...items})=> {
        return id === action.payload.id
          ? ({
            ...items,
            comment: action.payload.comment
          })
          : ({
            ...items
          })
          }
      )
    }
  }
})

export default courseDetailSlice.reducer