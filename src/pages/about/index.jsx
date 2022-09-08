import { useState } from 'react';
import PrintDrawings from '../../components/print-drawings';
import { ReactComponent as Plus } from '../../assets/icones_svg/plus-solid.svg';
import { ReactComponent as Minus } from '../../assets/icones_svg/minus-solid.svg';
import drawingsOne from '../../datas/drawingsOne';
import drawingsTwo from '../../datas/drawingsTwo';
import drawingsThree from '../../datas/drawingsThree';
import { useHref } from 'react-router';

function About() {
    const [storyOne, setStoryOne] = useState(false);
    const [storyTwo, setStoryTwo] = useState(false);
    const [storyThree, setStoryThree] = useState(false);
    const [windowSizeMobile, setWindowSizeMobile] = useState(false);
    window.addEventListener('resize', checkWindowSize);

    function checkWindowSize() {
        const width = window.innerWidth;
        return width >= 1023
            ? setWindowSizeMobile(false)
            : setWindowSizeMobile(true);
    }

    function openStoryOne() {
        setStoryOne(!storyOne);
        setStoryTwo(false);
        setStoryThree(false);
    }

    function openStoryTwo() {
        setStoryOne(false);
        setStoryTwo(!storyTwo);
        setStoryThree(false);
    }

    function openStoryThree() {
        setStoryOne(false);
        setStoryTwo(false);
        setStoryThree(!storyThree);
    }

    return (
        <div className="page about-ctn d-flex f-d-row j-c-center a-i-center">
            <div className="about-stories-ctn d-flex f-d-column j-c-flexStart a-i-flexStart">
                <div className="about-line"></div>
                <div className="about-story-ctn d-flex f-d-column j-c-center a-i-flexStart">
                    <div
                        className="about-story-ctn-title d-flex f-d-row j-c-flexStart a-i-center"
                        onClick={openStoryOne}
                    >
                        {storyOne ? (
                            <Minus className="about-story-icon" />
                        ) : (
                            <Plus className="about-story-icon" />
                        )}

                        <span className="about-story-title">
                            Developpement Web
                        </span>
                    </div>
                    {storyOne ? (
                        <div className="about-story-ctn-paragraphe">
                            <p className="about-story-desc">
                                Fasciné par internet et la programmation, j'ai
                                entrepris de me reconvertir dans la conception
                                de sites et d'applications web. Actuellement
                                développeur Front End, je me suis spécialisé en
                                React. Par la suite, je souhaite évoluer, à
                                moyen terme, vers le développement Full Stack
                                afin d'être polyvalent sur des projets web.
                            </p>
                        </div>
                    ) : null}
                    {storyOne ? (
                        <div className="about-img-mobile">
                            <PrintDrawings
                                srcList={drawingsOne}
                                classNameDiv={'drawings-ctn drawings-one'}
                            />
                        </div>
                    ) : null}
                </div>
                <div className="about-line"></div>
                <div className="about-story-ctn d-flex f-d-column j-c-center a-i-flexStart">
                    <div
                        className="about-story-ctn-title d-flex f-d-row j-c-flexStart a-i-center"
                        onClick={openStoryTwo}
                    >
                        {storyTwo ? (
                            <Minus className="about-story-icon" />
                        ) : (
                            <Plus className="about-story-icon" />
                        )}

                        <span className="about-story-title">
                            Art, Dessin & digital painting
                        </span>
                    </div>
                    {storyTwo ? (
                        <div className="about-story-ctn-paragraphe">
                            <p className="about-story-desc">
                                Depuis le plus jeune âge, le dessin a toujours
                                été un moyen d'expression privilègié pour
                                exprimer mes idées. Après mes études d'Art à
                                l'université, je me suis progressivement dirigé
                                vers des techniques et des outils numériques.
                                Concept Art et digital painting sont devenus des
                                hobbies satisfaisants.
                            </p>
                        </div>
                    ) : null}
                    {storyTwo ? (
                        <div className="about-img-mobile">
                            <PrintDrawings
                                srcList={drawingsTwo}
                                classNameDiv={'drawings-ctn drawings-two'}
                            />
                        </div>
                    ) : null}
                </div>
                <div className="about-line"></div>
                <div className="about-story-ctn d-flex f-d-column j-c-center a-i-flexStart">
                    <div
                        className="about-story-ctn-title d-flex f-d-row j-c-flexStart a-i-center"
                        onClick={openStoryThree}
                    >
                        {storyThree ? (
                            <Minus className="about-story-icon" />
                        ) : (
                            <Plus className="about-story-icon" />
                        )}

                        <span className="about-story-title">
                            Sciences, Technologies & DIY
                        </span>
                    </div>
                    {storyThree ? (
                        <div className="about-story-ctn-paragraphe">
                            <p className="about-story-desc">
                                Fervant amateur de sciences et d'innovations
                                technologiques, j'ai étudié la physique à
                                l'université jusqu'au Master. J'y ai fais la
                                découverte de la programmation et du calcul
                                numérique via l'apprentissage du langage Python.
                                Grand bricoleur dans l'âme et adepte du DIY,
                                j'adore créer ou réparer des objets en
                                modélisant et en imprimant des pièces en 3D.
                            </p>
                        </div>
                    ) : null}
                    {storyThree ? (
                        <div className="about-img-mobile">
                            <PrintDrawings
                                srcList={drawingsThree}
                                classNameDiv={'drawings-ctn drawings-three'}
                            />
                        </div>
                    ) : null}
                </div>
                <div className="about-line"></div>
            </div>
            <div className="about-img-ctn">
                {storyOne ? (
                    <PrintDrawings
                        srcList={drawingsOne}
                        classNameDiv={'drawings-ctn drawings-one'}
                    />
                ) : null}
                {storyTwo ? (
                    <PrintDrawings
                        srcList={drawingsTwo}
                        classNameDiv={'drawings-ctn drawings-two'}
                    />
                ) : null}
                {storyThree ? (
                    <PrintDrawings
                        srcList={drawingsThree}
                        classNameDiv={'drawings-ctn drawings-three'}
                    />
                ) : null}
            </div>
        </div>
    );
}

export default About;
