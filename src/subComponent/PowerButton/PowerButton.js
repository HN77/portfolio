import React from 'react';
import { Power } from './PowerButtonElements';
import PowerBtn from '../../assets/svg/power-off-solid.svg';
import { NavLink } from 'react-router-dom';

const PowerButton = () => {
    return (
        <Power>
            <NavLink to="/projets">
                <img src={PowerBtn} alt="Power" />
            </NavLink>
        </Power>
    );
};

export default PowerButton;
