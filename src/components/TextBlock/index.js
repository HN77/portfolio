import React from 'react';
import { LeftBlock, Topic, Circle, Title, SubText } from './TextBlockElements';

const TextBlock = ({ topic, title, subText, children }) => {
    return (
        <div>
            <LeftBlock>
                <Topic>
                    <Circle />
                    <span>{topic}</span>
                </Topic>
                <Title>{title}</Title>
                <SubText>{subText}</SubText>
                {children}
            </LeftBlock>
        </div>
    );
};

export default TextBlock;
