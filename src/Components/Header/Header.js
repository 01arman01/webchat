import rect from 'react';
import classNames from "classnames";
import s from './Header.module.css'
const Header = ()=>{
    return(
    <header className={classNames(s.header, s.borderShadow)}>
        <img className={s.logo} src="https://seeklogo.com/images/S/svg-logo-C2C6DE140E-seeklogo.com.png" />
    </header>
    )
}

export default  Header;