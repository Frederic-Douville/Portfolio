import Portrait from '../../assets/dessins/dessin selfie.webp';

function Home() {
    return (
        <div className="page d-flex f-d-row j-c-center a-i-center">
            <div className="home-ctn d-flex f-d-row j-c-center a-i-center">
                <div className="home-intro-ctn d-flex f-d-row j-c-flexEnd a-i-center">
                    <div className="home-titles-ctn d-flex f-d-column j-c-center a-i-flexStart">
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
                <div className="home-img-ctn d-flex j-c-center a-i-center">
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