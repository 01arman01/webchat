import react from 'react'
import classNames from "classnames";
import s from './Navbar.module.css'
const Navbar = ()=>{
    return(
        <nav className={classNames(s.navbar, s.borderShadow)}>
            <div className={s.link}><a href="#">Profile</a> </div>
            <div className={s.link}><a href="#">Messages</a></div>
            <div className={s.link}><a href="#">News</a></div>
            <div className={s.link}><a href="#">Music</a></div>
            <div className={s.link}><a href="#">Settings</a></div>
        </nav>

    )
}

export default Navbar