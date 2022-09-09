import Card from '../../components/card';
import projectsReferences from '../../datas/projectsReferences';

function Projects() {
    return (
        <div className="page projects-ctn d-flex  f-d-row j-c-center a-i-center">
            <div className="projects-mobile-ctn d-flex f-d-column a-i-center j-c-flexStart">
                {projectsReferences.map(
                    ({ index, title, image, githublink, pagelink }) => (
                        <Card
                            key={`${title}-${index}`}
                            title={title}
                            image={image}
                            githubLink={githublink}
                            pageLink={pagelink}
                        />
                    )
                )}
            </div>
            <div></div>
        </div>
    );
}

export default Projects;
