import ReserviaLogo from '../assets/logos/Reservia.webp';
import OhMyFoodLogo from '../assets/logos/Ohmyfood.webp';
import GameOnLogo from '../assets/logos/Gameon.webp';
import FishEyeLogo from '../assets/logos/Fisheye.webp';
import LesPetisPlatsLogo from '../assets/logos/LesPetitsPlats.webp';
import KasaLogo from '../assets/logos/Kasa.webp';
import SportSeeLogo from '../assets/logos/SportSee.webp';
import ArgentBank from '../assets/logos/Argent bank.webp';
import HRnetLogo from '../assets/logos/HRnet.webp';
import SolarSysLogo from '../assets/logos/SolarSys.webp';
import Html from '../assets/dessins/logo html.webp';
import Css from '../assets/dessins/logo css.webp';
import Javascript from '../assets/dessins/logo javascript.webp';
import Sass from '../assets/dessins/logo sass.webp';
import React from '../assets/dessins/logo react.webp';
import Redux from '../assets/dessins/logo redux.webp';

const projectsReferences = [
    {
        title: 'Reservia',
        image: ReserviaLogo,
        project: 'OC',
        languages: [
            {
                src: Html,
                alt: 'html logo',
                className: 'cardDesktop-desc-languages',
            },
            {
                src: Css,
                alt: 'css logo',
                className: 'cardDesktop-desc-languages',
            },
        ],
        description:
            "Implémentation d'un mock-up en page web responsive d'un site de réservation de locations saisonnières.",
        githublink:
            'https://github.com/Frederic-Douville/FredericDouville_2_14052021',
        pagelink:
            'https://frederic-douville.github.io/FredericDouville_2_14052021/',
    },
    {
        title: 'OhMyfood',
        image: OhMyFoodLogo,
        project: 'OC',
        languages: [
            {
                src: Html,
                alt: 'html logo',
                className: 'cardDesktop-desc-languages',
            },
            {
                src: Css,
                alt: 'css logo',
                className: 'cardDesktop-desc-languages',
            },
            {
                src: Sass,
                alt: 'sass logo',
                className: 'cardDesktop-desc-languages',
            },
        ],
        description:
            "Dynamisation d'un site web avec des animations CSS pour une plateforme de réservation de restaurants gastronomiques.",
        githublink:
            'https://github.com/Frederic-Douville/FredericDouville_3_22062021',
        pagelink:
            'https://frederic-douville.github.io/FredericDouville_3_22062021/',
    },
    {
        title: 'GameOn',
        image: GameOnLogo,
        project: 'OC',
        languages: [
            {
                src: Html,
                alt: 'html logo',
                className: 'cardDesktop-desc-languages',
            },
            {
                src: Css,
                alt: 'css logo',
                className: 'cardDesktop-desc-languages',
            },
            {
                src: Javascript,
                alt: 'javascript logo',
                className: 'cardDesktop-desc-languages',
            },
        ],
        description:
            "Création d'un formulaire d'inscription avec JavaScript pour une plateforme de gaming.",
        githublink:
            'https://github.com/Frederic-Douville/FredericDouville_4_27062021',
        pagelink:
            'https://frederic-douville.github.io/FredericDouville_4_27062021',
    },
    {
        title: 'FishEye',
        image: FishEyeLogo,
        project: 'OC',
        languages: [
            {
                src: Html,
                alt: 'html logo',
                className: 'cardDesktop-desc-languages',
            },
            {
                src: Css,
                alt: 'css logo',
                className: 'cardDesktop-desc-languages',
            },
            {
                src: Sass,
                alt: 'sass logo',
                className: 'cardDesktop-desc-languages',
            },
            {
                src: Javascript,
                alt: 'javascript logo',
                className: 'cardDesktop-desc-languages',
            },
        ],
        description:
            "Création d'un site web accessible pour une plateforme de photographes.",
        githublink:
            'https://github.com/Frederic-Douville/FredericDouville_6_06092021',
        pagelink:
            'https://frederic-douville.github.io/FredericDouville_6_06092021/',
    },
    {
        title: 'Les petits plats',
        image: LesPetisPlatsLogo,
        project: 'OC',
        languages: [
            {
                src: Html,
                alt: 'html logo',
                className: 'cardDesktop-desc-languages',
            },
            {
                src: Css,
                alt: 'css logo',
                className: 'cardDesktop-desc-languages',
            },
            {
                src: Javascript,
                alt: 'javascript logo',
                className: 'cardDesktop-desc-languages',
            },
        ],
        description:
            "Développement d'un algorithme de recherche en JavaScript pour un site de recettes de cuisine.",
        githublink:
            'https://github.com/Frederic-Douville/FredericDouville_7_16102021',
        pagelink:
            'https://frederic-douville.github.io/FredericDouville_7_16102021/',
    },
    {
        title: 'Kasa',
        image: KasaLogo,
        project: 'OC',
        languages: [
            {
                src: Html,
                alt: 'html logo',
                className: 'cardDesktop-desc-languages',
            },
            {
                src: Css,
                alt: 'css logo',
                className: 'cardDesktop-desc-languages',
            },
            {
                src: Javascript,
                alt: 'javascript logo',
                className: 'cardDesktop-desc-languages',
            },
            {
                src: React,
                alt: 'react logo',
                className: 'cardDesktop-desc-languages',
            },
        ],
        description:
            "Développement d'une application web avec React et React Router pour une plateforme de location d'appartements entre particuliers.",
        githublink:
            'https://github.com/Frederic-Douville/FredericDouville_11_25012022',
        pagelink:
            'https://Frederic-Douville.github.io/FredericDouville_11_25012022',
    },
    {
        title: 'SportSee',
        image: SportSeeLogo,
        project: 'OC',
        languages: [
            {
                src: Html,
                alt: 'html logo',
                className: 'cardDesktop-desc-languages',
            },
            {
                src: Css,
                alt: 'css logo',
                className: 'cardDesktop-desc-languages',
            },
            {
                src: Javascript,
                alt: 'javascript logo',
                className: 'cardDesktop-desc-languages',
            },
            {
                src: React,
                alt: 'react logo',
                className: 'cardDesktop-desc-languages',
            },
        ],
        description:
            "Développement d'un tableau de bord d'analytics avec React pour une application de suivi d'activité sportive.",
        githublink:
            'https://github.com/Frederic-Douville/FredericDouville_12_22022022',
        pagelink:
            'https://Frederic-Douville.github.io/FredericDouville_12_22022022',
    },
    {
        title: 'Argent Bank',
        image: ArgentBank,
        project: 'OC',
        languages: [
            {
                src: Html,
                alt: 'html logo',
                className: 'cardDesktop-desc-languages',
            },
            {
                src: Css,
                alt: 'css logo',
                className: 'cardDesktop-desc-languages',
            },
            {
                src: Javascript,
                alt: 'javascript logo',
                className: 'cardDesktop-desc-languages',
            },
            {
                src: React,
                alt: 'react logo',
                className: 'cardDesktop-desc-languages',
            },
            {
                src: Redux,
                alt: 'redux logo',
                className: 'cardDesktop-desc-languages',
            },
        ],
        description:
            "Utilisation d'une API Rest avec React et Redux pour permettre la connexion à un compte utilisateur d'une banque en ligne.",
        githublink:
            'https://github.com/Frederic-Douville/FredericDouville_13_18032022',
        pagelink: '',
    },
    {
        title: 'HRnet',
        image: HRnetLogo,
        project: 'OC',
        languages: [
            {
                src: Html,
                alt: 'html logo',
                className: 'cardDesktop-desc-languages',
            },
            {
                src: Css,
                alt: 'css logo',
                className: 'cardDesktop-desc-languages',
            },
            {
                src: Sass,
                alt: 'sass logo',
                className: 'cardDesktop-desc-languages',
            },
            {
                src: Javascript,
                alt: 'javascript logo',
                className: 'cardDesktop-desc-languages',
            },
            {
                src: React,
                alt: 'react logo',
                className: 'cardDesktop-desc-languages',
            },
            {
                src: Redux,
                alt: 'redux logo',
                className: 'cardDesktop-desc-languages',
            },
        ],
        description:
            "Mise à niveau vers React et Redux d'une application de gestion des ressources humaines développée en jQuery. ",
        githublink:
            'https://github.com/Frederic-Douville/FredericDouville_14_26042022',
        pagelink:
            'https://Frederic-Douville.github.io/FredericDouville_14_26042022',
    },
    {
        title: 'SolarSys',
        image: SolarSysLogo,
        project: 'SP',
        languages: [
            {
                src: Html,
                alt: 'html logo',
                className: 'cardDesktop-desc-languages',
            },
            {
                src: Css,
                alt: 'css logo',
                className: 'cardDesktop-desc-languages',
            },
            {
                src: Sass,
                alt: 'sass logo',
                className: 'cardDesktop-desc-languages',
            },
            {
                src: Javascript,
                alt: 'javascript logo',
                className: 'cardDesktop-desc-languages',
            },
            {
                src: React,
                alt: 'react logo',
                className: 'cardDesktop-desc-languages',
            },
        ],
        description:
            "Application sur les principaux astres de notre système solaire basé sur l'API le-systeme-solaire.net.",
        githublink: 'https://github.com/Frederic-Douville/solarsys',
        pagelink: 'https://frederic-douville.github.io/solarsys',
    },
];

export default projectsReferences;
