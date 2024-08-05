import type { Comment } from '../types';
import CommentListItem from './CommentListItem';

interface CommentsListProps {
  comments: Comment[];
}

const CommentsList = ({ comments }: CommentsListProps) => {
  return (
    <ul>
      {comments.map((comment, index) => {
        return <CommentListItem key={index} comment={comment} />;
      })}
    </ul>
  );
};

export default CommentsList;
