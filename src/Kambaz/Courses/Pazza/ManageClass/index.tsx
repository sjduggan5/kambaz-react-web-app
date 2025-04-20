/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from 'react-redux';
import ManageClassNavigation from './ManageClassNavigation';
import { useEffect, useState } from 'react';
import {
  addFolder,
  deleteFolder,
  setFolders,
  updateFolder,
} from '../foldersReducer';
import { Button } from 'react-bootstrap';
import '../Pazza.css';
import * as client from '../client';
import { useParams } from 'react-router-dom';
import { FaRegTrashCan } from 'react-icons/fa6';
import { MdEdit } from 'react-icons/md';

export default function ManageClass() {
  const folders = useSelector((state: any) => state.foldersReducer.folders);
  const dispatch = useDispatch();
  const { cid } = useParams();

  const [newFolderName, setNewFolderName] = useState('');

  const [editingFolderId, setEditingFolderId] = useState<string | null>(null);
  const [editingFolderName, setEditingFolderName] = useState('');

  const [selectedFolders, setSelectedFolders] = useState<string[]>([]);

  const fetchFolders = async () => {
    const courseFolders = await client.fetchFoldersForCourse(cid || '');
    dispatch(setFolders(courseFolders));
  };

  useEffect(() => {
    fetchFolders();
  }, [cid]);

  const handleAddFolder = async () => {
    if (!newFolderName.trim()) return;

    const newFolder = {
      course: cid,
      name: newFolderName,
    };
    await client.createFolder(newFolder);
    dispatch(addFolder(newFolder));
    setNewFolderName('');
  };

  const handleStartEditing = (folder: any) => {
    setEditingFolderId(folder._id);
    setEditingFolderName(folder.name);
  };

  const handleSaveEdit = async (folderId: string) => {
    if (!editingFolderName.trim()) return;

    const folderToUpdate = folders.find((f: any) => f._id === folderId);
    if (!folderToUpdate) return;

    await client.updateFolder({
      ...folderToUpdate,
      name: editingFolderName,
    });

    dispatch(
      updateFolder({
        ...folderToUpdate,
        name: editingFolderName,
      })
    );

    setEditingFolderId(null);
    setEditingFolderName('');
  };

  const handleCancelEdit = () => {
    setEditingFolderId(null);
    setEditingFolderName('');
  };

  const handleFolderSelection = (folderId: string, isSelected: boolean) => {
    if (isSelected) {
      setSelectedFolders([...selectedFolders, folderId]);
    } else {
      setSelectedFolders(selectedFolders.filter((id) => id !== folderId));
    }
  };

  const handleDeleteSelected = () => {
    if (selectedFolders.length === 0) return;

    selectedFolders.forEach(async (folderId) => {
      await client.deleteFolder(folderId);
      dispatch(deleteFolder(folderId));
    });

    setSelectedFolders([]);
  };

  return (
    <div>
      <div className="non-sticky-navbar">
        <ManageClassNavigation />
      </div>
      <hr />
      <div className="ps-4">
        <h1>Configure Class Folders</h1>
        <hr />
        <p>
          Folders allow you to keep class content organized. When students and
          instructors add a new post, they will be required to specify at least
          one folder for their post.
        </p>
        <br />
        <div>
          <strong>Create new folders:</strong>
          <p>Add folders that are relevant for your class.</p>

          {/* add folder input field and button */}
          <div className="create-folder-container">
            <input
              type="text"
              value={newFolderName}
              onChange={(e) => setNewFolderName(e.target.value)}
              placeholder="Add a folder(s)"
              className="folder-input"
            />
            <Button className="blue-background" onClick={handleAddFolder}>
              Add Folder
            </Button>
          </div>
        </div>

        {/* table to display folders */}
        <div className="folders-list-container">
          <Button
            className={`delete-selected-button ${selectedFolders.length > 0 ? 'active' : 'disabled'}`}
            onClick={handleDeleteSelected}
            disabled={selectedFolders.length === 0}
          >
            <FaRegTrashCan />
            Delete selected folders
          </Button>

          {folders.length === 0 ? (
            <p>
              <strong>No folders found. Create one to get started!</strong>
            </p>
          ) : (
            <div className="folders-list">
              {folders.map((folder: any) => (
                <div key={folder._id} className="folder-row">
                  {editingFolderId === folder._id ? (
                    // edit mode
                    <div className="folder-edit-container">
                      <div className="folder-selection">
                        <input type="checkbox" disabled />
                        <span className="folder-drag-handle">≡</span>
                        <input
                          type="text"
                          value={editingFolderName}
                          onChange={(e) => setEditingFolderName(e.target.value)}
                          className="folder-edit-input"
                          autoFocus
                        />
                      </div>
                      <div className="folder-edit-actions">
                        <Button
                          className="save-button"
                          onClick={() => handleSaveEdit(folder._id)}
                        >
                          Save
                        </Button>
                        <Button
                          className="cancel-button"
                          onClick={handleCancelEdit}
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    // non-edit mode
                    <>
                      <div className="folder-selection">
                        <input
                          type="checkbox"
                          checked={selectedFolders.includes(folder._id)}
                          onChange={(e) =>
                            handleFolderSelection(folder._id, e.target.checked)
                          }
                        />
                        <span className="folder-drag-handle">≡</span>
                        <span
                          className={`folder-name ${folder.name.includes('hw') ? 'hw-folder' : ''}`}
                        >
                          {folder.name}
                        </span>
                      </div>
                      <div className="folder-actions">
                        <Button
                          className="edit-button"
                          onClick={() => handleStartEditing(folder)}
                        >
                          <MdEdit />
                          Edit
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
