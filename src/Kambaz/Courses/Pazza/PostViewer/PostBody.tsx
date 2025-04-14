import { useSelector } from 'react-redux';

export default function PostBody({ post }: { post: any }) {
  const { folders } = useSelector((state: any) => state.foldersReducer);
  return (
    <div className="ms-2 mb-3">
      <div className="fs-2 fw-bold">{post.title}</div>
      <div className="fs-6">{post.content}</div>
      <div className="d-flex flex-row align-items-center mt-3">
        {folders
          .filter((f) => post.folders.includes(f._id))
          .map((folder) => (
            <div className="bg-primary me-2 p-1 rounded-3 text-white fs-6">
              {folder.name}
            </div>
          ))}
      </div>
    </div>
  );
}
