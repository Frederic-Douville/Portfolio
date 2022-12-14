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
    const [storyOne, setStoryOne] = useState(true);
    const [storyTwo, setStoryTwo] = useState(false);
    const [storyThree, setStoryThree] = useState(false);

    function openStoryOne() {
        setStoryOne(true);
        setStoryTwo(false);
        setStoryThree(false);
        document.getElementById('firstLine').scrollIntoView(true);
    }

    function openStoryTwo() {
        setStoryOne(false);
        setStoryTwo(true);
        setStoryThree(false);
        document.getElementById('firstLine').scrollIntoView(true);
    }

    function openStoryThree() {
        setStoryOne(false);
        setStoryTwo(false);
        setStoryThree(true);
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
                                !storyOne ? 'about-story-ctn-title-notopen' : ''
                            }`}
                            onClick={openStoryOne}
                        >
                            {storyOne ? (
                                <Minus className="about-story-icon about-story-icon-minus" />
                            ) : (
                                <Plus className="about-story-icon" />
                            )}

                            <span
                                className={`about-story-title ${
                                    storyOne ? 'about-story-title-open' : ''
                                }`}
                            >
                                Developpement Web
                            </span>
                        </div>
                        {storyOne ? (
                            <div className="about-story-ctn-paragraphe">
                                <p className="about-story-desc">
                                    Fascin?? par internet et la programmation,
                                    j'ai entrepris de me reconvertir dans la
                                    conception de sites et d'applications web.
                                    Actuellement d??veloppeur Front End, je me
                                    suis sp??cialis?? en React. Par la suite, je
                                    souhaite ??voluer, ?? moyen terme, vers le
                                    d??veloppement Full Stack afin d'??tre
                                    polyvalent sur des projets web.
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
                    <BrushLine className="about-line" />
                    <div className="about-story-ctn d-flex f-d-column j-c-center a-i-flexStart">
                        <div
                            className={`about-story-ctn-title d-flex f-d-row j-c-flexStart a-i-center ${
                                !storyTwo ? 'about-story-ctn-title-notopen' : ''
                            }`}
                            onClick={openStoryTwo}
                        >
                            {storyTwo ? (
                                <Minus className="about-story-icon about-story-icon-minus" />
                            ) : (
                                <Plus className="about-story-icon" />
                            )}

                            <span
                                className={`about-story-title ${
                                    storyTwo ? 'about-story-title-open' : ''
                                }`}
                            >
                                Art, Dessin & digital painting
                            </span>
                        </div>
                        {storyTwo ? (
                            <div className="about-story-ctn-paragraphe">
                                <p className="about-story-desc">
                                    Depuis le plus jeune ??ge, le dessin a
                                    toujours ??t?? un moyen d'expression
                                    privil??gi?? pour exprimer mes id??es. Apr??s
                                    mes ??tudes d'Art ?? l'universit??, je me suis
                                    progressivement dirig?? vers des techniques
                                    et des outils num??riques. Concept Art et
                                    digital painting sont devenus des hobbies
                                    satisfaisants.
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
                    <BrushLine className="about-line" />
                    <div className="about-story-ctn d-flex f-d-column j-c-center a-i-flexStart">
                        <div
                            className={`about-story-ctn-title d-flex f-d-row j-c-flexStart a-i-center ${
                                !storyThree
                                    ? 'about-story-ctn-title-notopen'
                                    : ''
                            }`}
                            onClick={openStoryThree}
                        >
                            {storyThree ? (
                                <Minus className="about-story-icon about-story-icon-minus" />
                            ) : (
                                <Plus className="about-story-icon" />
                            )}

                            <span
                                className={`about-story-title ${
                                    storyThree ? 'about-story-title-open' : ''
                                }`}
                            >
                                Sciences, Technologies & DIY
                            </span>
                        </div>
                        {storyThree ? (
                            <div className="about-story-ctn-paragraphe">
                                <p className="about-story-desc">
                                    Fervant amateur de sciences et d'innovations
                                    technologiques, j'ai ??tudi?? la physique ??
                                    l'universit?? jusqu'au Master. J'y ai fait la
                                    d??couverte de la programmation et du calcul
                                    num??rique via l'apprentissage du langage
                                    Python. Grand bricoleur dans l'??me et adepte
                                    du DIY, j'adore cr??er ou r??parer des objets
                                    en mod??lisant et en imprimant des pi??ces en
                                    3D.
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
                    <BrushLine className="about-line" />
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
        </div>
    );
}

export default About;
