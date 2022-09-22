import { ReactComponent as GithubIcon } from '../../assets/icones_svg/github-brands.svg';
import { ReactComponent as GlobeIcon } from '../../assets/icones_svg/globe-solid.svg';

function CardMobile({ datasArray }) {
    return (
        <div className="cardMobile-main-ctn d-flex f-d-column a-i-center j-c-flexStart">
            {datasArray.map(
                ({
                    index,
                    title,
                    image,
                    description,
                    githublink,
                    pagelink,
                }) => (
                    <div
                        key={`mobile-${title}-${index}`}
                        className="cardMobile-ctn d-flex f-d-column j-c-spaceAround a-i-center"
                    >
                        <div className="cardMobile-img-ctn d-flex j-c-center a-i-center">
                            <img src={image} alt={`logo-${title}`} />
                        </div>
                        <p className="cardMobile-desc">{description}</p>
                        <div className="cardMobile-link-ctn d-flex f-d-column a-i-center j-c-spaceAround">
                            <a
                                href={githublink}
                                target="_blank"
                                rel="noreferrer"
                                className="cardMobile-link cardMobile-githublink d-flex a-i-center "
                            >
                                <GithubIcon className="cardMobile-link-icon cardMobile-githublink-icon" />
                                <span className="cardMobile-link-text">
                                    Repository
                                </span>
                            </a>
                            {pagelink !== '' ? (
                                <a
                                    href={pagelink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="cardMobile-link cardMobile-pagelink d-flex a-i-center"
                                >
                                    <GlobeIcon className="cardMobile-link-icon cardMobile-pagelink-icon" />
                                    <span className="cardMobile-link-text">
                                        Visiter le site
                                    </span>
                                </a>
                            ) : null}
                        </div>
                    </div>
                )
            )}
        </div>
    );
}

export default CardMobile;
