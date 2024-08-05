import { useQuery } from '@tanstack/react-query';
import type { Comment } from '../types';

interface useFetchPostCommentsProps {
  postId: number;
}

export const useFetchPostComments = ({ postId }: useFetchPostCommentsProps) => {
  return useQuery({
    queryKey: ['postComments'],
    queryFn: async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
      );
      const data = await res.json();
      return data as Comment[];
    },
  });
};
