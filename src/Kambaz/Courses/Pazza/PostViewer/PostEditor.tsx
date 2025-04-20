import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DefaultEditor } from 'react-simple-wysiwyg';
import { setIsEditing, updatePost } from '../postsReducer';
import { useParams } from 'react-router-dom';
import * as client from '../client';
import { addComment, updateComment } from '../commentsReducer';
import { Form } from 'react-bootstrap';

export default function PostEditor({ editLocation }: { editLocation: string }) {
  const editDetails = editLocation.split(':');
  const editArea = editDetails[0];
  const relatedComment = editDetails[1] || undefined;
  const { postId } = useParams();
  const { posts, isEditing } = useSelector((state: any) => state.postsReducer);
  const { comments } = useSelector((state: any) => state.commentsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { folders } = useSelector((state: any) => state.foldersReducer);
  const [post, setPost] = useState(posts.find((p: any) => p._id === postId));
  const instructorAnswer = comments?.find(
    (c: any) => c.authorType === 'INSTRUCTOR' && c.commentType === 'ANSWER'
  );
  const studentAnswer = comments?.find(
    (c: any) => c.authorType === 'STUDENT' && c.commentType === 'ANSWER'
  );

  function getExistingContent() {
    if (editArea === 'POST') {
      return post.content;
    } else if (editArea === 'STUDENT') {
      return studentAnswer?.content;
    } else if (editArea === 'INSTRUCTOR') {
      return instructorAnswer?.content;
    } else if (editArea === 'DISCUSSION-EDIT') {
      return comments.find((c: any) => c._id === relatedComment).content;
    } else {
      return undefined;
    }
  }
  const existingContent = getExistingContent();
  const [html, setHtml] = useState(existingContent);
  const dispatch = useDispatch();

  function onChange(e: any) {
    setHtml(e.target.value);
  }

  function addCurrentUser(post: any) {
    if (!post.visibleToUserIds.includes(currentUser._id)) {
      return {
        ...post,
        visibleToUserIds: [...post.visibleToUserIds, currentUser._id],
      };
    }
    return post;
  }

  function handleClick() {
    dispatch(setIsEditing(editLocation));
  }

  let buttonText;

  if (!editLocation.includes('DISCUSSION')) {
    buttonText = 'Click to start off the wiki answer';
  } else if (relatedComment) {
    buttonText = 'Reply to this followup discussion';
  } else {
    buttonText = 'Compose a new followup discussion';
  }

  if (isEditing === null || editLocation !== isEditing) {
    return (
      <button
        className="btn btn-light btn-sm mb-2 w-100 text-start"
        onClick={handleClick}
      >
        {buttonText}
      </button>
    );
  }

  const getTooltip = () => {
    const failures = [];
    if (!post.title) {
      failures.push('Summary');
    }
    if (!html) {
      failures.push('Post Body');
    }
    if (post.folders.length === 0) {
      failures.push('Folders (min. 1)');
    }
    return `The following fields are required: ${failures.join(', ')}`;
  };

  const handleSubmit = async () => {
    if (
      (editArea === 'STUDENT' && studentAnswer) ||
      (editArea === 'INSTRUCTOR' && instructorAnswer)
    ) {
      const updatedComment = {
        ...(editArea === 'STUDENT' ? studentAnswer : instructorAnswer),
        content: html,
      };
      await client.updateComment(updatedComment);
      dispatch(updateComment(updatedComment));
      dispatch(setIsEditing(null));
      return;
    } else if (editArea === 'DISCUSSION-EDIT') {
      const existingComment = comments.find(
        (c: any) => c._id === relatedComment
      );
      const updatedComment = { ...existingComment, content: html };
      await client.updateComment(updatedComment);
      dispatch(updateComment(updatedComment));
      dispatch(setIsEditing(null));
      return;
    } else if (editArea === 'POST') {
      const updatedPost = addCurrentUser({ ...post, content: html });
      await client.updatePost(updatedPost);
      setPost(updatedPost);
      dispatch(updatePost(updatedPost));
      dispatch(setIsEditing(null));
      return;
    }

    const newComment = {
      author: currentUser._id,
      authorName: `${currentUser.firstName} ${currentUser.lastName}`,
      authorType: currentUser.role === 'STUDENT' ? 'STUDENT' : 'INSTRUCTOR',
      createDate: new Date(),
      content: html,
      post: postId,
      commentType: '',
      parentComment: undefined as string | undefined,
      isResolved: undefined as boolean | undefined,
    };
    if (editArea === 'DISCUSSION-NEW') {
      newComment.commentType = 'COMMENT';
      newComment.parentComment = relatedComment;
      newComment.isResolved = false;
    } else {
      newComment.commentType = 'ANSWER';
      if (post.status === 'UNANSWERED') {
        await client.updatePost({ ...post, status: 'ANSWERED' });
        setPost({ ...post, status: 'ANSWERED' });
        dispatch(updatePost({ ...post, status: 'ANSWERED' }));
      }
    }

    const createdComment = await client.createComment(newComment);
    dispatch(addComment(createdComment));
    dispatch(setIsEditing(null));
  };

  return (
    <div>
      {editArea === 'POST' && (
        <Form>
          <Form.Label className="mb-0" htmlFor="summary" />
          <Form.Control
            className="mb-2"
            id="summary"
            value={post?.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
          />
        </Form>
      )}
      <DefaultEditor value={html} onChange={onChange} />
      {editArea === 'POST' && (
        <Form className="m-2">
          <Form.Label className="fw-bold me-2">Select Folder(s)</Form.Label>
          {folders.map((folder: any) => (
            <Form.Check
              inline
              label={folder.name}
              checked={post.folders.includes(folder._id)}
              onChange={() => {
                if (post.folders.includes(folder._id)) {
                  setPost({
                    ...post,
                    folders: post.folders.filter((f: any) => f !== folder._id),
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
          <br />
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
                value={post.visibleToUserIds.join(', ')}
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
        </Form>
      )}
      <div className="d-flex flex-row align-items-center">
        <div
          className="m-0"
          data-bs-toggle="tooltip"
          title={
            editArea === 'POST' &&
            (post.folders.length === 0 || !post.title || !html)
              ? getTooltip()
              : undefined
          }
        >
          <button
            className="btn btn-primary btn-sm mt-2 mb-2"
            onClick={handleSubmit}
            disabled={
              editArea === 'POST' &&
              (post.folders.length === 0 || !post.title || !html)
            }
          >
            Submit
          </button>
        </div>
        <button
          className="btn btn-secondary btn-sm ms-2 mt-2 mb-2"
          onClick={() => dispatch(setIsEditing(null))}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
