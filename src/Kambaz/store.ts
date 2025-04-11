import { configureStore } from '@reduxjs/toolkit';
import modulesReducer from './Courses/Modules/reducer';
import accountReducer from './Account/reducer';
import assignmentsReducer from './Courses/Assignments/reducer';
import commentsReducer from './Courses/Pazza/commentsReducer';
import foldersReducer from './Courses/Pazza/foldersReducer';
import postsReducer from './Courses/Pazza/postsReducer';
const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    assignmentsReducer,
    commentsReducer,
    foldersReducer,
    postsReducer,
  },
});
export default store;
