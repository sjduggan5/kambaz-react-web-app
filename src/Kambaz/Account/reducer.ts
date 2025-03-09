import { createSlice } from '@reduxjs/toolkit';
import { enrollments } from '../Database';
import { v4 as uuidv4 } from 'uuid';
const initialState = {
  currentUser: null,
  enrollments: enrollments,
};
const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
      if (action.payload) {
        state.enrollments = enrollments.filter(
          (e) => e.user === action.payload?._id
        );
      }
    },
    enrollUser: (state, { payload: courseId }) => {
      state.enrollments.push({
        _id: uuidv4(),
        user: state.currentUser?._id,
        course: courseId,
      });
    },
    unenrollUser: (state, { payload: courseId }) => {
      state.enrollments = state.enrollments.filter(
        (e) => e.course === courseId
      );
    },
  },
});
export const { setCurrentUser, enrollUser, unenrollUser } =
  accountSlice.actions;
export default accountSlice.reducer;
