import { useFetchPostComments } from '../hooks/useFetchPostComments';
import ErrorDisplay from '../screens/ErrorDisplay';
import type { Post } from '../types';
import CommentsList from './CommentsList';
import Loading from './Loading';

interface PostDetailsProps {
  post: Post;
  setIsViewActive: (e: boolean) => void;
}

const PostDetails = ({ post, setIsViewActive }: PostDetailsProps) => {
  const {
    isError,
    isSuccess,
    data: comments = [],
  } = useFetchPostComments({ postId: post.id });

  if (isError) return <ErrorDisplay />;

  if (isSuccess)
    return (
      <div>
        <button onClick={() => setIsViewActive(false)}>Close</button>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <h2>Comments</h2>
        <CommentsList comments={comments} />
      </div>
    );

  return <Loading />;
};

export default PostDetails;
