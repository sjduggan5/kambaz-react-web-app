import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
const initialState = {
  folders: [],
};
const foldersSlice = createSlice({
  name: 'folders',
  initialState,
  reducers: {
    setFolders: (state, { payload: folders }) => {
      state.folders = folders;
    },
    addFolder: (state, { payload: folder }) => {
      const newFolder: any = {
        _id: uuidv4(),
        name: folder.name,
        course: folder.course,
      };
      state.folders = [...state.folders, newFolder] as any;
    },
    deleteFolder: (state, { payload: folderId }) => {
      state.folders = state.folders.filter((m: any) => m._id !== folderId);
    },
    updateFolder: (state, { payload: folder }) => {
      state.folders = state.folders.map((m: any) =>
        m._id === folder._id ? folder : m
      ) as any;
    },
    editFolder: (state, { payload: folderId }) => {
      state.folders = state.folders.map((m: any) =>
        m._id === folderId ? { ...m, editing: true } : m
      ) as any;
    },
  },
});
export const { addFolder, deleteFolder, updateFolder, editFolder, setFolders } =
  foldersSlice.actions;
export default foldersSlice.reducer;
