import react from 'react'
import s from './Profile.module.css'
import classNames from "classnames";
import MyPosts from './MyPosts/MyPosts';
const Profile = ()=>{
    return(
        <main className={classNames(s.content,s.borderShadow)}>
            <div className={classNames(s.oblojka, s.orderShadow)}><img src="https://t4.ftcdn.net/jpg/03/66/59/67/360_F_366596725_I9U9zCz42vwwErk5E1aWJdc9Vft9Ru1Z.jpg"/></div>

            <div className={s.user}>
                <div className={classNames(s.avatar,s.borderShadow)}>
                    <img src="https://png.pngtree.com/png-clipart/20210725/original/pngtree-light-effect-hacker-game-icon-png-image_6566754.jpg"/>
                </div>
                <div className={s.user_info}>
                    <h1>Arman Z. Papyan</h1>
                    <div className={s.user_info_content}>
                        <p>Date fo Birth: 22Mart</p>
                        <p>City:Erevan</p>
                        <p> Eduction</p>
                    </div>
                </div>
            </div>
             <MyPosts/>

        </main>
    )
}

export  default  Profile;