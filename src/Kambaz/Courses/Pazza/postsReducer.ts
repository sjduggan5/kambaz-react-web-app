import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
const initialState = {
  posts: [],
  isEditing: null,
  folderFilter: undefined,
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
        _id: post._id || uuidv4(),
        author: post.author,
        authorName: post.authorName,
        authorType: post.authorType,
        views: 1,
        createDate: new Date(),
        course: post.course,
        folders: post.folders,
        title: post.title,
        content: post.content,
        visibility: post.visibility,
        visibleToUserIds: post.visibleToUserIds || [],
        status: post.status,
        postType: post.postType,
        isPinned: post.isPinned,
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
    setIsEditing: (state, { payload: editLocation }) => {
      state.isEditing = editLocation;
    },
    setFolderFilter: (state, { payload: folderFilter }) => {
      state.folderFilter = folderFilter;
    },
  },
});
export const {
  addPost,
  deletePost,
  updatePost,
  editPost,
  setPosts,
  setIsEditing,
  setFolderFilter,
} = postsSlice.actions;
export default postsSlice.reducer;
