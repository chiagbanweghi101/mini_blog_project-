import Post from './Post';
import type { Post as PostType } from '../types/post';
import { withLogger } from '../hoc/withLogger';

const SAMPLE_POSTS: PostType[] = [
  {
    id: 1,
    title: 'What are props in React?',
    author: 'Moses Peter',
    content:
      'Props are inputs passed from a parent component to a child.\nThey let you reuse one component with different data.\nEach post card on this page is the same component with different props.',
    // Recent date so the "New!" badge appears (within last 24 hours)
    datePosted: new Date().toISOString(),
  },
  {
    id: 2,
    title: 'What is TypeScript?',
    author: 'Jordan Lee',
    content:
      'TypeScript adds types on top of JavaScript.\nYou describe the shape of your data with interfaces or types.\nMistakes are caught in the editor before the app runs.',
    datePosted: '2026-09-10',
  },
  {
    id: 3,
    title: 'Functional vs class components',
    author: 'Moses Peter',
    content:
      'A functional component is a function that returns JSX.\nA class component uses an ES6 class and lifecycle methods.\nFunctional components are simpler and work well with hooks.',
    datePosted: '2026-09-05',
  },
];

function PostList() {
  return (
    <section style={{ maxWidth: '720px', margin: '0 auto', padding: '1.5rem' }}>
      <h2 style={{ marginTop: 0, color: '#6b21a8' }}>Latest Insights</h2>
      {SAMPLE_POSTS.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </section>
  );
}

// HOC applied: logs mount/unmount of PostList to the console
export default withLogger(PostList, 'PostList');
