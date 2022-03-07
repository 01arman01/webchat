import react from "react";
import s from "./Post.module.css";
const Post = () => {
  return (
    <div className={s.post}>
      <div>
        <img
          src="https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg"
          className={s.post_ava}
        />
      </div>
      <div>post 1</div>
    </div>
  );
};
export default Post;
