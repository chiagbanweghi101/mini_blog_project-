import { memo, type CSSProperties } from 'react';
import type { Post as PostType } from '../types/post';
import {
  formatDisplayDate,
  getContentPreview,
  isPostedWithinLast24Hours,
} from '../utils/dateHelpers';
import '../styles/Post.css';

interface PostProps {
  post: PostType;
  featuredAuthor?: string;
}

/**
 * Functional component wrapped with React.memo to skip re-renders
 * when the post props have not changed.
 */
function Post({ post, featuredAuthor = 'Moses Peter' }: PostProps) {
  const isFeatured = post.author === featuredAuthor;
  const isNew = isPostedWithinLast24Hours(post.datePosted);

  // Inline style used as a second styling method (alongside external CSS)
  const authorStyle: CSSProperties = {
    fontWeight: isFeatured ? 700 : 500,
    color: isFeatured ? '#ea580c' : '#6b7280', // orange when featured
  };

  return (
    <article
      className={`post-card${isFeatured ? ' post-card--featured' : ''}`}
    >
      <div className="post-header">
        <h2 className="post-title">{post.title}</h2>
        {isNew && <span className="new-badge">New!</span>}
      </div>
      <p className="post-meta">
        By <span style={authorStyle}>{post.author}</span>
        {' · '}
        {formatDisplayDate(post.datePosted)}
      </p>
      <p className="post-preview">{getContentPreview(post.content)}</p>
    </article>
  );
}

export default memo(Post);
