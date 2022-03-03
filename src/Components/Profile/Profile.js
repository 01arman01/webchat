import react from 'react'
import s from './Profile.module.css'
import classNames from "classnames";

const Profile = ()=>{
    return(
        <main className={classNames(s.content,s.borderShadow)}>
            <div className={classNames(s.oblojka, s.orderShadow)}><img src="https://t4.ftcdn.net/jpg/03/66/59/67/360_F_366596725_I9U9zCz42vwwErk5E1aWJdc9Vft9Ru1Z.jpg"/></div>

            <div className={s.user}>
                <div className={classNames(s.avatar,s.borderShadow)}>
                    <img src="https://img1.akspic.ru/previews/9/9/6/1/5/151699/151699-svet-glaz-zdanie-lico-haker-360x640.jpg"/>
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
            <div>
                My posts
                <div>
                    new posts
                </div>
            </div>
            <div>
                <div>post 1</div>
                <div>post 2</div>
            </div>

        </main>
    )
}

export  default  Profile;