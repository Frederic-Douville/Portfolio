import { useState } from 'react';
import { ReactComponent as GithubIcon } from '../../assets/icones_svg/github-brands.svg';
import { ReactComponent as GlobeIcon } from '../../assets/icones_svg/globe-solid.svg';

function CardDesktop({ datasArray }) {
    const [projectId, setProjectId] = useState(1);

    function printCardDescription(event) {
        var id = event.target.getAttribute('data-id');
        setProjectId(id);
    }
    return (
        <div className="cardDesktop-main d-flex f-d-row j-c-center a-i-flexStart">
            <div className="cardDesktop-cards-ctn d-flex f-d row j-c-flexStart a-i-flexStart">
                {datasArray.map(({ index, id, title, image }) => (
                    <div
                        className="cardDesktop-card d-flex f-d-row j-c-center a-i-center"
                        key={`desktop-${title}-${index}`}
                        data-id={id}
                        onClick={printCardDescription}
                    >
                        <img
                            className="cardDesktop-card-img"
                            src={image}
                            alt={`logo-${title}`}
                            data-id={id}
                        />
                    </div>
                ))}
            </div>

            <div className="cardDesktop-desc-ctn d-flex f-d-column j-c-spaceBetween a-i-center">
                <div className="cardDesktop-desc-title-ctn d-flex f-d-row j-c-spaceBetween a-i-center">
                    <h1 className="cardDesktop-desc-title-h1">
                        {datasArray[projectId - 1].title}
                    </h1>
                    <div></div>
                </div>
                <div>
                    <p>Description: {datasArray[projectId - 1].description}</p>
                </div>
                <div className="cardDesktop-desc-link-ctn d-flex f-d-row j-c-spaceAround a-i-center">
                    <a
                        href={datasArray[projectId - 1].githublink}
                        className="cardDesktop-githublink d-flex a-i-center"
                    >
                        <GithubIcon className="cardDesktop-githublink-icon" />
                        <span className="cardDesktop-githublink-text">
                            Repository
                        </span>
                    </a>
                    {datasArray[projectId - 1].pagelink !== '' ? (
                        <a
                            href={datasArray[projectId - 1].pagelink}
                            className="cardDesktop-pagelink d-flex a-i-center"
                        >
                            <GlobeIcon className="cardDesktop-pagelink-icon" />
                            <span className="cardDesktop-pagelink-text">
                                Visiter le site
                            </span>
                        </a>
                    ) : null}
                </div>
            </div>
        </div>
    );
}

export default CardDesktop;
