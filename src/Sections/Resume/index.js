import React from 'react';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';
import { DiJavascript1 } from 'react-icons/di';
import SkillBar from '../../components/SkillBar';
import { languages, tools } from '../../data';
import {
    Resume,
    ReactIcon,
    NodeIcon,
    MongoDBIcon,
    JsIcon,
    EXIcon,
    Title,
    Skills,
    Langauge,
    Tools,
    LanguageTitle,
    ToolsTitle,
} from './ResumeElements';

const index = () => {
    return (
        <Resume id="skills">
            <ReactIcon>
                <FaReact />
            </ReactIcon>
            <NodeIcon>
                <FaNodeJs />
            </NodeIcon>
            <MongoDBIcon>
                <SiMongodb />
            </MongoDBIcon>
            <JsIcon>
                <DiJavascript1 />
            </JsIcon>
            <EXIcon>
                <SiExpress />
            </EXIcon>
            <Title>Mes Compétences</Title>
            <Skills>
                <Langauge>
                    <LanguageTitle>Langages & Frameworks</LanguageTitle>
                    {languages.map((language) => (
                        <SkillBar key={language.id} name={language.name} level={language.level} />
                    ))}
                </Langauge>
                <Tools>
                    <ToolsTitle>Outils & Logiciels</ToolsTitle>
                    {tools.map((tool) => (
                        <SkillBar key={tool.id} name={tool.name} level={tool.level} />
                    ))}
                </Tools>
            </Skills>
        </Resume>
    );
};

export default index;
