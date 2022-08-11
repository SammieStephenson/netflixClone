import './navbar.css';

export default function Navbar() {
    return <nav className="nav">
        <a herf="/" className="siteName"> Netflix </a>
        <ul>
            <li>
                <a href="/login"> Log In </a>
            </li>
            <li>
                <a href="/profile"> Who is Watching? </a>
            </li>
            <li>
                <a href="/gallery"> Gallery </a>
            </li>
            <li>
                <a href="/moviedesc"> Netflix: The Gray Man </a>
            </li>
        </ul>
    </nav >
}