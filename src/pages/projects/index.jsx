import Card from '../../components/card';
import ReserviaLogo from '../../assets/Reservia.svg';
import OhMyFoodLogo from '../../assets/ohmyfood.png';
import GameOnLogo from '../../assets/Gameon.png';
import FishEyeLogo from '../../assets/FisheyeLogo.svg';
import LesPetisPlatsLogo from '../../assets/LesPetitsPlats.png';
import KasaLogo from '../../assets/Kasa.svg';
import SportSeeLogo from '../../assets/SportSee.png';
import HRnetLogo from '../../assets/HRnet.jpg';

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
        {
            title: 'Les petits plats',
            image: LesPetisPlatsLogo,
            githublink:
                'https://github.com/Frederic-Douville/FredericDouville_7_16102021',
            pagelink:
                'https://frederic-douville.github.io/FredericDouville_7_16102021/',
        },
        {
            title: 'Kasa',
            image: KasaLogo,
            githublink:
                'https://github.com/Frederic-Douville/FredericDouville_11_25012022',
            pagelink: '',
        },
        {
            title: 'SportSee',
            image: SportSeeLogo,
            githublink:
                'https://github.com/Frederic-Douville/FredericDouville_12_22022022',
            pagelink: '',
        },
        {
            title: 'HRnet',
            image: HRnetLogo,
            githublink:
                'https://github.com/Frederic-Douville/FredericDouville_14_26042022',
            pagelink: 'https://frolicking-cat-dfe967.netlify.app/',
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
