import PostListItem from './PostListItem';
import type { Post } from '../types';
import Input from './Input';

interface PostsListProps {
  posts: Post[];
  onClickCallback: (id: number) => void;
  filterPosts: (searchTerm: string) => void;
  setSearchValue: (value: string) => void;
  searchValue: string;
}

function PostsList({
  posts,
  onClickCallback,
  filterPosts,
  setSearchValue,
  searchValue,
}: PostsListProps) {
  return (
    <div>
      <Input
        onChangeCallback={filterPosts}
        setSearchValue={setSearchValue}
        searchValue={searchValue}
      />

      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        <ul>
          {posts.map((post, index) => {
            return (
              <PostListItem
                key={index}
                post={post}
                onClickCallback={onClickCallback}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default PostsList;
