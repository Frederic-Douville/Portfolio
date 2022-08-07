import GithubIcon from '../../assets/github-brands.svg';

function Card({ title, image, githubLink, pageLink }) {
    return (
        <div className="card-ctn d-flex f-d-column j-c-center a-i-center">
            <div className="card-img-ctn d-flex j-c-center a-i-center">
                <img src={image} alt={`logo-${title}`} />
            </div>
            <div className="card-link-ctn d-flex a-i-center j-c-spaceAround">
                <a href={githubLink}>
                    <img
                        src={GithubIcon}
                        alt="github-icon"
                        className="card-github-icon"
                    />
                </a>
                <a href={pageLink} className="card-pagelink">
                    Site
                </a>
            </div>
        </div>
    );
}

export default Card;
