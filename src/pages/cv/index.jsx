function Cv() {
    return (
        <div className="page d-flex f-d-column a-i-center j-c-center">
            <div className="cv-ctn d-flex f-d-row a-i-flexStart j-c-center">
                <div className="cv-skillTools-ctn">
                    <div className="cv-languages-ctn">
                        <span className="cv-text-bold cv-text-blue cv-text-size">
                            Langages:
                        </span>
                        <p>HTML5, CSS3, JavaScript, Python</p>
                        <span className="cv-text-bold cv-text-blue cv-text-size">
                            Framework et librairies:
                        </span>
                        <p> React, Redux, Bootstrap, Sass</p>
                    </div>
                    <div className="cv-skill-ctn">
                        <span className="cv-text-bold cv-text-blue cv-text-size">
                            Compétences:
                        </span>
                        <p className="cv-text-justify">
                            - Travailler en équipe sur un projet agile
                            <br /> - Analyser les besoins à partir du cahier des
                            charges défini par le client
                            <br /> - Implémenter une maquette en site web
                            dynamique
                            <br /> - Utiliser les bonnes pratiques pour
                            structurer le code HTML, CSS et JavaScript
                            <br /> - Développer des algorithmes spécifiques pour
                            implémenter des fonctionnalités
                            <br /> - Développer une application web avec le
                            framework React
                            <br />- Interagir avec une API Rest pour récupérer
                            et modifier des données
                            <br /> - Établir une série de tests unitaires et
                            d’intégrations et corriger le code
                            <br /> -Produire une documentation technique et
                            fonctionnelle du site pour le client
                        </p>
                    </div>
                    <div className="cv-tools-ctn">
                        <span className="cv-text-bold cv-text-blue cv-text-size">
                            Outils de développements:
                        </span>
                        <p>VS Code, Git, npm, NVDA, Postman</p>
                        <span className="cv-text-bold cv-text-blue cv-text-size">
                            Systéme d’exploitations:
                        </span>
                        <p>Windows 10/11, Linux</p>
                        <span className="cv-text-bold cv-text-blue cv-text-size">
                            Logiciels et applications :
                        </span>
                        <p>Krita, Inkscape, Figma, Trello</p>
                    </div>
                    <div className="cv-softSkills-ctn">
                        <span className="cv-text-bold cv-text-blue cv-text-size">
                            Qualités humaines:
                        </span>
                        <p>
                            Ouvert d’esprit, Curieux, Agile ,Persévérant,
                            Sociable, Réfléchi
                        </p>
                    </div>
                </div>
                <div className="cv-experiencesStudies-ctn d-flex f-d-column j-c-flexStart a-i-center">
                    <div className="cv-experiences-ctn">
                        <h2 className="cv-experiences-h2 cv-text-blue">
                            Expériences professionnelles
                        </h2>
                        <p className="cv-text-justify">
                            <span className="cv-text-bold">
                                Mai 2021 à Juin 2022 - Étudiant - OpenClassrooms
                                – Paris
                            </span>
                            <br /> Validation de projets professionnalisants
                        </p>
                        <p className="cv-text-justify">
                            <span className="cv-text-bold">
                                Février à Mars 2019 – Ingénieur d’Étude – Atmo
                                Normandie – Rouen – Stage
                            </span>
                            <br /> - Fabrication d’une station de mesure de
                            polluants connectées.
                            <br /> - Programmation en Python de firmware pour
                            les micro capteurs.
                            <br /> - Installation de la station sur site de
                            mesure et connexion au réseau.
                        </p>
                        <p className="cv-text-justify">
                            <span className="cv-text-bold">
                                Février à Juin 2018 - Technicien de recherche –
                                Laboratoire CNRS CORIA UMR 6614 – Saint Étienne
                                Du Rouvray - Stage
                            </span>
                            <br /> - Montage optique d’un système d’imagerie
                            pour expérimentation.
                            <br /> - Programmation de traitements d’image via
                            script Matlab et Python.
                        </p>
                        <p className="cv-text-justify">
                            <span className="cv-text-bold">
                                Février à Mai 2017 - Technicien de recherche –
                                Laboratoire CNRS CORIA UMR 6614 – Saint Étienne
                                Du Rouvray – Stage
                            </span>
                            <br /> - Spectroscopie de plasma crée par des
                            impulsions laser.
                            <br /> - Traitement et analyse de données.
                        </p>
                        <p className="cv-text-justify">
                            <span className="cv-text-bold">
                                Avril à Juin 2015 - Technicien de recherche –
                                Laboratoire CNRS GPM UMR 6634 – Saint Étienne Du
                                Rouvray – Stage
                            </span>
                            <br /> - Conception et usinage d’un matériau
                            composite.
                            <br /> - Caractérisation et analyse du matériau.
                        </p>
                    </div>
                    <div className="cv-studies-ctn">
                        <h2 className="cv-text-blue">Formations</h2>
                        <p className="cv-text-justify">
                            <span className="cv-text-bold">
                                2022 – Titre Professionnel RNCP niveau 6 -
                                Développeur d’application JavaScript React
                            </span>{' '}
                            – OpenClassrooms
                        </p>
                        <p className="cv-text-justify">
                            <span className="cv-text-bold">
                                2018 – Master Énergie, Fluide, Environnement,
                                Métrologie Optique
                            </span>{' '}
                            – UFR Sciences et Techniques de l’Université de
                            Rouen
                        </p>
                        <p className="cv-text-justify">
                            <span className="cv-text-bold">
                                2016 – Licence Physique, Mécanique, Science de
                                l’Ingénieur
                            </span>{' '}
                            - UFR Sciences et Techniques de l’Université de
                            Rouen
                        </p>
                        <p className="cv-text-justify">
                            <span className="cv-text-bold">
                                2006 – Licence Humanité mention Art
                            </span>{' '}
                            – Université de Picardie Jules Verne d’Amiens
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cv;
