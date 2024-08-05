import type { Post } from '../types';

interface PostListItemProps {
  post: Post;
  onClickCallback: (id: number) => void;
}

function PostListItem({ post, onClickCallback }: PostListItemProps) {
  return (
    <div className="ListItem">
      <li key={post.id}>{post.title}</li>
      <button onClick={() => onClickCallback(post.id)}>View</button>
    </div>
  );
}

export default PostListItem;
