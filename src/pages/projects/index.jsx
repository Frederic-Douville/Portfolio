import { CardMobile, CardDesktop } from '../../components';
import projectsReferences from '../../datas/projectsReferences';

function Projects() {
    return (
        <div className="page projects-ctn d-flex  f-d-row j-c-center a-i-flexStart">
            <CardMobile datasArray={projectsReferences} />
            <CardDesktop datasArray={projectsReferences} />
        </div>
    );
}

export default Projects;
