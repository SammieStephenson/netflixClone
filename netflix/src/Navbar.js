import { Link, useMatch, useResolvedPath } from "react-router-dom";
export default function Navbar() {


    return <nav className="nav">
        <Link to="/" className="site-title">Netflix
        </Link>
        <ul>

            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/login">Login</CustomLink>
            <CustomLink to="/Gallery">Gallery</CustomLink>
            <CustomLink to="/movie1">Movie</CustomLink>



        </ul>
    </nav>
}
function CustomLink({ to, children, ...props }) {
    const resolvePath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvePath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to}{...props}>{children}
            </Link>
        </li>
    )
}
