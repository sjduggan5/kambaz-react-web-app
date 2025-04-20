import { useSelector } from 'react-redux';
import PostEditor from './PostEditor';
import DOMPurify from 'dompurify';
import ActionsMenu from './ActionsMenu';

export default function PostBody({ post }: { post: any }) {
  const { folders } = useSelector((state: any) => state.foldersReducer);
  const { isEditing } = useSelector((state: any) => state.postsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const canSeeDropdown =
    currentUser?.role === 'INSTRUCTOR' || post?.author === currentUser._id;

  return (
    <div className="ms-2 mb-3 me-2">
      {isEditing === 'POST' ? (
        <PostEditor editLocation="POST" />
      ) : (
        <div>
          <div className="d-flex flex-row justify-content-between">
            <div className="fs-2 fw-bold">{post?.title}</div>

            {canSeeDropdown && (
              <ActionsMenu location="POST" type="POST" entityId={post?._id} />
            )}
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(post?.content),
            }}
          />
          <div className="d-flex flex-row align-items-center mt-3">
            {folders
              .filter((f: any) => post?.folders.includes(f._id))
              .map((folder: any) => (
                <div className="bg-primary me-2 p-1 rounded-3 text-white fs-6">
                  {folder.name}
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
