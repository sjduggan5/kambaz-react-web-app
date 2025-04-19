import { useParams } from 'react-router';
import PostItem from './PostItem';
import { useState } from 'react';
import { GoTriangleDown, GoTriangleRight } from 'react-icons/go';

export default function PostCategory({
  posts,
  category,
}: {
  posts: any[];
  category: string;
}) {
  const [showCategory, setShowCategory] = useState(true);
  const { cid } = useParams();

  return (
    <div className="pinned-section">
      <div className="d-flex flex-row justify-content-between align-items-center pinned-header">
        <div>{category}</div>
        {showCategory ? (
          <GoTriangleDown onClick={() => setShowCategory(false)} />
        ) : (
          <GoTriangleRight onClick={() => setShowCategory(true)} />
        )}
      </div>
      {showCategory &&
        posts
          .sort(
            (postA, postB) =>
              new Date(postB.createDate).getTime() -
              new Date(postA.createDate).getTime()
          )
          .map((post) => <PostItem key={post._id} post={post} cid={cid} />)}
    </div>
  );
}
