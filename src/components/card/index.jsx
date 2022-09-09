import { ReactComponent as GithubIcon } from '../../assets/icones_svg/github-brands.svg';
import { ReactComponent as GlobeIcon } from '../../assets/icones_svg/globe-solid.svg';

function Card({ title, image, githubLink, pageLink }) {
    return (
        <div className="card-ctn d-flex f-d-column j-c-center a-i-center">
            <div className="card-img-ctn d-flex j-c-center a-i-center">
                <img src={image} alt={`logo-${title}`} />
            </div>
            <div className="card-link-ctn d-flex a-i-center j-c-spaceAround">
                <a
                    href={githubLink}
                    className="card-githublink d-flex a-i-center "
                >
                    <GithubIcon className="card-githublink-icon" />
                    <span className="card-githublink-text">Repository</span>
                </a>
                <a href={pageLink} className="card-pagelink d-flex a-i-center">
                    <GlobeIcon className="card-pagelink-icon" />
                    <span className="card-pagelink-text">Visiter le site</span>
                </a>
            </div>
        </div>
    );
}

export default Card;
