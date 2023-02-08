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

    const aboutContent = [
        {
            title: 'Développement Web',
            description:
                "Imprégné de culture internet et fasciné par la programmation, j'ai entrepris une reconversion professionelle dans la conception de sites et d'applications web. Actuellement développeur Front End, je me suis spécialisé en React et je souhaite évoluer vers le développement Full Stack.",
        },
        {
            title: 'Dessin, art numérique & 3D',
            description:
                "Depuis toujours, le dessin a toujours été un moyen d'expression privilégié pour exprimer mes idées. Après mes études d'Art à l'université, je me suis progressivement dirigé vers des techniques et des outils numériques. Concept Art, digital painting et création 3D sont devenus des hobbies satisfaisants.",
        },
        {
            title: 'Sciences, Technologies & DIY',
            description:
                "Amateur de sciences et d'innovations technologiques, j'ai étudié la physique à l'université jusqu'au Master. J'y ai fait la découverte de la programmation et du calcul numérique via l'apprentissage du langage Python. Grand bricoleur dans l'âme et adepte du DIY, j'adore modéliser et imprimer des pièces en 3D.",
        },
    ];

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
        } else {
            setStory({ storyOne: false, storyTwo: false, storyThree: true });
        }
        document.getElementById('firstLine').scrollIntoView(true);
    }

    return (
        <div className="page about-page">
            <div className="about-ctn unfocus">
                <div className="about-stories-ctn">
                    <div id="firstLine"></div>
                    {/* <BrushLine className="about-line" /> */}
                    <div className="about-story-ctn">
                        <div
                            className={`about-story-ctn-title ${
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
                                {aboutContent[0].title}
                            </span>
                        </div>
                        {story.storyOne && (
                            <div className="about-story-ctn-paragraphe">
                                <p className="about-story-desc">
                                    {aboutContent[0].description}
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
                    <div className="about-story-ctn">
                        <div
                            className={`about-story-ctn-title ${
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
                                {aboutContent[1].title}
                            </span>
                        </div>
                        {story.storyTwo && (
                            <div className="about-story-ctn-paragraphe">
                                <p className="about-story-desc">
                                    {aboutContent[1].description}
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
                    <div className="about-story-ctn">
                        <div
                            className={`about-story-ctn-title ${
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
                                {aboutContent[2].title}
                            </span>
                        </div>
                        {story.storyThree && (
                            <div className="about-story-ctn-paragraphe">
                                <p className="about-story-desc">
                                    {aboutContent[2].description}
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
                    {/* <BrushLine className="about-line" /> */}
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
