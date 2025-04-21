import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
const initialState = {
  allComments: [],
  comments: [],
};
const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setComments: (state, { payload: comments }) => {
      state.comments = comments;
    },
    addComment: (state, { payload: comment }) => {
      const newComment: any = {
        _id: comment._id || uuidv4(),
        author: comment.author,
        authorName: comment.authorName,
        authorType: comment.authorType,
        createDate: new Date(),
        content: comment.content,
        commentType: comment.commentType,
        post: comment.post,
        parentComment: comment.parentComment,
        isResolved: false,
      };
      state.comments = [...state.comments, newComment] as any;
      state.allComments = [...state.allComments, newComment] as any;
    },
    deleteComment: (state, { payload: commentId }) => {
      state.comments = state.comments.filter((c: any) => c._id !== commentId);
      state.allComments = state.allComments.filter((c: any) => c._id !== commentId);
    },
    updateComment: (state, { payload: comment }) => {
      state.comments = state.comments.map((c: any) =>
        c._id === comment._id ? comment : c
      ) as any;
      state.allComments = state.allComments.map((c: any) =>
        c._id === comment._id ? comment : c
      ) as any;
    },
    editComment: (state, { payload: commentId }) => {
      state.comments = state.comments.map((c: any) =>
        c._id === commentId ? { ...c, editing: true } : c
      ) as any;
      state.allComments = state.allComments.map((c: any) =>
        c._id === commentId ? { ...c, editing: true } : c
      ) as any;
    },
    setAllComments: (state, { payload: allComments }) => {
      state.allComments = allComments;
    },
  },
});
export const {
  setComments,
  addComment,
  deleteComment,
  updateComment,
  editComment,
  setAllComments,
} = commentsSlice.actions;
export default commentsSlice.reducer;
