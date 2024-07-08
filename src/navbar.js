import { Link } from "react-router-dom";


const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Mad Man Blogs</h1>
            <div className="links">
                <Link to="/">home</Link>
                <Link to="/create"> New blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;