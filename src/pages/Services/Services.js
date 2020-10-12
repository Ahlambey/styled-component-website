import React from 'react';
import {InfoSection, Pricing} from '../../components';

import { homeObjFour } from './Data';

export default function Services() {
    return (
        <>
           
            <Pricing/>
            <InfoSection {...homeObjFour} />

        </>
    )
}
