import React from 'react';
import { CARD, Image, Text, Name } from './CardElements';

function index({ name, text, image }) {
    const Avatar = require(`../../assets/${image}.jpg`).default;
    return (
        <CARD>
            <Image img={Avatar} width="400" height="400" />
            <Text>{text}</Text>
            <Name>{name}</Name>
        </CARD>
    );
}

export default index;
