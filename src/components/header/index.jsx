import { Link } from 'react-router-dom';
import { ReactComponent as LogoHeader } from '../../assets/icones_svg/logo_fd.svg';
import { ReactComponent as LinkedInIcon } from '../../assets/icones_svg/linkedin-brands.svg';
import { ReactComponent as GitHubIcon } from '../../assets/icones_svg/github-brands.svg';
import { ReactComponent as InstagramIcon } from '../../assets/icones_svg/instagram-brands.svg';
import { ReactComponent as ThreeBars } from '../../assets/icones_svg/three_bars.svg';
import { useState } from 'react';

function Header() {
    const [dropIsOpen, setDropIsOpen] = useState(false);
    window.addEventListener('resize', checkWindowSize);

    function checkWindowSize() {
        const width = window.innerWidth;
        if (width >= 1023) {
            setDropIsOpen(false);
        }
    }

    function openOrCloseDropDownMenu() {
        return setDropIsOpen(!dropIsOpen);
    }

    function closeDropDownMenu() {
        return setDropIsOpen(false);
    }

    return (
        <div
            className="header-main d-flex f-d-row j-c-center a-i-center"
            id="header"
        >
            <div className="header-ctn d-flex f-d-row j-c-spaceBetween a-i-center">
                <a href="https://Frederic-Douville.github.io/Portfolio">
                    <div className="header-logo-ctn d-flex j-c-center a-i-center">
                        <LogoHeader className="header-logo-icon" />
                    </div>
                </a>
                <nav className="nav-ctn d-flex f-d-row a-i-center j-c-spaceBetween">
                    <ul className="nav-list nav-list-desktop d-flex f-d-row a-i-center j-c-spaceBetween">
                        <li className="nav-elem-desktop">
                            <Link to="/" className="nav-link">
                                Accueil
                            </Link>
                        </li>
                        <li className="nav-elem-desktop">
                            <Link to="/about" className="nav-link">
                                A propos de moi
                            </Link>
                        </li>
                        <li className="nav-elem-desktop">
                            <Link to="/projects" className="nav-link">
                                Projets
                            </Link>
                        </li>
                        <li className="nav-elem-desktop">
                            <Link to="/contact" className="nav-link">
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <ul className="nav-list nav-list-icon d-flex f-d-row a-i-center j-c-spaceBetween">
                        <li className="nav-elem-icon">
                            <a
                                href="https://github.com/Frederic-Douville"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <GitHubIcon className="nav-icon" />
                            </a>
                        </li>
                        <li className="nav-elem-icon">
                            <a
                                href="https://www.linkedin.com/in/fr%C3%A9d%C3%A9ric-douville-949217172/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <LinkedInIcon className="nav-icon" />
                            </a>
                        </li>
                        <li className="nav-elem-icon">
                            <a
                                href="https://www.instagram.com/fredoo_art/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <InstagramIcon className="nav-icon" />
                            </a>
                        </li>
                    </ul>
                    <div
                        className="nav-three-bars-ctn"
                        onClick={openOrCloseDropDownMenu}
                    >
                        <ThreeBars className="nav-three-bars-icon" />
                    </div>
                </nav>
                {dropIsOpen ? (
                    <div className="header-dropdown-menu-ctn d-flex a-i-center j-c-flexStart">
                        <nav className="nav-ctn-mobile d-flex f-d-column a-i-center j-c-flexStart">
                            <ul className="nav-list nav-list-mobile d-flex f-d-column a-i-center j-c-center">
                                <li className="nav-elem-mobile">
                                    <Link
                                        to="/"
                                        className="nav-link nav-link-mobile"
                                        onClick={closeDropDownMenu}
                                    >
                                        Accueil
                                    </Link>
                                </li>
                                <li className="nav-elem-mobile">
                                    <Link
                                        to="/about"
                                        className="nav-link nav-link-mobile"
                                        onClick={closeDropDownMenu}
                                    >
                                        A propos de moi
                                    </Link>
                                </li>
                                <li className="nav-elem-mobile">
                                    <Link
                                        to="/projects"
                                        className="nav-link nav-link-mobile"
                                        onClick={closeDropDownMenu}
                                    >
                                        Projets
                                    </Link>
                                </li>
                                <li className="nav-elem-mobile">
                                    <Link
                                        to="/contact"
                                        className="nav-link nav-link-mobile"
                                        onClick={closeDropDownMenu}
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default Header;
