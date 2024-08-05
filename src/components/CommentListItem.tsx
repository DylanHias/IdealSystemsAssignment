import type { Comment } from '../types';

interface CommentListItemProps {
  comment: Comment;
}

const CommentListItem = ({ comment }: CommentListItemProps) => {
  return <li key={comment.id}>{comment.body}</li>;
};

export default CommentListItem;
