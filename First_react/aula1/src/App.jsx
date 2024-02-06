import { Post } from "./Post";
import { Header } from "./componets/Header";
import './styles.css';

export function App() {
  return (
    <div>
      <Header/>
      <Post
        author="Bruno Bendel"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate nesciunt fugit suscipit repudiandae tempore, voluptatem ut sunt molestias unde vitae quod recusandae animi rem assumenda eum quis sed nulla aliquam."
      />
      <Post
        author="Brendon"
        content="Um novo post"
      />
    </div>
  );
}
