import { Link } from 'react-router-dom';
import { ReactComponent as LinkedInIcon } from '../../assets/icones_svg/linkedin-brands.svg';
import { ReactComponent as GitHubIcon } from '../../assets/icones_svg/github-brands.svg';
import { ReactComponent as InstagramIcon } from '../../assets/icones_svg/instagram-brands.svg';
import { ReactComponent as Tree1 } from '../../assets/icones_svg/tree1.svg';
import { ReactComponent as Tree2 } from '../../assets/icones_svg/tree2.svg';
import { ReactComponent as Tree4 } from '../../assets/icones_svg/tree4.svg';
import { ReactComponent as Tree5 } from '../../assets/icones_svg/tree5.svg';
import { ReactComponent as Tree6 } from '../../assets/icones_svg/tree6.svg';

function Footer() {
    function scrollToHeader() {
        document.getElementById('header').scrollIntoView(true);
    }
    return (
        <div className="footer-ctn d-flex f-d-column j-c-center a-i-center">
            <ul className="footer-nav-list d-flex f-d-row a-i-center j-c-spaceBetween">
                <li className="footer-nav-elem-link">
                    <Link
                        to="/cv"
                        className="footer-nav-link"
                        onClick={scrollToHeader}
                    >
                        CV
                    </Link>
                </li>
                <li className="footer-nav-elem-link">
                    <Link
                        to="/credits"
                        className="footer-nav-link"
                        onClick={scrollToHeader}
                    >
                        Crédits
                    </Link>
                </li>
                <li className="footer-nav-elem">
                    <a
                        href="https://github.com/Frederic-Douville"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <GitHubIcon className="footer-nav-icon" />
                    </a>
                </li>
                <li className="footer-nav-elem">
                    <a
                        href="https://www.linkedin.com/in/fr%C3%A9d%C3%A9ric-douville-949217172/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <LinkedInIcon className="footer-nav-icon" />
                    </a>
                </li>
                <li className="footer-nav-elem">
                    <a
                        href="https://www.instagram.com/fredoo_art/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <InstagramIcon className="footer-nav-icon" />
                    </a>
                </li>
            </ul>

            <span className="footer-text">&#169; 2022 Frédéric Douville</span>
            <Tree1 className="tree tree-1" />
            <Tree2 className="tree tree-2" />
            <Tree4 className="tree tree-4" />
            <Tree5 className="tree tree-5" />
            <Tree6 className="tree tree-6" />
        </div>
    );
}

export default Footer;
