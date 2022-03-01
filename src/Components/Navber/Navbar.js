import react from 'react'

const Navbar = ()=>{
    return(
        <nav className="navbar borderShadow">
            <div className="link"><a href="#">Profile</a> </div>
            <div className="link"><a href="#">Messages</a></div>
            <div className="link"><a href="#">News</a></div>
            <div className="link"><a href="#">Music</a></div>
            <div className="link"><a href="#">Settings</a></div>
        </nav>

    )
}

export default Navbar