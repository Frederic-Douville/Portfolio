import Card from '../../components/card';
import ReserviaLogo from '../../assets/Reservia.svg';
import OhMyFoodLogo from '../../assets/ohmyfood.png';
import GameOnLogo from '../../assets/Gameon.png';
import FishEyeLogo from '../../assets/FisheyeLogo.svg';

function Projects() {
    const projectsCardRef = [
        {
            title: 'Reservia',
            image: ReserviaLogo,
            githublink:
                'https://github.com/Frederic-Douville/FredericDouville_2_14052021',
            pagelink:
                'https://frederic-douville.github.io/FredericDouville_2_14052021/',
        },
        {
            title: 'OhMyfood',
            image: OhMyFoodLogo,
            githublink:
                'https://github.com/Frederic-Douville/FredericDouville_3_22062021',
            pagelink:
                'https://frederic-douville.github.io/FredericDouville_3_22062021/',
        },
        {
            title: 'GameOn',
            image: GameOnLogo,
            githublink:
                'https://github.com/Frederic-Douville/FredericDouville_4_27062021',
            pagelink: '',
        },
        {
            title: 'FishEye',
            image: FishEyeLogo,
            githublink:
                'https://github.com/Frederic-Douville/FredericDouville_6_06092021',
            pagelink:
                'https://frederic-douville.github.io/FredericDouville_6_06092021/',
        },
    ];
    return (
        <div className="page projects-ctn d-flex a-i-flexStart j-c-spaceBetween">
            {projectsCardRef.map(
                ({ index, title, image, githublink, pagelink }) => (
                    <Card
                        key={`key-${index}`}
                        title={title}
                        image={image}
                        githubLink={githublink}
                        pageLink={pagelink}
                    />
                )
            )}
        </div>
    );
}

export default Projects;
