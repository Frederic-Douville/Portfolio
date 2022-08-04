import { Link } from 'react-router-dom';
function Header() {
    return (
        <div>
            <Link to="/">Acceuil</Link>
            <Link to="/about">A propos</Link>
            <Link to="/projects">Projets</Link>
            <Link to="/contact">Contact</Link>
        </div>
    );
}

export default Header;
