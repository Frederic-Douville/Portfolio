import { Link } from 'react-router-dom';
function Header() {
    return (
        <div className="header-ctn d-flex f-d-row j-c-spaceAround a-i-center">
            <Link to="/" className="header-link">
                Accueil
            </Link>
            <Link to="/about" className="header-link">
                A propos
            </Link>
            <Link to="/projects" className="header-link">
                Projets
            </Link>
            <Link to="/contact" className="header-link">
                Contact
            </Link>
        </div>
    );
}

export default Header;
