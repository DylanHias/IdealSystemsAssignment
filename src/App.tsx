import './App.css';
import { useFetchPosts } from './hooks/useFetchPosts';
import ErrorDisplay from './screens/ErrorDisplay';
import Loading from './components/Loading';
import PostsDisplay from './screens/PostsDisplay';

function App() {
  const { isError, isSuccess, data: posts = [] } = useFetchPosts();

  if (isError) return <ErrorDisplay />;

  if (isSuccess)
    return (
      <div className="Container">
        <PostsDisplay posts={posts} />
      </div>
    );

  return <Loading />;
}

export default App;
