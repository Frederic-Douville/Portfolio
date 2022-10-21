import { useEffect } from 'react';
import { useStore } from 'react-redux';
import { dropDownMenuClosing } from '../../feature/dropDownMenu.js';
import { CardMobile, CardDesktop } from '../../components';
import projectsReferences from '../../datas/projectsReferences';

function Projects() {
    const store = useStore();
    useEffect(() => {
        store.dispatch(dropDownMenuClosing());
    });
    return (
        <div className="page projects-ctn d-flex  f-d-row j-c-center a-i-flexStart">
            <CardMobile datasArray={projectsReferences} />
            <CardDesktop datasArray={projectsReferences} />
        </div>
    );
}

export default Projects;
