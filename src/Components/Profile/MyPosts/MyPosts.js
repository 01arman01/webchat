import react from "react"
import s from './MyPosts.module.css'
const MyPosts = ()=>{
     return(
                 <div className={s.mayposts}>
                     <input type="text" className={s.newPost }/>
                     <button type='button' className={s.add_button}>Add</button>
                 </div>
     )
}


export default  MyPosts
