import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useStore, useSelector } from 'react-redux';
import { selectDropDownMenu } from '../../utils/selector';
import {
    dropDownMenuClosing,
    dropDownMenuChanging,
    unfocusPage,
} from '../../feature/dropDownMenu.js';
import { ReactComponent as Wave } from '../../assets/icones_svg/wave-header.svg';
import { ReactComponent as Cloud1 } from '../../assets/icones_svg/cloud1.svg';
import { ReactComponent as Cloud2 } from '../../assets/icones_svg/cloud2.svg';
import { ReactComponent as Cloud3 } from '../../assets/icones_svg/cloud3.svg';
import { ReactComponent as Cloud4 } from '../../assets/icones_svg/cloud4.svg';
import { ReactComponent as Cloud5 } from '../../assets/icones_svg/cloud5.svg';
import { ReactComponent as Cloud6 } from '../../assets/icones_svg/cloud6.svg';
import { ReactComponent as LogoHeader } from '../../assets/icones_svg/logo_fd.svg';
import { ReactComponent as LinkedInIcon } from '../../assets/icones_svg/linkedin-brands.svg';
import { ReactComponent as GitHubIcon } from '../../assets/icones_svg/github-brands.svg';
import { ReactComponent as InstagramIcon } from '../../assets/icones_svg/instagram-brands.svg';
import { ReactComponent as ThreeBars } from '../../assets/icones_svg/three_bars.svg';
import { ReactComponent as BrushLine } from '../../assets/icones_svg/brush line thin.svg';

function Header() {
    const location = useLocation().pathname;
    const store = useStore();
    const dropDownMenuState = useSelector(selectDropDownMenu).dropDownMenuState;
    const headerLinks = [
        { index: 0, title: 'Accueil', route: '/' },
        { index: 1, title: 'À propos de moi', route: '/about' },
        { index: 2, title: 'Projets', route: '/projects' },
        { index: 3, title: 'Contact', route: '/contact' },
    ];
    const headerIcons = [
        {
            index: 0,
            icon: <GitHubIcon className="nav-icon" />,
            route: 'https://github.com/Frederic-Douville',
        },
        {
            index: 1,
            icon: <LinkedInIcon className="nav-icon" />,
            route: 'https://www.linkedin.com/in/fr%C3%A9d%C3%A9ric-douville-949217172/',
        },
        {
            index: 2,
            icon: <InstagramIcon className="nav-icon" />,
            route: 'https://www.instagram.com/fredoo_art/',
        },
    ];

    useEffect(() => {
        unfocusPage(store);
    });

    window.addEventListener('resize', checkWindowSize);
    function checkWindowSize() {
        const width = window.innerWidth;
        if (width >= 1023) {
            store.dispatch(dropDownMenuClosing());
        }
    }

    function openOrCloseDropDownMenu() {
        return store.dispatch(dropDownMenuChanging());
    }

    function closeDropDownMenu() {
        return store.dispatch(dropDownMenuClosing());
    }

    return (
        <div className="header-main" id="header">
            <Wave className="wave" />
            <div className="header-ctn">
                <Cloud1 className="cloud cloud-1" />
                <Cloud2 className="cloud cloud-2" />
                <Cloud3 className="cloud cloud-3" />
                <Cloud4 className="cloud cloud-4" />
                <Cloud5 className="cloud cloud-5" />
                <Cloud6 className="cloud cloud-6" />
                <a
                    href="https://Frederic-Douville.github.io/Portfolio"
                    className="header-logo-link"
                >
                    <LogoHeader className="header-logo-icon" />
                </a>
                <nav className="nav-ctn">
                    <ul className="nav-list nav-list-desktop">
                        {headerLinks.map(({ index, title, route }) => (
                            <li
                                className={`nav-elem-desktop ${
                                    location === route ? 'nav-elem-select' : ''
                                }`}
                                key={`header-${title}-${index}`}
                            >
                                <Link
                                    to={route}
                                    className={`nav-link ${
                                        location === route
                                            ? 'nav-link-select'
                                            : ''
                                    }`}
                                >
                                    {title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <ul className="nav-list nav-list-icon">
                        {headerIcons.map(({ icon, route, index }) => (
                            <li
                                className="nav-elem-icon"
                                key={`header-icon-${index}`}
                            >
                                <a
                                    href={route}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {icon}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div
                        className="nav-three-bars-ctn"
                        onClick={openOrCloseDropDownMenu}
                    >
                        <ThreeBars className="nav-three-bars-icon" />
                    </div>
                </nav>
                {dropDownMenuState && (
                    <div className="header-dropdown-menu-ctn">
                        <nav className="nav-ctn-mobile">
                            <ul className="nav-list nav-list-mobile">
                                {headerLinks.map(({ index, title, route }) => (
                                    <span className="nav-elem-mobile-span">
                                        <li
                                            className="nav-elem-mobile"
                                            key={`header-mobile-${title}-${index}`}
                                        >
                                            <Link
                                                to={route}
                                                className="nav-link nav-link-mobile"
                                            >
                                                {title}
                                            </Link>
                                        </li>
                                        <BrushLine className="nav-elem-brushline" />
                                    </span>
                                ))}

                                <li className="nav-elem-mobile-icons">
                                    <ul className="nav-list nav-list-icon-mobile">
                                        {headerIcons.map(
                                            ({ index, icon, route }) => (
                                                <li
                                                    className="nav-elem-icon"
                                                    key={`header-mobile-icon-${index}`}
                                                >
                                                    <a
                                                        href={route}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        onClick={
                                                            closeDropDownMenu
                                                        }
                                                    >
                                                        {icon}
                                                    </a>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </li>
                                <BrushLine className="nav-elem-brushline" />
                            </ul>
                        </nav>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Header;
