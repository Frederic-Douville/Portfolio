import { useState, useEffect } from 'react';
import { useStore } from 'react-redux';
import { dropDownMenuClosing } from '../../feature/dropDownMenu.js';
import PrintDrawings from '../../components/print-drawings';
import { ReactComponent as Plus } from '../../assets/icones_svg/plus-solid.svg';
import { ReactComponent as Minus } from '../../assets/icones_svg/minus-solid.svg';
import { ReactComponent as BrushLine } from '../../assets/icones_svg/brush line thin.svg';
import drawingsOne from '../../datas/drawingsOne';
import drawingsTwo from '../../datas/drawingsTwo';
import drawingsThree from '../../datas/drawingsThree';

function About() {
    const store = useStore();
    useEffect(() => {
        store.dispatch(dropDownMenuClosing());
    });

    const [story, setStory] = useState({
        storyOne: true,
        storyTwo: false,
        storyThree: false,
    });

    function openStory(event) {
        let storyId = event.target.getAttribute('data-story');
        if (storyId === '1') {
            setStory({ storyOne: true, storyTwo: false, storyThree: false });
        } else if (storyId === '2') {
            setStory({ storyOne: false, storyTwo: true, storyThree: false });
        } else if (storyId === '3') {
            setStory({ storyOne: false, storyTwo: false, storyThree: true });
        }
        document.getElementById('firstLine').scrollIntoView(true);
    }

    return (
        <div className="page d-flex f-d-row j-c-center a-i-center">
            <div className="about-ctn unfocus d-flex f-d-row j-c-center a-i-center">
                <div className="about-stories-ctn d-flex f-d-column a-i-flexStart">
                    <div id="firstLine"></div>
                    <BrushLine className="about-line" />

                    <div className="about-story-ctn d-flex f-d-column j-c-center a-i-flexStart">
                        <div
                            className={`about-story-ctn-title d-flex f-d-row j-c-flexStart a-i-center ${
                                !story.storyOne
                                    ? 'about-story-ctn-title-notopen'
                                    : ''
                            }`}
                            data-story="1"
                            onClick={openStory}
                        >
                            {story.storyOne ? (
                                <Minus className="about-story-icon about-story-icon-minus" />
                            ) : (
                                <Plus className="about-story-icon" />
                            )}

                            <span
                                className={`about-story-title ${
                                    story.storyOne
                                        ? 'about-story-title-open'
                                        : ''
                                }`}
                                data-story="1"
                            >
                                Developpement Web
                            </span>
                        </div>
                        {story.storyOne && (
                            <div className="about-story-ctn-paragraphe">
                                <p className="about-story-desc">
                                    Fasciné par internet et la programmation,
                                    j'ai entrepris de me reconvertir dans la
                                    conception de sites et d'applications web.
                                    Actuellement développeur Front End, je me
                                    suis spécialisé en React. Par la suite, je
                                    souhaite évoluer, à moyen terme, vers le
                                    développement Full Stack afin d'être
                                    polyvalent sur des projets web.
                                </p>
                            </div>
                        )}
                        {story.storyOne && (
                            <div className="about-img-mobile">
                                <PrintDrawings
                                    srcList={drawingsOne}
                                    classNameDiv={'drawings-ctn drawings-one'}
                                />
                            </div>
                        )}
                    </div>
                    <BrushLine className="about-line" />
                    <div className="about-story-ctn d-flex f-d-column j-c-center a-i-flexStart">
                        <div
                            className={`about-story-ctn-title d-flex f-d-row j-c-flexStart a-i-center ${
                                !story.storyTwo
                                    ? 'about-story-ctn-title-notopen'
                                    : ''
                            }`}
                            data-story="2"
                            onClick={openStory}
                        >
                            {story.storyTwo ? (
                                <Minus className="about-story-icon about-story-icon-minus" />
                            ) : (
                                <Plus className="about-story-icon" />
                            )}

                            <span
                                className={`about-story-title ${
                                    story.storyTwo
                                        ? 'about-story-title-open'
                                        : ''
                                }`}
                                data-story="2"
                            >
                                Art, Dessin & digital painting
                            </span>
                        </div>
                        {story.storyTwo && (
                            <div className="about-story-ctn-paragraphe">
                                <p className="about-story-desc">
                                    Depuis le plus jeune âge, le dessin a
                                    toujours été un moyen d'expression
                                    privilégié pour exprimer mes idées. Après
                                    mes études d'Art à l'université, je me suis
                                    progressivement dirigé vers des techniques
                                    et des outils numériques. Concept Art et
                                    digital painting sont devenus des hobbies
                                    satisfaisants.
                                </p>
                            </div>
                        )}
                        {story.storyTwo && (
                            <div className="about-img-mobile">
                                <PrintDrawings
                                    srcList={drawingsTwo}
                                    classNameDiv={'drawings-ctn drawings-two'}
                                />
                            </div>
                        )}
                    </div>
                    <BrushLine className="about-line" />
                    <div className="about-story-ctn d-flex f-d-column j-c-center a-i-flexStart">
                        <div
                            className={`about-story-ctn-title d-flex f-d-row j-c-flexStart a-i-center ${
                                !story.storyThree
                                    ? 'about-story-ctn-title-notopen'
                                    : ''
                            }`}
                            data-story="3"
                            onClick={openStory}
                        >
                            {story.storyThree ? (
                                <Minus className="about-story-icon about-story-icon-minus" />
                            ) : (
                                <Plus className="about-story-icon" />
                            )}

                            <span
                                className={`about-story-title ${
                                    story.storyThree
                                        ? 'about-story-title-open'
                                        : ''
                                }`}
                                data-story="3"
                            >
                                Sciences, Technologies & DIY
                            </span>
                        </div>
                        {story.storyThree && (
                            <div className="about-story-ctn-paragraphe">
                                <p className="about-story-desc">
                                    Fervant amateur de sciences et d'innovations
                                    technologiques, j'ai étudié la physique à
                                    l'université jusqu'au Master. J'y ai fait la
                                    découverte de la programmation et du calcul
                                    numérique via l'apprentissage du langage
                                    Python. Grand bricoleur dans l'âme et adepte
                                    du DIY, j'adore créer ou réparer des objets
                                    en modélisant et en imprimant des pièces en
                                    3D.
                                </p>
                            </div>
                        )}
                        {story.storyThree && (
                            <div className="about-img-mobile">
                                <PrintDrawings
                                    srcList={drawingsThree}
                                    classNameDiv={'drawings-ctn drawings-three'}
                                />
                            </div>
                        )}
                    </div>
                    <BrushLine className="about-line" />
                </div>
                <div className="about-img-ctn">
                    {story.storyOne && (
                        <PrintDrawings
                            srcList={drawingsOne}
                            classNameDiv={'drawings-ctn drawings-one'}
                        />
                    )}
                    {story.storyTwo && (
                        <PrintDrawings
                            srcList={drawingsTwo}
                            classNameDiv={'drawings-ctn drawings-two'}
                        />
                    )}
                    {story.storyThree && (
                        <PrintDrawings
                            srcList={drawingsThree}
                            classNameDiv={'drawings-ctn drawings-three'}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default About;
