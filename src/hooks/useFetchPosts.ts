import { useQuery } from '@tanstack/react-query';
import type { Post } from '../types';

export const useFetchPosts = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      return data as Post[];
    },
  });
};
