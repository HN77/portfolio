import React from 'react';
import { SkillBar, Skills, SkillDetails, SkillName, SkillLevel, Circle } from './SkillBarElements';

const index = ({ name, level }) => {
    // const skill_width = `${level}%`;
    // const variants = {
    //     initail: {
    //         width: 0,
    //     },
    //     animate: {
    //         width: skill_width,
    //         transition: {
    //             duration: 0.4,
    //             type: 'spring',
    //             damping: 10,
    //             stiffness: 100,
    //         },
    //     },
    // };
    return (
        <SkillBar>
            <Skills style={{ width: level }}>
                <Circle />
                <SkillDetails>
                    <SkillName>{name}</SkillName>
                    <SkillLevel>{level}</SkillLevel>
                </SkillDetails>
            </Skills>
        </SkillBar>
    );
};

export default index;
