import { useState } from 'react';
import { ReactComponent as GithubIcon } from '../../assets/icones_svg/github-brands.svg';
import { ReactComponent as GlobeIcon } from '../../assets/icones_svg/globe-solid.svg';
import PrintDrawings from '../print-drawings';

function CardDesktop({ datasArray }) {
    const [projectId, setProjectId] = useState(1);

    function printCardDescription(event) {
        var id = event.target.getAttribute('data-id');
        const descCtn = document.getElementById('project-desc');
        descCtn.classList.remove('desc-animation');
        void descCtn.offsetWidth;
        descCtn.classList.add('desc-animation');
        setProjectId(id);
    }
    /**essayer avec setTimeout(() => descCtn.classList.add('desc-animation'),0) et enlever void descCtn.offsetWidth */
    return (
        <div className="cardDesktop-ctn d-flex f-d-row j-c-center a-i-flexStart">
            <div className="cardDesktop-cards-ctn ">
                {datasArray.map(({ index, id, title, image }) => (
                    <div
                        className="cardDesktop-card  d-flex f-d-row j-c-center a-i-center"
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
            <div
                className="cardDesktop-desc-ctn desc-animation d-flex f-d-column j-c-spaceBetween a-i-center"
                id={`project-desc`}
            >
                <div className="cardDesktop-desc-title-ctn d-flex f-d-column j-c-spaceBetween a-i-center">
                    <h1 className="cardDesktop-desc-title-h1">
                        {datasArray[projectId - 1].title}
                    </h1>
                </div>
                <PrintDrawings
                    srcList={datasArray[projectId - 1].languages}
                    classNameDiv={
                        'cardDesktop-desc-languagesCtn d-flex f-d-row j-c-center a-i-center'
                    }
                />
                <div className="cardDesktop-desc-pitch-ctn">
                    <p className="cardDesktop-desc-pitch-p">
                        <span>Description :</span>{' '}
                        {datasArray[projectId - 1].description}
                    </p>
                </div>
                <div className="cardDesktop-desc-link-ctn d-flex f-d-row j-c-spaceAround a-i-center">
                    <a
                        href={datasArray[projectId - 1].githublink}
                        target="_blank"
                        rel="noreferrer"
                        className="cardDesktop-link cardDesktop-githublink d-flex a-i-center"
                    >
                        <GithubIcon className="cardDesktop-link-icon cardDesktop-githublink-icon" />
                        <span className="cardDesktop-link-text">
                            Repository
                        </span>
                    </a>
                    {datasArray[projectId - 1].pagelink !== '' ? (
                        <a
                            href={datasArray[projectId - 1].pagelink}
                            target="_blank"
                            rel="noreferrer"
                            className="cardDesktop-link cardDesktop-pagelink d-flex a-i-center"
                        >
                            <GlobeIcon className="cardDesktop-link-icon cardDesktop-pagelink-icon" />
                            <span className="cardDesktop-link-text">
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
