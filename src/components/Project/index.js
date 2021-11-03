import { Project, ProjectBrow, Circle } from './ProjectElements';

const index = ({ img, link }) => {
    return (
        <Project>
            <ProjectBrow>
                <Circle style={{ backgroundColor: '#f39189' }} />
                <Circle style={{ backgroundColor: '#FED049' }} />
                <Circle style={{ backgroundColor: '#7ECA9C' }} />
            </ProjectBrow>
            <a href={link} target="_blank" rel="noreferrer">
                <img src={img} alt="Project" height="400" width="400" />
            </a>
        </Project>
    );
};

export default index;
