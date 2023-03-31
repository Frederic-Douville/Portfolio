import { useState } from 'react';
import { ReactComponent as GithubIcon } from '../../assets/icones_svg/github-brands.svg';
import { ReactComponent as GlobeIcon } from '../../assets/icones_svg/globe-solid.svg';
import OCIcon from '../../assets/logos/OpenC-icon.png';
import SPIcon from '../../assets/logos/SP-icon.png';
import PrintDrawings from '../print-drawings';

function CardDesktop({ datasArray }) {
    const [projectId, setProjectId] = useState(0);

    function printCardDescription(event) {
        var id = event.target.getAttribute('data-id');
        const descCtn = document.getElementById('project-desc');
        descCtn.classList.remove('desc-animation');
        setTimeout(() => descCtn.classList.add('desc-animation'), 0);
        setProjectId(id);
    }

    return (
        <div className="cardDesktop-ctn">
            <div className="cardDesktop-cards-ctn ">
                {datasArray.map((elem, index) => (
                    <div
                        className="cardDesktop-card"
                        key={`desktop-${elem.title}-${index}`}
                        data-id={index}
                        onClick={printCardDescription}
                    >
                        <img
                            className={`cardDesktop-card-img cardDesktop-card-img-${elem.title}`}
                            src={elem.image}
                            alt={`logo-${elem.title}`}
                            data-id={index}
                        />
                        {elem.project === 'OC' ? (
                            <img
                                className="cardDesktop-card-icon"
                                src={OCIcon}
                                alt="OpenClassrooms Icon"
                                data-id={index}
                            />
                        ) : (
                            <img
                                className="cardDesktop-card-icon"
                                src={SPIcon}
                                alt="Side project Icon"
                                data-id={index}
                            />
                        )}
                    </div>
                ))}
            </div>
            <div
                className="cardDesktop-desc-ctn desc-animation"
                id={`project-desc`}
            >
                <div className="cardDesktop-desc-title-ctn">
                    <h1 className="cardDesktop-desc-title-h1">
                        {datasArray[projectId].title}
                    </h1>
                </div>
                <PrintDrawings
                    srcList={datasArray[projectId].languages}
                    classNameDiv={'cardDesktop-desc-languagesCtn'}
                />
                <div className="cardDesktop-desc-pitch-ctn">
                    <p className="cardDesktop-desc-pitch-p">
                        <span>Description :</span>{' '}
                        {datasArray[projectId].description}
                    </p>
                </div>
                <div className="cardDesktop-desc-link-ctn">
                    <a
                        href={datasArray[projectId].githublink}
                        target="_blank"
                        rel="noreferrer"
                        className="cardDesktop-link cardDesktop-githublink"
                    >
                        <GithubIcon className="cardDesktop-link-icon cardDesktop-githublink-icon" />
                        <span className="cardDesktop-link-text">
                            Repository
                        </span>
                    </a>
                    {datasArray[projectId].pagelink !== '' ? (
                        <a
                            href={datasArray[projectId].pagelink}
                            target="_blank"
                            rel="noreferrer"
                            className="cardDesktop-link cardDesktop-pagelink"
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
