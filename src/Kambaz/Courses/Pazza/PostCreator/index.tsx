import { useState } from 'react';
import { Form } from 'react-bootstrap';
import '../Pazza.css';
import DefaultEditor from 'react-simple-wysiwyg';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import * as client from '../client';
import { addPost } from '../postsReducer';

export default function PostCreator() {
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { folders } = useSelector((state: any) => state.foldersReducer);
  const [post, setPost] = useState({
    postType: 'QUESTION',
    visibility: 'PUBLIC',
    folders: [],
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const newPost = {
      ...post,
      author: currentUser._id,
      authorName: `${currentUser.firstName} ${currentUser.lastName}`,
      authorType: currentUser.role === 'STUDENT' ? 'STUDENT' : 'INSTRUCTOR',
      createDate: new Date(),
      views: 1,
      status: 'UNANSWERED',
      course: cid,
      isPinned: false,
    };

    const createdPost = await client.createPost(newPost);
    dispatch(addPost(createdPost));
    navigate(`/Kambaz/Courses/${cid}/Pazza/Posts/${createdPost._id}`);
  };

  const getTooltip = () => {
    const failures = [];
    if (!post.title) {
      failures.push('Summary');
    }
    if (!post.content) {
      failures.push('Post Body');
    }
    if (post.folders.length === 0) {
      failures.push('Folders (min. 1)');
    }
    return `The following fields are required: ${failures.join(', ')}`;
  };

  return (
    <div className="d-flex flex-column align-items-stretch h-100">
      <div className="ps-3">
        <Form.Label className="fw-bold me-2">Post Type:</Form.Label>
        <Form.Check
          inline
          type="radio"
          label={'QUESTION'}
          checked={post.postType === 'QUESTION'}
          onChange={() => setPost({ ...post, postType: 'QUESTION' })}
        />
        <Form.Check
          inline
          type="radio"
          label={'NOTE'}
          checked={post.postType === 'NOTE'}
          onChange={() => setPost({ ...post, postType: 'NOTE' })}
        />
      </div>
      <div className="post-bottom ps-3 pe-3 pt-2 pb-3 flex-fill flex-grow-1">
        <Form.Label className="mb-0 fw-bold" htmlFor="summary">
          Summary
        </Form.Label>
        <Form.Control
          className="mb-2"
          id="summary"
          value={post?.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
        <br />
        <Form.Label className="fw-bold me-2">Visible to:</Form.Label>
        <Form.Check
          inline
          type="radio"
          label={'Entire Class'}
          checked={post.visibility === 'PUBLIC'}
          onChange={() =>
            setPost({ ...post, visibility: 'PUBLIC', visibleToUserIds: [] })
          }
        />
        <Form.Check
          inline
          type="radio"
          label={'Individual Student(s) / Instructor(s)'}
          checked={post.visibility === 'PRIVATE'}
          onChange={() => setPost({ ...post, visibility: 'PRIVATE' })}
        />
        {post.visibility === 'PRIVATE' && (
          <div>
            <Form.Control
              type="text"
              placeholder={"User ID's..."}
              value={post.visibleToUserIds && post.visibleToUserIds.join(', ')}
              onChange={(e) =>
                setPost({
                  ...post,
                  visibleToUserIds: e.target.value.split(', '),
                  visibility: e.target.value === '' ? 'PUBLIC' : 'PRIVATE',
                })
              }
            />
            <Form.Label className="fst-italic">
              (Comma separated User ID's)
            </Form.Label>
          </div>
        )}
        <DefaultEditor
          value={post?.content}
          onChange={(e) => setPost({ ...post, content: e.target.value })}
        />
        <Form.Label className="fw-bold me-2">Select Folder(s)</Form.Label>
        {folders.map((folder) => (
          <Form.Check
            inline
            label={folder.name}
            checked={post.folders.includes(folder._id)}
            onChange={() => {
              if (post.folders.includes(folder._id)) {
                setPost({
                  ...post,
                  folders: post.folders.filter((f) => f !== folder._id),
                });
              } else {
                setPost({
                  ...post,
                  folders: post.folders.concat(folder._id),
                });
              }
            }}
          />
        ))}
        <div className="d-flex flex-row align-items-center">
          <div
            className="m-0"
            data-bs-toggle="tooltip"
            title={
              post.folders.length === 0 || !post.title || !post.content
                ? getTooltip()
                : undefined
            }
          >
            <button
              className="btn btn-primary btn-sm mt-2 me-2"
              onClick={handleSubmit}
              disabled={
                post.folders.length === 0 || !post.title || !post.content
              }
            >
              {`Post my ${post.postType.toLowerCase()}`}
            </button>
          </div>
          <button className="btn btn-secondary btn-sm mt-2">{`Cancel`}</button>
        </div>
      </div>
    </div>
  );
}
