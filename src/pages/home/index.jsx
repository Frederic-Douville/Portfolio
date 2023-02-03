import Portrait from '../../assets/dessins/dessin selfie.webp';
import { useEffect } from 'react';
import { useStore } from 'react-redux';
import { dropDownMenuClosing } from '../../feature/dropDownMenu.js';

function Home() {
    const store = useStore();
    useEffect(() => {
        store.dispatch(dropDownMenuClosing());
    });

    return (
        <div className="page home-page">
            <div className="home-ctn unfocus">
                <div className="home-intro-ctn">
                    <div className="home-titles-ctn">
                        <h1 className="home-h1">Frédéric Douville</h1>
                        <h2 className="home-h2">
                            Développeur Front End - JavaScript React
                        </h2>
                        <p className="home-pitch">
                            Passionné par le web, le dessin et les nouvelles
                            technologies, j'aime les projets ambitieux et
                            créatifs.
                        </p>
                    </div>
                </div>
                <div className="home-img-ctn">
                    <img
                        src={Portrait}
                        alt="autoportrait"
                        className="home-portrait"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
