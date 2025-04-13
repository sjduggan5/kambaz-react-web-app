import PostIcon from './PostIcon';

export default function PostHeader({ post }: { post: any }) {
  return (
    <div className="pt-1 ps-1 pe-1 d-flex flex-row align-items-center">
      <PostIcon postType={post.postType} postStatus={post.status} />
      <div className="fs-6 fw-bold ms-2">{`${post.postType.toLowerCase()} @${post._id.toLowerCase()}`}</div>
      <div className="p-1 bg-dark text-light rounded-3 fw-bolder ms-auto me-3">{`${post.views} views`}</div>
    </div>
  );
}
