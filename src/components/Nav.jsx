import { Link } from "react-router-dom";
import Navbar from './UI/Navbar.jsx'

export default function Nav() {
    // The Navbar UI component will render each of the Link elements in the links prop
    return (
        <Navbar
            links={[
                <Link key={1} className="nav-link text-light" to="/">
                    Home
                </Link>,
                <Link key={3} className="nav-link text-light" to="/portfolio">
                    Portfolio
                </Link>,
                <Link key={4} className="nav-link text-light" to="/contact">
                    Contact
                </Link>,
                <Link key={5} className="nav-link text-light" to="/resume">
                    Resume
                </Link>
            ]}
        />
    );
}
