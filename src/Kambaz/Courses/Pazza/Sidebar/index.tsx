import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../Pazza.css';

interface Post {
  id: number;
  type: string;
  title: string;
  body: string;
  date: string;
  author?: string;
  url?: string;
  isPinned?: boolean;
}

export default function Sidebar() {
  const { cid } = useParams();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Mock data to match the image
    const mockPosts: Post[] = [
      {
        id: 387,
        type: 'instr',
        title: 'LECTURE VIDEO NOW AVAILABLE',
        body: 'Hi everyone, here\'s a recording of the latest lecture',
        date: '4/4/25',
        isPinned: true
      },
      {
        id: 386,
        type: 'instr',
        title: 'JOSE OH STARTING NOW',
        body: 'https://northeastern.zoom.us/j/96234555...',
        date: '4/9/25',
        isPinned: true
      },
      {
        id: 3,
        type: 'instr',
        title: 'JOSE OH STARTING NOW',
        body: 'https://northeastern.zoom.us/j/96234555...',
        date: '4/9/25',
        isPinned: false
      },
      {
        id: 2,
        type: 'instr',
        title: 'JOSE OH STARTING NOW',
        body: 'https://northeastern.zoom.us/j/96234555...',
        date: '4/9/25',
        isPinned: false
      },
    ];

    setPosts(mockPosts);
  }, []);

  return (
    <div className="pazza-sidebar">
      {posts.filter(post => post.isPinned).length > 0 && (
        <div className="pinned-section">
          <div className="pinned-header">PINNED</div>
          {posts.filter(post => post.isPinned).map((post) => (
            <PostItem key={post.id} post={post} cid={cid} />
          ))}
        </div>
      )}
      <div className="pinned-section">
      <div className={"pinned-header"}>UNPINNED</div>
      {posts.filter(post => !post.isPinned).map((post) => (
        <PostItem key={post.id} post={post} cid={cid} />
      ))}
      </div>
    </div>
  );
}

function PostItem({ post, cid }: { post: Post, cid: string | undefined }) {
  return (
    <Link to={`/Kambaz/Courses/${cid}/Pazza/Posts/${post.id}`} className="post-item">
      <div className="post-meta">
        <span className={`post-type ${post.type}`}>{post.type}</span>
        <span className="post-title">{post.title}</span>
        <span className="post-date">{post.date}</span>
      </div>
      <div className="post-body">{post.body}</div>
    </Link>
  );
}