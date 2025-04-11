import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
const initialState = {
  posts: [],
};
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, { payload: posts }) => {
      state.posts = posts;
    },
    addPost: (state, { payload: post }) => {
      const newPost: any = {
        _id: uuidv4(),
        author: post.author,
        authorName: post.authorName,
        authorType: post.authorType,
        views: 1,
        createDate: new Date(),
        course: post.course,
        folder: post.folder,
        title: post.title,
        content: post.content,
        visibility: post.visibility,
        visibleToUserIds: post.visibleToUserIds || [],
        status: post.status,
        postType: post.postType,
      };
      state.posts = [...state.posts, newPost] as any;
    },
    deletePost: (state, { payload: postId }) => {
      state.posts = state.posts.filter((m: any) => m._id !== postId);
    },
    updatePost: (state, { payload: post }) => {
      state.posts = state.posts.map((m: any) =>
        m._id === post._id ? post : m
      ) as any;
    },
    editPost: (state, { payload: postId }) => {
      state.posts = state.posts.map((m: any) =>
        m._id === postId ? { ...m, editing: true } : m
      ) as any;
    },
  },
});
export const { addPost, deletePost, updatePost, editPost, setPosts } =
  postsSlice.actions;
export default postsSlice.reducer;
