import react from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = () => {
  return (
    <div className={s.mayposts}>
      <div>
        <input type="text" className={s.newPost} />
        <button type="button" className={s.add_button}>
          Add
        </button>
      </div>

      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default MyPosts;
