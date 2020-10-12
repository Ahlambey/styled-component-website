import React from 'react';
import {InfoSection, Pricing} from '../components';
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';

export default function Home() {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
            <Pricing/>
            <InfoSection {...homeObjFour} />

        </>
    )
}
