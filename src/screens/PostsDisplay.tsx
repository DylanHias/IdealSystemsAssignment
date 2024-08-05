import { useEffect, useState } from 'react';
import PostDetails from '../components/PostDetails';
import PostsList from '../components/PostsList';
import type { Post } from '../types';

interface PostsDisplayProps {
  posts: Post[];
}

const PostsDisplay = ({ posts }: PostsDisplayProps) => {
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [isViewActive, setIsViewActive] = useState<boolean>(false);
  const [selectedPost, setSelectedPost] = useState<Post | undefined>(undefined);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    setFilteredPosts(posts);
  }, [posts]);

  const handleOnView = (id: number) => {
    setIsViewActive(true);
    setSearchValue('');
    setFilteredPosts(posts);

    const selectedPost = filteredPosts.find((post) => post.id === id);
    setSelectedPost(selectedPost);
  };

  const filterPosts = (searchTerm: string) => {
    const filteredPosts = posts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredPosts(filteredPosts);
  };

  return isViewActive && selectedPost ? (
    <PostDetails post={selectedPost} setIsViewActive={setIsViewActive} />
  ) : (
    <PostsList
      posts={filteredPosts}
      onClickCallback={handleOnView}
      filterPosts={filterPosts}
      setSearchValue={setSearchValue}
      searchValue={searchValue}
    />
  );
};
export default PostsDisplay;
