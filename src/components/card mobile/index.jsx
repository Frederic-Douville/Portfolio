import { ReactComponent as GithubIcon } from '../../assets/icones_svg/github-brands.svg';
import { ReactComponent as GlobeIcon } from '../../assets/icones_svg/globe-solid.svg';

function CardMobile({ title, image, githubLink, pageLink }) {
    return (
        <div className="cardMobile-ctn d-flex f-d-column j-c-center a-i-center">
            <div className="cardMobile-img-ctn d-flex j-c-center a-i-center">
                <img src={image} alt={`logo-${title}`} />
            </div>
            <div className="cardMobile-link-ctn d-flex f-d-column a-i-center j-c-spaceAround">
                <a
                    href={githubLink}
                    className="cardMobile-githublink d-flex a-i-center "
                >
                    <GithubIcon className="cardMobile-githublink-icon" />
                    <span className="cardMobile-githublink-text">
                        Repository
                    </span>
                </a>
                <a
                    href={pageLink}
                    className="cardMobile-pagelink d-flex a-i-center"
                >
                    <GlobeIcon className="cardMobile-pagelink-icon" />
                    <span className="cardMobile-pagelink-text">
                        Visiter le site
                    </span>
                </a>
            </div>
        </div>
    );
}

export default CardMobile;
