import * as actionTypes from "./action-types";

export const success = response => ({ type: actionTypes.SET_COURSE, response });
export const loadingCourses = () => ({ type: actionTypes.LOADING });
export const successGetMyCourses = response => ({
  type: actionTypes.SET_MY_COURSES,
  response
});
