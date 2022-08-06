import Modal from '../../components/modal';
import { useState } from 'react';

function About() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    function openModal() {
        setModalIsOpen(true);
    }
    function closeModal() {
        setModalIsOpen(false);
    }
    return (
        <div className="page about-ctn d-flex f-d-column j-c-center a-i-center">
            {modalIsOpen ? <Modal functionBtn={closeModal} /> : null}
            <p className="about-pitch">
                Issue d’une formation scientifique universitaire où j’ai appris
                la programmation orientée calcul numérique, j’ai eu l’occasion
                d'appliquer mes connaissances au cours de plusieurs stages,
                notamment pour analyser ou récupérer des données. Passionné par
                le web, j’ai décidé de développer mes compétences de développeur
                et ma créativité.
            </p>
            <span className="about-CV-link" onClick={openModal}>
                Voir mon CV
            </span>
        </div>
    );
}

export default About;
