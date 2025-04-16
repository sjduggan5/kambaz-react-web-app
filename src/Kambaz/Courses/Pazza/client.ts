import axios from 'axios';
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const POSTS_API = `${REMOTE_SERVER}/api/posts`;
const FOLDERS_API = `${REMOTE_SERVER}/api/folders`;
const COMMENTS_API = `${REMOTE_SERVER}/api/comments`;
const axiosWithCredentials = axios.create({ withCredentials: true });

export const fetchAllPostsForUserAndCourse = async (userId: string, courseId: string) => {
  const { data } = await axiosWithCredentials.get(
    `${POSTS_API}/user/${userId}/course/${courseId}`
  );
  return data;
};

export const fetchCommentsForPost = async (postId: string) => {
  const response = await axiosWithCredentials.get(
    `${COMMENTS_API}/post/${postId}`
  );
  return response.data;
};

export const fetchFoldersForCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.get(
    `${FOLDERS_API}/course/${courseId}`
  );
  return response.data;
};

export const deletePost = async (id: string) => {
  const { data } = await axiosWithCredentials.delete(`${POSTS_API}/${id}`);
  return data;
};

export const deleteComment = async (id: string) => {
  const { data } = await axiosWithCredentials.delete(`${COMMENTS_API}/${id}`);
  return data;
};

export const deleteFolder = async (id: string) => {
  const { data } = await axiosWithCredentials.delete(`${FOLDERS_API}/${id}`);
  return data;
};

export const updatePost = async (post: any) => {
  const { data } = await axiosWithCredentials.put(
    `${POSTS_API}/${post._id}`,
    post
  );
  return data;
};

export const updateComment = async (comment: any) => {
  const { data } = await axiosWithCredentials.put(
    `${COMMENTS_API}/${comment._id}`,
    comment
  );
  return data;
};

export const updateFolder = async (folder: any) => {
  const { data } = await axiosWithCredentials.put(
    `${FOLDERS_API}/${folder._id}`,
    folder
  );
  return data;
};

export const createPost = async (post: any) => {
  const { data } = await axiosWithCredentials.post(POSTS_API, post);
  return data;
};

export const createComment = async (comment: any) => {
  const { data } = await axiosWithCredentials.post(COMMENTS_API, comment);
  return data;
};

export const createFolder = async (folder: any) => {
  const { data } = await axiosWithCredentials.post(COMMENTS_API, folder);
  return data;
};
