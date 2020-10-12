import React from 'react';
import {InfoSection, Pricing} from '../../components';
import {homeObjTwo, homeObjThree, homeObjFour } from './Data';

export default function Products() {
    return (
        <>
          
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
            <Pricing/>
            <InfoSection {...homeObjFour} />

        </>
    )
}
