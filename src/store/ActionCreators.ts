import {AppDispatch} from "./index";
import {IAuth} from "../models/models";
import {courseSlice} from "./slices/CourseSlice";
import {authSlice} from "./slices/AuthSlice";
import {courseDetailSlice} from "./slices/CourseDetailSlice";
import {checkLogin, createCommentRequest, getCourseInfo, getCourses} from "../api/mock";

export const fetchCourses = (page = 1, count = 20) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(courseSlice.actions.courseFetching())
      const response = await getCourses({count, page})
      dispatch(courseSlice.actions.courseFetchingSuccess({
        courses: response.results,
        count: response.count
      }))
    } catch (e) {
      dispatch(courseSlice.actions.courseFetchingError(e as Error))
    }
  }
}

export const fetchCourse = (id: string) => {
  console.log(id)
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(courseDetailSlice.actions.courseFetching())
      const response = await getCourseInfo();
      console.log("RESPONSE", response)
      dispatch(courseDetailSlice.actions.courseFetchingSuccess(response))
    } catch (e) {
      dispatch(courseDetailSlice.actions.courseFetchingError(e as Error))
    }
  }
}

export const createComment = (courseId: number, comment: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      await createCommentRequest({id: courseId, comment})
      dispatch(courseDetailSlice.actions.addComment({
        comment,
        id: courseId
      }))
    } catch (e) {
      console.error(e)
    }
  }
}

export const login = (data: IAuth) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await checkLogin(data)
      dispatch(authSlice.actions.loginSuccess({
        access: response.access,
        username: data.username
      }))
    } catch (e) {
      console.error("Error Login", e)
    }
  }
}