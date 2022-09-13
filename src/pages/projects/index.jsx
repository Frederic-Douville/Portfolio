import { CardMobile, CardDesktop } from '../../components';
import projectsReferences from '../../datas/projectsReferences';

function Projects() {
    return (
        <div className="page projects-ctn d-flex  f-d-row j-c-center a-i-flexStart">
            <div className="projects-mobile-ctn d-flex f-d-column a-i-center j-c-flexStart">
                {projectsReferences.map(
                    ({ index, title, image, githublink, pagelink }) => (
                        <CardMobile
                            key={`mobile-${title}-${index}`}
                            title={title}
                            image={image}
                            githubLink={githublink}
                            pageLink={pagelink}
                        />
                    )
                )}
            </div>
            <div className="projects-desktop-ctn d-flex f-d-row j-c-center a-i-center">
                <CardDesktop datasArray={projectsReferences} />
            </div>
        </div>
    );
}

export default Projects;
