import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
        <h2>Sozzles</h2>
        <p>We lost the page lol</p>
        <Link to="/">Back Home?</Link>
        </div>
    );
}
 
export default NotFound;